import React  from 'react';

function Error() {
    return (
        <div id='error'>
            <p id='errorcode'>404</p>
            <p id='oups'>Oups! La page que vous demandez n'existe pas.</p>
            <a href='/' id='backhome'>Retourner à la page d'accueil</a>
        </div>
    )
}
 
export default Error