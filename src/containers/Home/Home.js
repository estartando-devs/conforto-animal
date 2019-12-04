import React, { Component } from 'react'
import MapComponent from '../../components/MapComponent/MapComponent';
import SplashContainer from '../SplashScreen/Splash'
import {HomeContainer, HomeAside} from './HomeStyle'
import Card from '../../components/Card/Card';
export default class Home extends Component {
  
  state={
    splash: (window.location.pathname ==="/" ? true : false),
    pets: [
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
      },
    ],
  }
  
  componentDidMount(){
    setTimeout(()=>{this.setState({splash: false})},2000);
  }
  render() {
    const {splash, pets} = this.state

    return(
      splash ? <SplashContainer/> 
      :
      <HomeContainer flexDirection={'column'}>
        <MapComponent />
        <HomeAside flexDirection={'column'} alignItems={'center'}>
          {pets.map((pet, index)=> {
            return(
              <Card 
              key={index}
              imgSrc={pet.imgSrc}
              name={pet.name}
              message={pet.message}
              
              />
            )})
          }
        </HomeAside>
      </HomeContainer>
    )
  }
}