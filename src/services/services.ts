import axios, { AxiosInstance } from 'axios';

export class ApiManager {
  protected client: AxiosInstance;
  protected keyApi: string;

  constructor(baseUrl: string, keyApi: string) {
    this.client = axios.create({
      baseURL: baseUrl,
    });
    this.keyApi = keyApi as string;
  }

  protected async get<T, P>(url: string, params: P): Promise<T> {
    const response = await this.client.get<T>(url, {
      params: {
        key: process.env.NEXT_PUBLIC_BETASERIES_KEY,
        ...params,
      },
    });

    return response.data;
  }
}
