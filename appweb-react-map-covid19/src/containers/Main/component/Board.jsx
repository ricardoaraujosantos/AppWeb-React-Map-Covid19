import React, { memo } from "react";
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board ({ data }) {
    const {cases, todayDeaths, recovered, deaths, todayCases } = data 

    const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

    return(
        <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
                <Card value={ getValue(cases) } label="Total de casos" color="#FB685F" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={ getValue(todayCases) } label="Casos de hoje" color="#F6FD0A" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={ getValue(todayDeaths) } label="Óbitos de hoje" color="#85929E" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={ getValue(deaths) } label="Total de óbitos" color="#85929E" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={ getValue(recovered) } label="Total de recuperados" color="#27DA07" />
            </Grid>
        </Grid>
    )
}

export default memo(Board)