import styled from "styled-components";
import {AiFillHome} from "react-icons/ai"
import {MdOutlineScreenshotMonitor, MdSubscriptions,MdOutlineVideoLibrary} from "react-icons/md"

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
  return (
    <div>
      <Container>
       <Nav icon={<AiFillHome />} text="Home"/>
       <Nav icon={<MdOutlineScreenshotMonitor />} text="Shorts"/>
       <Nav icon={<MdSubscriptions />} text="Subcriptions"/>
       <Nav icon={<MdOutlineVideoLibrary />} text="Library"/>
      </Container>
    </div>
  )
}

export default Sider;
const Text = styled.div`
    font-size: 12px;
    font-weight: normal;
`
const Icon = styled.div`
    font-size: 30px;
    line-height: 1;
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
    width: 100px;
    height: calc(100vh - 50px);
    padding-top: 50px;
    position: fixed;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
    /* background-color: green; */

    @media screen and (max-width: 768px) {
        display: none;
    }
`
