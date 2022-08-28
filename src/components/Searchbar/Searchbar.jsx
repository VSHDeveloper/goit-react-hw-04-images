import { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import PropTypes from 'prop-types';
import {
  Header,
  Form,
  SearchFormButton,
  ButtonLabel,
  Input,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      return;
    }

    onSubmit(query);
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <GoSearch size="25" />
          <ButtonLabel>Search</ButtonLabel>
        </SearchFormButton>

        <Input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
          value={query}
        />
      </Form>
    </Header>
  );
};

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Searchbar;
