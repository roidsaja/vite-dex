import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin: 1.5rem 0;
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

    &-text {
      padding-right: 0.5rem;
      cursor: pointer;
      text-decoration-line: none;
      font-weight: 700;
      font-size: 1rem;
      transition: background-image 1000ms ease-in;
      background-image: linear-gradient(135deg, #ff6b00 0%, #fad6a6 100%);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;

      &:hover {
        background-image: linear-gradient(-135deg, #ff6b00 0%, #fad6a6 100%);
        filter: drop-shadow(0 0 0.75rem crimson);
      }
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
