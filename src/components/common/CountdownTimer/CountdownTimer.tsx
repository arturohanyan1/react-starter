import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { calculateTimeLeft, isValidDate } from 'src/utils/helpers';
import styles from './styles.module.scss';

type IProps = {
  classname?: string;
  targetDate: Date | string | null;
  onEndCb?: () => void;
  showDays?: boolean;
  showHours?: boolean;
  showMinutes?: boolean;
  size?: 'sm' | 'md' | 'lg';
  bold?: boolean;
  uppercase?: boolean;
};

const CountdownTimer: FC<IProps> = ({
  classname,
  targetDate,
  onEndCb,
  showDays = true,
  showHours = true,
  showMinutes = true,
  size = 'md',
  bold,
  uppercase,
}) => {
  const { t }: Translation = useTranslation();

  // States
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  // Effects
  useEffect((): any => {
    if (targetDate && isValidDate(targetDate)) {
      const timer = setInterval(() => {
        const timeLeft = calculateTimeLeft(targetDate);
        if (
          timeLeft.days === '00' &&
          timeLeft.hours === '00' &&
          timeLeft.minutes === '00' &&
          timeLeft.seconds === '00'
        ) {
          clearInterval(timer);
          !!onEndCb && onEndCb();
        }
        setTimeLeft(timeLeft);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [targetDate]);

  return (
    <div
      className={cn(
        styles.timer,
        {
          [styles[`timer_size__${size}`]]: size,
          [styles.timer_text__bold]: bold,
          [styles.timer_text__uppercase]: uppercase,
        },
        classname
      )}
    >
      {showDays && (
        <div className={styles.time_block}>
          <div className={styles.time}>
            <span className={styles.value}>{timeLeft.days === '00' ? '0' : timeLeft.days}</span>
            <span className={styles.label}>{t('days')}</span>
          </div>
          <div className={styles.dots}>
            <span>:</span>
          </div>
        </div>
      )}
      {showHours && (
        <div className={styles.time_block}>
          <div className={styles.time}>
            <span className={styles.value}>{timeLeft.hours}</span>
            <span className={styles.label}>{t('hours')}</span>
          </div>
          <div className={styles.dots}>
            <span>:</span>
          </div>
        </div>
      )}
      {showMinutes && (
        <div className={styles.time_block}>
          <div className={styles.time}>
            <span className={styles.value}>{timeLeft.minutes}</span>
            <span className={styles.label}>{t('mins')}</span>
          </div>
          <div className={styles.dots}>
            <span>:</span>
          </div>
        </div>
      )}
      <div className={styles.time_block}>
        <div className={styles.time}>
          <span className={styles.value}>{timeLeft.seconds}</span>
          <span className={styles.label}>{t('secs')}</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
