import clsx from 'clsx'
import * as React from 'react'

export type TableProps = {
  className?: string
  columns: Column[]
  data: any[]
  // eslint-disable-next-line no-unused-vars
  onClick?: (d: any) => void
}

export type Column = {
  key: string
  name: string
}

export const Table: React.VFC<TableProps> = ({
  columns,
  data,
  className,
  onClick,
}) => {
  return (
    <div className={clsx(className, 'flex flex-col')}>
      <div className="overflow-x-auto">
        <div className="align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden border-b border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-white">
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
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((d, i) => {
                  return (
                    <tr
                      key={`table_tbody_tr_${i}`}
                      className={clsx(
                        onClick ? 'cursor-pointer' : '',
                        'hover:bg-gray-100'
                      )}
                      onClick={() => (onClick ? onClick(d) : undefined)}
                    >
                      {columns.map((column, j) => {
                        return (
                          <td
                            key={`table_tbody_tr_${i}_${j}_${column.key}`}
                            className="px-3 py-3 text-left whitespace-normal text-sm text-gray-500"
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
