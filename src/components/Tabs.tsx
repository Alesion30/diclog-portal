import { Tab } from '@headlessui/react'
import { classNames } from '~/functions/classNames'

export type TabProps = {
  name: string
  children: React.ReactChild
}

export type TabsProps = {
  tabs: TabProps[]
  className?: string
}

export const Tabs: React.VFC<TabsProps> = ({ tabs, className }) => {
  return (
    <div className={className}>
      <Tab.Group>
        <Tab.List className="flex justify-center p-1 space-x-2 rounded-lg">
          {tabs.map((tab, i) => (
            <Tab
              key={`tab_list_${i}`}
              className={({ selected }) =>
                classNames(
                  'px-10 py-3 text-lg leading-5 font-bold rounded-lg border',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                  selected ? 'bg-indigo-700 text-white' : 'text-blue-700'
                )
              }
            >
              {tab.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 px-20">
          {tabs.map((tab, i) => (
            <Tab.Panel
              key={`tab_panel_${i}`}
              className={classNames(
                'bg-white rounded-lg p-3 border',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
              )}
            >
              {tab.children}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
