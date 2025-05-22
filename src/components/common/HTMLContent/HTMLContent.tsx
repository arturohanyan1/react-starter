import cn from 'classnames';
import React, { FC } from 'react';
import styles from './styles.module.scss';

type IProps = {
  classname?: string;
  data?: any;
};

const HTMLContent: FC<IProps> = ({ classname, data }) => {
  return <div className={cn(styles.container, classname)} dangerouslySetInnerHTML={{ __html: data }}></div>;
};

export default HTMLContent;
