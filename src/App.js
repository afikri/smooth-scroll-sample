import { Home, About, Contact, Project } from './pages/'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
