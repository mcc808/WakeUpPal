import {Link} from 'react-router-dom';



const Home = () => {
    return(
        <div className="Home">

        <Link className='btn btn-primary' to ="/alarm">Set up your alarm! &gt; </Link>
        </div>
    );
};

export default Home; 