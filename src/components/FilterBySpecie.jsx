const FilterBySpecies = (props) => {
  return (
    <>
      <label htmlFor="filterSpecies">¿Qué especie buscas?</label>
      <input
        className="filters_filter--by__species"
        placeholder="Ej: Human"
        type="text"
        id="species"
        name="species"
        onChange={props.handleFilterSpecies}
        value={props.filterSpecies}
      />
    </>
  );
};

export default FilterBySpecies;
