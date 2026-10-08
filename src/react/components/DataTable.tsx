import type { DataTableProps } from '../types';
import { Skeleton } from './Skeleton';

export function DataTable<Row extends object>({
  columns,
  rows,
  rowKey,
  loading = false,
  skeletonRows = 6,
  empty,
  onSort,
  sortKey,
  sortDirection,
  pagination,
  className = '',
  style,
}: DataTableProps<Row>) {
  const keyOf = (row: Row, index: number) =>
    typeof rowKey === 'function' ? rowKey(row, index) : String((row as Record<string, unknown>)[rowKey]);

  const wrapperClasses = ['datatable', className].filter(Boolean).join(' ');

  return (
    <div className={wrapperClasses} style={style}>
      <table className="table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} style={col.width != null ? { width: col.width } : undefined}>
                {col.sortable && onSort ? (
                  <button
                    type="button"
                    className="table-sort"
                    aria-sort={sortKey === col.key ? (sortDirection === 'desc' ? 'descending' : 'ascending') : undefined}
                    onClick={() => onSort(col.key)}
                  >
                    {col.label}
                    {sortKey === col.key ? (sortDirection === 'desc' ? ' ↓' : ' ↑') : ''}
                  </button>
                ) : (
                  col.label
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading
            ? Array.from({ length: skeletonRows }, (_, i) => (
                <tr key={`skeleton-${i}`}>
                  {columns.map((col) => (
                    <td key={col.key}>
                      <Skeleton height={12} />
                    </td>
                  ))}
                </tr>
              ))
            : rows.map((row, i) => (
                <tr key={keyOf(row, i)}>
                  {columns.map((col) => (
                    <td key={col.key} className={col.mono ? 'mono' : undefined} data-label={typeof col.label === 'string' ? col.label : undefined}>
                      {col.render ? col.render(row, i) : String((row as Record<string, unknown>)[col.key] ?? '')}
                    </td>
                  ))}
                </tr>
              ))}
          {!loading && rows.length === 0 && empty != null && (
            <tr>
              <td colSpan={columns.length}>{empty}</td>
            </tr>
          )}
        </tbody>
      </table>
      {pagination != null && <div className="datatable-pagination">{pagination}</div>}
    </div>
  );
}
