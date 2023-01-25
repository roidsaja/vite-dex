import { Text } from '@nextui-org/react';

const EmptyBookmark = () => {
  return (
    <>
      <Text
        h1
        size={60}
        css={{
          textGradient: '45deg, $blue600 -20%, $pink600 50%',
        }}
        weight="bold"
      >
        You Have No Favorites, Yet
      </Text>
    </>
  );
};

export default EmptyBookmark;
