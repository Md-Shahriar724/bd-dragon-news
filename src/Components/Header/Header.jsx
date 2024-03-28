import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='w-full '>
            <img className='mx-auto mt-2'  src={logo} alt="" /> 
            <p className='text-center my-2'>Journalism Without Fear or Favour</p>     
            <p className='text-center my-2'>{moment().format("dddd, MMMM D, YYYY")}</p>    
        </div>
    );
};

export default Header;