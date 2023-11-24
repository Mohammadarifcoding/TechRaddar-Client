import React from 'react';

const NormalButton = ({text}) => {
    return (
        <div className='my-3 mr-3 flex lg:justify-start  justify-center '>
            <button className='btn bg-[#393E46] border-2 border-[#00ADB5] hover:border-2 hover:border-[#00ADB5] hover:text-[#393E46] text-[#EEEEEE]'>{text}</button>
        </div>
    );
};

export default NormalButton;