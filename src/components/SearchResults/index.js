import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineSearch} from 'react-icons/ai'
import VideoCard from '../VideoCard'
import {
  HomeCard,
  SearchBarContainer,
  Input,
  Button,
  ProductsLoaderContainer,
  Image,
  Heading,
  Desc,
  Retry,
  VideosContainer,
  NotFoundContainer,
} from './styledComponents'
import './index.css'
import CartContext from '../../context/CartContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class SearchResults extends Component {
  state = {
    searchInput: '',
    searchValue: '',
    apiStatus: apiStatusConstants.initial,
    searchedVideos: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = () => {
    const {searchInput} = this.state
    this.setState({searchValue: searchInput}, this.getVideos)
  }

  onEnterClickSearch = event => {
    if (event.key === 'Enter') {
      const {searchInput} = this.state
      this.setState({searchValue: searchInput}, this.getVideos)
    }
  }

  getVideos = async () => {
    const {searchValue} = this.state
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchValue}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(each => ({
        id: each.id,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        title: each.title,
      }))
      this.setState({
        searchedVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    }
    if (response.ok !== true) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <ProductsLoaderContainer
      className="products-loader-container"
      data-testid="loader"
    >
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </ProductsLoaderContainer>
  )

  renderHomeVideos = () => {
    const {searchedVideos} = this.state
    const isVideosAvailable = searchedVideos.length === 0

    return isVideosAvailable ? (
      <div className="no-videos">
        <Image
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          className="no-products-img"
          alt="no videos"
        />
        <Heading className="no-products-heading">
          No Search results found
        </Heading>
        <Desc className="no-products-description">
          Try different key words or remove search filter
        </Desc>
        <Retry onClick={this.getVideos}>Retry</Retry>
      </div>
    ) : (
      <>
        <VideosContainer>
          {searchedVideos.map(each => (
            <VideoCard key={each.id} details={each} />
          ))}
        </VideosContainer>
      </>
    )
  }

  renderFailureView = () => (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const notFoundImageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <NotFoundContainer>
            <Image
              src={notFoundImageUrl}
              alt="failure view"
              className="jobs-failure-img"
            />
            <Heading>Oops! Something Went Wrong</Heading>
            <Desc className="jobs-failure-description">
              We are having some trouble to complete your request.Please try
              again.
            </Desc>
            <Retry onClick={this.getVideos}>Retry</Retry>
          </NotFoundContainer>
        )
      }}
    </CartContext.Consumer>
  )

  renderAllVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderHomeVideos()

      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state
    return (
      <HomeCard>
        <SearchBarContainer>
          <Input
            onChange={this.onChangeSearchInput}
            onKeyDown={this.onEnterClickSearch}
            value={searchInput}
            placeholder="Search"
            type="search"
          />
          <Button
            data-testid="searchButton"
            onClick={this.onClickSearchButton}
            type="button"
          >
            <AiOutlineSearch size={18} />
          </Button>
        </SearchBarContainer>
        {this.renderAllVideos()}
      </HomeCard>
    )
  }
}
export default SearchResults
