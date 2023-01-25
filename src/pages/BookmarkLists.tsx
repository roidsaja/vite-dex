import { Text, Grid, Card } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

interface Props {
  pokemonFav: number[];
}

const BookmarkLists = ({ pokemonFav }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <Text
        h1
        size={60}
        css={{
          textGradient: '45deg, $yellow600 -20%, $red600 100%',
        }}
        weight="bold"
      >
        Your Favourites Are All Here!
      </Text>
      <Grid.Container gap={2} direction="row" justify="flex-start">
        {pokemonFav.map((id) => (
          <Grid xs={6} sm={3} md={2} xl={1} key={id}>
            <Card
              isHoverable
              isPressable
              css={{ padding: 10 }}
              onPress={() => navigate(`/pokemon/${id}`)}
            >
              <Card.Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                width={'100%'}
                height={140}
              />
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
};

export default BookmarkLists;
