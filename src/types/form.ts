export enum FormStatus {
  IDLE = 'idle',
  SUCCESS = 'success',
  SERVER_ERROR = 'server-error',
  VALIDATION_ERROR = 'validation-error'
}

export interface FormState {
  email: string;
  question: string;
}
