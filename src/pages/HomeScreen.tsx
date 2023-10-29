import styled from "styled-components";
import img from "../assets/pix.jpg"
import vid from "../assets/vid.mp4"
import moment from "moment";
import { getVideo } from "../api/API";
import {useState, useEffect} from "react"


const HomeScreen = () => {
  const data = Array.from({length:10})
  const [state, setState] = useState<any>({})

  useEffect(() =>{
    setState(JSON.parse(localStorage.getItem("youtube-v31")!))
  }, [state])
  console.log("reading: ", state);
  
  return (
    <div>
      <Container>
          <Navholder>
            <Nav col="1"
            onClick={() =>{
              getVideo("All")
            }}
            >All</Nav>
            <Nav
            onClick={() =>{
              getVideo("News")
            }}
            >News</Nav>
          </Navholder>
        <Main>
         {state?.items?.map((props: any) =>(
          <Card>
          <Top>
            <Image src={props?.snippet.thumbnails.high.url ? props?.snippet.thumbnails.high.url : img}/>
            <Video src = {vid} playsInline loop muted autoPlay/>
            <Time>{moment(new Date().getTime()).format("LT")}</Time>
          </Top>

          <Buttom>
            <Avatar src = {props.snippet.thumbnails.high.url}/>
            <Content>
              <Title>{props.snippet.channelTitle} </Title>
              <SmallText>
                <Text>Lorem ipsum dolor sit amet.</Text>

                <ST>
                  3k views &middot;{moment(new Date().getTime()).fromNow()}
                </ST>
              </SmallText>                
            </Content>
          </Buttom>
        </Card>
         ))}
        </Main>
      </Container>
    </div>
  )
}

export default HomeScreen;
const ST = styled.div``
const Text = styled.div``
const SmallText = styled.div`
  font-size: 12px;
    color: #888787
`
const Title = styled.div`
  font-weight: 600;
    font-size: 15px;
    margin-bottom: 5px;
    line-height: 1.2;
`
const Content = styled.div`
  margin-left: 10px;
  `
const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 10px;
`
const Buttom = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  margin: 10px 0;
`
  const Nav = styled.div<{col?: string}>`
    padding: 5px 15px;
    color: ${({col}) =>(col? "black" : "white")};
    background-color: ${({col}) =>(col? "#f2f2f2" : "#000000")};
    margin: 0 5px;
    border-radius: 3px;
    transition: all 360ms;
  
    &:hover{
      cursor: pointer;
  
    }
  `
const Navholder = styled.div`
  /* align-items: center; */
    display: flex;
  `
const Time =styled.div`
background-color: rgba(0, 0, 0, 0.8);
color: white;
font-size: 12px;
padding: 2px 10px;

  position: absolute;
  bottom: 10px;
  right: 10px;
`
const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
 opacity: 0;
 transition: all 360ms
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 360ms;
`
const Top = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  transition: all 360ms;

  &:hover{
    ${Video}{
      opacity: 1;
    }
    ${Image}{
      opacity: 0;
    }
    cursor: pointer;
  }
`
const Card = styled.div`
  width: 300px;
  min-height: 200px;
  border-radius: 5px;
  /* border: 1px solid black; */
  margin: 15px 5px;
`
const Main = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`
const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 50px);
  padding-top: 50px;
  /* background-color: black; */

`
