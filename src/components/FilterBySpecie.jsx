const FilterBySpecies = (props) => {
  const handleFilterSpecies = (ev) => {
    ev.preventDefault();
    props.handleFilterSpecies(ev.currentTarget.value);
  };
  return (
    <>
      <label htmlFor="filterSpecies">¿Qué especie buscas?</label>
      <input
        className="filters_filter--by__species"
        placeholder="Ej: Human"
        type="text"
        id="species"
        name="species"
        onChange={handleFilterSpecies}
        value={props.filterSpecies}
      />
    </>
  );
};

export default FilterBySpecies;
