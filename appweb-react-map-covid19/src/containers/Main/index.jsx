/* eslint-disable no-unused-vars */
import React, { memo, useState, useCallback, useEffect } from "react";
import Api from '../../api'
import { ContainerStyled } from './style'

function Main(){
    const [data, setData] = useState({})

    const [country, setCountry] = useState('brazil')

    const getCovidData = useCallback((country) => {
        Api.getCountry(country)
        .then(data => setData())
    }, [])

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country]);

    return(
        <ContainerStyled>
             <div className="mb-2">
                Teste
            </div>
        </ContainerStyled>
       
    )
}
export default memo(Main);