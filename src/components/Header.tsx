import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Container } from '~/components/Container'
import { IconImage } from '~/components/Image'

export const Header: React.VFC = () => {
  return (
    <Popover className="relative bg-white">
      <Container>
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/" className="leading-none">
              <IconImage width={40} />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a
              href="#top"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              TOP
            </a>
            <a
              href="#about"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Diclogとは
            </a>
            <a
              href="#install"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              導入方法
            </a>
            <a
              href="#question"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              よくある質問
            </a>
            <a
              href="#contact"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              お問い合わせ
            </a>
          </nav>
        </div>
      </Container>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <_PopoverPanelContent />
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export const _PopoverPanelContent: React.VFC = () => {
  return (
    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
      <div className="pt-5 pb-6 px-5">
        <div className="flex items-center justify-between">
          <div>
            <IconImage width={40} />
          </div>
          <div className="-mr-2">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Close menu</span>
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
        <div className="mt-6">
          <nav className="grid gap-y-8">
            <a
              href="#"
              className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
            >
              <MenuIcon
                className="flex-shrink-0 h-6 w-6 text-indigo-600"
                aria-hidden="true"
              />
              <span className="ml-3 text-base font-medium text-gray-900">
                menu
              </span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
