import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import Box from "@material-ui/core/Box";
import Copyright from "../Copyright";
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

export default ()=> {
    function createData(time, amount) {
        return { time, amount };
    }
    const classes=useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
        return (
            <div>
                <Grid container spacing={3}>
                    {/* Chart */}
                    <Grid item xs={12} md={12} lg={12}>
                        <Paper className={fixedHeightPaper}>
                            <Chart />
                        </Paper>
                    </Grid>
                    {/* Recent Deposits */}
                    <Deposits store={"Mexicali suspensiones"} daily={Math.random()* (500 + 50000) + 500} data={ [
                        createData('00:00', Math.random(500,50000)),
                        createData('03:00', Math.random(500,50000)),
                        createData('06:00', Math.random(500,50000)),
                        createData('09:00', Math.random(500,50000)),
                        createData('12:00', Math.random(500,50000)),
                        createData('15:00', Math.random(500,50000)),
                        createData('18:00', Math.random(500,50000)),
                        createData('21:00', Math.random(500,50000)),
                        createData('24:00', Math.random(500,50000)),
                    ]}/>
                    <Deposits store={"Mexicali carrocerias"} daily={Math.random()* (500 + 50000) + 500} data={ [
                        createData('00:00', Math.random(500,50000)),
                        createData('03:00', Math.random(500,50000)),
                        createData('06:00', Math.random(500,50000)),
                        createData('09:00', Math.random(500,50000)),
                        createData('12:00', Math.random(500,50000)),
                        createData('15:00', Math.random(500,50000)),
                        createData('18:00', Math.random(500,50000)),
                        createData('21:00', Math.random(500,50000)),
                        createData('24:00', Math.random(500,50000)),
                    ]}/>
                    <Deposits store={"Mexicali general"} daily={Math.random()* (500 + 50000) + 500} data={ [
                        createData('00:00', Math.random(500,50000)),
                        createData('03:00', Math.random(500,50000)),
                        createData('06:00', Math.random(500,50000)),
                        createData('09:00', Math.random(500,50000)),
                        createData('12:00', Math.random(500,50000)),
                        createData('15:00', Math.random(500,50000)),
                        createData('18:00', Math.random(500,50000)),
                        createData('21:00', Math.random(500,50000)),
                        createData('24:00', Math.random(500,50000)),
                    ]}/>
                    <Deposits store={"Mexicali electrico"} daily={Math.random()* (500 + 50000) + 500} data={ [
                        createData('00:00', Math.random(500,50000)),
                        createData('03:00', Math.random(500,50000)),
                        createData('06:00', Math.random(500,50000)),
                        createData('09:00', Math.random(500,50000)),
                        createData('12:00', Math.random(500,50000)),
                        createData('15:00', Math.random(500,50000)),
                        createData('18:00', Math.random(500,50000)),
                        createData('21:00', Math.random(500,50000)),
                        createData('24:00', Math.random(500,50000)),
                    ]}/>
                    <Deposits store={"Mexicali lavado"} daily={Math.random()* (500 + 50000) + 500} data={ [
                        createData('00:00', Math.random(500,50000)),
                        createData('03:00', Math.random(500,50000)),
                        createData('06:00', Math.random(500,50000)),
                        createData('09:00', Math.random(500,50000)),
                        createData('12:00', Math.random(500,50000)),
                        createData('15:00', Math.random(500,50000)),
                        createData('18:00', Math.random(500,50000)),
                        createData('21:00', Math.random(500,50000)),
                        createData('24:00', Math.random(500,50000)),
                    ]}/>
                    <Deposits store={"Mexicali admin"} daily={Math.random()* (500 + 50000) + 500} data={ [
                        createData('00:00', Math.random(500,50000)),
                        createData('03:00', Math.random(500,50000)),
                        createData('06:00', Math.random(500,50000)),
                        createData('09:00', Math.random(500,50000)),
                        createData('12:00', Math.random(500,50000)),
                        createData('15:00', Math.random(500,50000)),
                        createData('18:00', Math.random(500,50000)),
                        createData('21:00', Math.random(500,50000)),
                        createData('24:00', Math.random(500,50000)),
                    ]}/>
                    {/* Recent Orders */}
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Orders />
                        </Paper>
                    </Grid>
                </Grid>
                <Box pt={4}>
                    <Copyright />
                </Box>
            </div>
        )
}


