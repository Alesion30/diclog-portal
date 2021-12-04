import { classNames } from '~/functions/classNames'

export type TableProps = {
  className?: string
  columns: Column[]
  data: any[]
  divide?: boolean
  header?: boolean
  shadow?: boolean
}

export type Column = {
  key: string
  name: string
}

export const Table: React.VFC<TableProps> = ({
  columns,
  data,
  className,
  divide = false,
  header = false,
  shadow = false,
}) => {
  return (
    <div
      className={classNames(
        className,
        shadow ? 'shadow-md' : '',
        'flex flex-col px-6 py-4 bg-white border rounded-md'
      )}
    >
      <div className="overflow-x-auto">
        <div className="align-middle inline-block min-w-full">
          <div
            className={classNames(
              divide ? 'border-b' : '',
              'shadow overflow-hidden border-gray-200'
            )}
          >
            <table
              className={classNames(
                divide ? 'divide-y divide-gray-200' : '',
                'min-w-full'
              )}
            >
              {header && (
                <thead className="bg-gray-200">
                  <tr>
                    {columns.map((column, i) => {
                      return (
                        <th
                          key={`table_thead_${i}_${column.key}`}
                          scope="col"
                          className="whitespace-nowrap px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {column.name}
                        </th>
                      )
                    })}
                  </tr>
                </thead>
              )}
              <tbody
                className={classNames(
                  divide ? 'divide-y divide-gray-200' : '',
                  'bg-white'
                )}
              >
                {data.map((d, i) => {
                  return (
                    <tr
                      key={`table_tbody_tr_${i}`}
                      className="hover:bg-gray-100"
                    >
                      {columns.map((column, j) => {
                        return (
                          <td
                            key={`table_tbody_tr_${i}_${j}_${column.key}`}
                            className="px-3 py-3 whitespace-normal text-sm text-gray-500"
                          >
                            {d[column.key] ?? ''}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
