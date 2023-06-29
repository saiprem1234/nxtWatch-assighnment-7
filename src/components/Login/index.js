import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginContainer,
  LoginCard,
  Image,
  LoginForm,
  InputContainer,
  Input,
  Label,
  Button,
  CheckBoxContainer,
  CheckBoxInput,
  Paragraph,
} from './styledComponents'
import CartContext from '../../context/CartContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isShowPassword: false,
    showError: false,
    errorMsg: '',
  }

  onUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onPassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onShowHidePassword = () => {
    this.setState(prevState => ({
      isShowPassword: !prevState.isShowPassword,
    }))
  }

  onSuccessForm = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onFailureForm = errorMsg => {
    this.setState({
      showError: true,
      errorMsg,
    })
  }

  onLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccessForm(data.jwt_token)
    } else {
      this.onFailureForm(data.error_msg)
    }
  }

  render() {
    const {username, password, isShowPassword, showError, errorMsg} = this.state
    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const backGroundColor = isDarkTheme ? '#1e293b' : '#ffffff'
          const imageUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const jwtToken = Cookies.get('jwt_token')
          if (jwtToken !== undefined) {
            return <Redirect to="/" />
          }
          return (
            <LoginContainer bgColor={backGroundColor}>
              <LoginCard bgColor={isDarkTheme ? ' #0f0f0f' : '#f9f9f9'}>
                <Image src={imageUrl} alt="website logo" />
                <LoginForm onSubmit={this.onLogin}>
                  <InputContainer>
                    <Label htmlFor="username">USERNAME</Label>
                    <Input
                      onChange={this.onUsername}
                      value={username}
                      placeholder="Username"
                      type="text"
                      id="username"
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="password">PASSWORD</Label>
                    <Input
                      onChange={this.onPassword}
                      value={password}
                      placeholder="Password"
                      type={isShowPassword ? 'text' : 'password'}
                      id="password"
                    />
                  </InputContainer>
                  <CheckBoxContainer>
                    <CheckBoxInput
                      onChange={this.onShowHidePassword}
                      type="checkbox"
                      id="show-password"
                    />
                    <Label htmlFor="show-password">Show Password</Label>
                  </CheckBoxContainer>
                  <Button type="submit">Login</Button>
                  {showError && <Paragraph>*{errorMsg}</Paragraph>}
                </LoginForm>
              </LoginCard>
            </LoginContainer>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default Login
