import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CoreHooksProps {}

const StyledCoreHooks = styled.div`
  color: pink;
`;

export function CoreHooks(props: CoreHooksProps) {
  return (
    <StyledCoreHooks>
      <h1>Welcome to CoreHooks!</h1>
    </StyledCoreHooks>
  );
}

export default CoreHooks;
