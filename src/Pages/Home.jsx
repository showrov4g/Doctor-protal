
import Banner from '../Components/Banner';
import Header from '../Components/Header';
import SpecificityMenu from '../Components/SpecificityMenu';
import TopDoctors from '../Components/TopDoctors';

const Home = () => {
    return (
        <div>
            <Header/>
            <SpecificityMenu></SpecificityMenu>
            <TopDoctors></TopDoctors>
            <Banner></Banner>
        </div>
    );
};

export default Home;