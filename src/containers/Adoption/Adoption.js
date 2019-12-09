import React, { Component } from 'react'
import { AdoptionContainer, FormPet } from './AdoptionStyle'
import Input from '../../components/Input/Input';
import paw from '../../assets/images/paw.png'
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal'
import {Lang} from '../../shared/pt'
import  SliderComponent  from '../../components/SliderComponent/SliderComponent'
import {firebase, GetStorageUser} from '../../firebase'
export default class Adoption extends Component {

  state={
    showModal: true,
    class: "",
    pets: "",
    cats: false,
    dogs: false,
    user: GetStorageUser()
  }

  componentDidMount(){
    const { key } = this.props.match.params
    console.log("KEY :: ", key)

    this.getAll()
    // console.log(this.state);
    
  }

  toggleModal=()=>{
    this.setState({showModal : !this.state.showModal})
  }
 

  getDogs = async ()=>{
    let dogs = await Object.keys(this.state.pets.dog)
    .map(key => this.state.pets.dog[key])
    this.setState({dogs: dogs}) 
    // console.log(this.state.dogs);

  }

  getCats = async ()=>{
    let cats = await Object.keys(this.state.pets.cat)
    .map(key => this.state.pets.cat[key])
    this.setState({cats: cats}) 
    // console.log(this.state.cats);
    
  }

  getAll = async ()=>{
    this.toggleModal()
    await firebase.database().ref('pets')
    .on('value', (snapshot)=>{
      const res = snapshot.val()
      this.setState({pets: res})
      this.getDogs()
      this.getCats()
    })

  }


  render() {
    const { showModal } = this.state
    return (

      <AdoptionContainer>
          <SliderComponent />
        <FormPet>
          <div className='label'>
            <img src={paw} alt="" />
          </div>

          <div className='label'>
            <img src={paw} alt="" />
            <Input name={'sexo'} type={'select'} options={['Masc', 'Fem']} />
          </div>

          <div className='label'>
            <img src={paw} alt="" />
            <Input name={'raça'} />
          </div>

          <div className='label'>
            <img src={paw} alt="" />
            <Input name={'idade'} />
          </div>

          <div className='label'>
            <img src={paw} alt="" />
            <Input name={'castrado'} type={'select'} options={['Sim', 'Nao']} />
          </div>

          <div className='label'>
            <img src={paw} alt="" />
            <Input name={'Vermifugado'} type={'select'} options={['Sim', 'Nao']} />
          </div>

          <div className='description' name={'descricao'} type={'text'}>
            <h3>Descrição</h3>
            <p>Cachorrinho filhote, muito dócil, adora crianças e já come ração. Estou doando por motivo de mudança</p>
          </div>
        </FormPet>
        <Button className="btn-bottom" value="Adotar"/>
        <Modal 
          show={showModal} 
          child={'adoption'}
          title={Lang.adoptionTitle} 
          setDog={this.getAll}
          setCat={this.getCats}
        />
      </AdoptionContainer>
    )
  }
}
