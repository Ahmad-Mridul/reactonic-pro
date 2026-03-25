import { useNavigate } from "react-router";

const AppNotFound = () => {
    const navigation = useNavigate();
    return (
        <div className='bg-gray-100 text-center p-15 text-black space-y-3'>
            <img src="/app-error.png" alt="" className="mx-auto w-100"/>
            <p className='text-2xl font-bold'>OPPS!! APP NOT FOUND</p>
            <p className='font-thin'>The App you are requesting is not found on our system.  please try another apps</p>
            <button className='btn bg-blue-400 border-0 hover:bg-blue-600' onClick={() => navigation(-1)}>Go Back</button>
        </div>
    );
};

export default AppNotFound;