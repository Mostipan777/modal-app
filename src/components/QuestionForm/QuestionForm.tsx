import React from 'react';

import { Box, Button, Error, Form, Input, Label, Textarea, Typography } from '../ui';
import { useQuestionForm } from './useQuestionForm';
import { FormStatus } from '../../types';

interface QuestionFormProps {
  onSuccess: () => void;
}

export const QuestionForm: React.FC<QuestionFormProps> = ({ onSuccess }) => {
  const { handleSubmit, status, formState, errors, loading, handleInputChange, onBlur, onFocus } = useQuestionForm();

  if (status === FormStatus.SUCCESS) {
    return (
      <Box direction="column" align="center" p="48px 0" gap={24}>
        <Typography.H2>Thank you</Typography.H2>
        <Button onClick={onSuccess}>Close</Button>
      </Box>
    );
  }

  if (status === FormStatus.SERVER_ERROR) {
    return (
      <Box direction="column" align="center" p="48px 0" gap={24}>
        <Typography.H2>Something went wrong</Typography.H2>
        <Button onClick={handleSubmit} loading={loading}>
          Try again
        </Button>
      </Box>
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Box p="12px 0 20px" justify="center">
        <Typography.H2>Contact Us</Typography.H2>
      </Box>
      <Box direction="column">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={handleInputChange}
          error={!!errors.email}
        />
        <Error>{errors.email}</Error>
      </Box>
      <Box direction="column">
        <Label htmlFor="question">Question</Label>
        <Textarea
          id="question"
          name="question"
          value={formState.question}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={handleInputChange}
          error={!!errors.question}
        />
        <Error>{errors.question}</Error>
      </Box>

      <Box justify="center">
        <Button type="submit" loading={loading}>
          Send
        </Button>
      </Box>
    </Form>
  );
};
