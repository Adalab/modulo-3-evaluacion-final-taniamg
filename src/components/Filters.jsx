import FilterByName from './FilterByName';
import FilterBySpecie from './FilterBySpecie';
import '../styles/Filters.scss';

const Filters = (props) => {
  return (
    <div>
      <form className="filters_form">
        <FilterByName
          filterName={props.filterName}
          handleFilterName={props.handleFilterName}
        />
        <FilterBySpecie
          filterSpecies={props.filterSpecies}
          handleFilterSpecies={props.handleFilterSpecies}
        />
      </form>
    </div>
  );
};

export default Filters;
