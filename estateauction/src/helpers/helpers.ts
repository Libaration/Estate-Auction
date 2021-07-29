import moment from 'moment';
import { Home } from '../actions/HomeActionTypes';
export const isLoggedIn = () => {
  return localStorage.getItem('token') ? true : false;
};

export const sortHomesBy = (sortingType: string, homes: Home[]): Home[] => {
  switch (sortingType) {
    case 'recentlyCreated':
      return homes.sort((a: Home, b: Home) => {
        if (
          moment(a.createdAt).format('YYYYMMDDHHmm') <
          moment(b.createdAt).format('YYYYMMDDHHmm')
        ) {
          return 1;
        }
        if (
          moment(a.createdAt).format('YYYYMMDDHHmm') >
          moment(b.createdAt).format('YYYYMMDDHHmm')
        ) {
          return -1;
        }
        return 0;
      });
    case 'endingSoon':
      return homes.sort((a: Home, b: Home) => {
        if (
          moment(a.endDate).format('YYYYMMDDHHmm') <
          moment(b.endDate).format('YYYYMMDDHHmm')
        ) {
          return 1;
        }
        if (
          moment(a.endDate).format('YYYYMMDDHHmm') >
          moment(b.endDate).format('YYYYMMDDHHmm')
        ) {
          return -1;
        }
        return 0;
      });
    default:
      return homes;
  }
};
// moment(a.endDate).format('YYYYMMDDHHmm') -
//       moment(b.endDate).format('YYYYMMDDHHmm')
