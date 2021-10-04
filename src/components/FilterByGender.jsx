import '../styles/layout/Filters.scss';

const FilterByGender = (props) => {
  return (
    <section className="filter">
      <label htmlFor="filterName" className="filters_form--text">
        Género
      </label>
      <select
        className="filters_input filter_input-gender"
        id="gender"
        name="gender"
        onChange={props.handleFilterGender}
        value={props.filterGender}
      >
        <option className="filters_input-option" value="all">
          All
        </option>
        <option className="filters_input-option" value="Male">
          Hombre
        </option>
        <option className="filters_input-option" value="Female">
          Mujer
        </option>
      </select>
    </section>
  );
};

export default FilterByGender;
