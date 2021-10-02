import '../styles/main.scss';
import { useEffect, useState } from 'react';
import CallToApi from '../services/Api';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CharacterList from './CharacterList';
import Filters from './Filters';

function App() {
  const [characters, setCharacter] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterSpecies, setFilterSpecies] = useState('');

  //set order api list
  characters.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });

  //call to api service
  useEffect(() => {
    CallToApi().then((response) => {
      setCharacter(response);
    });
  }, [characters]);

  const handleFilterName = (ev) => {
    ev.preventDefault();
    setFilterName(ev.currentTarget.value);
  };
  const handleFilterSpecies = (ev) => {
    ev.preventDefault();
    setFilterSpecies(ev.currentTarget.value);
  };

  /*const filterCharacters = characters.filter((character) =>
    character.name.toLocalLowerCase().includes(filterName.toLocalLowercase())
  );*/

  return (
    <div className="main_container">
      <Header />
      <main>
        <Filters
          filterName={filterName}
          filterSpecies={filterSpecies}
          handleFilterName={handleFilterName}
          handleFilterSpecies={handleFilterSpecies}
        />
        <CharacterList characters={characters} />
      </main>

      <Footer className="footer" />
    </div>
  );
}

export default App;
