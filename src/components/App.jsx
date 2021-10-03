import '../styles/main.scss';
import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import api from '../services/Api';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Filters from './Filters';

function App() {
  const [character, setCharacter] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterSpecies, setFilterSpecies] = useState('');
  const routeCharacter = useRouteMatch('/character/:id');

  const characterId = routeCharacter !== null ? routeCharacter.params.id : '';
  const clickCharacter = character.find(
    (character) => character.id === parseInt(characterId)
  );

  //call to api service
  useEffect(() => {
    api.callToApi().then((initialData) => {
      setCharacter(initialData);
    });
  }, []);

  //declaration handle function

  const handleFilterName = (value) => {
    setFilterName(value);
  };
  const handleFilterSpecies = (value) => {
    setFilterSpecies(value);
  };

  //flter characters by name or species
  /* const filterCharacters = character.filter((eachCharacter) =>
    eachCharacter.name
      .toLocalLowerCase()
      .includes(filterName.toLocalLowercase())
  );*/

  /*character.filter((eachCharacter) =>
    eachCharacter.species
      .toLocalLowerCase()
      .includes(filterSpecies.toLocalLowerCase())
  );*/

  return (
    <div className="main_container">
      <Header />
      <main>
        <Switch>
          <Route exact path="/character/:id">
            <section>
              <CharacterDetail character={clickCharacter} />
            </section>
          </Route>
          <Route exact path="/">
            <section>
              <Filters
                filterName={filterName}
                filterSpecies={filterSpecies}
                handleFilterName={handleFilterName}
                handleFilterSpecies={handleFilterSpecies}
              />
            </section>
            <section>
              <CharacterList character={character} />
            </section>
          </Route>
        </Switch>
      </main>

      <Footer className="footer" />
    </div>
  );
}

export default App;
