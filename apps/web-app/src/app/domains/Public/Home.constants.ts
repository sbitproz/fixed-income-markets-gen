import { HeadCell } from '@fixed-income-markets/core-ui'

export const headCells: HeadCell[] = [
  {
    id: 'currency',
    numeric: false,
    disablePadding: true,
    label: 'Currency',
  },
  {
    id: 'spread',
    numeric: true,
    disablePadding: true,
    label: 'Spread',
  },
  {
    id: 'coupon',
    numeric: true,
    disablePadding: false,
    label: 'Coupon',
  },
  {
    id: 'maturity',
    numeric: true,
    disablePadding: false,
    label: 'Maturity',
  },
];
