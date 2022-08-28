import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  color: ${props => {
    if (props.eventColor === 'red') {
      return 'red';
    }

    if (props.eventColor === 'black') {
      return '#c2c2c2';
    }

    return '#c2c2c2';
  }};
`;
