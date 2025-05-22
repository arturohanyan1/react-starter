import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'src/components/common/Button';
import Popup from 'src/components/common/Popup';
import { Typography } from 'src/components/common/Typography';
import { EnumDialogs } from 'src/configs/dialogs';
import { useConnectedAction } from 'src/hooks/use-connected-action';
import { closeDialog } from 'src/store/dialogs/actions';
import { copyText } from 'src/utils/helpers';
import { icons } from 'src/utils/icons';
import styles from './styles.module.scss';

type IProps = {
  isOpen: boolean;
  data: { requestTrackId: string; errorMessage: string };
};

const BaseErrorDialog: FC<IProps> = ({ isOpen, data }) => {
  const { t }: Translation = useTranslation();

  // Redux
  const _closeDialog = useConnectedAction(closeDialog.req);

  // States
  const [copied, setCopied] = useState<boolean>(false);

  // Actions
  const handleClose = (): void => {
    _closeDialog(EnumDialogs.BASE_ERROR_DIALOG);
  };

  // Actions
  const copyRequestTrackId = (): void => {
    const requestTrackId = data.requestTrackId;
    copyText(requestTrackId).then((success) => {
      if (success) {
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 1000);
      } else {
        console.log(t('failedToCopy'));
      }
    });
  };

  return (
    <Popup
      popupId={EnumDialogs.BASE_ERROR_DIALOG}
      withBorder
      withHeader
      size="md"
      variant="error"
      showCloseButton
      isOpen={isOpen}
      handleClose={handleClose}
      withFooter
      handleOK={handleClose}
      showIcon
      iconSrc={icons.error_icon}
      iconColor="error"
      buttonFullWidth
    >
      <div className={styles.dialog_content}>
        <Typography variant="body2" align="center">
          {data?.errorMessage}
        </Typography>
        {data?.requestTrackId && (
          <div className={styles.track_id_wrapper}>
            <Typography variant="body4">{data?.requestTrackId}</Typography>
            <Button
              onClick={copyRequestTrackId}
              variant="text"
              capitalize
              leftIconSrc={icons.copy_icon}
              size="sm"
              className={styles.copy_button}
            >
              {copied ? t('copied') : t('copy')}
            </Button>
          </div>
        )}
      </div>
    </Popup>
  );
};

export default BaseErrorDialog;
