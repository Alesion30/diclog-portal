import { Tabs, TabsProps } from '~/components/Tabs'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />
const defaultArgs: TabsProps = {
  tabs: [
    { name: 'Hoge', children: <h1>Hoge</h1> },
    { name: 'Fugo', children: <h1>Fugo</h1> },
  ],
}

export const Default = Template.bind({})
Default.storyName = 'タブ'
Default.args = defaultArgs
