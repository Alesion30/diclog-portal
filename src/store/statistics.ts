import { useEffect } from 'react'
import { atom, useRecoilState } from 'recoil'
import { useStatistics } from '~/data/api/statistics'

type StatisticsState = {
  userCount: number
  searchCount: number
  wordCount: number
}

const STATISTICS_STATE_KEY = 'statisticsState'

const statisticsState = atom<StatisticsState>({
  key: STATISTICS_STATE_KEY,
  default: { userCount: 0, searchCount: 0, wordCount: 0 },
})

/**
 * 統計データ アクセス用カスタムフック
 */
export const useGlobalStatisticsState = () => {
  const [state, setState] = useRecoilState(statisticsState)
  const fetchStatisticsResult = useStatistics()
  useEffect(() => {
    if (fetchStatisticsResult.data) {
      const { userCount, searchCount, wordCount } = fetchStatisticsResult.data
      setState((state) => ({
        ...state,
        userCount,
        searchCount,
        wordCount,
      }))
    }
  }, [fetchStatisticsResult.data])

  return {
    state,
  }
}
