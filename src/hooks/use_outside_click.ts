import { useCallback, useEffect } from 'react';
import { isMobileOnly } from 'react-device-detect';

export const useOutsideClick = (
  ref: any,
  cb: () => void,
  externalId: string[] | null = null,
  externalClass: string[] | null = null
): void => {
  const handleClickOutside = useCallback(
    (event: any) => {
      if (
        (!!externalId && externalId.includes(event.target.id)) ||
        (!!externalClass && externalClass.includes(event.target.className)) ||
        externalClass?.map((e) => event.target?.className.includes(e)).includes(true) ||
        event.target.className?.startsWith(externalClass) ||
        event.target.localName === 'th'
      ) {
        return;
      }

      if (['mousedown', 'touchstart'].includes(event.type) && isMobileOnly) {
        return;
      }

      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    },
    [cb, ref, externalId, externalClass]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [handleClickOutside]);
};
