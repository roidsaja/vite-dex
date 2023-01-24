import { useEffect, useRef, useState } from 'react';

import { fetchPokemonList } from './api/fetchPokemonList';
import { Pokemon } from './interfaces/Pokemon';
import Hero from './components/Hero';
import Pokedex from './components/Pokedex';
import SearchContainer from './components/SearchContainer';

function App() {
  const [pokemonData, setPokemonData] = useState<Pokemon | null>();
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [showPagination, setShowPagination] = useState(true);
  const searchBarRef = useRef<HTMLDivElement | any>(null);

  // Initial Page load
  useEffect(() => {
    (async () => {
      setPokemonList(await fetchPokemonList(1));
    })();
  }, []);

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
      <Pokedex
        setPokemonData={setPokemonData}
        pokemonList={pokemonList}
        setPokemonList={setPokemonList}
        error={error}
        page={page}
        setPage={setPage}
        showPagination={showPagination}
        setShowPagination={setShowPagination}
        searchBarRef={searchBarRef}
      />
    </>
  );
}

export default App;
