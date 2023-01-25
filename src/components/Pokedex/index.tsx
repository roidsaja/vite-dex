import { ReactComponent as UpArrowIcon } from '../../assets/icon-arrow-up.svg';
import { Pokemon } from '../../interfaces/Pokemon';
import ErrorMessage from '../Helper/ErrorMessage';
import PokemonPagination from '../Pagination';
import Card from '../Card';
import * as C from './styles';

type PokedexProps = {
  setPokemonData: (data: Pokemon | null) => void;
  pokemonList: Pokemon[];
  setPokemonList: (data: Pokemon[]) => void;
  error: boolean;
  page: number;
  setPage: (value: number) => void;
  showPagination: boolean;
  setShowPagination: (value: boolean) => void;
  searchBarRef: React.MutableRefObject<HTMLDivElement>;
};

const Pokedex = (props: PokedexProps) => {
  if (props.error) return <ErrorMessage />;
  else
    return (
      <C.Wrapper>
        <div className="main-container">
          <C.PokemonList>
            {props.pokemonList.map((pokemon) => (
              <Card
                key={pokemon.id}
                pokemon={pokemon}
                setPokemonData={props.setPokemonData}
              />
            ))}
          </C.PokemonList>
          {props.pokemonList.length > 1 && props.showPagination === true && (
            <PokemonPagination
              setPokemonList={props.setPokemonList}
              searchBarRef={props.searchBarRef}
              page={props.page}
              setPage={props.setPage}
            />
          )}
          {props.pokemonList.length > 1 && props.showPagination === false && (
            <C.ButtonContainer>
              <button
                className="button"
                onClick={() => {
                  window.scrollTo({
                    top: props.searchBarRef.current.offsetTop - 56,
                  });
                }}
              >
                <UpArrowIcon />
              </button>
            </C.ButtonContainer>
          )}
        </div>
      </C.Wrapper>
    );
};

export default Pokedex;
