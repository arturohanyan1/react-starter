import cn from 'classnames';
import React, { FC, useMemo } from 'react';
import { getPaginationPageNumbers } from 'src/utils/helpers';
import { icons } from 'src/utils/icons';
import Button from '../Button';
import styles from './styles.module.scss';

interface IProps {
  currentPage: number;
  limit: number;
  total: number;
  pageCountToShow?: number;
  onPaginate: (page: number) => void;
  classname?: string;
}

const Pagination: FC<IProps> = ({ currentPage, limit, total, pageCountToShow = 5, onPaginate, classname }) => {
  // Memoized Values
  const totalPages = useMemo(() => {
    return Math.ceil(total / limit);
  }, [total, limit]);

  const pageNumbers = useMemo(() => {
    return getPaginationPageNumbers(total, limit, currentPage, pageCountToShow);
  }, [total, limit, currentPage, pageCountToShow]);

  return (
    <div className={cn(styles.pagination, classname)}>
      <Button
        size="sm"
        variant="secondary"
        className={styles.pagination_button}
        leftIconSrc={icons.chevron_left}
        disabled={currentPage === 1}
        onClick={() => onPaginate(currentPage - 1)}
        aria-label="Previous page"
      />
      {pageNumbers.map((page: number) => (
        <Button
          key={`${page}`}
          size="sm"
          variant={page === currentPage ? 'primary' : 'secondary'}
          className={styles.pagination_button}
          onClick={() => onPaginate(page)}
          aria-label={`Page ${page}`}
        >
          {page}
        </Button>
      ))}
      <Button
        size="sm"
        variant="secondary"
        className={styles.pagination_button}
        leftIconSrc={icons.chevron_right}
        disabled={currentPage === totalPages}
        onClick={() => onPaginate(currentPage + 1)}
        aria-label="Next page"
      />
    </div>
  );
};

export default Pagination;
