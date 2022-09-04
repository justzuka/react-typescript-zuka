import React, { FC } from "react";
import Loader from "./Loader";
interface props {
	advice: String;
	loading: Boolean;
	id: Number;
}
const Advice: FC<props> = (props) => {
	return (
		<>
			{props.loading ? (
				<Loader />
			) : (
				<div className="flex flex-col gap-2">
					<div
						className="text-NeonGreen 
                font-Manrope text-[15px]
                break-word text-center
                font-[500] m-1"
					>
						Advice # {props.id.toString()}
					</div>
					<div
						className="text-white 
        font-Manrope text-[28px]
        break-word text-center"
					>
						"{props.advice}"
					</div>
				</div>
			)}
		</>
	);
};

export default Advice;
