const FilterByName = (props) => {
  return (
    <>
      <label htmlFor="filterName">¿Qué personaje quieres buscar?</label>
      <input
        className="filters_filter--by__name"
        placeholder="Ej: Rick alien"
        type="text"
        id="name"
        name="name"
        onChange={props.handleFilterName}
        value={props.filterName}
      />
    </>
  );
};

export default FilterByName;
