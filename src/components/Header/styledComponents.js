import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  padding: 15px;
  padding-left: 30px;
  padding-right: 30px;
  position: relative;
`
export const Image = styled.img`
  width: 90px;
  height: 20px;
`
export const NavItemsList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 0px;
  width: 220px;
`
export const NavItem = styled.li``

export const Button = styled.button`
  border: 0;
  background-color: transparent;
  color: ${props => props.color};
`

export const ProfileImage = styled.img`
  width: 25px;
  height: 25px;
`
export const LogOutButton = styled.button`
  border: 2px solid #3b82f6;
  background-color: transparent;
  border-radius: 3px;
  color: #3b82f6;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
`

export const CancelButton = styled.button`
  border: 1px solid #000000;
  background-color: transparent;
  border-radius: 3px;
  color: #000000;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
`

export const ConfirmButton = styled.button`
  border: 0;
  background-color: #3b82f6;
  border-radius: 3px;
  color: #ffffff;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 6px;
  padding-bottom: 6px;
  margin-left: 8px;
`
