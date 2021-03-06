import { DefaultSeoProps } from 'next-seo'

// https://github.com/garmeeh/next-seo
const config: DefaultSeoProps = {
  title: 'Diclog（ディクログ）- まったく新しい英単語帳システム',
  titleTemplate: '%s | Diclog（ディクログ）',
  description:
    'Diclogは自分の経験に基づいて、『こないだ調べたあの単語』を『復習』することによって記憶の定着を図る英単語帳です。しかも、単語登録の手間を完全に自動化してあります。DropboxやEvernoteを使っている人なら、自動同期の快適さは理解できると思います。最初にChrome Extensionを入れる必要がありますが、その後はそのExtensionが自動的に調べた英単語を記録してくれます。あとは、スマホでチェックして、消していくだけです。チェックするのは、トイレでも電車でも、ほんのちょっとしたスキマ時間です。',
  canonical: 'https://diclog.arakawa-lab.com',
  openGraph: {
    title: 'Diclog（ディクログ）- まったく新しい英単語帳システム',
    description:
      'Chrome拡張機能と連携し、自動であなただけの英単語帳を作成します。',
    images: [
      {
        url: 'https://user-images.githubusercontent.com/50891407/149852212-de6af654-7a65-429b-9211-c59dee6022fa.png',
        width: 1200,
        height: 630,
      },
    ],
    site_name: 'Diclog（ディクログ）',
  },
}
export default config
