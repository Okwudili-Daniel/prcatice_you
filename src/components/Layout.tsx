import styled from "styled-components"
import Header from "./Header"
import Sider from "./Sider"
import {Outlet} from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <Container>
        <Header/>
      <Main>
            <Sider/>
        <Holder>
            <Div>
                <Outlet/>
            </Div>
        </Holder>
      </Main>
      </Container>
    </div>
  )
}

export default Layout;
const Div=styled.div`
    width: calc(100% - 100px);
    @media screen and (max-width: 768px) {
    width: 100%;
  }

`
const Holder = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    @media screen and (max-width: 768px) {
    width: 90%;
  }
`
const Main = styled.div`
width: 100%;
    display: flex;
    @media screen and (max-width: 768px) {
    width: 90%;
  }
    
`
const Container = styled.div``
