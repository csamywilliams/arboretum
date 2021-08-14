import React, { useEffect, useRef, useState } from 'react';

const useCanvas = () => {
	const canvasRef = useRef(null);
	const [coordinates, setCoordinates] = useState([]);
	const [context, setContext] = useState();

	const draw = (context, location) => {
		context.fillStyle = 'green';
		context.fillRect(10, 10, 150, 100);
	};

	return {
		draw,
		canvasRef,
		coordinates,
		setCoordinates,
		setContext,
	};
};

export default useCanvas;
