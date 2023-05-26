import { useState } from 'react';
import EditUpdatePaymentOption from './EditUpdatePaymentOption';
import { ReactComponent as MoneyBank } from '../assets/money-bank.svg';
import { paymentOption } from '../dummyData';

const PaymentOption = () => {
	const [payOption, setPayOption] = useState(paymentOption);
	const [updatedData, setUpdatedData] = useState(paymentOption);
	const [isEditing, setIsEditing] = useState(false);
	const [isReadOnly, setIsReadOnly] = useState(true);

	const handleEditing = () => {
		setIsEditing(!isEditing);
		setIsReadOnly(!isReadOnly);
		setPayOption(updatedData);
	};

	const handleUpdate = (e) => {
		setIsEditing(!isEditing);
		setIsReadOnly(!isReadOnly);
		setPayOption({ ...payOption });
		setUpdatedData({ ...payOption });
		e.preventDefault();
	};

	const onChangeHandler = (e) => {
		setPayOption({ ...payOption, [e.target.id]: e.target.value });
	};

	return (
		<div className="w-11/12 md:w-3/5">
			<div className="w-full mb-11 md:mb-20 flex flex-col ss:flex-row justify-start ss:justify-between items-center gap-6">
				<p className="w-fit h-10 text-xl text-dark-blue font-bold flex flex-row justify-start items-center">
					<span className="w-10 h-full mr-3 bg-blue flex flex-col justify-center items-center rounded-full">
						<MoneyBank className="w-7 h-7" />
					</span>
					AceCoin
					<span className="font-light text-grayish-violet">Pay</span>
				</p>
				<p className="w-fit h-fit text-dark-blue font-semibold flex justify-center items-center gap-1">
					<span className="w-7 h-10 mx-auto text-white bg-dark-blue flex flex-col justify-center items-center rounded-md shadow-md">
						0
					</span>
					<span className="w-7 h-10 mx-auto text-white bg-dark-blue flex flex-col justify-center items-center rounded-md shadow-md">
						1
					</span>
					{' : '}
					<span className="w-7 h-10 mx-auto text-white bg-dark-blue flex flex-col justify-center items-center rounded-md shadow-md">
						1
					</span>
					<span className="w-7 h-10 mx-auto text-white bg-dark-blue flex flex-col justify-center items-center rounded-md shadow-md">
						9
					</span>
				</p>
			</div>
			<EditUpdatePaymentOption
				payOption={payOption}
				isEditing={isEditing}
				isReadOnly={isReadOnly}
				handleEditing={handleEditing}
				handleUpdate={handleUpdate}
				onChangeHandler={onChangeHandler}
			/>
		</div>
	);
};

export default PaymentOption;
