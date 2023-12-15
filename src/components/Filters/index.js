import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { FilterWrapper, Label, InputWrapper, SelectContainer, SearchButton, SearchInput, InputLabel, PriceContainer, StatesContainer,
    CheckboxWrapper, CheckBox, CheckBoxLabel} from './FilterElements'
import { AiOutlineSearch } from 'react-icons/ai'
import BaseInput from "../Commons/BaseInput";
import BaseSelect from "../Commons/BaseSelect";
import BaseCheckbox from "../Commons/BaseCheckbox";
const categoryOptions = [
    { value: 'all', label: 'Te gjitha produktet' },
    { value: 'furniture', label: 'Furniturë' },
    { value: 'cellular', label: 'Celularë' },
    { value: 'appliance', label: 'Produkte elektrike' },
    { value: 'console', label: 'Lojra console' },
    { value: 'computer', label: 'Kompjuter dhe paisje të ngjashme' },
    { value: 'sport', label: 'Sport' },
    { value: 'garden', label: 'Për kopsht' },
    { value: 'animal', label: 'Kafshë' },
    { value: 'children', label: 'Për fëmijë dhe bebe' },
    { value: 'fashion', label: 'Fashion' },
    { value: 'donation', label: 'Donacione' },
];

const Filters = () => {

    const [categories, setCategories] = useState(categoryOptions)
    const [subcategories, setSubcategories] = useState([])
    const [cities, setCities] = useState([
        {value: 'pristine', label: 'Prishtine'},
        {value: 'peje', label: 'Peje'},
        {value: 'gjilan', label: 'Gjilan'},
        {value: 'bujanoc', label: 'Bujanoc'},
    ])

    const [selectedCategory, setSelectedCategory] = useState()
    const [selectedSubCategory, setSelectedSubCategory] = useState()
    const [selectedCity, setSelectedCity] = useState()

    const { category } = useParams();

    useEffect(() => {
        const option =  categories.find(obj => obj.value === category)
        if(option) {
            setSelectedCategory(option)
        } else {
            setSelectedCategory(categories[0])
        }
    }, [category])

    return (
        <>
            <FilterWrapper>
                <Label>Cfarë doni të blini?</Label>

                <SelectContainer>
                    <BaseSelect Id='category' label='Kategoria' selectedValue={selectedCategory} handleChangeValue={setSelectedCategory} values={categories} isClearable={false} />
                    <BaseSelect Id='subcategory' label='Nën kategoria' selectedValue={selectedSubCategory} handleChangeValue={setSelectedSubCategory} values={subcategories}  isLoading={false}  isClearable={true} isSearchable={true} isDisabled={selectedCategory == null}/>
                    <BaseSelect Id='location' label='Qyteti' selectedValue={selectedCity} handleChangeValue={setSelectedCity} values={cities}  isLoading={false} />


                    <PriceContainer >
                        <BaseInput Id='priceFrom' Title='Prej:' InputStyle={{ borderRadius: '5px 0 0 5px'}} Type='number' Min='0' PlaceHolder='Cmimi (€)' Step='10'/>
                        <BaseInput Id='priceTo' Title='Deri:' InputStyle={{ borderRadius: '0 5px 5px 0'}} Type='number' Min='0' PlaceHolder='Cmimi (€)' Step='10'/>
                    </PriceContainer>

                    <StatesContainer className='states'>
                        <InputLabel className='disappear-under-550' style={{ margin: '6px 0 0 5px', fontSize: '16px'}}>Gjendja:</InputLabel>

                        <BaseCheckbox name='box' text='Prej kutise' />
                        <BaseCheckbox name='likeNew' text='Sikur e re' />
                        <BaseCheckbox name='used' text='E perdorur' />
                    </StatesContainer>

                    <InputWrapper style={{ gridColumnStart: '5', gridColumn: 'span 2' }}>
                        <SearchInput placeholder='Kerko Fjalen' id='search' />
                    </InputWrapper>

                    <InputWrapper >
                        <SearchButton>Kërko <AiOutlineSearch style={{marginLeft: '5px', fontSize:'18px'}}/>  </SearchButton>
                    </InputWrapper>
                </SelectContainer>

            </FilterWrapper>
        </>
    )
}

export default Filters