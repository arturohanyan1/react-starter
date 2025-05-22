import cn from 'classnames';
import { ChangeEvent, CSSProperties, FC, ReactNode } from 'react';
import { ReactSVG } from 'react-svg';
import styles from './styles.module.scss';

export type Props = {
  className?: string;
  onChangeHandler?: (key: string, val: any) => void;
  onBlurHandler?: (key: string, val: any) => void;
  onFocusHandler?: (key: string, val: any) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  checked?: boolean;
  name: string;
  id?: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  leftIconSrc?: string;
  rightIconSrc?: string;
  iconSize?: 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'mdm' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'full';
  iconColor?: 'primary' | 'secondary';
  style?: CSSProperties;
  children?: ReactNode;
};

const CheckBox: FC<Props> = ({
  className,
  onChangeHandler,
  onBlurHandler,
  onFocusHandler,
  onChange,
  onBlur,
  onFocus,
  errorMessage,
  checked = false,
  name,
  id = name,
  size = 'md',
  label,
  disabled = false,
  required,
  leftIconSrc,
  rightIconSrc,
  iconSize = 'md',
  iconColor = 'primary',
  style,
  children,
  ...rest
}) => {
  // Actions
  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange && onChange(e);
    onChangeHandler && onChangeHandler(e.target.name, e.target.checked);
  };

  const onInputBlur = (e: ChangeEvent<HTMLInputElement>): void => {
    onBlur && onBlur(e);
    onBlurHandler && onBlurHandler(e.target.name, e.target.checked);
  };

  const onInputFocus = (e: ChangeEvent<HTMLInputElement>): void => {
    onFocus && onFocus(e);
    onFocusHandler && onFocusHandler(e.target.name, e.target.checked);
  };

  return (
    <div
      className={cn(
        styles.input,
        {
          [styles[`input_size_${size}`]]: size,
          [styles.input_disabled]: !!disabled,
          [styles.input_error]: !!errorMessage,
        },
        className
      )}
    >
      <div className={styles.input_wrapper}>
        <input
          id={id}
          onChange={onInputChange}
          onBlur={onInputBlur}
          onFocus={onInputFocus}
          checked={checked}
          name={name}
          type="checkbox"
          disabled={disabled}
          {...rest}
          style={style}
        />
        <label htmlFor={id} className={styles.input_label}>
          {required && <span className={styles.input_label__required}>*</span>}
          {!!leftIconSrc && (
            <ReactSVG
              className={cn(styles.left_icon, styles.input_Icon, {
                [styles[`icon_size_${iconSize}`]]: iconSize,
                [styles[`icon_color_${iconColor}`]]: iconColor,
              })}
              src={leftIconSrc}
            />
          )}
          {!!label && <span>{label}</span>}
          {!!children && <div>{children}</div>}
          {!!rightIconSrc && (
            <ReactSVG
              className={cn(styles.right_icon, styles.input_Icon, {
                [styles[`icon_size_${iconSize}`]]: iconSize,
                [styles[`icon_color_${iconColor}`]]: iconColor,
              })}
              src={rightIconSrc}
            />
          )}
        </label>
      </div>
      {errorMessage && <span className={styles.input_error_text}>{errorMessage}</span>}
    </div>
  );
};

export default CheckBox;
