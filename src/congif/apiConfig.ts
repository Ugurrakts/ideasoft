import {fetchBaseQuery} from '@reduxjs/toolkit/query';

export const API_BASE_URL = 'https://testcase.myideasoft.com/admin-api';
export const ACCESS_TOKEN = 'AX5FTZ7UBAABUDT6XYYPW7LX';

export const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: headers => {
    headers.set('Authorization', `Bearer ${ACCESS_TOKEN}`);
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});
