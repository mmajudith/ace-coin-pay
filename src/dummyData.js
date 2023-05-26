import { ReactComponent as CompanyIcon } from './assets/apple-13.svg';
import { ReactComponent as CardIcon } from './assets/mastercard-2.svg';

export const moreDetails = {
	cardType: 'mastercard',
	cardIcon: <CardIcon />,
	cardNumber: '2412 - 7512 - 3412 - 3456',
	expiryDateMonth: 9,
	expiryDateYear: 22,
};

export const ATMCardDetails = {
	name: 'Jonathan Micheal',
	...moreDetails,
};

export const paymentOption = {
	...moreDetails,
	CVVNumber: 327,
	password: 'acecoinp',
};

export const purchaseDetails = {
	companyName: 'Apple',
	companyIcon: <CompanyIcon />,
	orderNumber: 1266201,
	product: 'MackBook Air',
	vat: 100,
};
