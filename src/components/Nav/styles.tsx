import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #24293f;

  & > svg {
    width: 9.56rem;
    height: 3.5rem;
  }

  .nav-link {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-items: start;
    gap: 1rem;

    .bookmark {
      display: flex;
      width: 2rem;
      height: 2rem;
      margin: 0 auto;
    }
  }

  @media (max-width: 31.25rem) {
    & > svg {
      width: 8.19rem;
      height: 3rem;
    }
  }
`;

export const Link = styled.a.attrs({
  rel: 'noopener noreferrer',
})`
  display: block;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .github-logo {
    width: 2rem;
    height: 2rem;
  }
`;
