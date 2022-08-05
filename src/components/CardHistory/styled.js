import styled from "styled-components";

export const MainContainer = styled.div`
    background-color: rgb(94, 113, 106, 0.7);
    display: flex;
    width: 20%;
    flex-direction: column;
    justify-content: space-around;
border-style: groove;
text-align: center;
@media(max-width: 800px) {
    width: 100%;
  }

`

export const DivName = styled.div`
font-size: 20px;
cursor: pointer;
:active{
    background-color: black;
    color:white;
}
`

export const Button = styled.button`
cursor: pointer;
border-radius: 30px;
:active{
    background-color: black;
    color:white;
}
`

export const DivButton = styled.div`
`