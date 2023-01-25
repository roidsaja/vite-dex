import { Container, Text } from '@nextui-org/react';

const EmptyBookmark = () => {
  return (
    <>
      <Container display="flex" justify="center">
        <Text
          h1
          size={60}
          css={{
            textGradient: '45deg, $yellow600 -20%, $red600 100%',
          }}
          weight="bold"
        >
          You Have No Favorites, Yet
        </Text>
      </Container>
    </>
  );
};

export default EmptyBookmark;
