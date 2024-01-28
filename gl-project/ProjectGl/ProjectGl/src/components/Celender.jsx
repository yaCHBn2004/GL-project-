import { useState } from 'react';
import { format } from 'date-fns';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Example =({selected,setSelected}) =>{
  

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }
  return (
    <div className='l w-full flex flex-col justify-center items-center h-fit rounded-md'>
               <p className='f8 text-2xl text-center my-12'>select a date</p>
 <div className='w-[90%]  max-w-[1050px] flex  items-center'>
            
      <div className='w-[35%] h-[80%]'>
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
    </div>
    <div className='h-[80%] w-[30%]'>
    
    </div>
    </div>
    </div>
  );
}
export default Example;