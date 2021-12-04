import { DummyImg, DummyImgProps } from '~/components/Image'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Image',
  component: DummyImg,
} as ComponentMeta<typeof DummyImg>

const Template: ComponentStory<typeof DummyImg> = (args) => (
  <DummyImg {...args} />
)
const defaultArgs: DummyImgProps = {
  width: 300,
}

export const Default = Template.bind({})
Default.storyName = 'ダミー画像'
Default.args = defaultArgs
