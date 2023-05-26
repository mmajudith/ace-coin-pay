import InputField from './InputField';
import Button from './Button';
import { ReactComponent as MCSymbol } from '../assets/mc_symbol.svg';
import { ReactComponent as EditIcon } from '../assets/icon-edit.svg';
import { ReactComponent as DotsIcon } from '../assets/dots.svg';
import { ReactComponent as VerifiedIcon } from '../assets/verified-badge.svg';

const EditUpdatePaymentOption = ({
	payOption,
	isEditing,
	isReadOnly,
	handleEditing,
	handleUpdate,
	onChangeHandler,
}) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		alert('Paid');
	};

	return (
		<form className="w-full h-fit flex flex-col justify-start gap-8">
			<div className="w-full h-fit">
				<div className="w-full flex flex-row justify-between items-center gap-4">
					<div>
						<p className="font-semibold text-very-dark-blue mb-2">
							Card Number
						</p>
						<p className="text-gray text-xs mb-5">
							Enter the 16 digit card number on the card
						</p>
					</div>
					<div
						onClick={handleEditing}
						className="w-fit h-fit text-blue font-medium flex justify-center items-center gap-1 cursor-pointer"
					>
						<EditIcon />
						{isEditing ? <p>Cancel</p> : <p>Edit</p>}
					</div>
				</div>
				<div className="w-full h-[55px] relative">
					<MCSymbol className="w-12 h-7 my-auto absolute inset-y-0 left-2" />
					<InputField
						id={'cardNumber'}
						type={'text'}
						isReadOnly={isReadOnly}
						value={payOption.cardNumber}
						card={'number'}
						onChange={(e) => onChangeHandler(e)}
					/>
					<VerifiedIcon className="w-5 h-5 my-auto absolute inset-y-0 right-5" />
				</div>
			</div>

			<div className="w-full h-fit flex flex-col md:flex-row justify-center md:justify-between items-center">
				<div className="w-full md:w-1/2">
					<p className="font-semibold text-very-dark-blue mb-2">Cvv Number</p>
					<p className="text-gray text-xs mb-2 md:mb-0">
						Enter the 3 or 4 digit number on the card
					</p>
				</div>
				<div className="w-full md:w-1/2 h-[55px] relative md:ml-2">
					<InputField
						id={'CVVNumber'}
						type={'number'}
						isReadOnly={isReadOnly}
						value={payOption.CVVNumber}
						onChange={(e) => onChangeHandler(e)}
					/>
					<DotsIcon className="w-5 h-5 my-auto absolute inset-y-0 right-5" />
				</div>
			</div>

			<div className="w-full h-fit flex flex-col md:flex-row justify-center md:justify-between items-center font-semibold text-very-dark-blue">
				<div className="w-full md:w-1/2">
					<p className="font-semibold text-very-dark-blue mb-2">Expiry Date</p>
					<p className="text-gray text-xs font-normal mb-2 md:mb-0">
						Enter the expiration date of the card
					</p>
				</div>
				<div className="w-full md:w-1/2 flex flex-row justify-between items-center">
					<div className="w-2/5 h-[55px]">
						<InputField
							id={'expiryDateMonth'}
							type={'number'}
							isReadOnly={isReadOnly}
							value={payOption.expiryDateMonth}
							onChange={(e) => onChangeHandler(e)}
						/>
					</div>
					{' / '}
					<div className="w-2/5 h-[55px] border-2 border-solid border-active-border rounded-md">
						<InputField
							id={'expiryDateYear'}
							type={'number'}
							isReadOnly={isReadOnly}
							value={payOption.expiryDateYear}
							card={'year'}
							onChange={(e) => onChangeHandler(e)}
						/>
					</div>
				</div>
			</div>

			<div className="w-full h-fit flex flex-col md:flex-row justify-center md:justify-between items-center">
				<div className="w-full md:w-1/2">
					<p className="font-semibold text-very-dark-blue mb-2">password</p>
					<p className="text-gray text-xs mb-2 md:mb-0">
						Enter your Dynamic password
					</p>
				</div>
				<div className="w-full md:w-1/2 h-[55px] relative md:ml-2">
					<InputField
						id={'password'}
						type={'password'}
						isReadOnly={isReadOnly}
						value={payOption.password}
						card={'password'}
						onChange={(e) => onChangeHandler(e)}
					/>

					<DotsIcon className="w-5 h-5 my-auto absolute inset-y-0 right-5" />
				</div>
			</div>
			{isEditing ? (
				<Button text={'Update'} handleClick={handleUpdate} />
			) : (
				<Button text={'Pay Now'} handleClick={handleSubmit} />
			)}
		</form>
	);
};

export default EditUpdatePaymentOption;
