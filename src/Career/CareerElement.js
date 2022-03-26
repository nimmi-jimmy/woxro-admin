import styled from 'styled-components';

const Cont = styled.div`
  display: flex;
  flex-direction: row;
`

const Main = styled.div`
    display: flex;
    height: 610px;
    /* justify-content: center; */
    margin-inline: 32rem;
    padding-block: 10rem;
    background-color: black;
    @media(max-width: 2560px){
        height: 480px;
        margin-inline: 45rem;
    }
    @media(max-width: 1880px){
        height: 480px;
        margin-inline: 31rem;
        padding-block: 4rem;
    }
    @media(max-width: 1440px){
        height: 480px;
        margin-inline: 17rem;
        padding-block: 7rem;
    }
    @media(max-width: 1024px){
        height: 480px;
        margin-inline: 6rem;
        padding-block: 7rem;
    }
    @media(max-width: 425px){
        height: 480px;
        margin-inline: 2.5rem;
        padding-block: 6rem;
    }
    @media(max-width: 375px){
        height: 480px;
        margin-inline: 2rem;
        padding-block: 5.2rem;
    }
    @media(max-width: 320px){
        height: 480px;
        margin-inline: 0.6rem;
        padding-block: 5.5rem;
    }
`

const CardMain = styled.div`
    display: flex;  
    flex-direction: column;
    background-color: white;
    width: 30vw;
    height: 30vw;
    border-radius: 1rem;
    /* margin-inline: 55rem;
    margin-block: 10rem; */
    justify-content: center;
    align-items: center;

@media(max-width: 1880px){
    width: 35vw;
    height: 35vw;
}
@media(max-width: 1440px){
    width: 40vw;
    height: 40vw;
}
@media(max-width: 1024px){
    width: 55vw;
    height: 55vw;
}
@media(max-width: 768px){
    width: 75vw;
    height: 74vw;
}
@media(max-width: 500px){
    width: 82vw;
    height: 155vw;
    margin-top: -30px;
}
@media(max-width: 375px){
    width: 83vw;
    height: 180vw;
    /* margin-top: -30px; */
}
@media(max-width: 320px){
    width: 94vw;
    height: 210vw;
}

    h1{
        font-family: "Poppins", sans-serif;
        font-weight: bold;
    }
    input{
        width: 50%;
        height: 10%;
        background-color: #000;
        border: none;
        border-radius: 30px;
        margin-top: 20px;
    }
    
`

const TextDir1 = styled.div`
    display: flex;
    flex-direction: row;
    @media(max-width: 500px){
        display: flex;
        flex-direction: column;
    }
    
    input{
        height: 100px;
        width: 300px; 
        margin-left: 20px;
        margin-top: 35px;
        border-radius: 30px;
        padding-left: 30px;
        font-weight: bold;
        font-family: "Poppins", sans-serif;
        z-index: 1;
        color: white;
        margin-right: 60px;
        @media(max-width: 425px){
            margin-inline: 10px;
            width: 240px; 
    }
    }
    label{
        font-family: "Poppins", sans-serif;
        font-weight: bold;
        margin-top: 65px;
        font-size: 20px;
        @media(max-width: 425px){
            margin-inline: 10px;
            margin-top: 22px;
            margin-bottom: -20px;
    }
    }
`

const TextDir = styled.div`
    display: flex;
    flex-direction: row;
    @media(max-width: 500px){
        display: flex;
        flex-direction: column;
    }
    
    input{
        height: 45px;
        width: 300px; 
        margin-left: 20px;
        margin-top: 35px;
        border-radius: 30px;
        padding-left: 30px;
        font-weight: bold;
        font-family: "Poppins", sans-serif;
        z-index: 1;
        color: white;
        @media(max-width: 425px){
            margin-inline: 10px;
            width: 240px; 
    }
    }
    label{
        font-family: "Poppins", sans-serif;
        font-weight: bold;
        margin-top: 42px;
        font-size: 20px;
        @media(max-width: 425px){
            margin-inline: 10px;
            margin-top: 22px;
            margin-bottom: -20px;
    }
    }
`
const Button = styled.div`
        width: 50%;
        height: 5.2%;
        background-color: #000;
        border: none;
        border-radius: 50px;
        margin-top: 20px;
        color: white;
        text-align: center;
        padding-block: 1rem;
        font-family: "Poppins", sans-serif;
        font-weight: bold;
        font-size: 20px;
        cursor: pointer;

        :hover{
            border: solid 1px grey;
        }
`

const Sub =styled.div`
    font-family: "Poppins", sans-serif;
    margin-right: 20rem;
    font-size: 16px;
    cursor: pointer;
    @media(max-width: 500px){
        
        margin-right: 8rem;
    }
`

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
  height: 935px;
  background: white;
  overflow: hidden;
  box-shadow: 0 5 px;
  transition: 0.5s;
  @media(max-width: 2560px){
    height: 1060px;
  }
  @media(max-width: 1880px){
    height: 794px;
  }
  @media(max-width: 768px){
    display: none;
  }
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


export{CardMain,TextDir,TextDir1,Button,Sub,Main,Container,Nav,Icon,ToggleBtn,Title,Cont};