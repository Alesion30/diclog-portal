import clsx from 'clsx'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

export type ImageProps = {
  width: number
  src: string
  aspectRatio?: number
  className?: string
}

export const IconImage: React.VFC<Omit<ImageProps, 'src'>> = ({
  width = 128,
  aspectRatio = 1.0,
  className,
}) => {
  return (
    <Image
      className={className}
      src="/assets/img/icon.svg"
      width={width}
      height={width / aspectRatio}
      alt="icon"
    />
  )
}

export const DummyImage: React.VFC<Omit<ImageProps, 'src'>> = ({
  width = 960,
  aspectRatio = 16 / 9,
  className,
}) => {
  return (
    <Image
      className={className}
      src="/assets/img/dummyImg.png"
      width={width}
      height={width / aspectRatio}
      alt="ダミー画像"
    />
  )
}

export const FadeInImage: React.VFC<ImageProps> = ({
  src,
  width = 960,
  aspectRatio = 16 / 9,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  })

  return (
    <div ref={ref}>
      <Image
        className={clsx(inView ? 'animate-fadeIn' : 'opacity-0')}
        src={src}
        width={width}
        height={width / aspectRatio}
        alt="画像"
      />
    </div>
  )
}
