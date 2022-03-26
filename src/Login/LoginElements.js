import styled from 'styled-components';

const Main = styled.div`
    display: flex;
    height: 738px;
    justify-content: center;
    padding-block: 10rem;
    /* margin-block: 10rem; */
    background-color: black;
    @media(max-width: 1440px){
        height: 480px;
    }
    @media(max-width: 425px){
        height: 470px;
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

@media(max-width: 1440px){
    width: 35vw;
    height: 35vw;
}
@media(max-width: 1024px){
    width: 55vw;
    height: 50vw;
}
@media(max-width: 768px){
    width: 65vw;
    height: 62vw;
}
@media(max-width: 500px){
    width: 80vw;
    height: 125vw;
    margin-top: -30px;
}
@media(max-width: 375px){
    width: 80vw;
    height: 140vw;
    /* margin-top: -30px; */
}
@media(max-width: 320px){
    width: 92vw;
    height: 165vw;
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

export{CardMain,TextDir,Button,Sub,Main};