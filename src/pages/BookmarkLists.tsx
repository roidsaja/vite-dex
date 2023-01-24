import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  pokemonFav: number[];
}

const BookmarkLists = ({ pokemonFav }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <div>Your Favourites Are All Here!</div>
      <div>
        {pokemonFav.map((id) => (
          <div key={id}>
            <div onClick={() => navigate(`/pokemon/${id}`)}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                width={'100%'}
                height={140}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookmarkLists;
