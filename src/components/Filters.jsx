import FilterByName from './FilterByName';
import FilterBySpecie from './FilterBySpecie';
import FilterByGender from './FilterByGender';
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
        <FilterByGender
          filterSpecies={props.filterGender}
          handleFilterSpecies={props.handleFilterGender}
        />
      </form>
    </div>
  );
};

export default Filters;
