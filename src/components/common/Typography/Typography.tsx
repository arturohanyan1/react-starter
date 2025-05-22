import cn from 'classnames';
import { FC, ReactNode } from 'react';
import { TYPOGRAPHY_VARIATIONS } from 'src/utils/constants';
import styles from './styles.module.scss';

type TypographyVariants =
  | 'section_title'
  | 'subtitle1'
  | 'subtitle2'
  | 'subtitle3'
  | 'inherit'
  | 'caption'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4'
  | 'body5'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'label';

type TypographyColor =
  | 'textSecondary'
  | 'textPrimary'
  | 'white'
  | 'textThird'
  | 'textLight'
  | 'secondary'
  | 'textDark'
  | 'primary'
  | 'initial'
  | 'inherit'
  | 'third'
  | 'error'
  | 'valid'
  | 'gray-300';

type TypographyComponents = 'h1' | 'h4' | 'h5' | 'h6' | 'div' | 'p' | 'span' | 'label';

type Props = {
  isCapitalize?: boolean;
  isUppercase?: boolean;
  isUnderline?: boolean;
  component?: TypographyComponents | string;
  variant?: TypographyVariants | string;
  className?: string;
  color?: TypographyColor | string;
  children: ReactNode | string | number;
  style?: { [key: string]: string };
  fontWeight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  noWrap?: boolean | undefined;
  display?: string;
  id?: string;
  align?: 'left' | 'center' | 'right';
};
export const Typography: FC<Props> = ({
  isCapitalize,
  isUppercase,
  isUnderline,
  component,
  className,
  children,
  variant,
  color = 'inherit',
  fontWeight,
  style,
  noWrap,
  id = '',
  align,
}) => {
  const CustomTypography = component || (variant && TYPOGRAPHY_VARIATIONS[variant]) || 'span';

  return (
    <CustomTypography
      style={style}
      htmlFor={id}
      className={cn(
        styles.typography,
        {
          [styles[`typography_variant_${variant}`]]: variant,
          [styles[`typography_color_${color}`]]: color,
          [styles[`typography_font_weight_${fontWeight}`]]: fontWeight,
          [styles[`typography_align_${align}`]]: align,
          [styles.typography_uppercase]: isUppercase,
          [styles.typography_capitalize]: isCapitalize,
          [styles.typography_underline]: isUnderline,
          [styles.typography_noWrap]: noWrap,
        },
        className
      )}
    >
      {children}
    </CustomTypography>
  );
};
