import React from 'react';
import Title from "../Dashboard/Title";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Table from '@material-ui/core/Table';
import AddIcon from '@material-ui/icons/Add';
import Link from "@material-ui/core/Link";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { useHistory } from "react-router-dom";



function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
    createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
    createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
    createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
    createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
    createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
    input:{
        width:"100%"
    },
    searchbox:{
        display:"flex"
    }
}));

const Orders = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div>
            <Grid item>
                <Paper>
                    <Title>Ordenes</Title>
                    <Paper variant="outlined" square  className={classes.searchbox}>
                    <IconButton className={classes.iconButton} aria-label="menu">
                        <AddIcon onClick={()=>{
                            history.push("/Orders/New")
                        }}/>
                    </IconButton>
                    <InputBase
                        className={classes.input}
                        placeholder="Buscar"
                        inputProps={{ 'aria-label': 'Buscar' }
                        }
                    />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                    <div  style={{overflow: 'auto'}}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Ship To</TableCell>
                                <TableCell>Payment Method</TableCell>
                                <TableCell align="right">Sale Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.shipTo}</TableCell>
                                    <TableCell>{row.paymentMethod}</TableCell>
                                    <TableCell align="right">{row.amount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    </div>
                    <div className={classes.seeMore}>
                        <Link color="primary" href="#" onClick={preventDefault}>
                            Ver mas ordenes
                        </Link>
                    </div>
                </Paper>
            </Grid>
        </div>
    );
};

export default Orders;