import './App.css';
import Nav from './components/Nav';
import PageOne from './pages/PageOne';  

const App = () => {
  return (
    <div>
      <Nav/>
      <div className="content">
        <PageOne/>
        
        </div>
    </div>
  );
};

export default App;

