import { ReactComponent as WeightIcon } from '../../assets/icon-weight.svg';
import { ReactComponent as RulerIcon } from '../../assets/icon-ruler.svg';
import { ReactComponent as BoltIcon } from '../../assets/icon-bolt.svg';
import { Pokemon, pokemonTypes } from '../../interfaces/Pokemon';
import { fetchPokemon } from '../../api/fetchPokemon';
import PokemonTypeBadge from '../PokemonTypeBadge';
import SkeletonFetching from '../Helper/SkeletonFetching/';
import * as C from './styles';
import { useNavigate } from 'react-router-dom';

interface PokemonCardProps {
  pokemon: Pokemon;
  setPokemonData: (data: Pokemon | null) => void;
}

const Card = (props: PokemonCardProps) => {
  const navigate = useNavigate();
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemon.id}.png`;

  const [{ color }] = pokemonTypes.filter(
    (type) => props.pokemon.types[0].type.name.indexOf(type.name) !== -1
  );

  const handleClick = async () => {
    const requestPokemon = await fetchPokemon(props.pokemon.name);
    //props.setPokemonData(requestPokemon?.data);
    navigate(`/pokemon/${requestPokemon?.data?.id}`);
    console.log(requestPokemon?.data);
  };

  return (
    <C.Container>
      <C.CardOverlay color={color} />
      <C.PokemonImg>
        <SkeletonFetching src={imgUrl} alt={props.pokemon.name} />
      </C.PokemonImg>
      <C.PokemonNumber>{formatPokemonId(props.pokemon.id)}</C.PokemonNumber>
      <C.PokemonName>{props.pokemon.name}</C.PokemonName>
      <C.PokemonType>
        {props.pokemon.types.map(({ type }) => (
          <PokemonTypeBadge key={type.name} type={type.name} tabIndex={false} />
        ))}
      </C.PokemonType>
      <C.PokemonFeatures>
        <C.PokemonWeight>
          <div>
            <WeightIcon />
            <span>{`${props.pokemon.weight / 10}`} kg</span>
          </div>
          <span>Weight</span>
        </C.PokemonWeight>
        <C.PokemonHeight>
          <div>
            <RulerIcon />
            <span>{`${props.pokemon.height / 10}`} m</span>
          </div>
          <span>Height</span>
        </C.PokemonHeight>
      </C.PokemonFeatures>
      <C.MoreDetailsButton color={color} onClick={handleClick}>
        <BoltIcon />
        More Details
      </C.MoreDetailsButton>
    </C.Container>
  );
};

export const formatPokemonId = (id: number) => {
  if (id < 10) return `#00${id}`;
  else if (id >= 10 && id < 99) return `#0${id}`;
  else return `#${id}`;
};

export default Card;
