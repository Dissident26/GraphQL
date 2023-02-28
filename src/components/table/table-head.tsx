interface ITableHead {
  colunms: React.ReactNode[];
  className?: string;
}

export const TableHead = ({ colunms, className }: ITableHead) => {
  return (
    <tr className={className}>
      {colunms.map((value, i) => (
        <th key={i}>{value}</th>
      ))}
    </tr>
  );
};
