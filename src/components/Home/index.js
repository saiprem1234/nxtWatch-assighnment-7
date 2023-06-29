import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import Header from '../Header'
import SearchResults from '../SearchResults'
import SideBar from '../SideBar'
import {
  HomeContainer,
  HomeCard,
  MainBar,
  BannerContainer,
  Image,
  Button,
} from './styledComponents'
import CartContext from '../../context/CartContext'

class Home extends Component {
  state = {
    display: 'flex',
  }

  onClose = () => {
    this.setState({
      display: 'none',
    })
  }

  render() {
    const {display} = this.state
    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? ' #181818' : '#f9f9f9'
          return (
            <HomeContainer bgColor={isDarkTheme ? '#212121' : '#ffffff'}>
              <Header />
              <HomeCard>
                <SideBar />
                <MainBar data-testid="home" bgColor={bgColor}>
                  <BannerContainer display={display}>
                    <div>
                      <Image
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <p>Buy Nxt Watch Premium prepaid plans with upi</p>
                      <button type="button">Get It Now</button>
                    </div>
                    <Button
                      data-testid="close"
                      onClick={this.onClose}
                      type="button"
                    >
                      <IoMdClose size={15} />
                    </Button>
                  </BannerContainer>
                  <SearchResults />
                </MainBar>
              </HomeCard>
            </HomeContainer>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default Home
