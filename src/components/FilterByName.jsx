const FilterByName = (props) => {
  const handleFilterName = (ev) => {
    ev.preventDefault();
    props.handleFilterName(ev.currentTarget.value);
  };
  return (
    <>
      <label htmlFor="filterName">¿Qué personaje quieres buscar?</label>
      <input
        type="text"
        id="name"
        name="name"
        className="filters_filter--by__name"
        placeholder="Ej: Rick alien"
        onChange={handleFilterName}
        value={props.filterName}
      />
    </>
  );
};

export default FilterByName;
