import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  width: 20%;
  padding: 15px;
`
export const TabsList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`
export const TabItem = styled.li`
  width: 100%;
  background-color: ${props => props.bgColor};
  margin-bottom: 10px;
`

export const Button = styled.button`
  border: 0;
  color: ${props => props.color};
  background-color: transparent;
  display: flex;
  align-items: center;
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  font-family: 'Roboto';
  cursor: pointer;
`
export const Span = styled.span`
  margin-top: 2px;
  margin-left: 18px;
  color: ${props => props.color};
`
export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Header = styled.h1`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
  margin-bottom: 20px;
`
export const Image = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
  color: ${props => props.color};
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
