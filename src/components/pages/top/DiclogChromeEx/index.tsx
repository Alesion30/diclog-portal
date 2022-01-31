import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '~/components/uiParts/Button'
import { ChromeBoard } from '~/components/uiParts/ChromeBoard'
import { Table } from '~/components/uiParts/Table'
import { useGlobalWordState } from '~/store/word'

type Inputs = {
  searchText: string
}

// Diclog chrome拡張機能ページ
export const DiclogChromeEx: React.VFC = () => {
  const { words, registerWord } = useGlobalWordState()
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm<Inputs>()

  const [error, setError] = useState<string>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [transWord, setTransWord] = useState<string>('')

  // エラーメッセージ初期化
  useEffect(() => {
    setError(null)
    if (watch('searchText') === '') {
      setTransWord('')
    }
  }, [watch('searchText')])

  // 送信
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!loading) {
      // ロード開始
      setTransWord('')
      setLoading(true)

      // 単語を登録
      try {
        const transWord = await registerWord(data.searchText)
        setTransWord(transWord)
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        }
      }

      // ロード終了
      setLoading(false)
    }
  }

  return (
    <ChromeBoard width={600}>
      <div className="relative w-full">
        <div className="absolute top-1 right-2 border shadow-md bg-white w-52 max-h-72 overflow-y-scroll">
          <Table
            columns={[
              { key: 'value', name: '検索単語' },
              { key: 'trans', name: '翻訳' },
            ]}
            data={words}
          />
        </div>
        <div className="p-4 space-y-6 w-7/12 text-left">
          <div className="space-y-2">
            <p className="text-xl font-bold">英語翻訳サイト（仮）</p>
            <p className="text-sm text-gray-400">
              ※15文字以内の英単語・英熟語を入力してください。翻訳には「Bing
              Translate API」を使用しています。
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center space-y-5"
          >
            <div className="w-full space-y-4">
              <input
                {...register('searchText', { required: true })}
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none"
                placeholder="英単語を入力してください"
              />
              {/* {errors.searchText && (
                <span className="text-red-500 text-sm ml-2">
                  この項目は必須です
                </span>
              )} */}
              {error && (
                <span className="text-red-500 text-sm ml-2">{error}</span>
              )}
            </div>
            <Button type="submit" text="翻訳する" className="w-36" />
            <textarea
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none"
              rows={3}
              value={transWord}
              onChange={() => null}
              placeholder="翻訳結果が表示されます"
            ></textarea>
          </form>
        </div>
      </div>
    </ChromeBoard>
  )
}
