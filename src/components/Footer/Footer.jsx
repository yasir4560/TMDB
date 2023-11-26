import React from 'react'

const Footer = () => {
  return (
    <div className='h-[350px] bg-tmdbDarkBlue flex gap-[30px] justify-center items-center'>

        <div className=' flex flex-col  gap-11 pb-9 pr-5'>
           <div className='w-[130px] h-[94px] ml-auto'> <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="footer-logo" className='right-0' /></div>
           <div>
           <button class="bg-[#FFFFFF] hover: cursor-pointer text-[#01B4E4] font-bold  w-[220px] h-[44px] py-2 px-4 rounded">
           JOIN THE COMMUNITY
          </button>
           </div>
        </div>

        <div className='flex gap-11'>
              

        <div>
            <h3 className='font-extrabold text-xl text-white pb-1'>THE BASICS</h3>
            <ul className='font-semibold text-white text-l'>
                <li>About TMDB</li>
                <li>Contact Us</li>
                <li>Support Forums</li>
                <li>API</li>
                <li>System Status</li>
            </ul>
            
        </div>

        <div>
            <h3 className='font-extrabold text-xl text-white pb-1'>GET INVOLVED</h3>
            <ul className='font-semibold text-white text-l'>
                <li>Contribution Bible</li>
                <li>Add New Movie</li>
                <li>Add New TV Show</li>
                
            </ul>
            
        </div>

        <div>
            <h3 className='font-extrabold text-xl text-white pb-1'>COMMUNITY</h3>
            <ul className='font-semibold text-white text-l'>
                <li>Guidlines</li>
                <li>Discussions</li>
                <li>Leaderboard</li>
               
            </ul>
            
        </div>


        <div>
            <h3 className='font-extrabold text-xl text-white pb-1'>LEGAL</h3>
            <ul className='font-semibold text-white text-l'>
                <li>Terms of Use</li>
                <li>API Terms of Use</li>
                <li>Privacy Policy</li>
                <li>DMCA Policy</li>
                
            </ul>
            
        </div>



        </div>
    
    </div>
  )
}

export default Footer
