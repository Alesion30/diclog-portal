import clsx from 'clsx'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

export type ImageProps = {
  width?: number
  height?: number
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

export const AppleStoreImage: React.VFC<Omit<ImageProps, 'src'>> = ({
  height = 60,
  className,
}) => {
  return (
    <a
      href="https://apps.apple.com/app/diclog-%E8%8B%B1%E5%8D%98%E8%AA%9E%E5%B8%B3/id1603935437"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/assets/img/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
        className={className}
        style={{ height }}
        alt="apple"
      />
    </a>
  )
}

export const GoogleStoreImage: React.VFC<Omit<ImageProps, 'src'>> = ({
  height = 60,
  className,
}) => {
  return (
    <a
      href="https://play.google.com/store/apps?hl=ja&gl=US"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/assets/img/google-play-badge.png"
        style={{ height }}
        className={className}
        alt="google"
      />
    </a>
  )
}

export const ChromeWebStoreImage: React.VFC<Omit<ImageProps, 'src'>> = ({
  height = 60,
  className,
}) => {
  return (
    <a
      href="https://chrome.google.com/webstore/detail/diclog%EF%BC%88%E3%83%87%E3%82%A3%E3%82%AF%E3%83%AD%E3%82%B0%EF%BC%89/dbhlboadooiimjhmldcfcbidkppocmie/related?hl=ja"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/assets/img/chrome-web-store.png"
        style={{ height }}
        className={className}
        alt="chrome"
      />
    </a>
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
