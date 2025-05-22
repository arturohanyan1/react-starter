import { isNumber } from './helpers';

const makeFiltersQueryObj = (filters: any): any => {
  return Object.keys(filters).reduce((acc: any, cur: string) => {
    if (
      ((Array.isArray(filters[cur]) && filters[cur].length) ||
        (!Array.isArray(filters[cur]) && filters[cur]) ||
        (isNumber(filters[cur]) && filters[cur] >= 0)) &&
      filters[cur] !== 'all'
    ) {
      if (cur === 'dateFrom' || cur === 'dateTo') {
        acc[cur] = new Date(filters[cur]).toISOString();
      } else {
        acc[cur] = filters[cur];
      }
    }
    return acc;
  }, {});
};

export { makeFiltersQueryObj };
