import React, { Component } from 'react'
import { AdoptionContainer, DescPet, ImgPet, NameStyle } from './AdoptionStyle'
import paw from '../../assets/images/paw.png'
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal'
import { Lang } from '../../shared/pt'
import { GetStorageUser } from '../../firebase'
import { PetService } from "../../services/pets";
import Card from "../../components/Card/Card";
import User from '../../models/User'
export default class Adoption extends Component {

  state = {
    showModal: this.props.history.location.state ? false : true,
    class: "",
    pet: "",
    cats: false,
    dogs: false,
    user: GetStorageUser(),
  }

  petService = new PetService();

  componentDidMount() {
    let pet = this.props.history.location.state
    // console.log("pets -> ", pet)
    this.setState({ pet })
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  getDogs = async () => {
    await this.petService.Dogs.subscribe(dogs => this.setState({ dogs }));
    await this.toggleModal()   
  }

  getCats = async () => {
    await this.petService.Cats.subscribe(cats => this.setState({ cats }));
    await this.toggleModal()   
  }

  AdoptNow = async (pet, user)=>{
    pet.isAdopted = true
    pet.adopter = user
    const _pet = pet
    await this.petService.updatePet(_pet)
    this.navigate('home')
  }

  GiveUpAdoption = async (pet) =>{
    pet.isAdopted = false
    pet.adopter = new User()
    const _pet = pet 
    await this.petService.updatePet(_pet)
    this.navigate('home')
  }

  navigate = (route) => {
    this.props.history.push(`/${route}`)
  }

  render() {
    const { showModal, pet, dogs, cats, user } = this.state
    return (
      <AdoptionContainer 
        flexDirection={pet? 'column' : 'row'} 
        justifyContent={!pet ? 'space-around' : 'space-between'}
        handleWrap={!pet && 'wrap'}
        >
        { pet && <><ImgPet src={pet.imgSrc}/>
          <NameStyle>{pet.name}</NameStyle>
          <DescPet>
            <div className="id-pets">
              <div className="form">
                <div className='label'>
                  <img src={paw} alt="" />
                  {pet.sexo}
                </div>

                <div className='label'>
                  <img src={paw} alt="" />
                  {pet.breed}
                </div>
              </div>

              <div className='label'>
                <img src={paw} alt="" />
                {pet.age}
              </div>

              <div className="form" >
                <div className='label'>
                  <img src={paw} alt="" />
                  {pet.castrated === 'sim' && 'castrado' }
                </div>
                <div className='label'>
                  <img src={paw} alt="" />
                  {pet.dewormed === 'sim' && 'vermifugado'}
                </div>
              </div>
            </div>

            <div className='description' name={'descricao'} type={'text'}>
              <h3>Descrição</h3>
              <p>{pet.description}</p>
            </div>
            <Button 
              className="btn-bottom" 
              value= {user ? (
                ((pet.adopter.email === user.email) && "Desistir") || 
                "Adotar"
                ) : 
                "Adotar"
              } 
              
              action={()=> {
                user ? ((user.email === pet.adopter.email) ?  
                this.GiveUpAdoption(pet): 
                this.AdoptNow(pet, user)) :
                this.navigate('login')
              }}
            />
          </DescPet> 
        </>
        }   

        {!pet && (dogs && dogs.map((pet, index) => {
            return (
              <Card
                key={index}
                imgSrc={pet.imgSrc}
                title={pet.name}
                sexo={pet.sexo}
                action={() => this.setState({pet: pet})}
                age={pet.age}
                disabled={user ? (
                  (pet.adopter.email !== user.email  && pet.isAdopted) || 
                  (pet.adopter.email === user.email && false)
                  ) : 
                  pet.isAdopted
                }
                value= {user ? (
                  ((pet.adopter.email === user.email) && "Desistir") || 
                  "Quero adotar"
                  ) : 
                  "Quero adotar"
                }
                />
            )})
          )
        }

        {!pet && (cats && cats.map((pet, index) => {
            return (
              <Card
                key={index}
                imgSrc={pet.imgSrc}
                title={pet.name}
                sexo={pet.sexo}
                action={() => this.setState({pet: pet})}
                age={pet.age}
                disabled={user ? (
                  (pet.adopter.email !== user.email  && pet.isAdopted) || 
                  (pet.adopter.email === user.email && false)
                  ) : 
                  pet.isAdopted
                }
                value= {user ? (
                  ((pet.adopter.email === user.email) && "Desistir") || 
                  "Quero adotar"
                  ) : 
                  "Quero adotar"
                }
              />
            )})
          )
        }
        
        <Modal
        show={showModal}
        child={'adoption'}
        title={Lang.adoptionTitle}
        setDog={this.getDogs }
        setCat={this.getCats }
        />
      </AdoptionContainer >
    )
  }
}
