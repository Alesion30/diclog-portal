import { useQuery } from 'react-query'
import { getDocs, limit, orderBy, query } from '~/plugins/firebase'
import { firebaseRefs } from '../schema'
import { StatisticsDocument } from '../schema/statistics'

/**
 * 最新の統計データを取得
 */
const getStatistics = async () => {
  const querySnapshot = await getDocs(
    query(
      firebaseRefs.statistics.parent,
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
 * 最新の統計データ hook
 */
export const useStatistics = () => {
  return useQuery<StatisticsDocument, Error>('getStatistics', getStatistics)
}
