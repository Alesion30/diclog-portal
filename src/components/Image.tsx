import Image from 'next/image'

export type DummyImgProps = {
  width: number
}

export const DummyImg: React.VFC<DummyImgProps> = ({ width = 960 }) => {
  const aspectRatio = 16 / 9
  return (
    <Image
      src="/assets/img/dummyImg.png"
      width={width}
      height={width / aspectRatio}
      alt="ダミー画像"
    />
  )
}
