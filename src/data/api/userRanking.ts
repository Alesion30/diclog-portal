import { getDocs, query, orderBy, limit } from 'firebase/firestore'
import { useQuery } from 'react-query'
import { firebaseRefs } from '../schema'
import { UserRankingDocument } from '../schema/userRanking'

/**
 * ユーザーランキング
 */
const getUserRanking = async () => {
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

/**
 * ユーザーランキング hook
 */
export const useUserRanking = () => {
  return useQuery<UserRankingDocument, Error>('getUserRanking', getUserRanking)
}
