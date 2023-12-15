import React, {useState} from 'react'
import { HeroContainer, CategoriesContainer, Category, CategoryText } from './HeroElements'
import furniture from '../images/furniture.png'
import cellular from '../images/cellular.png'
import shoppingCart from '../images/shoppingCart.png'
import washingMachine from '../images/washingMachine.png'
import gamingConsoles from '../images/gamingConsoles.png'
import computer from '../images/computer.png'
import sport from '../images/sport.png'
import gardening from '../images/garderning.png'
import pets from '../images/pets.png'
import photography from '../images/photography.png'
import handMade from '../images/handMade.png'
import musicalInstruments from '../images/musicalInstruments.png'
import donation from '../images/donation.png'
import stroller from '../images/stroller.png'
import fashion from '../images/fashion.png'
import handShake from '../images/handshake.png'

const Hero = () => {

    const [categories, setCategories] = useState([
        {
            name: 'Fashion',
            icon: null
        },
    ]);

    const categorite = ['Fotografi', 'Pune dore' , 'Instrumente Muzikore' , 'Per biznese']

    return (
        <>
            <HeroContainer>
                <CategoriesContainer>
                    <Category to='/search/all' style={{gridTemplateColumns: '60% 20%'}}>
                        <CategoryText >Te gjitha produktet</CategoryText>
                        <img style={{width: '55px'}} src={shoppingCart} alt="Te gjitha produktet"/>
                    </Category>
                    <Category to='/search/furniture'>
                        <CategoryText>Furniturë</CategoryText>
                        <img src={furniture} alt="Furniture"/>
                    </Category>
                    <Category to='/search/cellular'>
                        <CategoryText>Celularë</CategoryText>
                        <img  src={cellular} alt="Celulare"/>
                    </Category>
                    <Category to='/search/appliance'>
                        <CategoryText>Produkte elektrike</CategoryText>
                        <img style={{width: '55px'}} src={washingMachine} alt="Produkte elektrike"/>
                    </Category>
                    <Category to='/search/console'>
                        <CategoryText>Lojra console</CategoryText>
                        <img style={{width: '64px'}} src={gamingConsoles} alt="Lokra console"/>
                    </Category>
                    <Category to='/search/computer'>
                        <CategoryText>Kompjuter dhe paisje të ngjashme</CategoryText>
                        <img  style={{width: '64px'}} src={computer} alt="Kompjuter dhe paisje të ngjashme"/>
                    </Category>
                    <Category to='/search/sport'>
                        <CategoryText>Sport</CategoryText>
                        <img style={{width: '64px'}}  src={sport} alt="Sport"/>
                    </Category>
                    <Category to='/search/garden'>
                        <CategoryText>Për kopsht</CategoryText>
                        <img style={{width: '60px'}} src={gardening} alt="Për kopsht"/>
                    </Category>
                    <Category style={{ gridTemplateColumns: '55% 30%'}} to='/search/animal'>
                        <CategoryText style={{marginBottom: '10px'}}>Kafshë</CategoryText>
                        <img style={{width: '95px'}} src={pets} alt="Kafshe"/>
                    </Category>
                    <Category to='/search/children'>
                        <CategoryText >Për fëmijë dhe bebe</CategoryText>
                        <img style={{width: '55px'}} src={stroller} alt="Kafshe"/>
                    </Category>
                    <Category to='/search/fashion'>
                        <CategoryText>Fashion</CategoryText>
                        <img style={{width: '55px'}} src={fashion} alt="Kafshe"/>
                    </Category>


                    <Category to='/search/photography'>
                        <CategoryText>Për fotografi</CategoryText>
                        <img style={{width: '55px'}} src={photography} alt="Fotografi"/>
                    </Category>
                    <Category to='/search/handmade'>
                        <CategoryText>Punëdore</CategoryText>
                        <img style={{width: '55px'}} src={handMade} alt="Pune dore"/>
                    </Category>
                    <Category to='/search/music'>
                        <CategoryText>Instrumente muzikore</CategoryText>
                        <img style={{width: '55px'}} src={musicalInstruments} alt="Pune dore"/>
                    </Category>
                    <Category to='/search/business'>
                        <CategoryText>Per biznese</CategoryText>
                        <img style={{width: '55px'}} src={handShake} alt="Pune dore"/>
                    </Category>

                    <Category to='/search/donation'>
                        <CategoryText>Donacione</CategoryText>
                        <img style={{width: '55px'}} src={donation} alt="Donacion"/>
                    </Category>
                </CategoriesContainer>
            </HeroContainer>
        </>
    )
}

export default Hero
