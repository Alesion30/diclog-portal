import { useEffect } from 'react'
import { atom, useRecoilState } from 'recoil'
import { useDictionaryRanking } from '~/data/api/dictionaryRanking'
import { useUserRanking } from '~/data/api/userRanking'
import { useWordRanking } from '~/data/api/wordRanking'

type RankingState = {
  users: {
    uid: string // ユーザーID
    nickName: string // ユーザー名
    photoURL: string | null // ユーザー画像
  }[]
  words: {
    value: string // 登録単語
    count: number // 登録数
  }[]
  dictionaries: {
    name: string // 辞書名
    wordCount: number // 登録単語数
  }[]
}

const RANKING_STATE_KEY = 'rankingState'

const rankingState = atom<RankingState>({
  key: RANKING_STATE_KEY,
  default: { users: [], words: [], dictionaries: [] },
})

/**
 * ランキング アクセス用カスタムフック
 */
export const useGlobalRankingState = () => {
  const [state, setState] = useRecoilState(rankingState)

  // ユーザーランキング
  const fetchUserRankingResult = useUserRanking()
  useEffect(() => {
    if (fetchUserRankingResult.data) {
      const users = fetchUserRankingResult.data.users
        .sort((a, b) => {
          return a.isLearnedWordCount < b.isLearnedWordCount ? 1 : -1
        })
        .map((v) => {
          return {
            uid: v.uid,
            nickName: v.nickName,
            photoURL: v.photoURL,
          }
        })
        .slice(0, 10)
      setState((state) => ({ ...state, users }))
    }
  }, [fetchUserRankingResult.data])

  // 単語ランキング
  const fetchWordRankingResult = useWordRanking()
  useEffect(() => {
    if (fetchWordRankingResult.data) {
      const words = fetchWordRankingResult.data.words
        .sort((a, b) => {
          return a.count < b.count ? 1 : -1
        })
        .map((v) => {
          return {
            value: v.word.value,
            count: v.count,
          }
        })
        .slice(0, 10)
      setState((state) => ({ ...state, words }))
    }
  }, [fetchWordRankingResult.data])

  // 辞書ランキング
  const fetchDictionaryRankingResult = useDictionaryRanking()
  useEffect(() => {
    if (fetchDictionaryRankingResult.data) {
      const dictionaries = fetchDictionaryRankingResult.data.dictionaries
        .sort((a, b) => {
          return a.wordCount < b.wordCount ? 1 : -1
        })
        .map((v) => {
          return {
            name: v.dictionary.name,
            wordCount: v.wordCount,
          }
        })
      setState((state) => ({ ...state, dictionaries }))
    }
  }, [fetchDictionaryRankingResult.data])

  return {
    state,
  }
}
