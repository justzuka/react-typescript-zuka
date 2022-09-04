import React, { FC, useEffect, useState } from "react";
import Advice from "./Advice";
import { BsFillDice5Fill } from "react-icons/bs";
const API_URL = "https://api.adviceslip.com/advice";

interface Slip {
	advice: String;
	id: Number;
}

interface FetchedAdvice {
	slip: Slip;
}

const AdviceWrapper: FC = () => {
	const [advice, setAdvice] = useState<String>("Default");
	const [id, setId] = useState<Number>(0);
	const [isButtonInteractive, setIsButtonInteractive] = useState<boolean>(true);

	const [loading, setLoading] = useState<boolean>(true);

	const RandomizeAdvice = async () => {
		if (!isButtonInteractive) {
			return;
		}
		setIsButtonInteractive(false);
		setTimeout(() => {
			setIsButtonInteractive(true);
		}, 2000);
		console.log("trying");
		setLoading(true);
		const obj: FetchedAdvice = await (await fetch(API_URL)).json();
		setAdvice(obj.slip.advice);
		setId(obj.slip.id);
		setLoading(false);
	};

	useEffect(() => {
		RandomizeAdvice();
	}, []);

	return (
		<div
			className="bg-DarkGrayishBlue p-2 rounded-lg
        flex flex-col items-center justify-center
        shadow-md max-w-[400px] transition-all"
		>
			<Advice advice={advice} loading={loading} id={id} />
			<div
				className="w-full h-[1.5px] 
            bg-LightCyan/[.2] mt-5"
			></div>
			<button
				onClick={RandomizeAdvice}
				className={`
            rounded-full p-3 text-black font-[600]
            relative top-[26px] transition-all
            duration-300
            ${
							isButtonInteractive
								? `hover:shadow-neon  hover:shadow-NeonGreen
            hover:text-white hover:scale-[1.1] bg-NeonGreen`
								: "cursor-default bg-LightCyan"
						}
            `}
			>
				<BsFillDice5Fill />
			</button>
		</div>
	);
};

export default AdviceWrapper;
