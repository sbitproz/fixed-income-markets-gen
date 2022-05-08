
import { baseAPI } from './data.conf';
import { Indication } from '@fixed-income-markets/core-types';

const getUrl = () => `indications`;

const getUrlWithId = (id: string) => `indications/${id}`;

const getUrlWithFkId = (fieldName: string, id: string) => `indications?${fieldName}=${id}`;

export const indicationsAPI = baseAPI<Indication>(getUrl, getUrlWithId, getUrlWithFkId);

export const indicationAPIBase = {
  getUrl,
  getUrlWithId,
  getUrlWithFkId
}

  