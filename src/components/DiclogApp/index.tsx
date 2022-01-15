import { IPhoneBoard } from '../iPhoneBoard'

export const DiclogApp: React.VFC = () => {
  return (
    <IPhoneBoard width={300}>
      <div className="flex flex-col h-full">
        <div className="flex justify-center py-2 border-b shadow-sm">
          <p className="text-base">ランダムで出題</p>
        </div>
        <div className="pt-2 pb-7 px-2 h-full">
          <div className="bg-white flex justify-center items-center border rounded-lg shadow-lg w-full h-full">
            <p className="text-4xl">Hello</p>
          </div>
        </div>
      </div>
    </IPhoneBoard>
  )
}
