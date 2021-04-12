import { React } from 'react';


const Card =  props => {
    const {grocery} = props
    return(
        <div className = "col-sm-4 ">
            <div className="card div-card">
                <img 
                width  ="120"
                height ="150"
                src={process.env.PUBLIC_URL + `./assets/${grocery.category}/${grocery.image} `} alt={grocery.name} />
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <h4>{grocery.name}</h4>
                        </div>
                        <div className="col-sm-6">
                            <p>
                                {grocery.price}€ / {grocery.unit}
                            </p>
                            <button className="btn btn-sm">voir le produit</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};
export default Card;