import React, {useEffect, useState, useCallback} from "react";
import {ProductsContainer, OptionsWrapper, Option, SortingModal, SortTitle, RadioButtonsWrapper, RadioButtonContainer, RadioButton, RadioLabel, EmptyCell} from './ProductsElements'
import Accordion from "../Accordion/Accordion";
import {scroller as scroll} from 'react-scroll'

const Products = ({products, withOptions}) => {
    const [listOption, setListOption] = useState('all');
    const [chosenProducts, setChosenProducts] = useState([]);
    const [clickedProducts, setClickedProducts] = useState([]);
    const [isModalVisible, setIsModalVisibile] = useState(false);

    const handleClick = useCallback(event => {
        if(event.target.id !== 'sortButton') {
            setIsModalVisibile(false)
        }
    }, []);

    useEffect(() => {
        window.addEventListener('click', handleClick)
        return () => {
            window.addEventListener('click', handleClick)
        };
    }, [handleClick])

    const scrollToElement = (a) => {
        scroll.scrollTo('' + a, {
            duration: 1200,
            delay: 0,
            smooth: "ease",
            offset: -85
        })
        if (!clickedProducts.includes(a)) {
            setClickedProducts([...clickedProducts, a]);
        }
    }

    const handleOptionSelect = (chosenOption) => {
        if (chosenOption !== listOption) {
            setListOption(chosenOption)
        }
    }

    const selectPost = (postId) => {
        if (chosenProducts.some(obj => obj.id === postId)) {
            let newChosen = chosenProducts.filter(obj => obj.id !== postId)
            setChosenProducts(newChosen)
        } else {
            let newChosen = products.find(obj => obj.id === postId)
            setChosenProducts([...chosenProducts, newChosen])
        }
    }


    let productsToRender;
    if (listOption === 'all') {
        if(products.length === 0) {
            productsToRender = <EmptyCell>Produkti qe po kerkoni nuk ekziston!</EmptyCell>

        } else {
            productsToRender = products.map(obj => {
                return <Accordion withOptions={withOptions || false} key={obj.id} hasBeenClicked={clickedProducts.includes(obj.id)} selectPost={selectPost}
                                  scrollToElement={scrollToElement} dynamicId={obj.id} title={obj.title} city={obj.city}
                                  price={obj.price} className='accordion_component'/>
            })
        }
    } else {
        if(chosenProducts.length === 0) {
            productsToRender = <EmptyCell>Nuk keni produkte te zgjedhura!</EmptyCell>
        } else {
            productsToRender = chosenProducts.map(obj => {
                return <Accordion withOptions={withOptions} key={obj.id} hasBeenClicked={clickedProducts.includes(obj.id)} selectPost={selectPost}
                                  scrollToElement={scrollToElement} dynamicId={obj.id} title={obj.title} city={obj.city}
                                  price={obj.price} className='accordion_component'/>
            })
        }

    }

    const toggleSortModal = (action = false) => {
        setIsModalVisibile(!isModalVisible)
    }


    return (
        <ProductsContainer>
            {withOptions &&
            <OptionsWrapper>
                <div>
                    <Option style={{marginRight: '15px'}} isActive={listOption === 'all'}
                            onClick={() => handleOptionSelect('all')}>
                        Të gjitha
                    </Option>
                    <Option isActive={listOption === 'selected'} onClick={() => handleOptionSelect('selected')}>
                        Të zgjedhurat
                    </Option>
                </div>
                <div>
                    <Option id='sortButton' onClick={toggleSortModal}>
                        Rradhitja
                    </Option>
                    { isModalVisible  &&
                        <SortingModal>
                            <SortTitle>RRADHIT SIPAS</SortTitle>
                            <RadioButtonsWrapper>
                                <RadioButtonContainer>
                                    <RadioButton  id='lowPrice' type="radio" name='sort'/>
                                    <RadioLabel htmlFor="lowPrice">Cmimit me te ulet</RadioLabel>
                                </RadioButtonContainer>
                                <RadioButtonContainer>
                                    <RadioButton  id='highPrice' type="radio" name='sort'/>
                                    <RadioLabel htmlFor="highPrice">Cmimit me te larte</RadioLabel>
                                </RadioButtonContainer>
                                <RadioButtonContainer>
                                    <RadioButton id='date' type="radio" name='sort'/>
                                    <RadioLabel  htmlFor="date">Dates</RadioLabel>
                                </RadioButtonContainer>
                            </RadioButtonsWrapper>
                        </SortingModal>
                    }
                </div>
            </OptionsWrapper>
            }
            {
                productsToRender
            }
        </ProductsContainer>
    )
}

export default Products