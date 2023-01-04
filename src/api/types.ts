interface IResponseBody<T> {
  data: T;
}

interface ITodo {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export type { IResponseBody, ITodo };
