import React, {Component} from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Doughnut } from 'react-chartjs-2';
import {Link} from "react-router-dom";

class Principal extends Component {
      constructor() {
      super();
      this.state={
          information:[{risk:1,bonds:80, large:20, mid:0, foreign:0, small:0, state:false},
            {risk:2, bonds:70, large:15, mid:15, foreign:0, small:0, state:false},
            {risk:3, bonds:60, large:15, mid:15, foreign:10, small:0, state:false},
            {risk:4, bonds:50, large:20, mid:20, foreign:10, small:0, state:false},
            {risk:5, bonds:40, large:20, mid:20, foreign:20, small:0, state:false},
            {risk:6, bonds:35, large:25, mid:5, foreign:30, small:5, state:false},
            {risk:7, bonds:20, large:25, mid:25, foreign:25, small:5, state:false},
            {risk:8, bonds:10, large:20, mid:40, foreign:20, small:10, state:false},
            {risk:9, bonds:5, large:15, mid:40, foreign:25, small:15, state:false},
            {risk:10, bonds:0, large:5, mid:25, foreign:30, small:40, state:false}],
            boton: true,
            seleccionado:[],
            data:[],
            opciones:[],

      }
}

obtenerClienteSeleccionado(e, posicion) {
  this.state.boton=false;
   var valores = [];
   valores = this.state.information;
   const clienteSelecionado=this.state.information[posicion];
   this.state.seleccionado = clienteSelecionado;
   console.log("ese",this.state.seleccionado.risk);
   for(let i=0;i<valores.length;i++){
     if(clienteSelecionado == valores[i]){
       valores[i].state=true;
     }
     else{
       valores[i].state=false;
     }
   }
   this.setState({information: valores});

   this.configurarGrafica();
   //window.location.reload(true);
}

configurarGrafica(){
  const data={
    labels:["Risk","Bonds%","Large Cap %","Mid Cap %","Foreign %","Small %"],
    datasets:[{
      data:[this.state.seleccionado.risk,this.state.seleccionado.bonds,this.state.seleccionado.large,this.state.seleccionado.mid,this.state.seleccionado.foreign,this.state.seleccionado.small],
      backgroundColor:['red','blue','yellow','green','cyan','black']
    }]
  }

  const opciones={
    responsive:true,
  }

  this.setState({data:data,opciones:opciones})
}


render(){

  return (
    <div style={{marginLeft:"2%"}}>
    <h2 style={{ color:"blue" }}>
      Por favor seleccione un Risk Level para analizarlo
    </h2>
    <Grid container>
    <Grid item xs={3}>
      <p>Low</p>
    </Grid>
    <Grid item>
    <p >High</p>
    </Grid>

</Grid>
  <ButtonGroup color="primary" aria-label="outlined primary button group">
  { this.state.information.map((cliente, key) =>
  <Button style={{backgroundColor:cliente.state===false ? 'white':'yellow'}}  onClick={() => {this.obtenerClienteSeleccionado(cliente.risk, key)}}>{cliente.risk}</Button>) }
  <Button disabled={this.state.boton}><Link style={{color: '#0d47a1', textDecoration:'none'}} to={{pathname:'/secundario', state: this.state.seleccionado}}>Continuar</Link></Button>
</ButtonGroup>

<Grid container>
<Grid item xs={5}>
<Table size='small'><TableHead>
          <TableRow>
          <TableCell className="TableCell1" align="center">Risk</TableCell>
            <TableCell className="TableCell1" align="center">Bonds%</TableCell>
            <TableCell className="TableCell1" align="center">Large Cap %</TableCell>
            <TableCell className="TableCell1" align="center">Mid Cap %</TableCell>
            <TableCell className="TableCell1" align="center">Foreign %</TableCell>
            <TableCell className="TableCell1" align="center">Small %</TableCell>
          </TableRow>
        </TableHead><TableBody>

      { this.state.information.map((cliente, key) =>
          <TableRow key={key} style={{backgroundColor:cliente.state===false ? 'white':'yellow'}}>
            <TableCell align="center">{cliente.risk} </TableCell>
            <TableCell align="center">{cliente.bonds} </TableCell>
            <TableCell align="center">{cliente.large} </TableCell>
            <TableCell align="center">{cliente.mid} </TableCell>
            <TableCell align="center">{cliente.foreign} </TableCell>
            <TableCell align="center">{cliente.small} </TableCell>
          </TableRow>  ) }

      </TableBody></Table>
    </Grid>
      <Grid item xs={6}>
      <div  style={{marginLeft:'150px',width: '45%', height:'50px',aling:'center' }}>
      <Doughnut data={this.state.data} options={this.state.opciones} />
      </div>
</Grid>
      </Grid>
    </div>
  );
}

}
export default Principal;
