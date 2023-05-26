import PaymentOption from '../components/PaymentOption';
import PurchaseDetails from '../components/PurchaseDetails';
import { ReactComponent as CloseIcon } from '../assets/close.svg';

const Payment = () => {
	return (
		<div className="max-w-screen-2xl w-full sm:w-11/12 lg:w-10/12 h-fit m-auto bg-white relative">
			<div className="w-10 h-10 bg-input-border flex flex-col justify-center items-center absolute right-0 top-0">
				<CloseIcon />
			</div>

			<div className="w-11/12 h-fit mx-auto py-16 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-stretch gap-8">
				<PaymentOption />
				<PurchaseDetails />
			</div>
		</div>
	);
};

export default Payment;
