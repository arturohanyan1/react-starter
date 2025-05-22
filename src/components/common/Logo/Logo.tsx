import cn from 'classnames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { EnumRoutePaths } from 'src/configs/routes';
import styles from './stles.module.scss';

type IProps = {
  classname?: string;
  onClick?: (...args: any) => void;
};

const Logo: FC<IProps> = ({ classname, onClick }) => {
  const { t }: Translation = useTranslation();

  return (
    <div className={cn(styles.container, classname)}>
      <Link to={EnumRoutePaths.BASE} onClick={onClick}>
        <img src="/images/logo.png" alt={t('gdSocialTournament')} width="100" height="60" />
      </Link>
    </div>
  );
};

export default Logo;
