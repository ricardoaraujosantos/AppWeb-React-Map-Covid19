import React, { memo } from 'react'
import RefreshIcon from '../../../assets/images/refresh.png'
import { Card, Typography, Button, Select, MenuItem } from '../../../components'
import COUNTRIES from '../../../commons/constants/countries'
import { CardPainelContentStyled, ItemStyled } from './style'


const navigatiorHasShare = navigator.share

function Panel ({ updataAt, onChange, data, country, getCoviddata }) {
    const { cases, todayDeaths, recovered, deaths, todayCases } = data


const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
    <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />
    </ItemStyled>
</MenuItem>

)
   
const textCovid19 = `País: ${country}`

const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19)
}

const shareInfo = () => {
    navigator.share({
        title: `Dados do Covid19 - ${country}`,
        text: textCovid19,
        url: 'https://github.com/ricardoaraujosantos/appweb-react-map-covid19'
    })
}

const renderShareButton = (
    <div>
        <button variant="contained" color="primary" onClick={shareInfo}>
            Compartilhar
        </button>
    </div>
)

const renderCopyButton = (
    <div>
        <button variant="contained" color="primary" onClick={copyInfo}>
            Copiar
        </button>
    </div>

)

return (
    <Card>
        <CardPainelContentStyled>
            <div>
                <Typography variant="h5" component="span" color="primary">COVID19</Typography>
                <Typography variant="h6" component="span" color="primary"> Painel CoronaVirus</Typography>
                <Typography variant="body2" component="span" color="primary"> Atualizado em: { updataAt }</Typography>
                <div className="pt-2">
                    <Select onChange={onChange} value={country}>
                        {COUNTRIES.map(renderCountries)}
                    </Select>
                </div>
            </div>
            {navigatiorHasShare ? renderShareButton : renderCopyButton}
        </CardPainelContentStyled>
    </Card>
)
}

export default memo(Panel)