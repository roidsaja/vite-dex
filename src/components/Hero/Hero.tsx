import { ReactComponent as BoltIcon } from '../../assets/icon-bolt.svg';
import { ReactComponent as DividerIcon } from '../../assets/divider-fire.svg';
import { fetchPokemon } from '../../api/fetchPokemon';
import { Pokemon } from '../../interfaces/Pokemon';
import Waves from '../Waves/Waves';
import PokemonType from '../PokemonTypeBadge/PokemonTypeBadge';
import imgSrc from '../../assets/img-charizard-min.png';
import * as C from './styles';

interface HeroSectionProps {
  setPokemonData: (data: Pokemon | null) => void;
}

const Hero: React.FC<HeroSectionProps> = ({ setPokemonData }) => {
  const handleClick = async () => {
    const { data } = await fetchPokemon('charizard');
    setPokemonData(data);
  };

  return (
    <C.Container>
      <div className="main-container">
        <C.Content>
          <C.CharizardData>
            <C.CharizardNumber>#006</C.CharizardNumber>
            <C.CharizardTypes>
              <PokemonType type={'fire'} tabIndex={false} />
              <PokemonType type={'flying'} tabIndex={false} />
            </C.CharizardTypes>
            <C.CharizardName>Charizard</C.CharizardName>
            <C.CharizardDescription>
              Charizard resembles a large traditional European dragon. Despite
              the resemblance, Charizard is explicitly a Pokémon of the Fire and
              Flying types, and not a Dragon type, except in its form "Mega
              Charizard X"; However, it can learn attacks of the type Dragon.
            </C.CharizardDescription>
            <C.MoreDetailsButton onClick={handleClick}>
              <BoltIcon />
              More Details
            </C.MoreDetailsButton>
          </C.CharizardData>

          <C.Divider>
            <DividerIcon />
          </C.Divider>

          <C.CharizardImg>
            <img
              src={imgSrc}
              width="488"
              height="528"
              alt="Imagem do Charizard"
            />
          </C.CharizardImg>
        </C.Content>
      </div>

      <Waves />
    </C.Container>
  );
};

export default Hero;
