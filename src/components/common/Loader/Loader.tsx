import { FC } from 'react';
import { BallTriangle } from 'react-loader-spinner';

type IProps = {
  wrapperClassName?: string;
};

const Loader: FC<IProps> = ({ wrapperClassName }) => {
  return (
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#0C8E83"
      ariaLabel="ball-triangle-loading"
      wrapperStyle={{}}
      wrapperClass={wrapperClassName}
      visible={true}
    />
  );
};

export default Loader;
