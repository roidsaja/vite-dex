import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchPokemon } from '../api/fetchPokemon';
import { formatPokemonId } from '../components/Card';
import { Pokemon } from '../interfaces/Pokemon';
import { shoot } from '../utils/confetti';
import { toggleFavorite, verifyFavorite } from '../utils/localFav';

const PokemonDetails: React.FC = () => {
  const params = useParams();
  const [pokemonData, setPokemonData] = useState<Pokemon | null>();
  const [isInFavorites, setIsInFavorites] = useState(false);
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${params.id}.png`;

  useEffect(() => {
    (async () => {
      const requestPokemon = await fetchPokemon(params.id as string);
      setPokemonData(requestPokemon?.data);
    })();
    if (pokemonData)
      setIsInFavorites(verifyFavorite(pokemonData?.id as number));
  }, []);

  const onToggleFavorite = () => {
    toggleFavorite(pokemonData?.id as number);
    setIsInFavorites(!isInFavorites);
    if (isInFavorites) return;
    shoot();
  };

  console.log(pokemonData);
  return (
    <div>
      <img src={imgUrl} />
      <div>{pokemonData?.name}</div>
      <span>{formatPokemonId(pokemonData?.id as number)}</span>
      {pokemonData?.types.map(({ type }, index) => (
        <div key={index}>{type.name}</div>
      ))}
      <Button
        color={!isInFavorites ? 'success' : 'error'}
        onClick={onToggleFavorite}
      >
        {!isInFavorites ? 'Bookmark' : 'Remove from Bookmark'}
      </Button>
    </div>
  );
};

export default PokemonDetails;
