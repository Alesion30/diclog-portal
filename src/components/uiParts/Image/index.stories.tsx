import { IconImage, DummyImage, ImageProps } from '.'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Image',
  component: DummyImage,
} as ComponentMeta<typeof DummyImage>

const defaultArgs: Omit<ImageProps, 'src'> = {
  width: 300,
}

const IconImageTemplate: ComponentStory<typeof IconImage> = (args) => (
  <IconImage {...args} />
)
export const Icon = IconImageTemplate.bind({})
Icon.storyName = 'アイコン'
Icon.args = defaultArgs

const DummyImageTemplate: ComponentStory<typeof DummyImage> = (args) => (
  <DummyImage {...args} />
)
export const Dummy = DummyImageTemplate.bind({})
Dummy.storyName = 'ダミー画像'
Dummy.args = defaultArgs
