import { Container } from '~/components/uiParts/Container'
import Image from 'next/image'
import Link from 'next/link'

export const Footer: React.VFC = () => {
  return (
    <div className="bg-gray-100">
      <Container className="py-16">
        <div className="flex flex-wrap justify-between items-end space-y-10">
          <div className="flex items-center space-x-4">
            <Image
              src="/assets/img/HSLlogo.png"
              layout="fixed"
              width={80}
              height={80}
              alt="HSLlogo"
            />
            <p className="text-gray-700">
              〒819-0395
              <br />
              福岡市西区元岡744番地
              <br />
              ウエスト２号館912/956
              <br />
              <span>TEL: 092-802-3792/3794</span>&nbsp;&nbsp;
              <span>MAIL: staff@arakawa-lab.com</span>
              <br />
              HP:{' '}
              <a
                href="https://arakawa-lab.com/"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://arakawa-lab.com/
              </a>
              <div className="mt-3">
                <p>
                  <Link href="privacy_policy">
                    <a href="privacy_policy" className=" hover:underline">
                      プライバシーポリシー
                    </a>
                  </Link>
                </p>
                <p>
                  <Link href="term">
                    <a href="term" className=" hover:underline">
                      利用規約
                    </a>
                  </Link>
                </p>
              </div>
            </p>
          </div>
          <div className="ml-4">
            <p className="text-gray-700 text-lg font-base">
              &copy; {new Date().getFullYear()} HumanoPhilic Systems Lab.
            </p>
          </div>
        </div>
        <div className="mt-16 text-center">
          <p>
            本アプリケーションは、JST CREST 「
            <a
              href="https://www.jst.go.jp/kisoken/crest/project/1111083/1111083_09.html"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              経験サプリメントによる行動変容と創造的協働
            </a>
            」の研究成果です。
          </p>
        </div>
      </Container>
    </div>
  )
}
