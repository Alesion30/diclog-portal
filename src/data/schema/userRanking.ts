import {
  FirestoreDataConverter,
  DocumentData,
  QueryDocumentSnapshot,
  collection,
} from 'firebase/firestore'
import { firestore } from '~/plugins/firebase'

export type UserRankingData = {
  uid: string // ユーザーID
  nickName: string // ユーザー名
  photoURL: string | null // ユーザー画像
  registerWordCount: number // 登録単語数
  isLearnedWordCount: number // 覚えた単語数
}

export type UserRankingDocument = {
  users: UserRankingData[]
  createdAt: Date
}

/** ユーザーランキング コンバーター層 */
const userRankingConverter: FirestoreDataConverter<UserRankingDocument> = {
  toFirestore(data: UserRankingDocument): DocumentData {
    return { ...data }
  },
  fromFirestore(snapshot: QueryDocumentSnapshot): UserRankingDocument {
    const data = snapshot.data()
    return {
      users: data.users ?? [],
      createdAt: data.createdAt,
    }
  },
}

/** ユーザーランキング コレクションref */
export const userRankingCollection = collection(
  firestore,
  'userRanking'
).withConverter<UserRankingDocument>(userRankingConverter)
