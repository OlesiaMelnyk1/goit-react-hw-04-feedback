import styled from '@emotion/styled';

export const FeedbackOptionsList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

export const FeedbackButton = styled.button`
  width: 120px;
  padding: 4px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  text-transform: capitalize;

  :hover {
    background-color: lightblue;
  }
`;
