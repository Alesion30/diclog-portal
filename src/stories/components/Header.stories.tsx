import { Header } from '~/components/Header'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Default = Template.bind({})
