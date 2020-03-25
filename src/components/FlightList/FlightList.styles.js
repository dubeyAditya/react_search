import styled from 'styled-components';

export const FlightListWrapper = styled.div`
  display: flex;
  flex-direction:column;
  background-color: #e8e8e8;
  margin-bottom: 0.5rem;

  @media (min-width:600px) {
     flex-direction:row;
     margin-right: 0.5rem;
  }
`;
