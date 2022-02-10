import { dictionaryRankingCollection } from './dictionaryRanking'
import { statisticsCollection } from './statistics'
import { userRankingCollection } from './userRanking'
import { wordRankingCollection } from './wordRanking'

/** firebase コレクション・ドキュメント Reference */
export const firebaseRefs = {
  statistics: {
    parent: statisticsCollection,
  },
  userRanking: {
    parent: userRankingCollection,
  },
  dictionaryRanking: {
    parent: dictionaryRankingCollection,
  },
  wordRanking: {
    parent: wordRankingCollection,
  },
}
