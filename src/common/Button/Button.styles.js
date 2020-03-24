import styled from 'styled-components';

export const ButtonWrapper = styled.button`
   background-color:${props=> props.color === 'green' ?  '#01893F' :'#0159A1'};
   color: white;
`;
