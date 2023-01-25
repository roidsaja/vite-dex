import * as C from './styles';
import usePagination from '@mui/material/usePagination';
import { ReactComponent as LeftArrowIcon } from '../../assets/icon-arrow-left.svg';
import { ReactComponent as RightArrowIcon } from '../../assets/icon-arrow-right.svg';
import { Pokemon } from '../../interfaces/Pokemon';
import { fetchPokemonList } from '../../api/fetchPokemonList';

type UsePaginationProps = {
  setPokemonList: (data: Pokemon[]) => void;
  searchBarRef: React.MutableRefObject<HTMLDivElement>;
  page: number;
  setPage: (value: number) => void;
};

const PokemonPagination = (props: UsePaginationProps) => {
  const handleChange = async (e: React.ChangeEvent<unknown>, value: number) => {
    props.setPage(value);
    props.setPokemonList(await fetchPokemonList(value));

    window.scrollTo({
      top: props.searchBarRef.current.offsetTop - 56,
    });
  };

  const { items } = usePagination({
    count: 10,
    siblingCount: 0,
    page: props.page,
    onChange: handleChange,
  });

  return (
    <nav>
      <C.Pagination>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = <C.Ellipsis>...</C.Ellipsis>;
          } else if (type === 'page') {
            children = (
              <C.Button {...item} selected={selected}>
                {page}
              </C.Button>
            );
          } else {
            children = (
              <C.Button {...item} navigation>
                {type === 'previous' ? <LeftArrowIcon /> : <RightArrowIcon />}
              </C.Button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </C.Pagination>
    </nav>
  );
};
export default PokemonPagination;
