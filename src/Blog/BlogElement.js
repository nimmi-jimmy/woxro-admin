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
    padding-block: 4rem;
    background-color: black;
    @media (max-width: 2560px){
        padding-block: 7rem;
    }
    @media(max-width: 1880px){
        margin-inline: 20rem;
        padding-block: 2.2rem;
    }
    @media(max-width: 1440px){
        margin-inline: 8rem;
        padding-block: 2.2rem;
    }
    @media(max-width: 1024px){
        margin-inline: -5rem;
        padding-block: 2.2rem;
    }
    @media(max-width: 768px){
        margin-inline: -8rem;
        padding-block: 3rem;
    }
    @media(max-width: 425px){
        margin-inline: -12rem;
        padding-block: 3rem;
    }
    @media(max-width: 375px){
        margin-inline: -13rem;
        padding-block: 2rem;
        
        /* height: 400px; */
    }
    @media(max-width: 320px){
        margin-inline: -13rem;
        padding-block: 2.5rem;
        
        /* height: 400px; */
    }
`

const CardMain = styled.div`
    display: flex;
    
    flex-direction: column;
    background-color: white;
    width: 32vw;
    height: 42vw;
    border-radius: 1rem;
    /* margin-inline: 55rem;
    margin-block: 10rem; */
    justify-content: center;
    align-items: center;

    @media (max-width: 2560px){
        margin-left: 14rem;
        width: 30vw;
        height: 32vw;
    }
    @media(max-width: 1880px){
    width: 32vw;
    height: 38vw;
}

@media(max-width: 1440px){
    width: 40vw;
    height: 50vw;
}
@media(max-width: 1024px){
    width: 54vw;
    height: 68vw;
    margin-right: 50px;
}
@media(max-width: 768px){
    width: 75vw;
    height: 88vw;
    
}
@media(max-width: 500px){
    width: 93vw;
    height: 190vw;
    margin-top: -20px;
    
}
@media(max-width: 375px){
    width: 90vw;
    height: 210vw;    
}
@media(max-width: 320px){
    width: 92vw;
    height: 240vw;
}

    h1{
        margin-top: 0px;
        margin-bottom: 0px;
        font-family: "Poppins", sans-serif;
        font-weight: bold;
        font-size: 28px;
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
            margin-bottom: -10px;
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
            font-size: 18px;
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
        @media(max-width: 1880px){
            margin-inline: 10px;
            margin-top: 25px;
            width: 240px; 
    }
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
        @media(max-width: 500px){
            margin-inline: 10px;
            margin-top: 10px;
            margin-bottom: -20px;
            font-size: 18px;
    }
    }
`
const Button = styled.div`
        width: 50%;
        height: 4%;
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
        @media(max-width: 1880px){
            margin-top: 0px;
        }
        @media(max-width: 500px){
            margin-top: -10px;
        }

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
    height: 795px;
    width: 15rem;
  }
  @media(max-width: 1024px){
    height: 795px;
    width: 13rem;
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