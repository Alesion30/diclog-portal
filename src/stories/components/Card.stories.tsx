import { Card, CardProps } from '~/components/Card'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />
const defaultArgs: CardProps = {
  children: <p>カードです</p>,
  className: 'p-5',
  shadow: true,
}

export const Default = Template.bind({})
Default.storyName = 'カード'
Default.args = defaultArgs
