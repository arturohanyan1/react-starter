import cn from 'classnames';
import { CSSProperties, FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import styles from './styles.module.scss';

type ICusomLinkProps = {
  src: string;
  id?: string;
  isExternal?: boolean;
  target?: '_blank' | '_self';
  className?: string;
  disabled?: boolean;
  onClick?: () => void | undefined | string;
  children?: ReactNode;
  view?: 'link' | 'button';
  variant?: 'primary_button' | 'secondary_button' | 'brand_button' | 'outlined_button' | 'default_link' | 'brand_link';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  style?: CSSProperties;
  capitalize?: boolean;
  uppercase?: boolean;
  leftIconSrc?: string;
  loading?: boolean;
  withShadow?: boolean;
  fullWidth?: boolean;
  rightIconSrc?: string;
  hoverWithUnderline?: boolean;
  withUnderline?: boolean;
  noWrap?: boolean;
  iconSize?: 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'mdm' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'full';
  fontWeight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  rel?: string;
};

const CusomLink: FC<ICusomLinkProps> = ({
  src,
  id,
  isExternal = false,
  target = '_self',
  className,
  disabled,
  children,
  onClick,
  variant = 'default_link',
  view = 'link',
  style,
  size = 'md',
  loading,
  fullWidth,
  withShadow,
  capitalize,
  uppercase,
  leftIconSrc,
  rightIconSrc,
  iconSize,
  fontWeight,
  withUnderline,
  hoverWithUnderline,
  noWrap,
  rel,
}) => {
  // Actions
  const onClickHandler = (e: any): void => {
    if (disabled) {
      e.preventDefault();
    } else if (!!onClick) {
      onClick();
    }
  };

  return isExternal ? (
    <a
      href={src}
      target={target}
      rel={rel}
      id={id}
      className={cn(
        styles.custom_link,
        {
          [styles[`custom_link_variant_${variant}`]]: variant,
          [styles[`custom_link_size_${size}`]]: size,
          [styles[`custom_link_view_${view}`]]: view,
          [styles[`custom_link_font_weight_${fontWeight}`]]: fontWeight,
          [styles.custom_link_disabled]: !!disabled,
          [styles.custom_link_loading]: !!loading,
          [styles.custom_link_capitalize]: !!capitalize,
          [styles.custom_link_uppercase]: !!uppercase,
          [styles.custom_link_with_shadow]: !!withShadow,
          [styles.custom_link_full_width]: !!fullWidth,
          [styles.custom_link_hover_with_underline]: !!hoverWithUnderline,
          [styles.custom_link_with_underline]: !!withUnderline,
          [styles.custom_link_no_wrap]: !!noWrap,
        },
        className
      )}
      onClick={onClickHandler}
      style={style}
    >
      {leftIconSrc && (
        <ReactSVG className={cn(styles.left_icon, { [styles[`icon_size_${iconSize}`]]: iconSize })} src={leftIconSrc} />
      )}
      {!!children && <span>{children}</span>}
      {rightIconSrc && (
        <ReactSVG
          className={cn(styles.right_icon, { [styles[`icon_size_${iconSize}`]]: iconSize })}
          src={rightIconSrc}
        />
      )}
    </a>
  ) : (
    <Link
      to={src}
      target={target}
      id={id}
      className={cn(
        styles.custom_link,
        {
          [styles[`custom_link_variant_${variant}`]]: variant,
          [styles[`custom_link_size_${size}`]]: size,
          [styles[`custom_link_view_${view}`]]: view,
          [styles[`custom_link_font_weight_${fontWeight}`]]: fontWeight,
          [styles.custom_link_disabled]: !!disabled,
          [styles.custom_link_loading]: !!loading,
          [styles.custom_link_capitalize]: !!capitalize,
          [styles.custom_link_uppercase]: !!uppercase,
          [styles.custom_link_with_shadow]: !!withShadow,
          [styles.custom_link_full_width]: !!fullWidth,
          [styles.custom_link_hover_with_underline]: !!hoverWithUnderline,
          [styles.custom_link_with_underline]: !!withUnderline,
          [styles.custom_link_no_wrap]: !!noWrap,
        },
        className
      )}
      onClick={onClickHandler}
      style={style}
    >
      {leftIconSrc && (
        <ReactSVG className={cn(styles.left_icon, { [styles[`icon_size_${iconSize}`]]: iconSize })} src={leftIconSrc} />
      )}
      {!!children && <span>{children}</span>}
      {rightIconSrc && (
        <ReactSVG
          className={cn(styles.right_icon, { [styles[`icon_size_${iconSize}`]]: iconSize })}
          src={rightIconSrc}
        />
      )}
    </Link>
  );
};

export default CusomLink;
