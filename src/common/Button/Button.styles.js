import styled from 'styled-components';

export const ButtonWrapper = styled.button`
   background-color:${prop => prop.color === 'green' ? '#01893F' : '#0159A1'};
   color: white;
   padding: 1rem;
   outline:none;
   width: ${prop => prop.size === 'large' ? '100%' : 'inherit'};
   font-size: 1rem;
   border: 1px solid antiquewhite;
   cursor:pointer;
`;
