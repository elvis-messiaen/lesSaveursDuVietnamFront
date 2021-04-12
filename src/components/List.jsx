import  {React}  from 'react';
import Card from './Card'; 

const List = props => {
    const { data, category } = props
    const grocery = data[category]
    return(
        <div className="col-sm">
            <div className="row">
                {grocery.map(grocery => <Card key={grocery.ref}  grocery={grocery}/>)}
            </div>
        </div>
    )
}
export default List;