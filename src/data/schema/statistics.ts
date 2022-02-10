import {
  collection,
  DocumentData,
  firestore,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
} from '~/plugins/firebase'

export type StatisticsDocument = {
  userCount: number // 総利用者数
  searchCount: number // 総検索回数
  wordCount: number // 総単語登録回数
  createdAt: Date // 更新日
}

/** 統計データ コンバーター層 */
const statisticsConverter: FirestoreDataConverter<StatisticsDocument> = {
  toFirestore(data: StatisticsDocument): DocumentData {
    return { ...data }
  },
  fromFirestore(snapshot: QueryDocumentSnapshot): StatisticsDocument {
    const data = snapshot.data()
    return {
      userCount: data.userCount ?? 0,
      searchCount: data.searchCount ?? 0,
      wordCount: data.wordCount ?? 0,
      createdAt: data.createdAt,
    }
  },
}

/** 統計データ コレクションref */
export const statisticsCollection = collection(
  firestore,
  'statistics'
).withConverter<StatisticsDocument>(statisticsConverter)
