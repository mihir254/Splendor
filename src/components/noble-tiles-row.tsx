import React from 'react'
import NobleTile from './noble-tile';
import { Card } from '@/interfaces/card';

type PropType = {
  players: number,
  deck: Card[]
}

const NobleTilesRow = (props: PropType) => {
  	const { players, deck } = props;
	return (
		<div id='noble-tiles-row' className='flex justify-center gap-5 items-center'>
			{Array.from({ length: players + 1 }, ( _, index ) => (
				<NobleTile name={deck[index].name} source={deck[index].source} key={index}/>
			))}
		</div>
	)
}

export default NobleTilesRow;