import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
`

export const FlightCard = styled(Flex)`
  padding: 1rem;
  flex-direction:column;
  background: white;
  border-bottom: 2px solid #e8e8e8;

  & > div {
    margin-bottom:0.5rem;
  }
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

 & > div:last-child{
   text-align-last:right;
 } 

 & > div{
   flex:1;
 }
 
`

export const DepartureArrivalBox = styled(Flex)`
   flex-direction: column; 
   
  & :nth-child(1){
    font-size: 1rem;
  }

  & :nth-child(2){
    font-size: 0.75rem;
  }
`

export const ClassBox = styled(DepartureArrivalBox)`
  border: 1px solid #0159A1;
  background-color:#0159A1;
  color: #ffff;
  padding: 0.25rem;
`


export const Footer = styled(Flex)`
  justify-content:flex-start;
  overflow-y:scroll;
 
  & > div{
    margin-right: 0.25rem;
    flex-basis: 5rem; 
  }
`