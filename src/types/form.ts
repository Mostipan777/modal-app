export enum FormStatus {
  IDLE = 'idle',
  SUCCESS = 'success',
  SERVER_ERROR = 'server-error'
}

export interface FormState {
  email: string;
  question: string;
}
