import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColor};
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`

export const LoginCard = styled.div`
  display: flex;
  background-color: ${props => props.bgColor};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  padding: 25px;
  width: 370px;
  height: 400px;
  border-radius: 13px;
`
export const Image = styled.img`
  width: 150px;
  height: 40px;
  margin-bottom: 25px;
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`
export const Input = styled.input`
  width: 100%;
  margin-top: 5px;
  padding: 10px;
  color: #7e858e;
  border: 1px solid #7e858e;
  background-color: transparent;
  border-radius: 5px;
  outline: none;
  font-weight: 400;
  font-family: 'Roboto';
  font-size: 15px;
`
export const Label = styled.label`
  color: #7e858e;
  font-weight: 600;
  font-family: 'Roboto';
  font-size: 13px;
`
export const Button = styled.button`
  background-color: #3b82f6;
  border: 0;
  padding: 10px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-top: 15px;
  border-radius: 5px;
`
export const CheckBoxContainer = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
`
export const CheckBoxInput = styled.input`
  width: 15px;
  height: 15px;
  margin-left: 0;
  margin-right: 7px;
`
export const Paragraph = styled.p`
  color: #ff0000;
  margin: 0;
  font-family: 'Roboto';
  font-size: 12px;
  margin-top: 5px;
`
