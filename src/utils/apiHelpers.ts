import { SUCCESS_STATUSES } from 'src/utils/constants';

const filterValue = <T>(value: T): boolean => value !== undefined && value !== null;

const getQueryString = (params: Record<string, any>, joinArrayValues = false): string => {
  return Object.entries(params)
    .filter(([_, value]) => filterValue(value))
    .map(([key, value]) => {
      if (!Array.isArray(value)) {
        return key + '=' + encodeURIComponent(value);
      } else if (joinArrayValues) {
        return (
          key +
          '=' +
          value
            .filter(filterValue)
            .map((item) => encodeURIComponent(item))
            .join(',')
        );
      } else {
        return value
          .filter(filterValue)
          .map((item) => `${key}[]` + '=' + encodeURIComponent(item))
          .join('&');
      }
    })
    .filter(Boolean)
    .join('&');
};

const isOkStatus = (status: number): boolean => {
  return SUCCESS_STATUSES.includes(status);
};

// Initial version for error handling
const getParamsString = (params: any, t: (k: string, p?: any) => string): string | string[] => {
  if (Array.isArray(params)) {
    return params
      .map((param) => {
        if (typeof param === 'object') {
          return Object.keys(param).map((key) => `${String(t(key)).toLowerCase()} ${param[key]}`);
        }

        return t(param);
      })
      .join(',');
  }
  if (typeof params === 'object') {
    return Object.keys(params).map((key) => `${String(t(key)).toLowerCase()} ${params}`);
  }

  return t(params);
};

const getErrorDescription = (e: any): string => {
  console.error(e);
  const { description } = e.response.data;
  let errorMessage = '';
  if (description) {
    errorMessage = description;
  }
  return errorMessage;
};

const getErrorMessageKeyAndParams = (e: any): { key: string; params: any } => {
  const { key, params } = e?.message || e?.response?.data?.message;
  return { key, params };
};

const getErrorMessage = (t: (k: string, p?: any) => string, e: any): string => {
  console.error(e);
  const { key, params } = getErrorMessageKeyAndParams(e);
  let errorMessage = '';
  if (key) {
    switch (key) {
      case 'missing_parameter':
        errorMessage = t('errors.missing_parameter', {
          params: getParamsString(params, t),
        });
        break;
      case 'invalid_input':
        errorMessage = t('errors.invalid_input', {
          params: getParamsString(params, t),
        });
        break;
      case 'invalid_string_alphanumeric':
        errorMessage = t('errors.invalid_string_alphanumeric', {
          params: getParamsString(params, t),
        });
        break;
      case 'invalid_numeric':
        errorMessage = t('errors.invalid_numeric', {
          params: getParamsString(params, t),
        });
        break;
      case 'duplicate_document':
        errorMessage = t('errors.duplicate_document', {
          document: params?.shift(),
          params: getParamsString(params, t),
        });
        break;
      case 'document_not_found':
        errorMessage = t('errors.document_not_found', { document: params[0] });
        break;
      case 'invalid_string_input':
        errorMessage = t('errors.invalid_string_input', {
          min: params[1],
          max: params[2],
        });
        break;
      case 'hierarchy_permission_error':
        errorMessage = t('errors.hierarchy_permission_error');
        break;
      case 'incorrect_password':
        errorMessage = t('errors.incorrect_password');
        break;
      case 'unprocessable_entity':
        errorMessage = t('errors.unprocessable_entity', {
          params: getParamsString(params, t),
        });
        break;
      case 'missing_token':
        errorMessage = t('errors.missing_token');
        break;
      case 'invalid_token':
        errorMessage = t('errors.invalid_token');
        break;
      case 'low_balance':
        errorMessage = t('errors.low_balance');
        break;
      case 'database_error':
        errorMessage = t('errors.database_error');
        break;
      case 'permission_denied':
        errorMessage = t('errors.permission_denied');
        break;
      case 'third_party_error':
        errorMessage = t('errors.third_party_error');
        break;
      default:
        errorMessage = t(`errors.${key}`);
    }
  }
  return errorMessage;
};

export { getErrorDescription, getErrorMessage, getQueryString, isOkStatus };
