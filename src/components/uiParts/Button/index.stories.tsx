import { Button, ButtonProps } from '.'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />
const defaultArgs: ButtonProps = {
  text: 'ボタンです',
  full: false,
  rounded: false,
  outlined: false,
}

export const Default = Template.bind({})
Default.storyName = 'ボタン'
Default.args = defaultArgs
