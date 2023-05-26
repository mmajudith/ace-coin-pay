const Button = ({ text, handleClick }) => {
	return (
		<div
			onClick={handleClick}
			className="w-full h-[60px] cursor-pointer bg-blue text-white rounded-md font-semibold flex flex-col justify-center items-center"
		>
			<button className="">{text}</button>
		</div>
	);
};

export default Button;
