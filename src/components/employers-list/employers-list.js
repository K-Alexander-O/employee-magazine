import EmployersListItem from "../employers-list-item/employers-list-item";

import "./employers-list.css";

const EmployersList = ({ data, onDelete, onToggleIncrease, onToggleRise }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployersListItem
        key={id}
        name={itemProps.name}
        salary={itemProps.salary}
        increase={itemProps.increase}
        rise={itemProps.rise}
        onDelete={() => onDelete(id)}
        onToggleIncrease={() => onToggleIncrease(id)}
        onToggleRise={() => onToggleRise(id)}
      />
      // {...item}
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployersList;
