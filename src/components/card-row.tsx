import React from 'react'
import Card from './card';
import { Card as CardType } from '@/interfaces/card';

type PropType = {
	deck: CardType[]
}

const CardRow = ( props: PropType ) => {
	const { deck } = props;
	return (
		<div id='card-row' className='flex justify-center gap-5 items-center'>
			{deck.map((card, index) => (
				<Card name={card.name} source={card.source} key={index}/>
			))}
		</div>
	)
}

export default CardRow;