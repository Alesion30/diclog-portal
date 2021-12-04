import { Table, TableProps } from '~/components/Table'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Table',
  component: Table,
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />
const defaultArgs: TableProps = {
  columns: [
    { key: 'name', name: '名前' },
    { key: 'age', name: '年齢' },
    { key: 'sex', name: '性別' },
    { key: 'affiliation', name: '所属' },
  ],
  data: [
    {
      name: '九大 太郎',
      age: 20,
      sex: '男',
      affiliation: '工学部電気情報工学科',
    },
    {
      name: '九大 太郎',
      age: 20,
      sex: '男',
      affiliation: '工学部電気情報工学科',
    },
    {
      name: '九大 太郎',
      age: 20,
      sex: '男',
      affiliation: '工学部電気情報工学科',
    },
    {
      name: '九大 太郎',
      age: 20,
      sex: '男',
      affiliation: '工学部電気情報工学科',
    },
  ],
  divide: true,
  header: true,
}

export const Default = Template.bind({})
Default.storyName = 'テーブル'
Default.args = defaultArgs
