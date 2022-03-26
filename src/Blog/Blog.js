import React from 'react'
import { TabTitle } from '../utils/GeneralFunctions'
import {CardMain,TextDir,Button,Sub,Main,Container, Nav, Icon, Cont, Title,TextDir1} from './BlogElement'
import { BsFillPeopleFill } from 'react-icons/bs';
import { MdWeb,MdOutlineArrowForwardIos } from 'react-icons/md';
import { FaSignOutAlt,FaBars } from 'react-icons/fa';

const Blog = () => {

    TabTitle('Blog')
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
        <h1>Blog</h1>

        <TextDir>
            <label>Image</label>
            <input placeholder="Enter image"></input>
        </TextDir>
        <TextDir>
            <label>Profile</label>
            <input placeholder="Enter profile picture"></input>
        </TextDir>
        <TextDir>
            <label>Name</label>
            <input placeholder="Enter name" type="text"></input>
        </TextDir>
        <TextDir>
            <label>Date &nbsp;&nbsp;&nbsp;</label>
            <input placeholder="Enter date" type="text"></input>
        </TextDir>
        <TextDir>
            <label>Title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input placeholder="Enter title"></input>
        </TextDir>
        <TextDir1>
            <label>Description&nbsp;&nbsp;</label>
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

export default Blog