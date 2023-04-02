// import react from 'react';
import '../Styles/Home.css';
import Introduction from '../Components/Introduction';
import Projects from '../Components/Projects';
import Footer from '../Components/Footer';
import Education from '../Components/Education';

function Home() {
    return (<>
    <Introduction/>
    <Education/>
    <Projects/>
    <Footer/>
    </>);
};
export default Home;