const PALLETTES: any = {
  dark: {
    '--background-surface-1': '#1C2026',
    '--background-surface-2': '#2B313B',
    '--background-surface-3': '#39414D',
    '--background-surface-brand': '#FF6600',

    '--account-background-surface-1': '#1C2026',
    '--account-background-surface-2': '#2B313B',
    '--account-background-surface-3': '#39414D',

    '--navigation-background': '#2B313B',
    '--footer-background': '#2B313B',

    '--border-primary': '#2E3138',
    '--border-brand': '#FF6600',
    '--border-primary-hover': '#FF6600',
    '--border-primary-selected': '#FF6600',

    '--input-background-surface-1': '#1C2026',
    '--input-background-disable': '#6E6F70',

    '--input-border-default': '#616C7F',
    '--input-border-hover': '#A2AAB8',
    '--input-border-typing': '#A2AAB8',
    '--input-border-error': '#E23C39',
    '--input-border-disable': '#6E6F70',
    '--input-border-warning': '#FFBF1E',

    '--search-background-surface-1': '#2b2f38',
    '--search-background-surface-2': '#2b2f38',
    '--search-border': '#23272f',
    '--search-border-selected': '#FF6600',

    '--text-primary': '#FFFFFF',
    '--text-primary-hover': '#FF6600',
    '--text-secondary': '#AFAFAF',
    '--text-warning': '#F2B863',
    '--text-error': '#E23C39',
    '--text-brand': '#FF6600',
    '--text-disable': '#958E8E',
    '--text-tag': '#FFF9E8',
    '--navigation-text': '#FFFFFF',
    '--navigation-text-hover': '#FF6600',
    '--newsletter-background': '#FF6600',
    '--newsletter-text': '#FFFFFF',

    '--button-primary': '#FE6500',
    '--button-primary-hover': '#C65308',
    '--button-primary-text': '#FFFFFF',
    '--button-primary-border': '#FF6600',

    '--button-secondary': '#2E3138',
    '--button-secondary-hover': '#434752',
    '--button-secondary-text': '#FFFFFF',
    '--button-secondary-border': '#2E3138',
    '--button-secondary-border-hover': '#434752',

    '--button-brand': '#FF6600',
    '--button-brand-hover': '#C65308',
    '--button-brand-text': '#FFFFFF',
    '--button-brand-border': '#FF6600',
    '--button-brand-border-hover': '#C65308',

    '--button-ghost': '#FFFFFF',
    '--button-ghost-hover': '#FE6500',
    '--button-ghost-text': '#FFFFFF',

    '--button-disable': '#969494',
    '--button-disable-text': '#747474',

    '--tag-primary': '#2B2F38',
    '--tag-primary-hover': '#332605',
    '--tag-primary-selected': '#332605',
    '--tag-primary-border': '#23272F',
    '--tag-primary-hover-border': '#FF6600',
    '--tag-primary-selected-border': '#FF6600',

    '--icon-color-primary': '#CDCDCF',
    '--icon-color-secondary': '#FE6500',
    '--icon-color-passive': '#EFEDF7',
  },
  light: {
    '--background-surface-1': '#EEEEF3',
    '--background-surface-2': '#EAEEF8',
    '--background-surface-3': '#CFD9E8',

    '--account-background-surface-1': '#EAEEF8',
    '--account-background-surface-2': '#FEFEFE',
    '--account-background-surface-3': '#D9DEEA',

    '--navigation-background': '#F9F9F9',
    '--footer-background': '#FFFFFF',

    '--border-primary': '#BDC4D3',
    '--border-brand': '#CD2026',
    '--border-primary-hover': '#FFB900',
    '--border-primary-selected': '#FFB900',

    '--input-background-surface-1': '#FFFFFF',
    '--input-background-disable': '#AAAAAA',

    '--input-border-default': '#61646F',
    '--input-border-hover': '#FFBF1E',
    '--input-border-typing': '#FFBF1E',
    '--input-border-error': '#e23c39',
    '--input-border-disable': '#ADADAD',

    '--search-background-surface-1': '#FFFFFF',
    '--search-background-surface-2': '#E8EEFD',
    '--search-border': '#BDC4D3',
    '--search-border-selected': '#FFBF1E',

    '--text-primary': '#1E1E1E',
    '--text-primary-hover': '#FFB900',
    '--text-secondary': '#1E1E1E',
    '--text-warning': '#F2B863',
    '--text-error': '#E5110D',
    '--text-brand': '#FFBF1E',
    '--text-disable': '#958E8E',
    '--text-tag': '#1E1E1E',
    '--navigation-text': '#1E1E1E',
    '--navigation-text-hover': '#FFB900',

    '--newsletter-background': '#FFBF1E',
    '--newsletter-text': '#000000',

    '--button-primary': '#0f5903',
    '--button-primary-hover': '#6db34b',
    '--button-primary-text': '#FFFFFF',
    '--button-primary-border': '#147E02',

    '--button-secondary': '#CADAF3',
    '--button-secondary-hover': '#B2C2DA',
    '--button-secondary-text': '#1E1E1E',
    '--button-secondary-border': '#CADAF3',
    '--button-secondary-border-hover': '#B2C2DA',

    '--button-brand': '#CD2026',
    '--button-brand-hover': '#D33B35',
    '--button-brand-text': '#FFB900',
    '--button-brand-border': '#FF4646',
    '--button-brand-border-hover': '#FF6C6C',

    '--button-ghost': '#FFFFFF',
    '--button-ghost-hover': '#FFBF17',
    '--button-ghost-text': '#FFFFFF',

    '--button-disable': '#969494',
    '--button-disable-text': '#747474',

    '--tag-primary': '#CADAF3',
    '--tag-primary-hover': '#B2C2DA',
    '--tag-primary-selected': '#B2C2DA',
    '--tag-primary-border': '#FFFFFF',
    '--tag-primary-hover-border': '#496F9C',
    '--tag-primary-selected-border': '#496F9C',

    '--icon-color-primary': '#1E1E1E',
    '--icon-color-secondary': '#FFB900',
    '--icon-color-passive': '#EFEDF7',
  },
  purple: {
    '--background-surface-1': '#0D081E',
    '--background-surface-2': '#1C133A',
    '--background-surface-3': '#201841',

    '--border-primary': '#201841',
    '--border-brand': '#FFBF17',
    '--border-primary-hover': '#FFBF17',
    '--border-primary-selected': '#FFBF17',

    '--button-brand-border': '#FFBF17',
    '--button-brand-border-hover': '#FFCC45',

    '--button-primary-border': '#FFBF17',
    '--button-primary-border-hover': '#FFCC45',

    '--button-secondary-border': '#1E134E',
    '--button-secondary-border-hover': '#1E134E',

    '--account-background-surface-1': '#0D081E',
    '--account-background-surface-2': '#2F1A6F',
    '--account-background-surface-3': '#211D2E',

    '--input-background-surface-1': '#201841',
    '--input-background-disable': '#61646F',

    '--input-border-default': '#201841',
    '--input-border-hover': '#26165C',
    '--input-border-typing': '#26165C',
    '--input-border-error': '#e23c39',
    '--input-border-disable': '#61646F',
    '--input-border-warning': '#FFBF1E',

    '--search-background-surface-1': '#2F1A6F',
    '--search-background-surface-2': '#201841',
    '--search-border': '#FFBF17',
    '--search-border-selected': '#FFBF17',

    '--navigation-background': '#2F1A6F',

    '--footer-background': '#2F1A6F',

    '--text-primary': '#FFFFFF',
    '--text-primary-hover': '#FFBF1E',
    '--text-secondary': '#FFFFFF',
    '--text-warning': '#F2B863',
    '--text-error': '#e23c39',
    '--text-brand': '#FFBF1E',
    '--text-disable': '#958E8E',
    '--text-tag': '#D9D9D9',
    '--navigation-text': '#FFFFFF',
    '--navigation-text-hover': '#FFBF1E',
    '--newsletter-background': '#FFBF17',
    '--newsletter-text': '#000000',

    '--button-disable': '#969494',
    '--button-disable-text': '#D9D9D9',

    '--button-primary': '#FFBF17',
    '--button-primary-hover': '#FFCC45',
    '--button-primary-text': '#FFFFFF',

    '--button-brand': '#FFBF17',
    '--button-brand-hover': '#FFCC45',
    '--button-brand-text': '#000000',

    '--button-secondary': '#1E134E',
    '--button-secondary-hover': '#2F1A6F',
    '--button-secondary-text': '#FFFFFF',

    '--button-ghost': '#FFFFFF',
    '--button-ghost-hover': '#FFBF17',
    '--button-ghost-text': '#FFFFFF',

    '--tag-primary': '#2F1A6F',
    '--tag-primary-hover': '#2F1A6F',
    '--tag-primary-selected': '#2F1A6F',
    '--tag-primary-border': '#4F31A8',
    '--tag-primary-hover-border': '#9384C2',
    '--tag-primary-selected-border': '#9384C2',

    '--icon-color-primary': '#FFFFFF',
    '--icon-color-secondary': '#FFBF17',
    '--icon-color-passive': '#EFEDF7',
  },
  green: {
    '--background-surface-1': '#121212',
    '--background-surface-2': '#353535',
    '--background-surface-3': '#3F3F3F',

    '--account-background-surface-1': '#28282B',
    '--account-background-surface-2': '#353535',
    '--account-background-surface-3': '#3F3F3F',

    '--navigation-background': '#41604F',
    '--footer-background': '#121212',

    '--border-primary': '#605C51',
    '--border-brand': '#34DA71',
    '--border-primary-hover': '#157D3B',
    '--border-primary-selected': '#157D3B',

    '--input-background-surface-1': '#2F2F30',
    '--input-background-disable': '#3A3A3C',

    '--input-border-default': '#61646f',
    '--input-border-hover': '#ABA9A3',
    '--input-border-typing': '#ABA9A3',
    '--input-border-error': '#e23c39',
    '--input-border-disable': '#3A3A3C',

    '--search-background-surface-1': '#3F3F3F',
    '--search-background-surface-2': '#494640',
    '--search-border': '#605C51',
    '--search-border-selected': '#605C51',

    '--text-primary': '#FFFFFF',
    '--text-primary-hover': '#157D3B',
    '--text-secondary': '#FFFFFF',
    '--text-warning': '#F2B863',
    '--text-error': '#e23c39',
    '--text-brand': '#157D3B',
    '--text-disable': '#958E8E',
    '--text-tag': '#D9D9D9',
    '--navigation-text': '#FFFFFF',
    '--navigation-text-hover': '#34DA71',
    '--newsletter-background': '#FFBF1E',
    '--newsletter-text': '#000000',

    '--button-primary': '#157D3B',
    '--button-primary-hover': '#19A84F',
    '--button-primary-text': '#FFFFFF',
    '--button-primary-border': '#34DA71',

    '--button-secondary': '#605C58',
    '--button-secondary-hover': '#817C70',
    '--button-secondary-text': '#FFFFFF',
    '--button-secondary-border': '#605C58',
    '--button-secondary-border-hover': '#817C70',

    '--button-brand': '#34DA71',
    '--button-brand-hover': '#42E37D',
    '--button-brand-text': '#FFFFFF',
    '--button-brand-border': '#157D3B',
    '--button-brand-border-hover': '#42E37D',

    '--button-ghost': '#FFFFFF',
    '--button-ghost-hover': '#157D3B',
    '--button-ghost-text': '#FFFFFF',

    '--button-disable': '#969494',
    '--button-disable-text': '#747474',

    '--tag-primary': '#363835',
    '--tag-primary-hover': '#474946',
    '--tag-primary-selected': '#474946',
    '--tag-primary-border': '#605C51',
    '--tag-primary-hover-border': '#34DA71',
    '--tag-primary-selected-border': '#34DA71',

    '--icon-color-primary': '#FFFFFF',
    '--icon-color-secondary': '#02FF81',
    '--icon-color-passive': '#EFEDF7',
  },
};

export { PALLETTES };
