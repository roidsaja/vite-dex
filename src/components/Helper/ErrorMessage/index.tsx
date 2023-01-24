import * as C from './styles';
import imgSrc from '../../../assets/img-pikachu-sad-min.png';

const ErrorMessage = () => {
  return (
    <C.Container>
      <C.ErrorMessage>
        <img src={imgSrc} width="32" height="32" alt="Pikachu" />
        <span>Uh Oh! Looks like this Pokemon does not exist.</span>
      </C.ErrorMessage>
    </C.Container>
  );
};

export default ErrorMessage;
