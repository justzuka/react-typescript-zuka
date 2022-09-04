import { FC } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { AiOutlineLoading } from "react-icons/ai";
import "./Loader.css";
const Loader: FC = () => {
	return (
		<div
			className="relative flex items-center 
        justify-center w-[100px] h-[100px]"
		>
			<AiOutlineLoading3Quarters size={22} className="inner" />
			<AiOutlineLoading size={30} className="outer" />
		</div>
	);
};

export default Loader;
