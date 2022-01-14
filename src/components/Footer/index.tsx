import { Container } from '~/components/Container'
import Image from 'next/image'

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
            <p>
              〒819-0395
              <br />
              福岡市西区元岡744番地
              <br />
              ウエスト２号館912/956
              <br />
              TEL: 092-802-3792/3794&nbsp; MAIL: staff@arakawa-lab.com
              <br />
              HP:{' '}
              <a
                href="https://arakawa-lab.com/"
                className="border-b border-black"
              >
                https://arakawa-lab.com/
              </a>
            </p>
          </div>
          <p className="text-gray-700 text-lg font-base ml-4">
            &copy; {new Date().getFullYear()} HumanoPhilic Systems Lab.
          </p>
        </div>
      </Container>
    </div>
  )
}
