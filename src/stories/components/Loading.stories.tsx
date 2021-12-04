import { Loading, LoadingProps } from '~/components/Loading'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>

const Template: ComponentStory<typeof Loading> = (args) => <Loading {...args} />
const defaultArgs: LoadingProps = {}

export const Default = Template.bind({})
Default.storyName = 'ローディング'
Default.args = defaultArgs
