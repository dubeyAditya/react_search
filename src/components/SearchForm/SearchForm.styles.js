import styled from 'styled-components';

export const SearchFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding:1rem;
`;


export const PlaceSelectionWrapper = styled.div`
   flex-grow:1;
   display:flex;
   flex-direction:column;

   & > div{
     margin-bottom: 0.5rem;
   }
`

export const DateSelectionWrapper = styled.div`
   flex-grow:1;
   display:grid;
   grid-template-columns: repeat(2,1fr);
   grid-gap: 0.5rem;
   width:100%;
   margin-bottom: 0.5rem;

   @media (max-width: 400px) {
    grid-template-columns: repeat(1,1fr);
   }

`

export const FormItemWrapper = styled.div`
    margin-bottom: 0.25rem;
    & :nth-child(2) {
      margin-top: 0.5rem;
    }
`