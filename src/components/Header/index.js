import {BsMoon} from 'react-icons/bs'
import Popup from 'reactjs-popup'
import {FiSun} from 'react-icons/fi'
import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import {
  NavContainer,
  Image,
  NavItemsList,
  NavItem,
  Button,
  ProfileImage,
  LogOutButton,
  CancelButton,
  ConfirmButton,
} from './styledComponents'
import './index.css'
import CartContext from '../../context/CartContext'

const Header = props => (
  <CartContext.Consumer>
    {value => {
      const {isDarkTheme, onToggleDarkTheme} = value
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const onLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      return (
        <NavContainer>
          <Link to="/">
            <Image src={imageUrl} alt="website logo" />
          </Link>
          <NavItemsList>
            <NavItem>
              <Button
                data-testid="theme"
                color={isDarkTheme ? '#ffffff' : '#212121'}
                type="button"
                onClick={onToggleDarkTheme}
              >
                {isDarkTheme ? <FiSun size={25} /> : <BsMoon size={25} />}
              </Button>
            </NavItem>
            <NavItem>
              <Button type="button">
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </Button>
            </NavItem>
            <NavItem>
              <Popup
                modal
                trigger={<LogOutButton>Logout</LogOutButton>}
                className="popup-content"
              >
                {close => (
                  <>
                    <div>
                      <p>Are you sure, You want to logout?</p>
                    </div>
                    <div>
                      <CancelButton
                        type="button"
                        className="trigger-button"
                        onClick={() => close()}
                        data-testid="close"
                      >
                        Close
                      </CancelButton>
                      <ConfirmButton onClick={onLogout}>Confirm</ConfirmButton>
                    </div>
                  </>
                )}
              </Popup>
            </NavItem>
          </NavItemsList>
        </NavContainer>
      )
    }}
  </CartContext.Consumer>
)
export default withRouter(Header)
