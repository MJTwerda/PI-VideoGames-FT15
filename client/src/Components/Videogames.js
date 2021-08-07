import React from 'react';

export default function Videogames() {

    return(
        <div>
            <h3>Acá deben mostrarse todos los Videogames</h3>
            <input type='text' placeholder='Buscar videogames'/>
            <input type='submit' value='Buscar' />

            <label for='filtrar'>Filtrar por</label>
            <select id='filtrar' name='filtrar'>
                <option value='' selected='selected'>-selecciona-</option>
                <option value='genre'>Genre</option>
                <option value='api'>Api</option>
                <option value='myGames'>My Games</option>
            </select>

            <label for='order'>Ordenar según</label>
            <select id='order' name='order'>
                <option value='' selected='selected'>-selecciona-</option>
                <option value='forNameAsc'>Nombre ASC</option>
                <option value='forNameDesc'>Nombre DESC</option>
                <option value='forRatingAsc'>Rating ASC</option>
                <option value='forRatingDesc'>Rating DESC</option>
            </select>
        </div>
    )
}

//export default Videogames;