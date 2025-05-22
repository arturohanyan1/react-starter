import cn from 'classnames';
import { FC, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactSVG } from 'react-svg';
import { icons } from 'src/utils/icons';
import _styles from './styles.module.scss';

type Props = {
  list: SelectOptionType[];
  selected: SelectOptionType | string | null;
  handleSelect?: (option: SelectOptionType) => void;
  styles?: Record<string, string>;
  title?: string;
  variant?: 'default' | 'link';
  view?: 'primary' | 'secondary' | 'input';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  menuHeigth?: 'auto' | 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  className?: string;
  customClassname?: string;
  listClassName?: string;
  position?: string;
  withImg?: boolean;
  tabIndex?: number;
  setIsDropdownOpen?: (isOpen: boolean) => void;
  containerClassName?: string;
  wrapperClassName?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  allowClear?: boolean;
  placeholder?: string;
};

const Dropdown: FC<Props> = ({
  selected,
  list,
  handleSelect,
  title,
  styles,
  variant,
  className = '',
  listClassName = '',
  position = '',
  withImg = false,
  tabIndex = 0,
  setIsDropdownOpen,
  containerClassName,
  label,
  required,
  size,
  view,
  fullWidth,
  disabled,
  wrapperClassName,
  allowClear,
  placeholder,
  menuHeigth = 'auto',
}) => {
  const { t }: Translation = useTranslation();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [labelItem, setLabelItem] = useState<SelectOptionType | null>(null);

  const toggleDropdown = (): void => {
    setIsDropdownOpen && setIsDropdownOpen(true);
    setIsOpen(!isOpen);
  };

  const hideDropdown = (): void => {
    setIsOpen(false);
  };

  const chooseItem = (value: SelectOptionType): void => {
    if (labelItem !== value) {
      if (handleSelect) {
        handleSelect(value);
      }

      if (variant === 'link') {
        sessionStorage.setItem('lang', JSON.stringify(value.label));
      }
      setLabelItem(value);
    }

    hideDropdown();
  };

  const onClearSelected = (): void => {
    if (handleSelect) {
      handleSelect({ label: '', value: '' });
    }
    setLabelItem(null);
  };

  const renderDataDropDown = (item: SelectOptionType, index: number): any => {
    const { value, label, iconSrc } = item;

    return label === labelItem?.label ? null : (
      <li className={_styles['dropdown-btn']} key={index} value={value} onClick={() => chooseItem(item)}>
        <div className={_styles['dropdown-menu-item']}>
          {iconSrc && <img src={withImg ? iconSrc : icons[iconSrc]} alt={label} className={_styles.iconSrc} />}
          <span>{t(label)}</span>
        </div>
      </li>
    );
  };

  const topPosition = useMemo(() => {
    return position === 'top' ? `-${(list.length - 1) * 80}%` : '';
  }, [position, list]);

  useEffect(() => {
    if (typeof selected === 'string') {
      const selectedItem = list.find((el: SelectOptionType) => el.value === selected);
      setLabelItem(selectedItem || null);
    } else {
      setLabelItem(selected);
    }
  }, [selected]);

  return (
    <div className={cn(_styles.dropdown_wrapper, wrapperClassName)}>
      {label && (
        <div className={_styles.dropdown_label}>
          {required && <span className={_styles.dropdown_label__required}>*</span>}
          <span>{label}</span>
        </div>
      )}
      <div
        style={styles}
        className={cn(
          _styles['dropdown'],
          {
            [_styles[`open`]]: isOpen ? 'open' : '',
            [_styles['disabled']]: list?.length === 1 || disabled,
            [_styles['full_width']]: fullWidth,
            [_styles['allow_clear']]: allowClear,
            [_styles[`dropdown_size_${size}`]]: size,
            [_styles[`dropdown_view_${view}`]]: view,
          },
          containerClassName
        )}
        tabIndex={tabIndex}
        aria-disabled={list?.length === 1 || disabled}
        onBlur={hideDropdown}
      >
        <div className={cn(_styles['dropdown-toggle'], className)} onClick={toggleDropdown}>
          <div className={_styles['dropdown-menu-item']}>
            {labelItem?.iconSrc && (
              <img src={withImg ? labelItem.iconSrc : icons[labelItem.iconSrc]} alt={labelItem?.label} />
            )}
            {labelItem ? labelItem.label : title || ''}
            {!!placeholder && !labelItem ? <span className={_styles.placeholder}>{placeholder}</span> : null}
          </div>
          {list?.length > 1 && (
            <ReactSVG src={icons.chevron_down} className={cn(_styles.toggle_icon, _styles.arrow_icon)} />
          )}
          {allowClear && (
            <ReactSVG
              onClick={onClearSelected}
              src={icons.cross_rounded}
              className={cn(_styles.toggle_icon, _styles.close_icon)}
            />
          )}
        </div>

        <ul
          className={cn(
            _styles['dropdown-menu'],
            { [_styles[`dropdown_menu_height_${menuHeigth}`]]: menuHeigth },
            _styles[listClassName],
            listClassName
          )}
          style={{ top: topPosition }}
        >
          {list?.map(renderDataDropDown)}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
