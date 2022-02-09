import { getDocs, query, orderBy, limit } from 'firebase/firestore'
import { useQuery } from 'react-query'
import { firebaseRefs } from '../schema'
import { WordRankingDocument } from '../schema/wordRanking'

/**
 * 辞書ランキング
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
  return querySnapshot.docs[0].data()
}

/**
 * 辞書ランキング hook
 */
export const useWordRanking = () => {
  return useQuery<WordRankingDocument, Error>('getWordRanking', getWordRanking)
}
