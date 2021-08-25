import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  padding-top: 45px;
  padding-bottom: 45px;
  justify-content: center;
  color: white;
  align-items: center;
  @media (min-width: 576px) {
    width: 570px;
  }
  @media (min-width: 768px) {
    width: 700px;
  }
  @media (min-width: 992px) {
    width: 960px;
    justify-content: space-between;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
`

export const TituloH2 = styled.h2`
  margin: 0;
  margin-bottom: 0.5em;
  line-height: 1em;
`

export const Paragrafo = styled.p`
  margin-bottom: 5px;
  line-height: 1.5em;
`

export const Form = styled.form`
	display: flex;
  width: 100%;
  flex-direction: column;
  box-sizing: border-box;
  @media (min-width: 992px) {
    width: 60%;
  }
`;

export const FormGroup = styled.div`
  display: block;
	width: 100%;
	margin: 10px auto;
`;

export const Label = styled.label`
	margin-bottom: 1em;
	color: white;
  display: block;
`;


export const Input = styled.input<{error?: boolean}>`
  font: 400 16px Roboto, sans-serif;
	padding: 1em;
	color: black;
	background: white;
	width: 100%;
	margin-bottom: 0.5em;
  border: ${
      props => props.error ?
          "2px solid red" :
          "2px solid gray"
  };
`;

export const Textarea = styled.textarea<{error?: boolean}>`
  font: 400 16px Roboto, sans-serif;
	padding: 1em;
	color: black;
	background: white;
	border: none;
	//border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
  resize: none;
  min-height: 250px;
  border: ${
      props => props.error ?
          "2px solid red" :
          "2px solid gray"
  };
`;

export const Message = styled.span`
	margin-bottom: 0.5em;
  background: red;
	color: white;
  display: block;
  padding: 5px 10px;
`;

export const Button = styled.button`
	background: white;
  padding: 15px 40px;
  margin-top: 1em;
  color: #98669e;
  border: 0px;
  font-weight: bold;
  font-size: 1em;
  cursor: pointer;
  &:hover {
    background: lightgray;
  }
`;