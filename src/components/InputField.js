const InputField = ({ id, type, isReadOnly, value, card, onChange }) => {
	return (
		<input
			id={id}
			className={`w-full h-full ${
				card === `number`
					? `pl-[60px] text-gray font-normal text-base`
					: card === `year`
					? `text-center text-active-border`
					: card === `password`
					? `pl-5 font-bold text-lg`
					: `text-center text-very-dark-blue font-semibold text-base`
			}  border border-solid ${
				!isReadOnly ? `border-active-border` : `border-input-border`
			} outline-none rounded-md`}
			type={type}
			value={value}
			onChange={onChange}
			disabled={isReadOnly}
		/>
	);
};

export default InputField;
