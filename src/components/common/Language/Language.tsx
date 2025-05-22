import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { LOCALES } from 'src/utils/constants';
import Dropdown from '../Dropdown';
import styles from './styles.module.scss';

const Language: FC = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();

  // Prioritize the `lang` parameter from the URL over localStorage
  const [locale, setLocale] = useState<string>(lang || localStorage.getItem('selectedLanguage') || 'en');

  // Sync the locale with the lang parameter when it changes
  useEffect(() => {
    if (lang) {
      setLocale(lang);
      i18n.changeLanguage(lang).catch((e: any) => console.error(e));
      localStorage.setItem('selectedLanguage', lang);
    }
  }, [lang, i18n]);

  const changeLanguage = (ev: { value: string | number }): void => {
    const newLang = String(ev.value);
    i18n.changeLanguage(newLang).catch((e: any) => console.error(e));
    setLocale(newLang);
    localStorage.setItem('selectedLanguage', newLang);

    // Update the language segment in the URL path.
    const pathSegments = location.pathname.split('/');
    if (pathSegments.length > 1) {
      pathSegments[1] = newLang;
      const newPath = pathSegments.join('/') || '/';
      navigate(newPath);
    } else {
      navigate(`/${newLang}`);
    }
  };

  return (
    <Dropdown
      handleSelect={changeLanguage}
      selected={{
        label: locale,
        value: locale,
        iconSrc: locale,
      }}
      list={LOCALES}
      variant="link"
      size="md"
      view="secondary"
      containerClassName={styles.language_container}
      className={styles.language_button}
      listClassName={styles.dropdown_list}
    />
  );
};

export default Language;
