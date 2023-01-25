import { Text } from '@nextui-org/react';

const EmptyBookmark = () => {
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
        You Have No Favorites, Yet
      </Text>
    </>
  );
};

export default EmptyBookmark;
