import { getDocs, query, orderBy, limit } from 'firebase/firestore'
import { useQuery } from 'react-query'
import { firebaseRefs } from '../schema'
import { DictionaryRankingDocument } from '../schema/dictionaryRanking'

/**
 * 辞書ランキング
 */
const getDictionaryRanking = async () => {
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
}

/**
 * 辞書ランキング hook
 */
export const useDictionaryRanking = () => {
  return useQuery<DictionaryRankingDocument, Error>(
    'getDictionaryRanking',
    getDictionaryRanking
  )
}
