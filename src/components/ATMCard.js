import { ATMCardDetails } from '../dummyData';
import CardChip from '../assets/chip.png';
import CardWifi from '../assets/wifi.png';

const ATMCard = () => {
	const { name, cardIcon, cardNumber, expiryDateMonth, expiryDateYear } =
		ATMCardDetails;
	const sliceCNumber = cardNumber.slice(20);
	return (
		<div className="w-[85%] ss:w-3/5 md:w-5/6 lg:w-9/12 h-fit mx-auto px-5 py-6 bg-white relative top-28 md:top-0 inset-x-0 z-20 shadow-2xl rounded-2xl opacity-[0.96]">
			<div className="w-full mb-24 flex flex-row justify-between items-center">
				<img
					src={CardChip}
					alt="Atn card chip icon"
					className="w-[35px] h-[40px]"
				/>
				<img src={CardWifi} alt="Atm card wifi icon" className="w-6 h-6" />
			</div>
			<div className="w-full mb-8 flex flex-col justify-start">
				<p className="text-dark-blue mb-1 text-sm">{name}</p>
				<div className="w-full h-fit font-semibold text-very-dark-blue relative flex flex-row justify-start items-center gap-2">
					<p className="w-fit h-fit font-bold text-2xl mt-[-12px]">....</p>
					<p>{sliceCNumber}</p>
				</div>
			</div>
			<div className="w-full flex flex-row justify-between items-center">
				<p className="h-full text-very-dark-blue font-semibold text-sm">
					{expiryDateMonth} / {expiryDateYear}
				</p>

				<p className="w-[50px] h-full">{cardIcon}</p>
			</div>
		</div>
	);
};

export default ATMCard;
