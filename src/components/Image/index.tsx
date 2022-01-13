import Image from 'next/image'

export type ImageProps = {
  width: number
  className?: string
}

export const IconImage: React.VFC<ImageProps> = ({
  width = 128,
  className,
}) => {
  const aspectRatio = 1.0
  return (
    <Image
      className={className}
      src="/assets/img/icon.svg"
      width={width}
      height={width / aspectRatio}
      alt="アイコン"
    />
  )
}

export const DummyImage: React.VFC<ImageProps> = ({ width = 960 }) => {
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
