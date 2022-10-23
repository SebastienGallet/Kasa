import React from "react"
import { useState } from "react"
import flecheCollapse from "../../assets/flecheCollapse.png"


function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
      <div className="collapse">
        <div className="titleCollapse" onClick={() => setIsOpen(false)} >
          {title}
          <img src={flecheCollapse} className="flecheOpen" alt="fleche"/>
        </div>
        <div className="contenuCollapse">{content}</div>
      </div>
      
    ) : (
      <div className="collapse">
          <div className="titleCollapse" onClick={() => setIsOpen(true)}>
          {title}
          <img src={flecheCollapse} className="flecheClose" alt="fleche"/>
        </div>
      </div>
    )
  }
  
  export default Collapse