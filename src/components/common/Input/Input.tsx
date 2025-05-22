import cn from 'classnames';
import { ChangeEvent, CSSProperties, FC, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { icons } from 'src/utils/icons';
import styles from './styles.module.scss';

export type Props = {
  placeholder?: string;
  className?: string;
  onChangeHandler?: (key: string, val: any) => void;
  onBlurHandler?: (key: string, val: any) => void;
  onFocusHandler?: (key: string, val: any) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  infoText?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  value?: string;
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
  showPasswordIcon?: boolean;
  autocomplete?: 'on' | 'off';
  style?: CSSProperties;
};

const Input: FC<Props> = ({
  placeholder,
  className,
  onChangeHandler,
  onBlurHandler,
  onFocusHandler,
  onChange,
  onBlur,
  onFocus,
  errorMessage,
  value,
  checked = false,
  name,
  id,
  type = 'text',
  size = 'md',
  label,
  disabled = false,
  required,
  showPasswordIcon,
  leftIconSrc,
  rightIconSrc,
  iconSize = 'md',
  iconColor = 'secondary',
  autocomplete = 'off',
  style,
  infoText,
  ...rest
}) => {
  // States
  const [showPassword, setShowPassword] = useState(false);

  // Actions
  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    !!onChange && onChange(e);
    onChangeHandler && onChangeHandler(e.target.name, e.target.value);
  };

  const onInputBlur = (e: ChangeEvent<HTMLInputElement>): void => {
    !!onBlur && onBlur(e);
    onBlurHandler && onBlurHandler(e.target.name, e.target.value);
  };

  const onInputFocus = (e: ChangeEvent<HTMLInputElement>): void => {
    !!onFocus && onFocus(e);
    onFocusHandler && onFocusHandler(e.target.name, e.target.value);
  };

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (type === 'number' && ['e', 'E'].includes(e.key)) {
      e.preventDefault();
    }
  };

  const togglePasswordVisibility = (): void => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className={cn(
        styles.input,
        {
          [styles[`input_size_${size}`]]: size,
          [styles[`input_type_${type}`]]: type,
          [styles.input_disabled]: !!disabled,
          [styles.input_with_left_icon]: !!leftIconSrc,
          [styles.input_with_right_icon]: !!rightIconSrc || showPasswordIcon,
          [styles.input_error]: !!errorMessage,
        },
        className
      )}
    >
      {label && (
        <label htmlFor={name} className={styles.input_label}>
          {required && <span className={styles.input_label__required}>*</span>}
          <span>{label}</span>
        </label>
      )}
      <div className={styles.input_wrapper}>
        <input
          id={id}
          placeholder={placeholder}
          onChange={onInputChange}
          onBlur={onInputBlur}
          onFocus={onInputFocus}
          onKeyDown={onInputKeyDown}
          value={value}
          name={name}
          type={showPassword ? 'text' : type}
          disabled={disabled}
          autoComplete={autocomplete}
          {...rest}
          style={style}
        />
        {!!leftIconSrc && (
          <ReactSVG
            className={cn(styles.left_icon, styles.input_Icon, {
              [styles[`icon_size_${iconSize}`]]: iconSize,
              [styles[`icon_color_${iconColor}`]]: iconColor,
            })}
            src={leftIconSrc}
          />
        )}
        {!!rightIconSrc && (
          <ReactSVG
            className={cn(styles.right_icon, styles.input_Icon, {
              [styles[`icon_size_${iconSize}`]]: iconSize,
              [styles[`icon_color_${iconColor}`]]: iconColor,
            })}
            src={rightIconSrc}
          />
        )}
        {type === 'password' && showPasswordIcon && (
          <button
            type="button"
            className={styles.toggle_button}
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            <ReactSVG
              src={showPassword ? icons.eye_crossed : icons.eye}
              className={cn(styles.input_Icon, {
                [styles[`icon_size_${iconSize}`]]: iconSize,
                [styles[`icon_color_${iconColor}`]]: iconColor,
              })}
            />
          </button>
        )}
      </div>
      {errorMessage && <span className={styles.input_error_text}>{errorMessage}</span>}
      {!errorMessage && infoText && <span className={styles.input_info_text}>{infoText}</span>}
    </div>
  );
};

export default Input;
