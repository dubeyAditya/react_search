import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
`

export const FlightCard = styled(Flex)`
  padding: 1rem;
  background: white;
  border-bottom: 2px solid #e8e8e8;
`;

export const Title = styled(Flex)`
 display:flex;
 align-items:flex-start;
 font-size: 1rem;

& :nth-child(1){
  color:#0159A1
;}

& :nth-child(2){
  margin-left: 0.5rem;
}
`

export const Content = styled(Flex)`
 justify-content: space-between;
 
`