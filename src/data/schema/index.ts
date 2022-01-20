import { dictionaryRankingCollection } from './dictionaryRanking'
import { userRankingCollection } from './userRanking'
import { wordRankingCollection } from './wordRanking'

/** firebase コレクション・ドキュメント Reference */
export const firebaseRefs = {
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
