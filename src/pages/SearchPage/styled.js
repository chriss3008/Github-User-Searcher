import styled from "styled-components";

export const MainContainer = styled.div`
padding-top: 5vh;
@media(max-width: 800px) {
    padding-top: 0vh;
  }

`
export const SubMainContainer = styled.div`
border:solid 1px;
display: flex;
flex-direction: column;
justify-content: space-between;
width: 70vw;
height: 90vh;
margin: auto;
@media(max-width: 800px) {
    width: 100vw;
   height: 100vh;
  }
`


export const DivTitle = styled.div`
img{
    width:100%;
}
`
export const DivForm = styled.div`
text-align: center;

`

export const Form = styled.form`
input {
    background-color: rgb(94, 113, 106, 0.7);
    color: black;
  background-image: none;
  border: 1px solid #000;
  border-radius: 4px;
  box-shadow: #fff 4px 4px 0 0,#000 4px 4px 0 1px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-family: ITCAvantGardeStd-Bk,Arial,sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 10px;
  margin: 0 3px 5px 0;
  overflow: visible;
  padding: 8px 30px;
  text-align: center;
  text-transform: none;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;  
}

button {
    background-color: #284646;
  background-image: none;
  border: 1px solid #000;
  border-radius: 4px;
  box-shadow: #fff 4px 4px 0 0,#000 4px 4px 0 1px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: ITCAvantGardeStd-Bk,Arial,sans-serif;
  font-size: 12px;
  font-weight: 300;
  line-height: 10px;
  margin: 0 3px 5px 0;
  overflow: visible;
  padding: 8px 30px;
  text-align: center;
  text-transform: none;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;

:focus {
  text-decoration: none;
}

:hover {
  text-decoration: none;
}

:active {
  box-shadow: rgba(0, 0, 0, .125) 0 3px 5px inset;
  outline: 0;
}
}

`

export const DivButton = styled.div`
/* margin: auto; */
text-align: center;
padding-bottom: 10px;
`

export const Button = styled.button`

appearance: button;
  background-color: #284646;
  background-image: none;
  border: 1px solid #000;
  border-radius: 4px;
  box-shadow: #fff 4px 4px 0 0,#000 4px 4px 0 1px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: ITCAvantGardeStd-Bk,Arial,sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0 5px 10px 0;
  overflow: visible;
  padding: 12px 40px;
  text-align: center;
  text-transform: none;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;


:focus {
  text-decoration: none;
}

:hover {
  text-decoration: none;
}

:active {
  box-shadow: rgba(0, 0, 0, .125) 0 3px 5px inset;
  outline: 0;
}

`