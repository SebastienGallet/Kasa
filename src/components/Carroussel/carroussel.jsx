import React from 'react';
import ImageGallery from 'react-image-gallery';
import { useParams } from "react-router-dom"
import lodgingList from "../../datas/logements.json"

function Carroussel () {
  let {id} = useParams()
  const lodging = lodgingList.find(log => log.id === id)
  const lodgingPictures = lodging.pictures
  const images = [];


  for (let i = 0; i < lodgingPictures.length; i++) {
    images.push({original:  lodgingPictures[i]},);
  }

  return (<ImageGallery items={images} />)


      
}

export default Carroussel