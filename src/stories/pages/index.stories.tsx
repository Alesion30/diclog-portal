import { ComponentMeta, ComponentStory } from '@storybook/react'
import IndexPage, {
  _TopSection,
  _AboutSection,
  _InstallSection,
} from '~/pages/index'

export default {
  title: 'Pages/Index',
  component: IndexPage,
} as ComponentMeta<typeof IndexPage>

export const Page: ComponentStory<typeof IndexPage> = () => <IndexPage />
Page.storyName = 'ページ全体'

export const TopSection: ComponentStory<typeof _TopSection> = () => (
  <_TopSection />
)
TopSection.storyName = 'トップ'

export const AboutSection: ComponentStory<typeof _AboutSection> = () => (
  <_AboutSection />
)
AboutSection.storyName = 'Diclogとは'

export const InstallSection: ComponentStory<typeof _InstallSection> = () => (
  <_InstallSection />
)
InstallSection.storyName = '導入方法'
