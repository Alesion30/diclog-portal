import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { atom, useRecoilState } from 'recoil'
import { firebaseRefs } from '~/data/schema'
import { DictionaryRankingDocument } from '~/data/schema/dictionaryRanking'
import { UserRankingDocument } from '~/data/schema/userRanking'
import { WordRankingDocument } from '~/data/schema/wordRanking'
import { getDocs, limit, orderBy, query } from '~/plugins/firebase'

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
  const fetchUserRankingResult = useQuery<UserRankingDocument, Error>(
    'fetchUserRanking',
    async () => {
      const querySnapshot = await getDocs(
        query(
          firebaseRefs.userRanking.parent,
          orderBy('createdAt', 'desc'),
          limit(1)
        )
      )
      if (querySnapshot.docs.length === 0) {
        throw new Error('No data exists.')
      }
      return querySnapshot.docs[0].data()
    }
  )
  useEffect(() => {
    if (fetchUserRankingResult.data) {
      const users = fetchUserRankingResult.data.users
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
  const fetchWordRankingResult = useQuery<WordRankingDocument, Error>(
    'fetchWordRanking',
    async () => {
      const querySnapshot = await getDocs(
        query(
          firebaseRefs.wordRanking.parent,
          orderBy('createdAt', 'desc'),
          limit(1)
        )
      )
      if (querySnapshot.docs.length === 0) {
        throw new Error('No data exists.')
      }
      return querySnapshot.docs[0].data()
    }
  )
  useEffect(() => {
    if (fetchWordRankingResult.data) {
      const words = fetchWordRankingResult.data.words
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
  const fetchDictionaryRankingResult = useQuery<
    DictionaryRankingDocument,
    Error
  >('fetchDictionaryRanking', async () => {
    const querySnapshot = await getDocs(
      query(
        firebaseRefs.dictionaryRanking.parent,
        orderBy('createdAt', 'desc'),
        limit(1)
      )
    )
    if (querySnapshot.docs.length === 0) {
      throw new Error('No data exists.')
    }
    return querySnapshot.docs[0].data()
  })
  useEffect(() => {
    if (fetchDictionaryRankingResult.data) {
      const dictionaries = fetchDictionaryRankingResult.data.dictionaries.map(
        (v) => {
          return {
            name: v.dictionary.name,
            wordCount: v.wordCount,
          }
        }
      )
      setState((state) => ({ ...state, dictionaries }))
    }
  }, [fetchDictionaryRankingResult.data])

  return {
    state,
  }
}
