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
import TextField from '@material-ui/core/TextField';

class Secundario extends Component {
      constructor() {
      super();
      this.state={
        nombre:[],
            data:[],
            name:['Bonds $','Large Cap$','Mid Cap $', 'Foreign $','Small Cap $'],
            bond:'',
            bondDifference:'',
            bondNew:'',
            large:'',
            largeDifference:'',
            largeNew:'',
            mid:'',
            midDifference:'',
            midNew:'',
            foreign:'',
            foreignDifference:'',
            foreignNew:'',
            small:'',
            smallDifference:'',
            smallNew:'',
      }
      this.validarCampos = this.validarCampos.bind(this);
      this.calcular = this.calcular.bind(this);
      this.setBond = this.setBond.bind(this);
      this.setBondDifference = this.setBondDifference.bind(this);
      this.setBondNew = this.setBondNew.bind(this);
      this.setLarge = this.setLarge.bind(this);
      this.setLargeDifference = this.setLargeDifference.bind(this);
      this.setLargeNew = this.setLargeNew.bind(this);
      this.setMid = this.setMid.bind(this);
      this.setMidDifference = this.setMidDifference.bind(this);
      this.setMidNew = this.setMidNew.bind(this);
      this.setForeign = this.setForeign.bind(this);
      this.setForeignDifference = this.setForeignDifference.bind(this);
      this.setForeignNew = this.setForeignNew.bind(this);
      this.setSmall = this.setSmall.bind(this);
      this.setSmallDifference = this.setSmallDifference.bind(this);
      this.setSmallNew = this.setSmallNew.bind(this);
}

componentWillMount() {
  const datos = this.props.location.state;
  this.state.data = datos;
  console.log(this.state.data);
}

validarCampos = () => {
      var resultado = true;
      if( this.state.mid.length> 0 && this.state.bond.length> 0
          && this.state.large.length> 0 && this.state.foreign.length> 0 && this.state.small.length> 0) {
        resultado = false;
      }

      return resultado;
    }

setBond(eve){
    this.setState({bond: eve.target.value});
}
setBondDifference(eve){
    this.setState({bondDifference: eve.target.value});
}
setBondNew(eve){
    this.setState({bondNew: eve.target.value});
}

setLarge(eve){
    this.setState({large: eve.target.value});
}
setLargeDifference(eve){
    this.setState({largeDifference: eve.target.value});
}
setLargeNew(eve) {
    this.setState({largeNew: eve.target.value});
}

setMid(eve){
    this.setState({mid: eve.target.value});
}
setMidDifference(eve){
    this.setState({midDifference: eve.target.value});
}
setMidNew(eve){
    this.setState({midNew: eve.target.value});
}

setForeign(eve){
    this.setState({foreign: eve.target.value});
}
setForeignDifference(eve){
    this.setState({foreignDifference: eve.target.value});
}
setForeignNew(eve){
    this.setState({foreignNew: eve.target.value});
}

setSmall(eve){
    this.setState({small: eve.target.value});
}
setSmallDifference(eve){
    this.setState({smallDifference: eve.target.value});
}
setSmallNew(eve){
    this.setState({smallNew: eve.target.value});
}

calcular(){
var total = parseFloat(this.state.bond) + parseFloat(this.state.mid) + parseFloat(this.state.large) + parseFloat(this.state.foreign) + parseFloat(this.state.small);
console.log(total);
var bondNew = (this.state.data.bonds/100) * total;
var midNew = (this.state.data.mid/100) * total;
var largeNew = (this.state.data.large/100) * total;
var foreignNew = (this.state.data.foreign/100)*total;
var smallNew = (this.state.data.small/100)*total;
this.setState({bondNew:bondNew, midNew:midNew, largeNew:largeNew, foreignNew:foreignNew, smallNew:smallNew});

var bondDifference = bondNew - parseFloat(this.state.bond);
var midDifference = midNew - parseFloat(this.state.mid);
var largeDifference = largeNew - parseFloat(this.state.large);
var foreignDifference = foreignNew - parseFloat(this.state.foreign);
var smallDifference = smallNew - parseFloat(this.state.small);

this.setState({bondDifference:bondDifference,midDifference:midDifference,largeDifference:largeDifference,foreignDifference:foreignDifference,smallDifference:smallDifference})
}



render(){

  return (
    <div style={{marginLeft:"2%"}}>
    <h2 style={{ color:"blue" }}>
      Personalized Portfolio
    </h2>

    <h3>
      Risk Level {this.state.data.risk}
    </h3>

    <Table size='small' style={{width:"60%"}}><TableHead>
              <TableRow>
                <TableCell className="TableCell1" align="center">Bonds</TableCell>
                <TableCell className="TableCell1" align="center">Large Cap</TableCell>
                <TableCell className="TableCell1" align="center">Mid Cap</TableCell>
                <TableCell className="TableCell1" align="center">Foreign</TableCell>
                <TableCell className="TableCell1" align="center">Small Cap</TableCell>
              </TableRow>
            </TableHead><TableBody>

              <TableRow>
                <TableCell align="center">{this.state.data.bonds} %</TableCell>
                <TableCell align="center">{this.state.data.large} %</TableCell>
                <TableCell align="center">{this.state.data.mid} %</TableCell>
                <TableCell align="center">{this.state.data.foreign} %</TableCell>
                <TableCell align="center">{this.state.data.small} %</TableCell>
              </TableRow>

          </TableBody></Table>
          <br/>
          <Grid container>
          <Grid item xs={5}>
          <h3>
            Por favor ingrese los datos
          </h3>
          </Grid>
          <Grid item xs={5}>
          <Button variant="contained" color="primary" style={{marginTop:"15px"}} disabled={this.validarCampos()} onClick={this.calcular}>Calcular </Button>
          </Grid>
          </Grid>
          <br/>
          <Table size='small' style={{width:"70%"}}><TableHead>
                    <TableRow >
                    <TableCell className="TableCell1" align="center" colSpan={2}>Cantidad Actual</TableCell>
                      <TableCell className="TableCell1" align="center">Diferencia</TableCell>
                      <TableCell className="TableCell1" align="center">Nuevo monto</TableCell>
                    </TableRow>
                  </TableHead><TableBody>
                  <TableRow >
                  <TableCell component="th" scope="row"  align="center">
                   Bonds $
                   </TableCell>
                   <TableCell component="th" scope="row"  align="center">
                    <TextField id="outlined-basic" value={this.state.bond} onChange={this.setBond}
                    variant="outlined" />
                    </TableCell>
                    <TableCell component="th" scope="row"  align="center">
                     <TextField id="outlined-basic" variant="outlined" value={this.state.bondDifference}
                  onChange={this.setBondDifference} disabled />
                     </TableCell>
                     <TableCell component="th" scope="row"  align="center">
                      <TextField id="outlined-basic" variant="outlined" value={this.state.bondNew}
                  onChange={this.setBondNew} disabled />
                      </TableCell>
                    </TableRow>

                    <TableRow >
                    <TableCell component="th" scope="row"  align="center">
                     Large Cap$
                     </TableCell>
                     <TableCell component="th" scope="row"  align="center">
                      <TextField id="outlined-basic" value={this.state.large}
                  onChange={this.setLarge}
                      variant="outlined" />
                      </TableCell>
                      <TableCell component="th" scope="row"  align="center">
                       <TextField id="outlined-basic" variant="outlined" disabled value={this.state.largeDifference}
                  onChange={this.setLargeDifference} />
                       </TableCell>
                       <TableCell component="th" scope="row"  align="center">
                        <TextField id="outlined-basic" variant="outlined" disabled value={this.state.largeNew}
                  onChange={this.setLargeNew} />
                        </TableCell>
                      </TableRow>

                      <TableRow >
                      <TableCell component="th" scope="row"  align="center">
                       Mid Cap $
                       </TableCell>
                       <TableCell component="th" scope="row"  align="center">
                        <TextField id="outlined-basic" value={this.state.mid}
                  onChange={this.setMid}
                        variant="outlined" />
                        </TableCell>
                        <TableCell component="th" scope="row"  align="center">
                         <TextField id="outlined-basic" variant="outlined" disabled value={this.state.midDifference}
                  onChange={this.setMidDifference} />
                         </TableCell>
                         <TableCell component="th" scope="row"  align="center">
                          <TextField id="outlined-basic" variant="outlined" disabled value={this.state.midNew}
                  onChange={this.setMidNew} />
                          </TableCell>
                        </TableRow>

                        <TableRow >
                        <TableCell component="th" scope="row"  align="center">
                         Foreign $
                         </TableCell>
                         <TableCell component="th" scope="row"  align="center">
                          <TextField id="outlined-basic" value={this.state.foreign}
                  onChange={this.setForeign}
                          variant="outlined" />
                          </TableCell>
                          <TableCell component="th" scope="row"  align="center">
                           <TextField id="outlined-basic" variant="outlined" disabled value={this.state.foreignDifference}
                  onChange={this.setForeignDifference} />
                           </TableCell>
                           <TableCell component="th" scope="row"  align="center">
                            <TextField id="outlined-basic" variant="outlined" disabled value={this.state.foreignNew}
                  onChange={this.setForeignNew} />
                            </TableCell>
                          </TableRow>

                          <TableRow >
                          <TableCell component="th" scope="row"  align="center">
                           Small Cap $
                           </TableCell>
                           <TableCell component="th" scope="row"  align="center">
                            <TextField id="outlined-basic" value={this.state.small}
                  onChange={this.setSmall}
                            variant="outlined" />
                            </TableCell>
                            <TableCell component="th" scope="row"  align="center">
                             <TextField id="outlined-basic" variant="outlined" disabled value={this.state.smallDifference}
                  onChange={this.setSmallDifference} />
                             </TableCell>
                             <TableCell component="th" scope="row"  align="center">
                              <TextField id="outlined-basic" variant="outlined" disabled value={this.state.smallNew}
                  onChange={this.setSmallNew} />
                              </TableCell>
                            </TableRow>
                </TableBody>
                </Table>

    </div>
  );
}

}
export default Secundario;
