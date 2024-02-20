import React from 'react'
import NobleTilesRow from './noble-tiles-row';
import CardRow from './card-row';
import Coin from './coin';
import Card from './card';
import NobleTile from './noble-tile';

type PropType = {
    players: number
}

const coins = [
    {
        name: "Gold",
        source: "/gold.webp"
    },
    {
        name: "Emrald",
        source: "/emrald.webp"
    },
    {
        name: "Diamond",
        source: "/diamond.webp"
    },
    {
        name: "sapphire",
        source: "/sapphire.webp"
    },
    {
        name: "onyx",
        source: "/onyx.webp"
    },
    {
        name: "ruby",
        source: "/ruby.webp"
    },
]

const cards = [
    {
        name: "noble",
        source: "/cards/noble.jpg"
    },
    {
        name: "Level-1",
        source: "/cards/level-1.jpg"
    },
    {
        name: "Level-2",
        source: "/cards/level-2.jpg"
    },
    {
        name: "Level-3",
        source: "/cards/level-3.jpg"
    },
]

const nobleCards = [
    {
        name: "noble-open1",
        source: "/cards-front/noble.jpg"
    },
    {
        name: "noble-open2",
        source: "/cards-front/noble.jpg"
    },
    {
        name: "noble-open3",
        source: "/cards-front/noble.jpg"
    },
    {
        name: "noble-open4",
        source: "/cards-front/noble.jpg"
    },
]

const level1 = [
    {
        name: "level-1-open1",
        source: "/cards-front/level-1.jpg"
    },
    {
        name: "level-1-open2",
        source: "/cards-front/level-1.jpg"
    },
    {
        name: "level-1-open3",
        source: "/cards-front/level-1.jpg"
    },
    {
        name: "level-1-open4",
        source: "/cards-front/level-1.jpg"
    },
]

const level2 = [
    {
        name: "level-2-open1",
        source: "/cards-front/level-2.jpg"
    },
    {
        name: "level-2-open2",
        source: "/cards-front/level-2.jpg"
    },
    {
        name: "level-2-open3",
        source: "/cards-front/level-2.jpg"
    },
    {
        name: "level-2-open4",
        source: "/cards-front/level-2.jpg"
    },
]

const level3 = [
    {
        name: "level-3-open1",
        source: "/cards-front/level-3.jpg"
    },
    {
        name: "level-3-open2",
        source: "/cards-front/level-3.jpg"
    },
    {
        name: "level-3-open3",
        source: "/cards-front/level-3.jpg"
    },
    {
        name: "level-3-open4",
        source: "/cards-front/level-3.jpg"
    },
]

const Board = (props: PropType) => {
    const { players } = props;
    return (
        <div id='board' className='w-2/3 flex select-none' style={{ height: '700px' }}>
            <div className='flex flex-col justify-between px-2'>
                {cards.map((card, index) => (
                    index === 0 ? <NobleTile name={card.name} source={card.source}/> : <Card name={card.name} source={card.source} key={index}/>
                ))}
            </div>
            <div className='flex flex-col justify-between flex-1'>
                <NobleTilesRow players={players} deck={nobleCards}/>
                <CardRow deck={level1}/>
                <CardRow deck={level2}/>
                <CardRow deck={level3}/>
            </div>
            <div className='flex flex-col justify-between px-2 py-2'>
                {coins.map((coin, index) => (
                    <Coin name={coin.name} source={coin.source} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default Board;