import cn from 'classnames';
import { ButtonHTMLAttributes, CSSProperties, FC, ReactNode } from 'react';
import { ReactSVG } from 'react-svg';
import styles from './styles.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  className?: string;
  text?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void | undefined | string;
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'text' | 'ghost' | 'brand' | 'outlined';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  style?: CSSProperties;
  type?: 'button' | 'submit';
  capitalize?: boolean;
  uppercase?: boolean;
  withShadow?: boolean;
  fullWidth?: boolean;
  leftIconSrc?: string;
  rightIconSrc?: string;
  iconSize?: 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'mdm' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'full';
  justify?: 'center' | 'between';
}

const Button: FC<IButtonProps> = ({
  id,
  className,
  text,
  disabled,
  loading,
  children,
  onClick,
  variant = 'primary',
  style,
  type = 'button',
  size = 'md',
  capitalize,
  uppercase,
  leftIconSrc,
  rightIconSrc,
  withShadow,
  fullWidth,
  iconSize,
  justify,
  ...rest
}) => {
  return (
    <button
      id={id}
      className={cn(
        styles.button,
        {
          [styles[`button_variant_${variant}`]]: variant,
          [styles[`button_size_${size}`]]: size,
          [styles[`button_justify_${justify}`]]: justify,
          [styles.button_disabled]: !!disabled,
          [styles.button_loading]: !!loading,
          [styles.button_capitalize]: !!capitalize,
          [styles.button_uppercase]: !!uppercase,
          [styles.button_with_shadow]: !!withShadow,
          [styles.button_full_width]: !!fullWidth,
        },
        className
      )}
      disabled={disabled}
      onClick={onClick}
      style={style}
      type={type}
      {...rest}
    >
      {leftIconSrc && (
        <ReactSVG className={cn(styles.left_icon, { [styles[`icon_size_${iconSize}`]]: iconSize })} src={leftIconSrc} />
      )}
      {!!text && (
        <div>
          <span>{text}</span>
        </div>
      )}
      {!!children && <div>{children}</div>}
      {rightIconSrc && (
        <ReactSVG
          className={cn(styles.right_icon, { [styles[`icon_size_${iconSize}`]]: iconSize })}
          src={rightIconSrc}
        />
      )}
    </button>
  );
};

export default Button;
