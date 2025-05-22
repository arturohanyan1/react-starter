export interface INavItemType {
  path: string;
  label: string;
  needLogin: boolean;
  hideOnLogout: boolean;
  children?: INavItemType[];
}

export interface IDialogParamsType {
  id: string;
  data?: any;
  onClose?: (...args: any) => any;
  onOk?: (...args: any) => any;
}
