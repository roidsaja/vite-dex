import { useEffect, useState } from 'react';

import BookmarkLists from './BookmarkLists';
import EmptyBookmark from './EmptyBookmark';
import { pokemons } from '../utils/localFav';

const BookmarkPokemon = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(pokemons());
  }, []);

  return (
    <div>
      {favoritePokemons.length == 0 ? (
        <EmptyBookmark />
      ) : (
        <BookmarkLists pokemonFav={favoritePokemons} />
      )}
    </div>
  );
};

export default BookmarkPokemon;
