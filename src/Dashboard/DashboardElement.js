import styled from 'styled-components';



const Container = styled.div`
  position: relative;
  label #sidebar_btn{
    z-index: 1;
    color: #fff;
    position: fixed;
    cursor: pointer;
    left: 300px;
    font-size: 20px;
    margin: 5px 0;
    transition: 0.5s;
    transition-property: color;
    :hover{
        color: #f0f0f0;
    }
    
}
`
const Nav = styled.div`
  position: relative;
  width: 300px;
  height: 950px;
  background: white;
  
  overflow: hidden;
  box-shadow: 0 5 px;
  transition: 0.5s;
  ul{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      margin-top: 150px;
  }
  li{
      position: absolute;
      list-style: none;
      width: 100%;
      :hover {
        opacity: 1;
        background-color: #f0f0f0;
        }
  }
  a{
      position: relative;
      display: block;
      width: 100%;
      display: flex;
      text-decoration: none;
      color: #000;
      font-weight: 500;
      
      span{
          position: relative;
          display: block;
          height: 60px;
          line-height: 60px;
          white-space: nowrap;
          font-family: "Poppins", sans-serif;
          font-weight: bold;
          font-size: 18px;
      }
  }

`
const Icon = styled.div`
    position: relative;
    display: block;
    min-width: 80px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 24px;
`
const ToggleBtn = styled.div`
    position: absolute;
    top: calc(50% - 20px);
    left: 275px;
    width: 40px;
    height: 40px;
    background-color: #f5f5f5;
    cursor: pointer;
    border: 5px solid #000;
    border-radius: 50%;
`
const Title = styled.div`
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 28px;
    margin-top: 50px;
    text-align: center;
`

export{Container,Nav,Icon,ToggleBtn,Title};