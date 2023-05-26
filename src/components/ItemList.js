const ItemList = ({ text, textValue }) => {
	return (
		<div className="w-full flex flex-row justify-between items-center mb-3">
			<p className="text-gray text-sm ss:text-base">{text}</p>
			<p className="text-very-dark-blue text-sm ss:text-base font-semibold">
				{textValue}
			</p>
		</div>
	);
};

export default ItemList;
