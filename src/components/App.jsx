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
  const [filterGender, setFilterGender] = useState('all');
  const routeCharacter = useRouteMatch('/character/:id');

  const characterId = routeCharacter !== null ? routeCharacter.params.id : '';
  const clickCharacter = character.find(
    (character) => character.id === parseInt(characterId)
  );

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
  const handleFilterGender = (ev) => {
    setFilterGender(ev.currentTarget.value);
  };
  const handleResetName = () => {
    setFilterName('');
  };

  //flter characters by name or species
  const filterCharacters = character
    .sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    })
    .filter((each) =>
      each.name.toLocaleLowerCase().includes(filterName.toLocaleLowerCase())
    )

    .filter(
      (eachCharacter) =>
        filterSpecies === 'all' || eachCharacter.species === filterSpecies
    )
    .filter(
      (eachCharacter) =>
        filterGender === 'all' || eachCharacter.gender === filterGender
    );

  return (
    <div className="main_container">
      <Header />
      <main>
        <Switch>
          <Route path="/character/:id">
            <section>
              <CharacterDetail character={clickCharacter} />
            </section>
          </Route>
          <Route exact path="/">
            <section>
              <Filters
                filterName={filterName}
                filterSpecies={filterSpecies}
                filterGender={filterGender}
                handleFilterName={handleFilterName}
                handleFilterSpecies={handleFilterSpecies}
                handleFilterGender={handleFilterGender}
              />
            </section>
            <section>
              <CharacterList
                character={filterCharacters}
                handleResetName={handleResetName}
              />
            </section>
          </Route>
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
