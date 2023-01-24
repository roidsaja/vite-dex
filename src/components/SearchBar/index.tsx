import * as C from './styles';
import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';
import { SyntheticEvent, useState } from 'react';
import { fetchPokemon } from '../../api/fetchPokemon';
import { Pokemon } from '../../interfaces/Pokemon';

interface SearchFieldProps {
  setPokemonList: (data: Pokemon[] | any) => void;
  setError: (value: boolean) => void;
}

const SearchBar = (props: SearchFieldProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const requestPokemon = await fetchPokemon(inputValue.toLowerCase());

    requestPokemon?.response?.ok
      ? props.setPokemonList([requestPokemon?.data])
      : props.setError(requestPokemon.error);

    setInputValue('');
  };

  return (
    <C.Container onSubmit={handleSubmit}>
      <C.InputText
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Find Your Pokémon"
        required
      />
      <C.SearchButton>
        <SearchIcon />
      </C.SearchButton>
    </C.Container>
  );
};

export default SearchBar;
