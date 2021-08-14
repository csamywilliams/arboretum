const WHITE = '#FFF';
const SAND = '#e8d3a3';
const ORANGE = '#ffa633';
const BLUE = '#3b5a9d';
const TEAL = '#4fb2aa';
const GREY = '#363940';
const STEEL_GREY = '#555';
const LIGHT_GREY = 'rgba(149, 157, 165, 0.2) ';

const PRIMARY_COLOR = BLUE;
const SECONDARY_COLOR = TEAL;
const TERTIARY_COLOR = ORANGE;
const FONT_COLOR = GREY;

const BODY_BACKGROUND = GREY;
const BOX_SHADOW = LIGHT_GREY;
const BORDER = STEEL_GREY;

const PRIMARY_FONT = 'Raleway';
const HEADER_FONT = 'Rock Salt';

const theme = {
	text: FONT_COLOR,
	bg: BODY_BACKGROUND,
	border: BORDER,
	boxShadow: BOX_SHADOW,
	button: {
		primary: {
			bg: PRIMARY_COLOR,
			color: WHITE,
		},
		secondary: {
			bg: SECONDARY_COLOR,
			color: WHITE,
		},
		close: {
			bg: WHITE,
			color: STEEL_GREY,
			border: STEEL_GREY,
		},
	},
	card: {
		border: SECONDARY_COLOR,
	},
	headingFont: HEADER_FONT,
	bodyFont: PRIMARY_FONT,
	listItem: {
		bg: TERTIARY_COLOR,
	},
};

export default theme;
