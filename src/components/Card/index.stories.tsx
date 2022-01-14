import { Card, CardProps } from '~/components/Card'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />
const defaultArgs: CardProps = {
  children: (
    <div className="space-y-6 text-center">
      <p className="text-gray-700 text-lg font-bold">ステップ1</p>
      <h2 className="text-xl font-bold">chrome拡張機能を有効化</h2>
      <p>
        chromeウェブストアからchrome拡張機能をダウンロードし、Googleアカウント等でログインします。
      </p>
    </div>
  ),
  width: 400,
  height: 280,
  delay: 0,
  className: 'm-5',
}

export const Default = Template.bind({})
Default.storyName = 'カード'
Default.args = defaultArgs
