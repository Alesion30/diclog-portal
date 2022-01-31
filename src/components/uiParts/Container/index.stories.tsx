import { Container, ContainerProps } from '.'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Container',
  component: Container,
} as ComponentMeta<typeof Container>

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
)
const defaultArgs: ContainerProps = {
  children: <h1>コンテナです</h1>,
  className: 'bg-blue-100 py-5',
}

export const Default = Template.bind({})
Default.storyName = 'コンテナ'
Default.args = defaultArgs
