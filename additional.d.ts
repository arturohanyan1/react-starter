type PartialIf<P extends boolean, T> = P extends true ? Partial<T> : T;
declare module '*.module.scss' {
  const content: string;

  export default content;
}

declare type SelectOptionType = {
  label: string;
  value: string | number;
  iconSrc?: string | null;
};

declare type Translation = UseTranslationResponse<'translation', undefined>;

declare module 'react-svg';
