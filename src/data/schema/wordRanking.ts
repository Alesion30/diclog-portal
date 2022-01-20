import {
  FirestoreDataConverter,
  DocumentData,
  QueryDocumentSnapshot,
  collection,
} from 'firebase/firestore'
import { firestore } from '~/plugins/firebase'
import { Word } from '~/types/word'

export type WordRankingData = {
  word: Word // 登録単語
  count: number // 登録数
}

export type WordRankingDocument = {
  words: WordRankingData[]
  createdAt: Date
}

/** 単語ランキング コンバーター層 */
const wordRankingConverter: FirestoreDataConverter<WordRankingDocument> = {
  toFirestore(data: WordRankingDocument): DocumentData {
    return { ...data }
  },
  fromFirestore(snapshot: QueryDocumentSnapshot): WordRankingDocument {
    const data = snapshot.data()
    return {
      words: data.words ?? [],
      createdAt: data.createdAt,
    }
  },
}

/** 単語ランキング コレクションref */
export const wordRankingCollection = collection(
  firestore,
  'wordRanking'
).withConverter<WordRankingDocument>(wordRankingConverter)
