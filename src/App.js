import React, {useState, useEffect } from 'react';
import './App.css';
//import { format } from 'da';

function App() {
  const [atmosfericas, setAtmosfericas] = useState(null);
  const [valor, setValor] = useState(null);

  useEffect(() => {
    fetch('https://api.datos.gob.mx/v1/condiciones-atmosfericas').then(res =>{
      return res.json()
    }).then(res =>{
      //console.log('Respuesta...', res.results);
      setAtmosfericas(res.results);
    })
  })
  const formato = (value) =>{
    const fecha = value;
    return fecha;
  };

  const idEspecifico = () =>{
    
  };
  //console.log(atmosfericas);

  return (
    <div className="App">
      <table className="table">
        <thead className='filaHead'>
          <tr>
            <th>_id</th>
            <th>cityId</th>
            <th>name</th>
            <th>state</th>
            <th>probability</th>
            <th>relativehu</th>
            <th>Lastreporttime</th>
            <th>LLUEVE</th>
          </tr>
        </thead>
        <tbody className='filaBody'>
          {atmosfericas &&
            atmosfericas.slice(0,10).map((clima) =>  {
              return (
                <tr key={clima.id}>
                  <td onClick={idEspecifico}> <a>{clima.id}</a> </td>
                  <td>{clima.cityid}</td>
                  <td>{clima.name}</td>
                  <td>{clima.state}</td>
                  <td>{clima.probabilityofprecip}</td>
                  <td>{clima.relativehumidity}</td>
                  <td>{formato(clima.lastreporttime) }</td>
                  <td>{ clima.relativehumidity >50 ||  clima.probabilityofprecip >60 ? 'Llueve' : 'No llueve'  }</td>
                </tr>
              );
              
            })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
