import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {
  SideBarContainer,
  TabsList,
  Button,
  TabItem,
  Span,
  SocialMediaContainer,
  Header,
  Image,
  Paragraph,
  NavLink,
} from './styledComponents'
import CartContext from '../../context/CartContext'

const SideBar = () => (
  <CartContext.Consumer>
    {value => {
      const {isDarkTheme, activeTab, onChangeActiveTabItem} = value
      const bgColor = isDarkTheme ? '#383838' : ' #e2e8f0'
      return (
        <SideBarContainer>
          <TabsList>
            <TabItem bgColor={activeTab === 'Home' ? bgColor : 'transparent'}>
              <NavLink to="/">
                <Button
                  onClick={() => onChangeActiveTabItem('Home')}
                  color={activeTab === 'Home' ? '#ff0000' : '#7e858e'}
                >
                  <AiFillHome size={20} />
                  <Span color={isDarkTheme ? '#ffffff' : '#000000'}>Home</Span>
                </Button>
              </NavLink>
            </TabItem>
            <TabItem
              bgColor={activeTab === 'Trending' ? bgColor : 'transparent'}
            >
              <NavLink to="/trending">
                <Button
                  onClick={() => onChangeActiveTabItem('Trending')}
                  color={activeTab === 'Trending' ? '#ff0000' : '#7e858e'}
                >
                  <AiFillFire size={20} />
                  <Span color={isDarkTheme ? '#ffffff' : '#000000'}>
                    Trending
                  </Span>
                </Button>
              </NavLink>
            </TabItem>
            <TabItem bgColor={activeTab === 'Gaming' ? bgColor : 'transparent'}>
              <NavLink to="/gaming">
                <Button
                  onClick={() => onChangeActiveTabItem('Gaming')}
                  color={activeTab === 'Gaming' ? '#ff0000' : '#7e858e'}
                >
                  <SiYoutubegaming size={20} />
                  <Span color={isDarkTheme ? '#ffffff' : '#000000'}>
                    Gaming
                  </Span>
                </Button>
              </NavLink>
            </TabItem>
            <TabItem bgColor={activeTab === 'Saved' ? bgColor : 'transparent'}>
              <NavLink to="/saved-videos">
                <Button
                  onClick={() => onChangeActiveTabItem('Saved')}
                  color={activeTab === 'Saved' ? '#ff0000' : '#7e858e'}
                >
                  <MdPlaylistAdd size={20} />
                  <Span color={isDarkTheme ? '#ffffff' : '#000000'}>
                    Saved videos
                  </Span>
                </Button>
              </NavLink>
            </TabItem>
          </TabsList>
          <SocialMediaContainer>
            <Paragraph color={isDarkTheme ? '#ffffff' : '#212121'}>
              CONTACT US
            </Paragraph>
            <div>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </div>
            <Paragraph color={isDarkTheme ? '#ffffff' : '#212121'}>
              Enjoy! Now to see your channels and recommendations!
            </Paragraph>
          </SocialMediaContainer>
        </SideBarContainer>
      )
    }}
  </CartContext.Consumer>
)
export default SideBar
