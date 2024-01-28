import styled from 'styled-components';

import { Item } from './components';

const InternalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

type InternalFormType = typeof InternalForm;

type CompoundedComponent = InternalFormType & {
  Item: typeof Item;
};

const Form = InternalForm as CompoundedComponent;
Form.Item = Item;

export { Form };
