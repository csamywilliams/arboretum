import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import CanvasStyled from './Canvas.styled';

import useCanvas from 'hooks/useCanvas';

import map from 'assets/map.jpg';

const Canvas = () => {
	const { setContext } = useCanvas();
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');

		draw(context, canvas);
	}, []);

	const draw = (context, canvas, location) => {
		const centerX = canvas.width / 2;
		const centerY = canvas.height / 2;
		const radius = 70;

		context.beginPath();
		context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
		context.fillStyle = 'green';
		context.fill();
		context.lineWidth = 5;
		context.strokeStyle = '#003300';
		context.stroke();
	};

	//const context = canvas.getContext('2d');

	// ctx.fillStyle = 'green';
	// ctx.fillRect(10, 10, 150, 100);

	return <CanvasStyled ref={canvasRef}>hello</CanvasStyled>;
};

Canvas.defaultProps = {};

Canvas.propTypes = {};

export default Canvas;
