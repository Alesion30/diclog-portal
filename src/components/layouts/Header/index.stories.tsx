import { Header } from '.'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.storyName = 'ヘッダー'
