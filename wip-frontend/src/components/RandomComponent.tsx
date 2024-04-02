import React from "react";
import Image from "next/image";
interface RandomProps {
	title: string;
}
const RandomComponent: React.FC<RandomProps> = ({ title }) => {
	return (
		<div>
			<h1>{title}</h1>
			<Image
				src="https://images.unsplash.com/photo-1707343846292-56e4c6abf291?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="dummy"
				width={100}
				height={100}
			/>
		</div>
	);
};

export default RandomComponent;
