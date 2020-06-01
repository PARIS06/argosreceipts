import { createMuiTheme } from '@material-ui/core/styles';

const argosBlue = "#2B5597";
const argosYellow = "#FFC629";

export default createMuiTheme({
    palette: {
        background: {
            default: "rgba(240,242,245,1)"
        },
        common: {
            argosBlue: `${argosBlue}`,
            argosYellow: `${argosYellow}`
        },
        primary: {
            main: `${argosBlue}`
        },
        secondary: {
            main: `${argosYellow}`
        }
    },
    typography: {
        tab: {
            fontSize: "1rem",
            fontWeight: "700"
        },
        h1: {
            lineHeight: 1.5,
            fontSize: "3.5rem"
        },
        logIn: {
            textTransform: "none",
            fontSize: "1.2em",
            color: argosBlue,
            height: "45px"
           
        }
    },
    overrides: {
        MuiInputLabel: {
            root: {
                color: argosBlue,
                fontSize: "1rem"
            }
        },
        MuiInput: {
            underline: {
                "&:before": {
                    borderBottom: `2px solid ${argosBlue}`
                },
                "&:hover:not($disabled):not($focused):not($error):before": {
                    borderBottom: `2px solid ${argosBlue}`
                }
            }
        }
    }   
});