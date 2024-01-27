import React from "react";
export const Icon = ({size = 100, onClick, src}: {size: number, onClick?: () => void, src: string}) => (
	<img
		onClick={onClick}
		style={{height: size, width: size, objectFit: "contain"}}
		src={src}
	/>
)