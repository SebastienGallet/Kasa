import React from "react";
import { useParams } from "react-router-dom";
import Carroussel from "../components/Carroussel/carroussel";
import Collapse from "../components/Collapse/Collapse";
import InfoLodge from "../components/Lodge Infos/infolodge";
// import Slideshow from "../components/Slideshow/slideshow";
import lodgingList from "../datas/logements.json";


function Logement() {
  let {id} = useParams();
  const lodging = lodgingList.find(log => log.id === id);


    return (
      <div id="oneLodge">
        <Carroussel/>
        {/* <Slideshow/> */}
        <InfoLodge/>
        <div id="details">
          <Collapse
            title="Description"
            content= {lodging.description}
          />
          <Collapse
            title="Equipement"
            content= {lodging.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
          />
        </div>
      </div>
    )
  }
  
  export default Logement
