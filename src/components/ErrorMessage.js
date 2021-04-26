import React from "react";
import styled from "styled-components";
import Alert from "@reach/alert";

const ErrorBox = styled.div`
  margin: 0.5rem 0;
  padding: 1rem 0.5rem;
  background-color: ${({ theme }) => theme.red};
  color: ${({ theme }) => theme.redBlack};
  border-radius: 0.2rem;
`;

function ErrorMessage({ error }) {
  if (!error) return null;
  return (
    <ErrorBox>
      <Alert>Error: {error.message}</Alert>
    </ErrorBox>
  );
}

export default ErrorMessage;
