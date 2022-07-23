export interface IDocument {
  content: string;
  uid: string;
  author: string | null;
  media_id: string;
}

export interface IAction {
  type: string;
  payload?: any;
}
