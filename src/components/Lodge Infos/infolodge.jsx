import React from "react"
import { useParams } from "react-router-dom"
import lodgingList from "../../datas/logements.json"
import starOn from "../../assets/starOn.png"
import starOff from "../../assets/starOff.png"

function InfoLodge () {
    let {id} = useParams()
    const lodging = lodgingList.find(log => log.id === id)

    const ratingLodge = []
    for (let i = 1; i <= 5; i++) {
      if (i <= lodging.rating) {
        ratingLodge[i] = true
      } else {
        ratingLodge[i] = false
      }
    }

    return (<div id="infoLodge">

          <div id="nameLodge">
            <h2>{lodging.title}</h2>
            <p>{lodging.location}</p>
            <ul id="tags">
              {lodging.tags.map((tag) => (
                <li key={tag+lodging.id}>{tag}</li>
              ))}
            </ul>
          </div>
          
          <div id="propRating">
            <div id="proprio">
              <p>{lodging.host.name}</p>
              <img src={lodging.host.picture} alt="propriétaire"></img>
            </div>
              <div id="stars">
                {ratingLodge.map((star, index) =>
                <img className="star" src={star ? starOn : starOff} alt="notation" key={ratingLodge+lodging.id+index}/>)}
              </div>
          </div>
        </div>)
        }

        export default InfoLodge