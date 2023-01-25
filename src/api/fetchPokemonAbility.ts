import { fetchPokemon } from './fetchPokemon';

type Props = {
  pokemon: { name: string };
};

export const fetchPokemonAbility = async (name: string) => {
  const URL = `https://pokeapi.co/api/v2/ability/${name}`;

  let response;
  let data;
  let error;

  try {
    response = await fetch(URL);
    data = await response.json();
    error = false;
  } catch {
    data = null;
    error = true;
  }

  return { response, data, error };
};
