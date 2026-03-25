import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router';

const PageNotFound = () => {
    const navigation = useNavigate();
    return (
        <div>
            <NavBar/>
            <div className='bg-gray-200 text-center p-15 text-black space-y-3'>
                <img src="error-404.png" alt="" className='mx-auto w-100'/>
                <p className='text-2xl font-bold'>Oops, page not found!</p>
                <p className='font-thin'>The page you are looking for is not available.</p>
                <button className='btn bg-blue-400 border-0 hover:bg-blue-600' onClick={()=>navigation(-1)}>Go Back</button>
            </div>
            <Footer/>
        </div>
    );
};

export default PageNotFound;