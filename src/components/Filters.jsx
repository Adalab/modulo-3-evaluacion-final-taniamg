import FilterByName from './FilterByName';
import FilterByspecies from './FilterBySpecie';

const Filters = (props) => {
  return (
    <div>
      <form>
        <FilterByName
          filterName={props.filterName}
          handleFilters={props.handleFilterName}
        />
        <FilterByspecies
          filterSpecies={props.filterSpecies}
          handleFilters={props.handleFilterSpecies}
        />
      </form>
    </div>
  );
};

export default Filters;
