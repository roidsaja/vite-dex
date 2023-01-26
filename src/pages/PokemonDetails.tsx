import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FixedSizeList } from 'react-window';
import {
  Grid,
  Card,
  Text,
  Button,
  Container,
  Image,
  Progress,
} from '@nextui-org/react';

import { fetchPokemon } from '../api/fetchPokemon';
import { formatPokemonId } from '../components/Card';
import { AbilitiesDescriptions, Pokemon } from '../interfaces/Pokemon';
import { shoot } from '../utils/confetti';
import { toggleFavorite, verifyFavorite } from '../utils/localFav';
import { fetchPokemonAbility } from '../api/fetchPokemonAbility';
import PokemonTypeBadge from '../components/PokemonTypeBadge';

const PokemonDetails: React.FC = () => {
  const params = useParams();
  const [pokemonData, setPokemonData] = useState<Pokemon | null>();
  const [pokemonAbility, setPokemonAbility] = useState<AbilitiesDescriptions>();
  const [isInFavorites, setIsInFavorites] = useState(false);

  useEffect(() => {
    (async () => {
      const resPokemon = await fetchPokemon(params.id as string);
      const resAbility = await fetchPokemonAbility(params.id as string);
      setPokemonData(resPokemon.data);
      setPokemonAbility(resAbility.data);
    })();
    if (pokemonData) setIsInFavorites(verifyFavorite(pokemonData.id as number));
  });

  const onToggleFavorite = () => {
    toggleFavorite(pokemonData?.id as number);
    setIsInFavorites(!isInFavorites);
    if (isInFavorites) return;
    shoot();
  };

  const movesRow = (_: any, index: number) => (
    <div key={index}>
      {pokemonData?.moves.map((entry: any) => (
        <Text size={14} transform="capitalize">
          {entry.move.name}
        </Text>
      ))}
    </div>
  );

  return (
    <Grid.Container css={{ marginTop: '5px' }} gap={1}>
      <Grid xs={12} sm={4}>
        <Card isHoverable css={{ padding: '10px' }}>
          <Card.Body>
            <Image
              showSkeleton
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData?.id}.png`}
              alt={pokemonData?.name}
              width="100%"
              height={200}
            />
          </Card.Body>
          <Card.Footer
            css={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button
              color={!isInFavorites ? 'gradient' : 'error'}
              ghost
              onPress={onToggleFavorite}
            >
              {!isInFavorites ? 'Bookmark' : 'Remove from Bookmark'}
            </Button>
          </Card.Footer>
        </Card>
      </Grid>
      <Grid xs={12} sm={8}>
        <Card>
          <Card.Header
            css={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Container direction="column" display="flex">
              <Text h1 size={30} transform="capitalize">
                {pokemonData?.name}
              </Text>
              <Container
                css={{ padding: 0, gap: '4px' }}
                direction="row"
                display="flex"
              >
                {pokemonData?.types.map(({ type }) => (
                  <PokemonTypeBadge
                    key={type.name}
                    type={type.name}
                    tabIndex={false}
                  />
                ))}
              </Container>
            </Container>

            <Text h1 size={30} transform="capitalize">
              {formatPokemonId(pokemonData?.id as number)}
            </Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            <Text size={30}>Sprites</Text>
            <Container direction="row" display="flex" gap={0}>
              <Image
                src={pokemonData?.sprites.front_default as string}
                alt={pokemonData?.name}
                width={200}
                height={200}
              />
              <Image
                src={pokemonData?.sprites.back_default as string}
                alt={pokemonData?.name}
                width={200}
                height={200}
              />
              <Image
                src={pokemonData?.sprites.front_shiny as string}
                alt={pokemonData?.name}
                width={200}
                height={200}
              />
              <Image
                src={pokemonData?.sprites.back_shiny as string}
                alt={pokemonData?.name}
                width={200}
                height={200}
              />
            </Container>
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={12} sm={4}>
        <Card>
          <Card.Header>
            <Text h1 size={30}>
              Abilities
            </Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            {pokemonData?.abilities.map((entry) => (
              <>
                {pokemonAbility?.effect_entries.map((entry2: any) => (
                  <>
                    {entry2.language.name === 'en' ? (
                      <div className="flex justify-evenly gap-2 m-2">
                        <Text
                          className="font-semibold"
                          size={20}
                          transform="capitalize"
                        >
                          {entry.ability.name}
                        </Text>
                        <Text size={14}>{entry2.effect}</Text>
                      </div>
                    ) : null}
                  </>
                ))}
              </>
            ))}
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={12} sm={4}>
        <Card>
          <Card.Header>
            <Text h1 size={30}>
              Base Stat
            </Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            {pokemonData?.stats.map((entry) => (
              <div className="flex justify-evenly gap-2 whitespace-nowrap text-center items-center m-2">
                <Text size={14} className="w-24" transform="capitalize">
                  {entry.stat.name}
                </Text>
                <Text size={14} className="w-7 font-bold">
                  {entry.base_stat}
                </Text>
                <Progress
                  value={entry.base_stat}
                  color="gradient"
                  size="xs"
                  max={300}
                  className="w-full flex-1 overflow-hidden"
                />
              </div>
            ))}
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={12} sm={4}>
        <Card>
          <Card.Header>
            <Text h1 size={30}>
              Moves
            </Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            <FixedSizeList width="100%" height={250} itemCount={1} itemSize={1}>
              {movesRow}
            </FixedSizeList>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
};

export default PokemonDetails;
