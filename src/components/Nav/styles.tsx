import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-top: 1.5rem;

  & > svg {
    width: 9.56rem;
    height: 3.5rem;
  }

  .nav-link {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-left: 1rem;
    justify-items: start;

    &-text {
      margin-right: 2.75rem;
      padding-right: 0.5rem;
      cursor: pointer;
      text-decoration-line: none;
      color: #ffb75a;
      font-weight: 500;

      &:hover {
        color: #ffad42;
        text-decoration-color: #fdfdfd;
        transform: translateY(-0.25rem) translateX(-0.25rem);
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1),
          0 1px 2px -1px rgb(0 0 0 / 0.1);
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
