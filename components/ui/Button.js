export const PrimaryButton = ({
	children,
	className = "",
	isDisabled = false,
	...args
}) => (
	<button
		className={`py-2 px-4 flex bg-transparent border border-gray-600 group hover:bg-gray-400 text-white hover:text-gray-800 justify-center min-w-[2.5rem] rounded-md min-h-[2.5rem] items-center transition-all duration-400 ${className}`}
		{...args}
		disabled={isDisabled}
	>
		{children}
	</button>
);

export const SecondaryButton = ({
	children,
	className = "",
	isDisabled = false,
	...args
}) => (
	<button
		className={`py-2 px-4 flex group
		bg-gray-400
		border border-gray-600  
		hover:bg-gray-400 text-white 
		hover:text-gray-800 justify-center min-w-[2.5rem] 
		rounded-md min-h-[2.5rem] items-center 
		transition-all duration-400 
		${className}`}
		{...args}
		disabled={isDisabled}
	>
		{children}
	</button>
);

export default PrimaryButton;
