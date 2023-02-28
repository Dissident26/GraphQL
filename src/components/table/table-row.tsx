interface ITableRow {
  values: React.ReactNode[];
  className?: string;
}

export const TableRow = ({ values, className }: ITableRow) => {
  return (
    <tr className={className}>
      {values.map((value, i) => (
        <td key={i}>{value}</td>
      ))}
    </tr>
  );
};
