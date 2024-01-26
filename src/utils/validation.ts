export const MIN_QUESTION_LENGTH = 1;
export const MAX_QUESTION_LENGTH = 150;

export const validation: Record<string, (value: string) => string> = {
  email: (value: string) => {
    const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegExp.test(value)) {
      return 'Invalid email address';
    }
    return '';
  },
  question: (value: string) => {
    if (value.length < MIN_QUESTION_LENGTH) {
      return `Question must be at least ${MIN_QUESTION_LENGTH} characters`;
    }
    if (value.length > MAX_QUESTION_LENGTH) {
      return `Question must be less than ${MAX_QUESTION_LENGTH} characters`;
    }
    return '';
  }
};
