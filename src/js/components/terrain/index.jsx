import React from 'react';

import Canvas from 'components/canvas';

import TerrainStyled, { TerrainImage } from './Terrain.styled';

import map from 'assets/map.jpg';

const Terrain = () => {
	return (
		<TerrainStyled>
			<Canvas />
			<TerrainImage src={map} alt="Image of terrain" />
		</TerrainStyled>
	);
};

export default Terrain;
