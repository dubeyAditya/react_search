import styled from 'styled-components';

export const Tab = styled.div`
   border-bottom: ${prop => prop.selected ? '2px solid #0159A1': '2px solid gray' };
   color: ${prop => prop.selected ? '#2CB3EE': 'gray' };
   text-align: center;
   padding: 0.5rem;
   cursor: pointer;
   & :nth-child(2){
     margin-left: 0.5rem;
   }
`;

export const TabListWrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-gap: 5px; 
   width:100%;
` 