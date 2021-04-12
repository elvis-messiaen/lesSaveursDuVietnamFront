import React, { useState } from 'react';
import "./SideMenu.css";

const SideMenu = () => {
    const links = ["Café Grains", "Café Moulu", "Accessoires", "Recettes","Thé"]

    const [category, setCategory] = useState(0);
    const loadCategory = i => { setCategory(i); }
    return(
        <div className="col-sm-2">
            <ul className="categorie h5 ">
               {links.map((link, index)=>{
                  return(<li className="p-2 text-white" key= {index} onClick={() => loadCategory(index)}>{link}</li>     
                  ) 
               })} 
            </ul>
        </div>
    )
}

export default SideMenu;