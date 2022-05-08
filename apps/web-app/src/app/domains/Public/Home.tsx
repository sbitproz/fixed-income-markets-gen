import * as React from 'react';
import {
  listIndications,
  selectAllIndications,
  useAppDispatch,
  useAppSelector,
} from '@fixed-income-markets/core-state';
import { Table } from '@fixed-income-markets/core-ui';
import { Checkbox, TableCell } from '@mui/material';
import { headCells } from './Home.constants';

const Home = () => {
  const dispatch = useAppDispatch();
  const rows = useAppSelector(selectAllIndications);

  React.useEffect(() => {
    dispatch(listIndications());
  }, []);

  return (
    <Table rows={rows} headCells={headCells} orderByField="maturity">
      {(row: any, labelId: string, isItemSelected: boolean) => (
        <>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              checked={isItemSelected}
              inputProps={{
                'aria-labelledby': labelId,
              }}
            />
          </TableCell>
          <TableCell component="th" id={labelId} scope="row" padding="none">
            {row.currency}
          </TableCell>
          <TableCell align="right">{row.coupon}</TableCell>
          <TableCell align="right">{row.maturity}</TableCell>
          <TableCell align="right">{row.spread}</TableCell>
        </>
      )}
    </Table>
  );
};

export default Home;
