import Payment from './pages/Payment';
import BgImage from './assets/bg.jpg';

const App = () => {
	return (
		<div
			className="w-full h-full m-auto py-14 lg:py-[85px] bg-no-repeat bg-[center_left] text-base font-normal lg:border-l-[25px] lg:border-r-[25px] lg:border-l-white lg:border-r-white lg:border-solid"
			style={{ backgroundImage: `url(${BgImage})` }}
		>
			{' '}
			<Payment />
		</div>
	);
};

export default App;
