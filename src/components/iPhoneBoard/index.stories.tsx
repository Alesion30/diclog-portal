import { IPhoneBoard, IPhoneBoardProps } from '~/components/iPhoneBoard'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/iPhoneBoard',
  component: IPhoneBoard,
} as ComponentMeta<typeof IPhoneBoard>

const Template: ComponentStory<typeof IPhoneBoard> = (args) => (
  <IPhoneBoard {...args} />
)
const defaultArgs: IPhoneBoardProps = {
  children: (
    <div className="space-y-6 text-center m-5">
      <p className="text-gray-700 text-lg font-bold">ステップ1</p>
      <h2 className="text-xl font-bold">chrome拡張機能を有効化</h2>
      <p>
        chromeウェブストアからchrome拡張機能をダウンロードし、Googleアカウント等でログインします。
      </p>
    </div>
  ),
  width: 300,
}

export const Default = Template.bind({})
Default.storyName = 'iPhone'
Default.args = defaultArgs
