import React, {useState} from 'react'
import ProductCreateCard from '../components/ProductCreate/ProductCreateCard'
import {
    ProductCreateContainer,
    DisplayFlexDiv,
    TextArea,
    InputLabel,
    UploadImagesWrapper,
    HeaderWrapper,
    HeaderDescription,
    AddContactButton,
    CheckboxWrapper,
    TermsAndConditions,
    Checkbox,
    CheckboxLabel,
    SubmitButton
} from '../components/ProductCreate/ProductCreateElements'
import BaseSelect from '../components/Commons/BaseSelect'
import BaseInput from "../components/Commons/BaseInput";
import FileUpload from "../components/Commons/FileUpload";
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {IoTrashOutline} from 'react-icons/io5';

const categoryOptions = [
    {value: 'all', label: 'Te gjitha produktet'},
    {value: 'furniture', label: 'Furniturë'},
    {value: 'cellular', label: 'Celularë'},
    {value: 'appliance', label: 'Produkte elektrike'},
    {value: 'console', label: 'Lojra console'},
    {value: 'computer', label: 'Kompjuter dhe paisje të ngjashme'},
    {value: 'sport', label: 'Sport'},
    {value: 'garden', label: 'Për kopsht'},
    {value: 'animal', label: 'Kafshë'},
    {value: 'children', label: 'Për fëmijë dhe bebe'},
    {value: 'fashion', label: 'Fashion'},
    {value: 'donation', label: 'Donacione'},
];

const ProductCreate = () => {
    const [conditions, setConditions] = useState([
        {value: 'box', label: 'Prej kutise'},
        {value: 'likeNew', label: 'Sikur e re'},
        {value: 'used', label: 'E perdorur'},
    ])
    const [selectedCondition, setSelectedCondition] = useState()

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

    const [isAdditionalContactActive, setIsAdditionalContactActive] = useState(false);
    const toggleIsAdditionalContactActive = () => {
        setIsAdditionalContactActive(!isAdditionalContactActive)
    }

    return (
        <ProductCreateContainer>
            <ProductCreateCard number='1' title='Informatat rreth produktit'>
                <DisplayFlexDiv>
                    <BaseInput Id='title' Type='text' PlaceHolder='(max 50 shkronja)' Title='Titulli'
                               IsRequired={true}/>
                    <BaseSelect Id='location' label='Qyteti' selectedValue={selectedCity}
                                handleChangeValue={(selectedOption) => setSelectedCity(selectedOption)} values={cities}
                                isClearable={false} isSearchable={true} isRequired={true}/>
                </DisplayFlexDiv>
                <DisplayFlexDiv>
                    <BaseSelect Id='category' label='Kategoria' selectedValue={selectedCategory}
                                handleChangeValue={(selectedOption) => setSelectedCategory(selectedOption)}
                                values={categories} isClearable={false} isRequired={true}/>
                    <BaseSelect Id='subcategory' label='Nën kategoria' selectedValue={selectedSubCategory}
                                handleChangeValue={(selectedOption) => setSelectedSubCategory(selectedOption)}
                                values={subcategories} isLoading={false} isClearable={true} isSearchable={true}
                                isDisabled={selectedCategory == null} isRequired={true}/>
                </DisplayFlexDiv>

                <DisplayFlexDiv>
                    <BaseInput Id='title' Type='number' Min='0' Step='10' PlaceHolder='Cmimi ne €' Title='Cmimi'
                               IsRequired={true}/>
                    <BaseSelect Id='condition' label='Gjendja' selectedValue={selectedCondition}
                                handleChangeValue={(selectedOption) => setSelectedCondition(selectedOption)}
                                values={conditions} isClearable={false} isSearchable={true} isRequired={true}/>
                </DisplayFlexDiv>
                <InputLabel>Pershkrimi</InputLabel>
                <DisplayFlexDiv>
                    <TextArea rows='4' placeholder='Maksimumi 500 shkronja'/>
                </DisplayFlexDiv>
            </ProductCreateCard>

            <ProductCreateCard number='2' title='Shto fotografi'>
                <HeaderWrapper>
                    <HeaderDescription>A e dini se postimet me fotografi te qarta marrin rreth 10 here me shume
                        shikueshmeri? <br/>
                        Mos hezitoni te ngarkoni fotografi (deri ne 5 fotografi) dhe te paraqitni pjeset me te mira te
                        produktit.</HeaderDescription>
                    <FileUpload style={{minWidth: '300px'}} text=' Ngarko fotografine kryesore '/>
                </HeaderWrapper>
                <hr style={{margin: '20px'}}/>
                <UploadImagesWrapper>
                    <FileUpload/>
                    <FileUpload/>
                    <FileUpload/>
                    <FileUpload/>
                </UploadImagesWrapper>

            </ProductCreateCard>

            <ProductCreateCard number='3' title='Inforamatat rreth kontaktit'>
                <HeaderDescription style={{marginLeft: '10px'}}>Vetem para se te postoni produktin, duam te dime se kush
                    jeni</HeaderDescription>
                <DisplayFlexDiv>
                    <BaseInput Id='title' Type='text' PlaceHolder='psh. Viber' Title='Emri i kontaktit'
                               IsRequired={true}/>
                    <BaseInput Id='title' Type='number' PlaceHolder='psh. 048 888 888' Title='Numri'
                               IsRequired={true}/>
                </DisplayFlexDiv>
                {
                    !isAdditionalContactActive &&
                    <AddContactButton onClick={toggleIsAdditionalContactActive}>
                        <AiOutlinePlusCircle style={{fontSize: '20px', margin: '0 5px -3px 0'}}/>
                        Shto edhe nje kontakt
                    </AddContactButton>
                }
                {
                    isAdditionalContactActive &&
                    <div>
                        <DisplayFlexDiv>
                            <BaseInput Id='title' Type='text' PlaceHolder='psh. WhatsaApp'
                                       Title='Emri i kontaktit tjeter' IsRequired={true}/>
                            <BaseInput Id='title' Type='number' PlaceHolder='psh. 048 888 888' Title='Numri tjeter'
                                       IsRequired={true}/>
                        </DisplayFlexDiv>
                        <AddContactButton style={{color: 'gray'}} onClick={toggleIsAdditionalContactActive}>
                            <IoTrashOutline style={{fontSize: '20px', margin: '0 5px -3px 0'}}/>
                            Anulo kontaktin e dyte
                        </AddContactButton>
                        <hr style={{margin: '20px 10px 5px 10px'}}/>
                    </div>
                }
                <DisplayFlexDiv>
                    <BaseInput Id='title' Type='email' Title='Email'/>
                    <CheckboxWrapper style={{marginTop: '30px'}}>
                        <Checkbox type='checkbox' id='termsAndConditions'/>
                        <CheckboxLabel htmlFor='termsAndConditions'>I kam lexuar dhe i pranoj
                            <TermsAndConditions href="#">kushtet dhe percaktimet</TermsAndConditions>
                        </CheckboxLabel>
                    </CheckboxWrapper>
                </DisplayFlexDiv>
                <CheckboxWrapper style={{marginLeft: '10px'}}>
                    <Checkbox type='checkbox' id='notifyMe'/>
                    <CheckboxLabel style={{fontWeight: 'normal'}} htmlFor='notifyMe'>
                        Me njofto per me te rejat permes emailit dhe sugjerimet permes emailit
                    </CheckboxLabel>
                </CheckboxWrapper>
            </ProductCreateCard>


            <ProductCreateCard number='4' title='Posto produktin'>
                <HeaderDescription style={{marginLeft: '10px'}}>Ju lutem kontrolloni të gjitha të dhënat para se të vazhdoni. Nëse mendoni se të gjitha janë mirë atëherë vazhdoni tutje.</HeaderDescription>
                <SubmitButton>Posto</SubmitButton>
            </ProductCreateCard>
        </ProductCreateContainer>
    )
}

export default ProductCreate