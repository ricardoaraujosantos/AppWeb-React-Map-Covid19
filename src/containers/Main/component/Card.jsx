import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Card as CardUi } from '../../../components'
import{
    LabelStyled,
    ValueStyled,
    CardContentStyled
} from './style'

function Card ({ value, label, color }) {
    return(
        <CardUi>
            <CardContentStyled color={color}>
                <ValueStyled>{value}</ValueStyled>
                <LabelStyled>{label}</LabelStyled>
            </CardContentStyled>
        </CardUi>
    )
}

export default memo(Card)