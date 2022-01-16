/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { atom, useRecoilState } from 'recoil'
import { recoilPersist } from 'recoil-persist'
import { Translate, translate } from '~/data/api/bingTranslate'

const { persistAtom } = recoilPersist()

type Word = {
  value: string
  trans: string
}

type WordState = {
  words: Word[]
}

const WORD_STATE_KEY = 'wordState'

const initialWords: Word[] = [
  { value: 'hello', trans: 'こんにちは' },
  { value: 'world', trans: '世界' },
]

const wordState = atom<WordState>({
  key: WORD_STATE_KEY,
  default: { words: initialWords },
  effects_UNSTABLE: [persistAtom],
})

/**
 * 登録単語 アクセス用カスタムフック
 */
export const useGlobalWordState = () => {
  const [state, setState] = useRecoilState(wordState)

  /**
   * 登録単語一覧
   */
  const words = state.words

  /**
   * 登録単語リセット
   */
  const resetWords = () => {
    setState({ words: initialWords })
  }

  /**
   * 登録を登録
   */
  const registerWord = async (text: string) => {
    const parseText = text.trim().toLowerCase()

    // 存在チェック
    const findWord = words.find((word) => word.value === parseText)
    const isExist = findWord !== undefined

    // バリデーション
    if (parseText.length > 15) throw new Error('15文字以内で入力してください')
    if (isExist) {
      // 存在する場合は、翻訳はスキップし、登録されている翻訳済みの単語を返す
      return findWord.trans
    }

    // 翻訳を実行
    let result: Translate | null = null
    try {
      result = await translate(parseText, 'ja')
    } catch (e) {
      throw new Error('翻訳中にエラーが発生しました')
    }

    // 英語以外の時はエラー
    if (result.detectedLanguage.language !== 'en')
      throw new Error('この単語は翻訳できません')

    const _words: Word[] = JSON.parse(JSON.stringify(words))
    const word: Word = {
      value: parseText,
      trans: result.translation.text,
    }
    _words.push(word)
    setState({ words: _words })

    return result.translation.text
  }

  return { words, resetWords, registerWord }
}
