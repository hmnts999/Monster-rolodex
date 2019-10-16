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
			<div>hello1</div>
		</div>
	);
};

export default Scroll;
