import * as C from './styles';
import { ReactComponent as PokemonLogo } from '/src/assets/logo-pokemon.svg';
import { ReactComponent as GithubLogo } from '/src/assets/logo-github.svg';

const Nav = () => {
  return (
    <div className="main-container">
      <C.Container>
        <C.Link href="/" target="_self">
          <PokemonLogo />
        </C.Link>
        <div className="nav-link">
          <C.Link className="nav-link-text" href="/bookmarks" target="_self">
            Saved Bookmarks
          </C.Link>
        </div>
        <C.Link href="https://github.com/roidsaja/vite-dex" target="_blank">
          <GithubLogo className="github-logo" />
        </C.Link>
      </C.Container>
    </div>
  );
};

export default Nav;
