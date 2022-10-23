import React  from 'react';

function Banner({title, src, alt}) {
    return (
        <div id="banniere">
          <h2>{title}</h2>
          <img className="background" src={src} alt={alt}/>
        </div>
    )
}

export default Banner