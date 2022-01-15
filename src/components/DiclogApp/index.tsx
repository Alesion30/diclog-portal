import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { IPhoneBoard } from '../iPhoneBoard'

export const DiclogApp: React.VFC = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false)

  return (
    <IPhoneBoard width={300}>
      <div className="flex flex-col h-full">
        <div className="flex justify-center py-2 border-b shadow-sm">
          <p className="text-base">ランダムで出題</p>
        </div>
        <div className="pt-2 pb-7 px-2 h-full">
          <ReactCardFlip isFlipped={isFlipped} containerClassName="h-full">
            <div
              key="front"
              onClick={() => setIsFlipped(true)}
              className="bg-white flex justify-center items-center border rounded-lg shadow-lg w-full h-full"
            >
              <p className="text-4xl select-none">Hello</p>
            </div>
            <div
              key="back"
              onClick={() => setIsFlipped(false)}
              className="bg-white flex justify-center items-center border rounded-lg shadow-lg w-full h-full"
            >
              <p className="text-4xl select-none">こんにちは</p>
            </div>
          </ReactCardFlip>
        </div>
      </div>
    </IPhoneBoard>
  )
}
