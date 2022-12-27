const WHITE = '#FFF';
const SAND = '#e8d3a3';
const ORANGE = '#ffa633';
const BLUE = '#3b5a9d';
const TEAL = '#4fb2aa';
const GREY = '#363940';
const STEEL_GREY = '#555';
const LIGHT_GREY = 'rgba(149, 157, 165, 0.2) ';
const STONE_GREY = '#E8E8E8';
const WARNING_RED = '#B33A3A';

const PRIMARY_COLOR = BLUE;
const SECONDARY_COLOR = TEAL;
const TERTIARY_COLOR = ORANGE;
const INVERT_SECONDARY_COLOR = SAND;
const FONT_COLOR = GREY;

const BODY_BACKGROUND = GREY;
const BOX_SHADOW = LIGHT_GREY;
const BORDER = STEEL_GREY;

const PRIMARY_FONT = 'Raleway';
const HEADER_FONT = 'Rock Salt';
const ERROR_TEXT_COLOR = WARNING_RED;
const INPUT_BG = STONE_GREY;

const theme = {
    text: FONT_COLOR,
    bg: BODY_BACKGROUND,
    bodyFont: PRIMARY_FONT,
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
        disabled: {
            bg: INVERT_SECONDARY_COLOR,
            color: WHITE,
        },
    },
    card: {
        border: SECONDARY_COLOR,
        tag: {
            border: SECONDARY_COLOR,
            color: WHITE,
        }
    },
    error: ERROR_TEXT_COLOR,
    headingFont: HEADER_FONT,
    input: {
        color: INPUT_BG,
    },
    listItem: {
        bg: TERTIARY_COLOR,
    },
};

export default theme;
