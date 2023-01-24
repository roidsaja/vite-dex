import { useEffect, useRef, useState } from 'react';
import { fetchPokemonList } from './api/fetchPokemonList';

import Hero from './components/Hero';
import { SearchContainer } from './components/SearchContainer';
import { Pokemon } from './interfaces/Pokemon';

function App() {
  const [pokemonData, setPokemonData] = useState<Pokemon | undefined>();
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [showPagination, setShowPagination] = useState(true);
  const searchBarRef = useRef<HTMLDivElement | any>(null);

  useEffect(() => {
    (async () => {
      setPokemonList(await fetchPokemonList(1));
    })();
  }, []);

  console.log(pokemonList);

  return (
    <>
      <Hero setPokemonData={() => setPokemonData} />
      <SearchContainer
        setPokemonList={setPokemonList}
        setError={setError}
        setPage={setPage}
        setShowPagination={setShowPagination}
        searchBarRef={searchBarRef}
      />
    </>
  );
}

export default App;
