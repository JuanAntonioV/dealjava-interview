import './Home.css';
import { Hero, Koleksi, NewDeal, Populer } from '../../components';

const Home = () => {
  return (
    <main>
      <Hero />
      <NewDeal />
      <Koleksi />
      <Populer />
    </main>
  );
};

export default Home;
