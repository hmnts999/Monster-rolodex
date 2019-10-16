import React from "react";

const Scroll = props => {
	return (
		<div
			style={{
				overflowY: "scroll",
				border: "1px solid black",
				height: "800px"
			}}
		>
			{props.children}
			<div>Hey</div>
		</div>
	);
};

export default Scroll;
