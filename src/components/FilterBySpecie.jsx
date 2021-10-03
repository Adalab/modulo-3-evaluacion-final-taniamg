import '../styles/Filters.scss';

const FilterBySpecies = (props) => {
  return (
    <section className="filter">
      <label htmlFor="filterSpecies" className="filters_form--text">
        ¿Qué especie buscas?
      </label>
      <select
        className="filters_input"
        id="species"
        name="species"
        onChange={props.handleFilterSpecies}
        value={props.filterSpecies}
      >
        <option className="filters_input-option" value="all">
          All
        </option>
        <option className="filters_input-option" value="Human">
          Human
        </option>
        <option className="filters_input-option" value="Alien">
          Alien
        </option>
        <option className="filters_input-option" value="Humanoid">
          Humanoid
        </option>
        <option className="filters_input-option" value="Robot">
          Robot
        </option>
      </select>
    </section>
  );
};

export default FilterBySpecies;
