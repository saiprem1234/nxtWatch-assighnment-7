import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  width: 100%;
`
export const HomeCard = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`
export const MainBar = styled.div`
  background-color: ${props => props.bgColor};
  width: 80%;
  display: flex;
  flex-direction: column;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png ');
  background-size: cover;
  width: 100%;
  display: ${props => props.display};
  justify-content: space-between;
  padding: 20px;
`
export const Image = styled.img`
  width: 150px;
  height: 30px;
`
export const Button = styled.button`
  border: 0;
  background-color: transparent;
  align-self: flex-start;
`
