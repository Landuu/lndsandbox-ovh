import { useCallback, useState } from 'react';
import cooltext from './assets/cooltext.gif';
import pogu from './assets/pogu.webp';

const App = () => {
	const [counter, setCounter] = useState(0);

	const click = useCallback(() => {
		setCounter(val => val + 1);
	}, [setCounter]);

	return (
		<div className='w-full h-screen bg-stone-950 flex justify-center items-center'>
			<div onClick={click}>
				{counter < 20 && 
					<img src={cooltext} width={100 + counter * 10} />
				}
				{ counter >= 20 && counter < 40 &&
					<img src={pogu} width={100 + counter * 10} />
				}
				{ counter >= 40 &&
					<div className='font-bold text-stone-900 select-none opacity-10' style={{ fontSize: '2000px' }}>
						JD
					</div>
				}
			</div>
		</div>
	)
}

export default App
