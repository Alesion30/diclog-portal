import { useGlobalWordState } from '~/store/word'
import { Button } from '../Button'
import { ChromeBoard } from '../ChromeBoard'
import { Table } from '../Table'

// Diclog chrome拡張機能ページ
export const DiclogChromeEx: React.VFC = () => {
  const { words } = useGlobalWordState()

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
          <div className="flex flex-col items-center space-y-5">
            <input
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none"
              placeholder="英単語を入力してください"
            />
            <Button text="翻訳する" className="w-36" />
            <textarea
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none"
              rows={3}
              disabled
            ></textarea>
          </div>
        </div>
      </div>
    </ChromeBoard>
  )
}
