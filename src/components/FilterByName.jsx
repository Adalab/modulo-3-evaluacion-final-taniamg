import '../styles/layout/Filters.scss';

const FilterByName = (props) => {
  return (
    <section className="filter">
      <label htmlFor="filterName" className="filters_form--text">
        ¿Qué personaje quieres buscar?
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="filters_input"
        placeholder="Ej: Rick alien"
        onChange={props.handleFilterName}
        value={props.filterName}
      />
    </section>
  );
};

export default FilterByName;
