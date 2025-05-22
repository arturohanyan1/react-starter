import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface IMetaInfo {
  title?: string;
  description?: string;
  keywords?: string;
  isCanonicalUrl?: boolean;
}

const useMetaInfo: FC = ({ title, description, keywords, isCanonicalUrl }: IMetaInfo) => {
  const location = useLocation();
  const canonicalUrl = `${window.location.origin}/${location.pathname}`;

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {isCanonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
};

export default useMetaInfo;
