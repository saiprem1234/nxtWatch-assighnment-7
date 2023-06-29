import styled from 'styled-components'

export const HomeCard = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`
export const SearchBarContainer = styled.div`
  border: 1px solid #909090;
  width: 400px;
  background-color: transparent;
  display: flex;
`
export const Input = styled.input`
  border: 0;
  width: 100%;
  background-color: transparent;
  padding: 5px;
  padding-left: 8px;
  color: #616e7c;
  font-weight: 400;
  font-size: 15px;
  outline: none;
`
export const Button = styled.button`
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #909090;
  color: #616e7c;
  width: 60px;
  background-color: transparent;
`
export const ProductsLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media screen and (min-width: 768px) {
    width: 70%;
  }
`
export const Image = styled.img`
  width: 300px;
  margin: 20px;
`

export const Heading = styled.h1`
  color: black;
  text-align: center;
  font-size: 30px;
`
export const Desc = styled.p`
  color: black;
  text-align: center;
  font-size: 20px;
`
export const Retry = styled.button`
  padding: 15px;
  color: blue;
  cursor: pointer;
`

export const VideosContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  list-style-type: none;
  padding-left: 0;
  flex-wrap: wrap;
`
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
`
