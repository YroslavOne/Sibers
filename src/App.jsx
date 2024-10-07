import './App.css';
import MainBlock from './components/MainBlock/MainBlock';
import Menu from './components/Menu/Menu';
import FeaturedHouse from './components/FeaturedHouse/FeaturedHouse'
import BlockGallery from './components/BlockGallery/BlockGallery';
import Reviews from './components/Reviews/Reviews';
import Partners from './components/Partners/Partners';
import Subscription from './components/Subscription/Subscription';

function App() {
  return (
    <>
      <Menu />
      <MainBlock />
			<FeaturedHouse/>
			<BlockGallery/>
			<Reviews/>
			<Partners/>
      <Subscription/>
    </>
  );
}

export default App;
