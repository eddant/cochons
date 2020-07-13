import React from 'react';
import Link from '@material-ui/core/Link';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import { LineChart, Line, ResponsiveContainer } from 'recharts';




function preventDefault(event) {
    event.preventDefault();
}


const useStyles = makeStyles((theme)=>({
    depositContext: {
        flex: 1,
    },
    fixedHeight: {
        height: 240,
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
}));

export default function Deposits({store, daily, data, ...props }) {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const theme = useTheme();

    return (
        <React.Fragment>
            <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                    <Title>{store}</Title>
                    <Typography component="p" variant="h4">
                        {/*Displays the daily value in a currency format, TODO add it to a reusable function*/}
                        {'$' + daily.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
                    </Typography>
                    <Typography color="textSecondary" className={classes.depositContext}>
                        Hoy
                    </Typography>
                    <ResponsiveContainer>
                    <LineChart data={data}>
                        <Line type="monotone" dataKey="amount" stroke={theme.palette.success.main} dot={false} />
                    </LineChart>
                    </ResponsiveContainer>
                    <div>
                        <Link color="primary" href="#" onClick={preventDefault}>
                            View balance
                        </Link>
                    </div>
                </Paper>
            </Grid>
        </React.Fragment>

    );
}