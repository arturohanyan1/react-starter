import cn from 'classnames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { icons } from 'src/utils/icons';
import Button from '../Button';
import { SvgIcon } from '../SvgIcon';
import PopupPortal from './PopupPortal';
import styles from './styles.module.scss';

type IProps = {
  isOpen: boolean;
  handleClose: () => void;
  handleOK?: () => void;
  handleCancel?: () => void;
  children: any;
  popupClassName?: string;
  containerClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  variant?: 'success' | 'error' | 'info' | 'default' | 'brand';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'full' | 'max' | 'auto';
  showCloseButton?: boolean;
  iconColor?: 'success' | 'error' | 'info' | 'default' | 'brand' | 'primary';
  position?: 'top' | 'center' | 'bottom';
  popupId: string;
  hasOverlay?: boolean;
  withBorder?: boolean;
  withHeader?: boolean;
  withFooter?: boolean;
  title?: string;
  description?: string;
  okButtonText?: string;
  cancelButtonText?: string;
  showIcon?: boolean;
  iconSrc?: string;
  buttonFullWidth?: boolean;
  animation?: 'animation_fade_in' | 'animation_slide_top' | 'animation_slide_bottom';
  fullHeight?: boolean;
};
const Popup: FC<IProps> = ({
  isOpen,
  handleClose,
  handleOK,
  handleCancel,
  children,
  popupClassName,
  containerClassName,
  headerClassName,
  bodyClassName,
  footerClassName,
  variant,
  size = 'xxl',
  showCloseButton,
  position = 'center',
  popupId,
  hasOverlay = true,
  withBorder,
  withHeader,
  title,
  description,
  withFooter,
  okButtonText = 'ok',
  cancelButtonText = 'cancel',
  showIcon,
  iconSrc,
  iconColor = 'primary',
  buttonFullWidth,
  animation,
  fullHeight,
}) => {
  const { t }: Translation = useTranslation();

  if (isOpen) {
    return (
      <PopupPortal wrapperId={popupId}>
        <div
          className={cn(
            styles.popup_container,
            { [styles[`popup_position_${position}`]]: position },
            { [styles.popup_container_overlay]: hasOverlay },
            containerClassName
          )}
        >
          <div
            className={cn(
              styles.popup,
              {
                [styles[`popup_variant_${variant}`]]: variant,
                [styles[`popup_size_${size}`]]: size,
                [styles[`popup_animation_${animation}`]]: animation,
                [styles.popup_with_border]: withBorder,
                [styles.popup_full_height]: fullHeight,
              },
              popupClassName
            )}
          >
            {showCloseButton && (
              <Button
                aria-label="close"
                variant="text"
                leftIconSrc={icons.cross_rounded}
                className={styles.popup_close_button}
                iconSize="mdm"
                onClick={handleClose}
              />
            )}
            {withHeader && (
              <div className={cn(styles.popup_header, headerClassName)}>
                {showIcon && (
                  <SvgIcon
                    className={styles.header_icon}
                    src={iconSrc || icons.info_icon}
                    color={iconColor}
                    size="xxl"
                  />
                )}
                {title && <h3 className={styles.header_title}>{title}</h3>}
                {description && <h5 className={styles.header_description}>{description}</h5>}
              </div>
            )}
            <div className={cn(styles.popup_body, bodyClassName)}>{children}</div>
            {withFooter && (handleOK || handleCancel) && (
              <div className={cn(styles.popup_footer, footerClassName)}>
                {handleOK && (
                  <Button fullWidth={buttonFullWidth} className={styles.popup_footer_button} onClick={handleOK}>
                    {t(okButtonText)}
                  </Button>
                )}
                {handleCancel && (
                  <Button fullWidth={buttonFullWidth} className={styles.popup_footer_button} onClick={handleCancel}>
                    {t(cancelButtonText)}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </PopupPortal>
    );
  }
  return <></>;
};
export default Popup;
