import styled from 'styled-components';

export const FloatingButton = styled.div`
   position: fixed;
   right:0;
   left:0;
   bottom: 2rem; 
   display:flex;
   justify-content:center;

   & :nth-child(1){
       border-top-left-radius:4px;
       border-bottom-left-radius:4px;
       border-right: 0px
   }

   & :nth-child(2){
       border-top-right-radius:4px;
       border-bottom-right-radius:4px;
   }
`;

export const Button = styled.button`
    background-color:#f2f2f2;
    color: #0159A1;
    flex-basis: 6rem;
    padding: 0.5rem;
    border: 1px solid #e2e2e2;
    box-shadow: 2px 2px 3px #e8e8e8;
`
