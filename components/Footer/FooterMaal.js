import React from 'react'
import logo from '../../assets/org3.pg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketball, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import auth1 from '../../assets/author1-176x176.jpg'
import auth2 from '../../assets/author1-176x176.jpg'
import auth3 from '../../assets/author1-176x176.jpg'
import auth4 from '../../assets/author1-176x176.jpg'
import auth5 from '../../assets/author1-176x176.jpg'
import auth6 from '../../assets/author1-176x176.jpg'
import { faBehance, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';




const One = () => {
  return (
    <div className='flex flex-col space-y-7 md:px-5 pt-4'>
      <div>
        <img src={logo} className="w-28" alt="sa" />
      </div>
      <p className='font-semibold text-sm leading-6'>
        We work with a passion of taking <br />
        challenges and creating new ones in <br />
        advertising sector.
      </p>
      <div >
      <p className='flex flex-row space-x-6'><FontAwesomeIcon icon={faFacebookF} /> <FontAwesomeIcon icon={faTwitter} />  <FontAwesomeIcon icon={faBasketball} /> <FontAwesomeIcon icon={faBehance} /></p>
      </div>
    </div>
  );
};

const Two =()=>{
  const cate = ' text-sm  font-semibold  hover:translate-x-3 hover:underline delay-100 ';
  return(
 <div className='lg:pl-14 pt-4 '>
      <div className='flex flex-col space-y-4'>
    <div className='flex flex-col space-y-3'><h1 className='  text-2xl  font-semibold '>Links</h1><div className='border-b-2 border-lime-400 w-8'></div></div>
    <ul className='flex-col flex space-y-5'>
        <li className={cate}><FontAwesomeIcon className='pt-2 pr-2'  icon={faChevronRight} size="xs" style={{color: "#808999",}} /> Home</li>
        <li className={cate}><FontAwesomeIcon className='pt-2 pr-2'  icon={faChevronRight} size="xs" style={{color: "#808999",}} /> Services</li>
        <li className={cate}><FontAwesomeIcon className='pt-2 pr-2'  icon={faChevronRight} size="xs" style={{color: "#808999",}} /> About Us</li>
        <li className={cate}><FontAwesomeIcon className='pt-2 pr-2'  icon={faChevronRight} size="xs" style={{color: "#808999",}} /> Testmionals</li>
        <li className={cate}><FontAwesomeIcon className='pt-2 pr-2'  icon={faChevronRight} size="xs" style={{color: "#808999",}} /> News</li>
    </ul>
</div>
    </div>
    

  )

}
const Three = () => {
    return (
      <>
        <div className='md:px-5 pt-4 flex flex-col space-y-6'>
          <div className='flex flex-col space-y-7'>
           <div className='flex flex-col space-y-3'><h1 className='  text-2xl  font-semibold '>Official info:</h1><div className='border-b-2 border-lime-400 w-8'></div></div>
            <div className='text-sm  font-semibold flex flex-col space-y-4 leading-6'>
              <p>30 Commercial Road <br/>Fratton, Australia</p>
              <p>1-888-452-1505</p>
            </div>
            
          </div>
          <div className='flex flex-col space-y-3'>
            <div><h3 className='text-orange-500 text-sm font-semibold'>Open Hours:</h3></div>
            <div className='text-sm  font-semibold flex flex-col space-y-1'>
                <p>Mon – Sat: 8 am – 5 pm,</p>
                <p>Sunday: CLOSED</p>
            </div>
          </div>
        </div>
      </>
    );
}

const Four =()=>{
    return(
        <>
        <div className='md:px-5 pt-4 flex flex-col space-y-6'>
            <div className='flex flex-col space-y-3'>
                <h1 className='  text-2xl  font-semibold '>Instagram</h1>
                <div className='border-b-2 border-lime-400 w-8'></div>
            </div>
            <div className='grid grid-cols-3 md:gap-3 gap-0 gap-y-5 '>
                <img src={auth1} alt='sa' className=' lg:w-20 md:w-28 w-48'/>
                <img src={auth2} alt='sa' className=' lg:w-20 md:w-28 w-48'/>
                <img src={auth3} alt='sa' className=' lg:w-20 md:w-28 w-48'/>
                <img src={auth4} alt='sa' className=' lg:w-20 md:w-28 w-48'/>
                <img src={auth5} alt='sa' className=' lg:w-20 md:w-28 w-48'/>
                <img src={auth6} alt='sa' className=' lg:w-20 md:w-28 w-48'/>

            </div>
        </div>
        <div className="text-white  md:hidden flex justify-center mb-7">
            <h1>© 2023 Organio – CaseThemes. All rights reserved.</h1>
          </div>
        </>
    )
}





const FooterMaal = () => {
  
  return (
    <>
    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-y-0 gap-y-8 text-white w-full h-fit px-10 pt-20 md:bg-transparent bg-[#0c2900]'>
        <One />
        <Two />
        <Three />
        <Four />  
    </div>  
    </>
  )
}

export default FooterMaal
