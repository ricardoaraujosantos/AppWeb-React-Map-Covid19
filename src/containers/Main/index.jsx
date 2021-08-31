import React, { memo, useState, useCallback, useEffect } from "react";
import Api from '../../api'

import Board from './component/Board'
import Panel from './component/Panel'
import { ContainerStyled } from './style'


function Main(){
    const [data, setData] = useState({})

    const [country, setCountry] = useState("brazil")

    const updataAt = new Date().toLocaleString()

    const getCovidData = useCallback((country) => {
        Api.getCountry(country)
        .then(data => setData(data))
    }, [])

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country]);

    const handleChange = ({ target }) => {
        const country = target.value
        setCountry(country)
    }

    return(
        <ContainerStyled>
            <div className="mb-2">
              <Panel 
                data={data} 
                updataAt={updataAt} 
                onChange={handleChange} 
                country={country} 
                getCovidData={getCovidData} />
            </div>
            <Board data={data} />
        </ContainerStyled>
    )
}
export default memo(Main);