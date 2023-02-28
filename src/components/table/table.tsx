import { TableHead } from './table-head';
import { TableRow } from './table-row';

interface ITable {
  colunms: React.ReactNode[];
  rows: React.ReactNode[][];
  className?: string;
}

export const Table = ({ colunms, rows, className }: ITable) => {
  return (
    <table className={className}>
      <thead>
        <TableHead colunms={colunms} />
      </thead>
      <tbody>
        {rows?.map((row, i) => (
          <TableRow key={i} values={row} />
        ))}
      </tbody>
    </table>
  );
};
