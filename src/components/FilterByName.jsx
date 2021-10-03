import '../styles/Filters.scss';

const FilterByName = (props) => {
  const handleFilterName = (ev) => {
    ev.preventDefault();
    props.handleFilterName(ev.currentTarget.value);
  };
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
        onChange={handleFilterName}
        value={props.filterName}
      />
    </section>
  );
};

export default FilterByName;
