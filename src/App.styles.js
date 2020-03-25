import styled, { createGlobalStyle } from 'styled-components';

export const AppWrpper = styled.div`
  height: 100%;
  border: 1px solid #f2f2f2;
`
const Style = createGlobalStyle`
 body, #root {
   height: 97vh;
   font-family: "Google Sans", Roboto, arial, sans-serif;
   margin: 0;
}

.FlightSearchWrapper{
  height:100%;
}

.FormContainerWrapper,
.SearchContainerWrapper,
.FilterContainerWrapper
{
  display:flex;
  flex-direction:column;
  & main
  {
    flex-grow: 1;
  }
}

.back-button,.edit-button{
  cursor:pointer;
}


`

export default Style;

