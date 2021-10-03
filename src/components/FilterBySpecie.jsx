import '../styles/Filters.scss';

const FilterBySpecies = (props) => {
  const handleChangeSpecies = (ev) => {
    ev.preventDefault();
    props.handleFilterSpecies(ev.currentTarget.value);
  };
  return (
    <section className="filter">
      <label htmlFor="filterSpecies" className="filters_form--text">
        ¿Qué especie buscas?
      </label>
      <select
        className="filters_input"
        id="species"
        name="species"
        onChange={handleChangeSpecies}
        value={props.filterSpecies}
      >
        <option value="all">All</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
        <option value="Humanoid">Humanoid</option>
        <option value="Robot">Robot</option>
      </select>
    </section>
  );
};

export default FilterBySpecies;
