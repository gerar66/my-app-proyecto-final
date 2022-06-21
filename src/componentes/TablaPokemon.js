import React from 'react'



const TablaPokemon = ({resultados}) => {
  return (
    <div >
        <table>
          <tr style={{backgroundColor:"red"}}>
            <td>nombre</td>
            <td>img</td>
         </tr>
         
         {resultados?.map(resultado => {
          return(
            <div>
          <tr>
            <td>{resultado.name}</td>
            <td>{resultado.url}</td>
         </tr>
         </div>
          )
         })}
        </table>
    </div>
  )
}

export default TablaPokemon