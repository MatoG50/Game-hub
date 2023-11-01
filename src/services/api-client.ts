import axios from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: '7dc9a8b95bb646e691c2e6e28e5453f4',
  },
});
