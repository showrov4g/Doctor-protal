
import Header from '../Components/Header';
import SpecificityMenu from '../Components/SpecificityMenu';
import TopDoctors from '../Components/TopDoctors';

const Home = () => {
    return (
        <div>
            <Header/>
            <SpecificityMenu></SpecificityMenu>
            <TopDoctors></TopDoctors>
        </div>
    );
};

export default Home;