import React from 'react'
import {CardContainer, CardTitle, CardHeader, CardNumber, CardContent} from './ProductCreateElements.js'

const ProductCreateCard = (props) => {
    return (
        <CardContainer >
            <CardHeader>
                <CardNumber>{props.number}</CardNumber>
                <CardTitle>{props.title} </CardTitle>
            </CardHeader>
            <CardContent gridColumns={props.gridColumns}>
                {props.children}
            </CardContent>
        </CardContainer>
    )
}

export default ProductCreateCard