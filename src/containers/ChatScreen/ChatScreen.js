import React, { Component } from 'react'
import MapContainer from '../../components/MapContainer';
import {ChatContainer} from './ChatScreenStyle';
import {HomeAside} from './chatscreenstyle';
import ChatList from '../../components/ChatList/ChatList';

export default class ChatScreen extends Component {

  state={
    chats: [
      {
        imgSrc:"https://www.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
        title:"joao",
        sexo:"masculino",
        age:"2 meses"
      },
      {
        imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjRRYDaRnqNMVld63XRuAkuGouffg_yjBm5ReBhR2NXXR5aQdt",
        title:"jaja",
        sexo:"masculino",
        age:"2 meses"
      }
    ]
  }

  componentDidMount(){
   //antes de montar   
  }
  

  render() {
    const {chats} = this.state
    
    return(
    
      <ChatContainer flexDirection={'column'}>
        
        <HomeAside flexDirection={'column'} alignItems={'center'}>
          {chats.map(chat=> {
            return(
              <ChatList 
              imgSrc={chat.imgSrc}
              title={chat.title}
              sexo={chat.sexo}
              age={chat.age}
              />
            )})
          }
        </HomeAside>
      </ChatContainer>
    )
      
  }
}