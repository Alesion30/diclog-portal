import { ChromeBoard, ChromeBoardProps } from '~/components/ChromeBoard'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/ChromeBoard',
  component: ChromeBoard,
} as ComponentMeta<typeof ChromeBoard>

const Template: ComponentStory<typeof ChromeBoard> = (args) => (
  <ChromeBoard {...args} />
)
const defaultArgs: ChromeBoardProps = {
  children: (
    <div className="space-y-6 text-center m-5">
      <p className="text-gray-700 text-lg font-bold">ステップ1</p>
      <h2 className="text-xl font-bold">chrome拡張機能を有効化</h2>
      <p>
        chromeウェブストアからchrome拡張機能をダウンロードし、Googleアカウント等でログインします。
      </p>
    </div>
  ),
  width: 400,
}

export const Default = Template.bind({})
Default.storyName = 'Chromeボード'
Default.args = defaultArgs
