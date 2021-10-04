import FilterByName from './FilterByName';
import FilterBySpecie from './FilterBySpecie';
import FilterByGender from './FilterByGender';
import '../styles/layout/Filters.scss';

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
          filterGender={props.filterGender}
          handleFilterGender={props.handleFilterGender}
        />
      </form>
    </div>
  );
};

export default Filters;
