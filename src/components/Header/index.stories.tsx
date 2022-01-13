import { Popover } from '@headlessui/react'
import { Header, _PopoverPanelContent } from '~/components/Header'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.storyName = 'ヘッダー'

export const PopoverPanelContent: ComponentStory<
  typeof _PopoverPanelContent
> = () => (
  <Popover>
    <_PopoverPanelContent />
  </Popover>
)
PopoverPanelContent.storyName = 'メニュー'
