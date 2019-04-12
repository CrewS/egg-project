import { Service } from 'egg';

export default class NewsService extends Service {
  public async list(page?: number): Promise<NewsItem[]> {
    const index:any = page;
    return [
      {
        id: 1 * index,
        title: '1111',
      },
      {
        id: 2,
        title: '2222',
      },
      {
        id: 3,
        title: '3333',
      },
    ];
  }
}

export interface NewsItem {
  id: number;
  title: string;
}
