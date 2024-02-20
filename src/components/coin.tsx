import Image from 'next/image';
import React from 'react';

type PropType = {
    name: string,
    source: string,
}

const Coin = ( props: PropType ) => {
    const { name, source } = props;
    return (
        <div id={`${name}-coin`} className='w-24 h-24 rounded-full'>
            <Image
                src={`/coins${source}`}
                alt={name}
                width={96}
                height={96}
            />
        </div>
    )
}

export default Coin;