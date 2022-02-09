import { getDocs, query, orderBy, limit } from 'firebase/firestore'
import { useQuery } from 'react-query'
import { firebaseRefs } from '../schema'
import { WordRankingDocument } from '../schema/wordRanking'

/**
 * 英単語ランキング
 */
const getWordRanking = async () => {
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
  const data = querySnapshot.docs[0].data()
  const words = data.words
  const enWords = words.filter((word) => {
    return word.word.lang === 'en'
  })
  return {
    words: enWords,
    ...data,
  }
}

/**
 * 辞書ランキング hook
 */
export const useWordRanking = () => {
  return useQuery<WordRankingDocument, Error>('getWordRanking', getWordRanking)
}
