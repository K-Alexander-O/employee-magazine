import "./app-filter.css";

const AppFilter = ({filter, onFilterSelect }) => {
    return (
        <div className="btn-group">
            <button 
            className= {`btn ${filter === "all" ? "btl-light" : "btn-outline-light"}`}
            type="button"
            onClick={() => onFilterSelect ("all")}>
                Все сотрудники
            </button>
            <button 
            className={`btn ${filter === "rise" ? "btl-light" : "btn-outline-light"}`}
            type="button"
            onClick={() => onFilterSelect ("rise")}>
                На повышение
            </button>
            <button 
            className={`btn ${filter === "moreThan1000" ? "btl-light" : "btn-outline-light"}`}
            type="button"
            onClick={() => onFilterSelect ("moreThan1000")}>
               З/П больше 1000$
            </button>
        </div>
    );
}

export default AppFilter;