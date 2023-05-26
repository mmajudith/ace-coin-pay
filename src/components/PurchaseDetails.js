import ATMCard from './ATMCard';
import ItemList from './ItemList';
import { purchaseDetails } from '../dummyData';
import ReceiptImage from '../assets/docket.png';

const PurchaseDetails = () => {
	const { companyName, companyIcon, orderNumber, product, vat } =
		purchaseDetails;

	return (
		<div className="w-full md:w-1/3 lg:w-[32%] h-auto relative md:before:w-16 md:before:h-5 md:before:mx-auto md:before:bg-blue md:before:absolute md:before:inset-x-0 md:before:top-[-8px] md:before:z-0 md:before:rounded">
			<ATMCard />
			<div className="w-full h-fit md:absolute md:bottom-0 z-0">
				<div
					className="w-full bg-slate-200 px-6 pb-5 rounded-tr-lg rounded-tl-lg shadow-md relative
					after:w-9 after:h-9 after:bg-white after:absolute after:left-[-20px] after:bottom-[-20px] after:z-10 after:rounded-full"
				>
					<div className="w-full h-[190px]"></div>
					<div className="w-full flex flex-row justify-between items-center mb-3">
						<p className="text-gray text-sm ss:text-base">Company</p>
						<p className="text-very-dark-blue text-sm ss:text-base font-semibold flex gap-2 justify-center items-center">
							{' '}
							<span className="inline-block w-5 h-5">{companyIcon}</span>
							<span className="">{companyName}</span>
						</p>
					</div>

					<ItemList text={'Order Number'} textValue={orderNumber} />
					<ItemList text={'Product'} textValue={product} />
					<ItemList text={'Vat(20%)'} textValue={`$${vat}.00`} />
				</div>
				<div
					className="w-full px-6 py-5 bg-slate-200 flex flex-row justify-between items-center relative
							border-t-2 border-dotted border-t-gray rounded-br-lg rounded-bl-lg shadow-md
							after:w-9 after:h-9 after:bg-white after:absolute after:right-[-20px] after:top-[-20px] after:z-10 after:rounded-full"
				>
					<div className=" text-gray">
						<p className="text-sm mb-1">You have to pay</p>
						<p className="">
							<span className="text-very-dark-blue font-extrabold text-3xl">
								549
							</span>
							<span className="text-very-dark-blue">.99</span> USD
						</p>
					</div>
					<img src={ReceiptImage} alt="receipt" className="w-7 h-7" />
				</div>
			</div>
		</div>
	);
};

export default PurchaseDetails;
