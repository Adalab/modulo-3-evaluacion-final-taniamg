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
  const [filterSpecies, setFilterSpecies] = useState('all');
  const routeCharacter = useRouteMatch('/character/:id');

  const characterId = routeCharacter !== null ? routeCharacter.params.id : '';
  const clickCharacter = character.find(
    (character) => character.id === parseInt(characterId)
  );
  console.log(clickCharacter);

  //call to api service
  useEffect(() => {
    api.callToApi().then((initialData) => {
      console.log(initialData);
      setCharacter(initialData);
    });
  }, []);

  //declaration handle function

  const handleFilterName = (ev) => {
    setFilterName(ev.currentTarget.value);
  };
  const handleFilterSpecies = (ev) => {
    setFilterSpecies(ev.currentTarget.value);
  };

  //flter characters by name or species
  const filterCharacters = character
    /*.filter((each) =>
      each.name.toLocalLowerCase().includes(filterName.toLocalLowercase())
    )*/

    .filter(
      (eachCharacter) =>
        filterSpecies === 'all' || eachCharacter.species === filterSpecies
    );

  return (
    <div className="main_container">
      <Header />
      <main>
        <section>
          <Filters
            filterName={filterName}
            filterSpecies={filterSpecies}
            handleFilterName={handleFilterName}
            handleFilterSpecies={handleFilterSpecies}
          />
        </section>
        <section>
          <CharacterList character={filterCharacters} />
        </section>

        <Switch>
          <Route path="/character/:id">
            <section>
              <CharacterDetail character={clickCharacter} />
            </section>
          </Route>
          <Route exact path="/"></Route>
          <Route>
            <setion>
              <p>Ningún personaje en este universo!!</p>
            </setion>
          </Route>
        </Switch>
      </main>

      <Footer className="footer" />
    </div>
  );
}

export default App;
