import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'
import SavedVideos from './components/SavedVideos'
import CartContext from './context/CartContext'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
    activeTab: 'Home',
    savedVideos: [],
  }

  addToSaveVideos = videoDetails => {
    const {savedVideos} = this.state
    const videoObject = savedVideos.find(each => each.id === videoDetails.id)
    if (videoObject) {
      this.setState.setState(prevState => ({
        savedVideos: prevState.savedVideos,
      }))
    } else {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, videoDetails],
      }))
    }
  }

  removeSaveVideos = id => {
    const {savedVideos} = this.state
    const updatedData = savedVideos.filter(each => each.id !== id)
    this.setState({
      savedVideos: updatedData,
    })
  }

  onToggleDarkTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  onChangeActiveTabItem = value => {
    this.setState({
      activeTab: value,
    })
  }

  render() {
    const {isDarkTheme, activeTab, savedVideos} = this.state
    return (
      <CartContext.Provider
        value={{
          isDarkTheme,
          activeTab,
          savedVideos,
          onToggleDarkTheme: this.onToggleDarkTheme,
          onChangeActiveTabItem: this.onChangeActiveTabItem,
          addToSaveVideos: this.addToSaveVideos,
          removeSaveVideos: this.removeSaveVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsRoute}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}
export default App
