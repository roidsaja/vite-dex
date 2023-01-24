import * as C from './styles';
import SearchFilter from '../SearchFilter';
import SearchBar from '../SearchBar';
import { Pokemon } from '../../interfaces/Pokemon';

type SearchBarProps = {
  setPokemonList: (data: Pokemon[]) => void;
  setError: (value: boolean) => void;
  setPage: (value: number) => void;
  setShowPagination: (value: boolean) => void;
  searchBarRef: React.MutableRefObject<HTMLDivElement>;
};

export const SearchContainer = (props: SearchBarProps) => {
  return (
    <div className="main-container" ref={props.searchBarRef}>
      <C.Container>
        <SearchFilter
          setPokemonList={props.setPokemonList}
          setShowPagination={props.setShowPagination}
        />
        <SearchBar
          setPokemonList={props.setPokemonList}
          setError={props.setError}
        />
      </C.Container>
    </div>
  );
};
