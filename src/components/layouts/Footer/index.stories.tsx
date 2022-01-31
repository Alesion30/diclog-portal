import { Footer } from '.'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

export const Default = Template.bind({})
Default.storyName = 'フッター'
