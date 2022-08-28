import PropTypes from 'prop-types';
import { Container, LoadMore } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <Container>
      <LoadMore type="button" onClick={onClick}>
        Load more
      </LoadMore>
    </Container>
  );
};

export default Button;

Button.propTypes = { onClick: PropTypes.func.isRequired };
