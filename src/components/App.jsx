import '../styles/main.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';

function App() {
  return (
    <div className="main_container">
      <Header />
      <Footer className="footer" />
    </div>
  );
}

export default App;
