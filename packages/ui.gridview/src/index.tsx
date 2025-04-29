'use client';
// ^-- to make sure we can mount the Provider from a server component

interface RowItemBase {
  id: number | string
}
interface GridViewProps<T extends RowItemBase> {
  data: T[],
  toString? (item: T): string;
}

export default function GridView<T extends RowItemBase> (props: GridViewProps<T>) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>data</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((row) => (
          <tr key={row.id}>
            <th scope="row">{row.id}</th>
            <td onClick={() => console.log(row)}>{props.toString?.(row) ?? row.id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}