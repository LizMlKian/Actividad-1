import React, { Component } from "react";
import logo from "./logo.svg";
import "./index.css";
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
registerLocale("esp", es);


class App extends Component {
state={
  fecha: new Date()
}

onChange=fecha=>{
  this.setState({fecha: fecha});
}

mostrarFecha = fecha=>{
  const options ={weekday: 'long', year: 'numeric', month: 'long', day:'numeric'};
  alert(fecha.toLocaleDateString('es-ES', options));
}

  render() {
    return (
      <>
        <div className="contenedor">
          <div className="center">
           <DatePicker selected={this.state.fecha} onChange={this.onChange} locale="esp" classname="pickers" dateFormat="dd 'de' MMMM 'del' yyyy"/>
           <br /><br />

           <input type="button" value="Elegir fecha" className="btn btn-primary" onClick={()=>this.mostrarFecha(this.state.fecha)}/>
          </div>
        </div>
      </>
    );
  }
}

export default App;
