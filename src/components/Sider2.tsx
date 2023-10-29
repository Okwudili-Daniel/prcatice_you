import styled from "styled-components";
import {AiFillHome} from "react-icons/ai"
import {MdOutlineScreenshotMonitor, MdSubscriptions,MdOutlineVideoLibrary} from "react-icons/md"
import {AiOutlineMenu, AiOutlineSearch} from "react-icons/ai"
import { useState } from "react";
import img from "../assets/logo.png"

interface iProps{
    icon: any;
    text: string;
}

const Nav:React.FC<iProps> =({icon, text}) => {
    return <Holder>
        <Icon>
            {icon}
        </Icon>
        <Text>{text}</Text>
    </Holder>;
}

const Sider = () => {
    const [show, setShow] = useState(true)

    const click = () =>{
        setShow(false)
    }
  return (
    <div>
      {show? (
        <Container>
        <Logoholder>
                  <Icon1 bg="" onClick={click}>
                      <AiOutlineMenu/>
                  </Icon1>
                  <Logo src={img}/>
              </Logoholder>
         <Nav icon={<AiFillHome />} text="Home"/>
         <Nav icon={<MdOutlineScreenshotMonitor />} text="Shorts"/>
         <Nav icon={<MdSubscriptions />} text="Subcriptions"/>
         <Nav icon={<MdOutlineVideoLibrary />} text="Library"/>
        </Container>
      ): null}
    </div>
  )
}

export default Sider;
const Text = styled.div`
    font-size: 12px;
    font-weight: normal;
    /* color: white; */
`
const Icon = styled.div`
    font-size: 30px;
    line-height: 1;
    /* color: white; */
`
const Icon1 = styled.div<{bg?: string}>`
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
const Holder = styled.div`
    width: 90%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all 360ms;
    border-radius: 5px;

    &:hover{
        cursor: pointer;
        background-color: silver;
    }
`
const Container = styled.div`
    min-width: 200px;
    height: calc(100vh - 50px);
    /* padding-top: 50px; */
    position: fixed;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
    background-color: white;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;

    @media screen and (min-width: 768px) {
        display: none;
    }

`
