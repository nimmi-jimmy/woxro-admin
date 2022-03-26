import React from 'react'
import Dashboard from '../Dashboard/Dashboard';
import { TabTitle } from '../utils/GeneralFunctions';
import {CardMain,TextDir,Button,Sub,Main,Container, Nav, Icon, Cont, Title,TextDir1} from './CareerElement'
import { BsFillPeopleFill } from 'react-icons/bs';
import { MdWeb,MdOutlineArrowForwardIos } from 'react-icons/md';
import { FaSignOutAlt,FaBars } from 'react-icons/fa';

const Career = () => {
    TabTitle('Career');

  return (
    <Cont>
    <Nav class="sidebar">
         <Title>
            WOXRO
         </Title>
         
            <ul >
                <li>
                    <a href="/career">
                        <Icon>
                        <BsFillPeopleFill/>
                        </Icon>
                        <span class="title">Career</span>
                    </a>
                </li>

                <br></br>
                <br></br>
                <br></br>
                
                <li>
                    <a href="/blog">
                    <Icon>
                        <MdWeb/>
                    </Icon>
                        <span class="title">Blog</span>
                    </a>
                </li>

                <br></br>
                <br></br>
                <br></br>
                
                <li>
                    <a href="/">
                    <Icon>
                        <FaSignOutAlt/>
                    </Icon>
                        <span class="title">Sign Out</span>
                    </a>
                </li>

            </ul>
        </Nav>

    <Main>
    <CardMain>
        <h1>Career</h1>
        <TextDir>
            <label>Title</label>
            <input placeholder="Enter title" type="text"></input>
        </TextDir>
        <TextDir>
            <label>Time</label>
            <input placeholder="Enter time"></input>
        </TextDir>
        <TextDir1>
            <label>Description</label>
            <input placeholder="Enter description"></input>
        </TextDir1>
        <br></br>
        <br></br>
        <Button >
            Submit
        </Button>
    
    </CardMain>
    </Main>
    </Cont>
  )
}

export default Career

    