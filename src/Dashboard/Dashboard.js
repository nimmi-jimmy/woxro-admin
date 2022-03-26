import React from 'react'
import {Container, Nav, Icon, ToggleBtn, Title} from './DashboardElement.js'
import { BsFillPeopleFill } from 'react-icons/bs';
import { MdWeb,MdOutlineArrowForwardIos } from 'react-icons/md';
import { FaSignOutAlt,FaBars } from 'react-icons/fa';
import { TabTitle } from '../utils/GeneralFunctions.js';

const Dashboard = () => {
    

  return (
      <>
    
    <Container>
    
    {/* <label for="check"><FaBars id="sidebar_btn"/></label> */}
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
                    <a href="#">
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
                    <a href="#">
                    <Icon>
                        <FaSignOutAlt/>
                    </Icon>
                        <span class="title">Sign Out</span>
                    </a>
                </li>

            </ul>
        </Nav>
        {/* <ToggleBtn>
            <MdOutlineArrowForwardIos size={24}
            style={{marginTop: 8, marginLeft: 8}}/>
        </ToggleBtn> */}
    </Container>

    {/* <script>
        document.querySelector('<ToggleBtn/>').onclick = function() {
            this.toggle('active')
        }
    </script> */}

    </>
  )
}

export default Dashboard