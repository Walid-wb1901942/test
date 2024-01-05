import React from 'react';

const TechItem = ({img,title}) => {
  return (
    <div >
     <img src={img} alt="title" className='w-[100px] h-50 rounded-full 
      hover:scale-y-75 transition duration-300 ease-in-out 
      cursor-pointer' />
     <p className='font-bold text-center '>{title}</p>
    </div>
  );
}

export default TechItem;