import EmployersListItem from "../employers-list-item/employers-list-item";

import "./employers-list.css"

const EmployersList = ({data, onDelete}) => {

    const elements = data.map(item => {
      const {id, ...itemProps} = item
        return (
            <EmployersListItem
             key={id} 
             name={itemProps.name} 
             salary={itemProps.salary} 
             increase={itemProps.increase}
             onDelete = {() => onDelete(id)}/>
            // {...item}
        )
    })



  return (
    <ul className="app-list list-group">
        {elements}
    </ul>
  );
};

export default EmployersList
