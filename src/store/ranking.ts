import { atom, useRecoilState } from 'recoil'

type RankingState = {
  users: {
    uid: string // ユーザーID
    nickName: string // ユーザー名
    photoURL: string | null // ユーザー画像
  }[]
  words: {
    value: string // 登録単語
    count: number // 登録数
  }[]
  dictionaries: {
    name: string // 辞書名
    wordCount: number // 登録単語数
  }[]
}

const RANKING_STATE_KEY = 'rankingState'

const rankingState = atom<RankingState>({
  key: RANKING_STATE_KEY,
  default: { users: [], words: [], dictionaries: [] },
})

/**
 * ランキング アクセス用カスタムフック
 */
export const useGlobalRankingState = () => {
  const [state, setState] = useRecoilState(rankingState)
}
