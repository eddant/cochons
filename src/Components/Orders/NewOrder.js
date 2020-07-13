import React from 'react';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Title from "../Dashboard/Title";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";

const NewOrder = () => {
    return (
        <Grid container spacing={3}>
            <Grid item lg={12}>
            <Paper>
                <Title>Datos del cliente</Title>
                    <TextField id="standard-basic" label="Nombre" />
                <TextField id="standard-basic" label="Apellido" />
                    <TextField id="standard-basic" label="Telefono" />
                    <TextField id="standard-basic" label="Domicilio" />
                    <TextField id="standard-basic" label="Ciudad y Estado" />
                    <TextField id="standard-basic" label="RFC" />
            </Paper>
            </Grid>
            <Grid item lg={12}>
            <Paper>
                <Title>Datos del vehiculo</Title>
                <TextField id="standard-basic" label="Modelo" />
                <TextField id="standard-basic" label="Marca" />
                <TextField id="standard-basic" label="Placas" />
                <TextField id="standard-basic" label="Kilometraje" />
                <TextField id="standard-basic" label="Descripcion de la falla" multiline fullWidth/>
            </Paper>
            </Grid>
            <Paper>
                <Title>Servicios</Title>
                <TextField id="standard-basic" label="Descripcion" />
                <TextField id="standard-basic" label="Cantidad" /> <button>Agregar</button><br/>
                <TextField id="standard-basic" label="Total a pagar"/><br/>
                <FormControlLabel control={<Checkbox name="checkedB" color="primary"/>} label="Seguro"/>
                <FormControlLabel control={<Checkbox name="checkedB" color="primary"/>} label="Departamento"/>
                <FormControlLabel control={<Checkbox name="checkedB" color="primary"/>} label="Empleado"/>
                <FormControlLabel control={<Checkbox name="checkedB" color="primary"/>} label="Particular"/>
            </Paper>
            <Paper>
                <Title>Checklist</Title>
                <TextField id="standard-basic" label="Descripcion" />
                <TextField id="standard-basic" label="Cantidad" /> <button>Agregar</button><br/>
                <TextField id="standard-basic" label="Total a pagar"/><br/>
                <FormControlLabel control={<Checkbox name="checkedB" color="primary"/>} label="Llanta refaccion"/>
                <FormControlLabel control={<Checkbox name="checkedB" color="primary"/>} label="Caja de CD"/>
                <FormControlLabel control={<Checkbox name="checkedB" color="primary"/>} label="Herramienta"/>
                <FormControlLabel control={<Checkbox name="checkedB" color="primary"/>} label="Extintor"/>
                <FormControlLabel control={<Checkbox name="checkedB" color="primary"/>} label="Botiquin"/>
                <FormControlLabel control={<Checkbox name="checkedB" color="primary"/>} label="Señales"/>
                <FormControlLabel control={<Checkbox name="checkedB" color="primary"/>} label="Gato"/>
                <FormControlLabel control={<Checkbox name="checkedB" color="primary"/>} label="Encendedor"/>
                <FormControlLabel control={<Checkbox name="checkedB" color="primary"/>} label="Cenicero"/>
                <FormControlLabel control={<Checkbox name="checkedB" color="primary"/>} label="Tapetes"/>
                <FormControlLabel control={<Checkbox name="checkedB" color="primary"/>} label="Telefono"/>
                <FormControlLabel control={<Checkbox name="checkedB" color="primary"/>} label="Antena"/>
                <FormControlLabel control={<Checkbox name="checkedB" color="primary"/>} label="Radio"/>
                <FormControlLabel control={<Checkbox name="checkedB" color="primary"/>} label="Dcoumentos"/>
                <FormControlLabel control={<Checkbox name="checkedB" color="primary"/>} label="Llaves"/>
            </Paper>
        </Grid>
    );
};

export default NewOrder;