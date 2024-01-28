import { useState } from 'react';
import { format } from 'date-fns';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function Example() {
  const [selected, setSelected] = useState<Date>();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }
  return (
    <div className='l w-full flex flex-col bg-[#E0E2E9]  justify-center items-center '>
               <p className='f8 text-2xl text-center my-12'>select a date</p>
 <div className='w-[90%]  max-w-[1050px] flex h-[95vh] items-center'>
            <div className='w-[30%] h-[40%]'> 
            <p className='text-[26px] f8 ml-3  '>30 minute meeting</p>
            </div>
      <div className='w-[35%] h-[80%]'>
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
    </div>
    <div className='h-[80%] w-[30%]'>
    <div className='w-full grid grid-cols-2 grid-rows-3 h-[50%] mt-8'>
        <button className='border border-[#89bee9] hover:bg-[#89bee9] hover:text-[#fff] rounded-[8px] w-[80%] h-[45%] text-2xl'>9:00</button>
        <button className='border border-[#89bee9] hover:bg-[#89bee9] hover:text-[#fff] rounded-[8px] w-[80%] h-[45%] text-2xl'>10:00</button>
        <button className='border border-[#89bee9] hover:bg-[#89bee9] hover:text-[#fff] rounded-[8px] w-[80%] h-[45%] text-2xl'>11:00</button>
        <button className='border border-[#89bee9] hover:bg-[#89bee9] hover:text-[#fff] rounded-[8px] w-[80%] h-[45%] text-2xl'>13:00</button>
        <button className='border border-[#89bee9] hover:bg-[#89bee9] hover:text-[#fff] rounded-[8px] w-[80%] h-[45%] text-2xl'>14:00</button>
        <button className='border border-[#89bee9] hover:bg-[#89bee9] hover:text-[#fff] rounded-[8px] w-[80%] h-[45%] text-2xl'>15:00</button>

</div>
    </div>
    </div>
    </div>
  );
}