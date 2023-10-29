import styled from "styled-components";
import img from "../assets/logo.png"
import {AiOutlineMenu, AiOutlineSearch} from "react-icons/ai"
import {BsFillMicFill} from "react-icons/bs"
import {RiVideoAddLine} from "react-icons/ri"
import {IoIosNotificationsOutline} from "react-icons/io"
import Sider2 from "./Sider2";
import { useState } from "react";

const Header = () => {
    const [show, setShow] = useState(false)

    const click = () =>{
        setShow(!show)
    }

  return (
    <div>
      <Container>
         {show? (
                <Sider2/>
            ): null}
        <Main>
            <Logoholder>
                <Icon bg="" onClick={click}>
                    <AiOutlineMenu/>
                </Icon>
                <Logo src={img}/>
            </Logoholder>

            <Diiv style={{display: "flex", width: "50%",height: "40px", alignItems: "center", justifyContent: "space-between" }}>
            <Searchholder>
                <Input
                    placeholder="Search"
                />
                <Div>
                    <AiOutlineSearch size={"20px"}/>
                </Div>
            </Searchholder>
            <Icon bg="1">
                <BsFillMicFill/>
            </Icon>
            </Diiv>

            <Profile>
            <Icon>
                <RiVideoAddLine/>
            </Icon>

            <Icon>
                <IoIosNotificationsOutline/>
            </Icon>

            <Avatar>
                M
            </Avatar>
            </Profile>
        </Main>
      </Container>
    </div>
  )
}

export default Header;
const Profile = styled.div`
display: flex;
align-items: center;
`
const Avatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: darkorange;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
`
const Diiv = styled.div``
const Div = styled.div`
    background-color: silver;
    width: 50px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Input = styled.input`
    outline: none;
    padding-left: 10px;
    height: 100%;
    flex: 1;
    /* background-color: white; */
`
const Searchholder = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 50px;
    overflow: hidden;

`
const Icon = styled.div<{bg?: string}>`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin:0 10px;
    transition: all 360ms;
    background-color: ${({bg}) =>(bg? "silver" : "#dddddd")};

    font-size: 20px;
    

    &:hover{
        cursor: pointer;
        background-color:  #e9e9e9;
    }
`
const Logo = styled.img`
    height: 40px;
`
const Logoholder = styled.div`
    display: flex;
    align-items: center;
`
const Main = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`
const Container = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
`
