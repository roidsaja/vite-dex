import { useEffect, useState } from 'react';
import { fetchPokemonList } from './api/fetchPokemonList';

import Hero from './components/Hero/Hero';
import { Pokemon } from './interfaces/Pokemon';

function App() {
  const [pokemonData, setPokemonData] = useState<Pokemon | undefined>();
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    (async () => {
      setPokemonList(await fetchPokemonList(1));
    })();
  }, []);

  console.log(pokemonList);

  return (
    <>
      <Hero setPokemonData={() => setPokemonData} />
    </>
  );
}

export default App;
