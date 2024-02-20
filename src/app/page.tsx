import Board from '@/components/board';
import React from 'react'

const Home = () => {
	const players = 2;
	return (
		<div className='w-screen h-screen p-10 relative'>
			<div className='absolute inset-0 bg-[url("/bg.avif")] bg-cover bg-center blur-sm'></div>
			<div className='absolute inset-0 bg-black opacity-50'></div>
			<div className='w-full h-full px-20 flex justify-center items-center relative z-10'>
				<Board players={players}/>
			</div>
		</div>

	)
}

export default Home;