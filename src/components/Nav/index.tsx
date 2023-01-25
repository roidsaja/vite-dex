import * as C from './styles';
import { ReactComponent as PokemonLogo } from '/src/assets/logo-pokemon.svg';
import { ReactComponent as GithubLogo } from '/src/assets/logo-github.svg';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="main-container">
      <C.Container>
        <Link to="/">
          <PokemonLogo />
        </Link>
        <div className="nav-link">
          <Link className="nav-link-text" to="/bookmark">
            Saved Bookmarks
          </Link>
          <C.Link href="https://github.com/roidsaja/vite-dex" target="_blank">
            <GithubLogo className="github-logo" />
          </C.Link>
        </div>
      </C.Container>
    </div>
  );
};

export default Nav;
