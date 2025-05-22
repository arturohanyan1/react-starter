import { FC, ReactNode, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const defaultPopupPortalProps = {
  wrapperId: 'popup-portal',
};

type PopupPortalProps = {
  children: ReactNode | any;
  wrapperId: string;
} & typeof defaultPopupPortalProps;
const PopupPortal: FC<PopupPortalProps> = ({ children, wrapperId }) => {
  const [wrapper, setWrapper] = useState<Element | null>(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);

    let created = false;

    if (!element) {
      created = true;
      const wrapper = document.createElement('div');
      wrapper.setAttribute('id', wrapperId);
      document.body.appendChild(wrapper);
      element = wrapper;
    }

    setWrapper(element);

    return () => {
      if (created && element?.parentNode) {
        document.body.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapper) {
    return createPortal(children, wrapper);
  }

  return <></>;
};
export default PopupPortal;
