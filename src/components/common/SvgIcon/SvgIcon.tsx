import cn from 'classnames';
import { FC, useState } from 'react';
import { ReactSVG } from 'react-svg';
import _styles from './styles.module.scss';

type Props = {
  className?: string;
  onClick?: () => void;
  pointer?: boolean;
  rotate?: '90' | '180' | '270' | '360';
  color?: 'primary' | 'secondary' | 'white' | 'black' | 'brand' | 'info' | 'error' | 'success' | string;
  size?: 'xs' | 'sm' | 'md' | 'mdm' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  src: string;
  top?: '1' | '2' | '3' | '4';
  id?: string;
  styles?: Record<string, string>;
  display?: 'block' | 'inline-block';
  name?: string;
};

export const SvgIcon: FC<Props> = ({
  className,
  pointer,
  onClick,
  rotate,
  color,
  size,
  src,
  top,
  id,
  styles = {},
  display,
  name,
}) => {
  const [svgExists, setSvgExists] = useState<boolean>(true);
  const handleError = (): void => {
    setSvgExists(false);
  };
  return svgExists ? (
    <ReactSVG
      style={styles}
      className={cn(
        _styles.svgIcon,
        {
          [_styles[`svgIcon_rotate_${rotate}`]]: rotate,
          [_styles[`svgIcon_color_${color}`]]: color,
          [_styles[`svgIcon_size_${size}`]]: size,
          [_styles[`svgIcon_top_${top}`]]: top,
          [_styles['svgIcon_pointer']]: pointer,
          [_styles[`svgIcon_display_${display}`]]: display,
        },
        className
      )}
      onClick={onClick}
      src={src}
      id={id}
      onError={handleError}
      afterInjection={(svg: any) => {
        if (svg) {
          setSvgExists(false);
        }
      }}
    />
  ) : (
    <span className={_styles.provider_name}>{name || ''}</span>
  );
};
