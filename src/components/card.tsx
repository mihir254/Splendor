import React from 'react';
import Image from 'next/image';

type PropType = {
    name: string,
    source: string,
}

const Card = ( props: PropType ) => {
    const { name, source } = props;
    return (
    <div id='card' className='w-32 h-40'>
        <Image
            src={source ? `${source}` : "/public"}
            alt={name}
            width={128}
            height={160}
            className='rounded-xl'
        />
    </div>
  )
}

export default Card;