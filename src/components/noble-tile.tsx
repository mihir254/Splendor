import React from 'react'
import Image from 'next/image';

type PropType = {
    name: string,
    source: string,
}

const NobleTile = ( props: PropType ) => {
	const { name, source } = props;
	return (
		<div id='noble-tile' className='w-32 h-32 flex justify-center items-center'>
			<Image
				src={source ? `${source}` : "/public"}
				alt={name}
				width={128}
				height={128}
				className='rounded-xl'
			/>
		</div>
	)
}

export default NobleTile;