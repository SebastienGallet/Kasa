import React from "react";
import { useParams } from "react-router-dom";
import Collapse from "../components/Collapse/Collapse";
import InfoLodge from "../components/Lodge Infos/infolodge";
import Slideshow from "../components/Slideshow/slideshow";
import lodgingList from "../datas/logements.json";
import Error from "../components/Error/error";


function Logement() {
  let {id} = useParams();
  const lodging = lodgingList.find(log => log.id === id);

  if (lodgingList.find(log => log.id === id)) {
    return (
      <div id="oneLodge">
        <Slideshow/>
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
    
  } else {
    return (<Error/>)
  }
    
  }
  
  export default Logement
