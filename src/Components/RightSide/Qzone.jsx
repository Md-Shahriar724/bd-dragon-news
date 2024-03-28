import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'

const Qzone = () => {
    return (
        <div className=" my-6 bg-gray-100 w-full h-8 mx-auto rounded-lg shadow-2xl ">
            <h2 className="text-xl font-bold py-4 pl-4 mb-4">Q-zone</h2>
            <img src={qzone1} alt="" className='w-52 h-56' />
            <img src={qzone2} alt="" className='w-52 h-56' />
            <img src={qzone3} alt=""  className='w-52 h-56'/>
        </div>
    );
};

export default Qzone;