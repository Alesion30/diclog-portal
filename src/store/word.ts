/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { atom, useRecoilState } from 'recoil'
import { recoilPersist } from 'recoil-persist'
import { translate } from '~/data/api/bingTranslate'

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
  { value: 'sleep', trans: '眠い' },
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
    const result = await translate(text, 'ja')
    if (result.detectedLanguage.language === 'en') {
      const _words: Word[] = JSON.parse(JSON.stringify(words))
      const word: Word = {
        value: text,
        trans: result.translation.text,
      }
      _words.push(word)
      setState({ words: _words })
      return result.translation.text
    } else {
      console.error('error')
      throw new Error()
    }
  }

  return { words, resetWords, registerWord }
}
