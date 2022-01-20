import {
  FirestoreDataConverter,
  DocumentData,
  QueryDocumentSnapshot,
  collection,
} from 'firebase/firestore'
import { firestore } from '~/plugins/firebase'
import { Dictionary } from '~/types/dictionary'

export type DictionaryRankingData = {
  dictionary: Dictionary
  wordCount: number // 登録単語数
}

export type DictionaryRankingDocument = {
  dictionaries: DictionaryRankingData[]
  createdAt: Date
}

/** 辞書ランキング コンバーター層 */
const dictionaryRankingConverter: FirestoreDataConverter<DictionaryRankingDocument> =
  {
    toFirestore(data: DictionaryRankingDocument): DocumentData {
      return { ...data }
    },
    fromFirestore(snapshot: QueryDocumentSnapshot): DictionaryRankingDocument {
      const data = snapshot.data()
      return {
        dictionaries: data.dictionaries ?? [],
        createdAt: data.createdAt,
      }
    },
  }

/** 辞書ランキング コレクションref */
export const dictionaryRankingCollection = collection(
  firestore,
  'dictionaryRanking'
).withConverter<DictionaryRankingDocument>(dictionaryRankingConverter)
