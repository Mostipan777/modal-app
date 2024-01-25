import React, { useState } from 'react';

import { fakeRequest } from '../../utils';
import { FormState, FormStatus } from '../../types';
import { fieldRules } from '../../constants';

const initialFormState: FormState = {
  email: '',
  question: ''
};

export const useQuestionForm = () => {
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const [loading, setLoading] = useState<boolean>(false);
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormState>(initialFormState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const validateField = (name: string, value: string) => {
    return fieldRules[name] ? fieldRules[name](value.trim()) : '';
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const normalizedValue = value.trim();

    if (!normalizedValue) return;

    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error
    });
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;

    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const formErrors: FormState = Object.keys(formState).reduce((acc, key) => {
      const field = key as keyof FormState;
      acc[field] = validateField(field, formState[field]);
      return acc;
    }, {} as FormState);

    if (Object.values(formErrors).some((error) => error)) {
      setErrors(formErrors);
      setStatus(FormStatus.VALIDATION_ERROR);
      return;
    }

    setLoading(true);

    try {
      await fakeRequest(formState);
      setStatus(FormStatus.SUCCESS);
      setFormState(initialFormState);
    } catch (err) {
      setStatus(FormStatus.SERVER_ERROR);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSubmit,
    status,
    formState,
    errors,
    handleInputChange,
    onBlur,
    onFocus,
    loading
  };
};
