import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { icons } from 'src/utils/icons';
import Button from '../Button';
import { SvgIcon } from '../SvgIcon';
import DrawerPortal from './DrawerPortal';
import styles from './styles.module.scss';

type IProps = {
  drawerId: string;
  isOpen: boolean;
  drawerPosition?: 'center' | 'left' | 'right';
  animation?: 'left' | 'right' | 'bottom' | 'top';
  handleClose?: () => void;
  handleOK?: () => void;
  handleCancel?: () => void;
  children: any;
  contentClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  variant?: 'success' | 'error' | 'info' | 'default' | 'brand';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'full' | 'max' | 'auto';
  showCloseButton?: boolean;
  iconColor?: 'success' | 'error' | 'info' | 'default' | 'brand' | 'primary';
  withBorder?: boolean;
  withHeader?: boolean;
  withFooter?: boolean;
  title?: string;
  description?: string;
  okButtonText?: string;
  cancelButtonText?: string;
  showIcon?: boolean;
  iconSrc?: string;
  fullHeight?: boolean;
  withBorderRadius?: boolean;
  contentWithoutPadding?: boolean;
  buttonFullWidth?: boolean;
};
const Drawer: FC<IProps> = ({
  drawerId,
  isOpen,
  animation = 'bottom',
  drawerPosition = 'center',
  handleClose,
  handleOK,
  handleCancel,
  children,
  contentClassName,
  headerClassName,
  bodyClassName,
  footerClassName,
  variant,
  size = 'xxl',
  showCloseButton = true,
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
  fullHeight,
  withBorderRadius,
  contentWithoutPadding,
  buttonFullWidth,
}) => {
  // Hooks
  const { t }: Translation = useTranslation();

  // States
  const [createPortal, setCreatePortal] = useState<boolean>(false);

  // Actions
  const closeAnimationEnd = (): void => {
    if (!isOpen) {
      setCreatePortal(false);
    }
  };

  // Effects
  useEffect(() => {
    if (isOpen) {
      setCreatePortal(true);
    }
  }, [isOpen]);

  if (createPortal) {
    return (
      <DrawerPortal wrapperId={drawerId}>
        <div
          onAnimationEnd={closeAnimationEnd}
          className={cn(styles.drawer_wrapper, {
            [styles.close]: !isOpen,
            [styles[`drawer_position_${drawerPosition}`]]: drawerPosition,
          })}
        >
          <div
            className={cn(styles.drawer_container, {
              [styles[`drawer_container_open_anumation_${animation}`]]: isOpen,
              [styles[`drawer_container_close_anumation_${animation}`]]: !!animation && !isOpen,
              [styles[`drawer_container_size_${size}`]]: size,
              [styles[`drawer_container_variant_${variant}`]]: variant,
              [styles.drawer_container_with_border]: withBorder,
              [styles.drawer_container_with_border_radius]: withBorderRadius,
              [styles.drawer_container_full_height]: fullHeight,
            })}
          >
            <div className={cn(styles.content, contentClassName)}>
              {showCloseButton && (
                <Button
                  aria-label="close"
                  variant="text"
                  leftIconSrc={icons.cross_rounded}
                  className={styles.close_button}
                  onClick={handleClose}
                  iconSize="mdm"
                />
              )}
              {withHeader && (
                <div className={cn(styles.content_header, headerClassName)}>
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
              <div
                className={cn(
                  styles.content_body,
                  { [styles.content_body_without_padding]: contentWithoutPadding },
                  bodyClassName
                )}
              >
                {children}
              </div>
              {withFooter && (handleOK || handleCancel) && (
                <div className={cn(styles.content_footer, footerClassName)}>
                  {handleOK && (
                    <Button fullWidth={buttonFullWidth} className={styles.content_footer_button} onClick={handleOK}>
                      {t(okButtonText)}
                    </Button>
                  )}
                  {handleCancel && (
                    <Button fullWidth={buttonFullWidth} className={styles.content_footer_button} onClick={handleCancel}>
                      {t(cancelButtonText)}
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </DrawerPortal>
    );
  }
  return <></>;
};
export default Drawer;
