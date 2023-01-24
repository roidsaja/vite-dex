import * as C from './styles';
import { SyntheticEvent, useEffect, useState } from 'react';
import { fetchPokemonByType } from '../../api/fetchPokemonByType';
import PokemonTypeBadge from '../PokemonTypeBadge/';
import { pokemonTypes, Pokemon } from '../../interfaces/Pokemon';

interface SearchFilterProps {
  setPokemonList: (data: Pokemon[]) => void;
  setShowPagination: (value: boolean) => void;
}

const SearchFilter = (props: SearchFilterProps) => {
  const [selectedType, setSelectedType] = useState('');

  const handleClick = async (e: SyntheticEvent) => {
    const typeName = (e.currentTarget as HTMLButtonElement).value;
    setSelectedType(typeName);
    props.setPokemonList(await fetchPokemonByType(typeName));
    props.setShowPagination(false);
  };

  useEffect(() => {
    if (selectedType) {
      (async () => {
        props.setPokemonList(await fetchPokemonByType(selectedType));
      })();
    }
  }, []);

  return (
    <C.Container>
      <C.Title>Filter</C.Title>
      {pokemonTypes.map(({ name }: any) => (
        <PokemonTypeBadge
          key={name}
          type={name}
          tabIndex={true}
          handleClick={handleClick}
        />
      ))}
    </C.Container>
  );
};

export default SearchFilter;
