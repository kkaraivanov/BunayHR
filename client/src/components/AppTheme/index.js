import { useMemo } from "react";
import { connect } from "react-redux";
import {
    ThemeProvider,
    StyledEngineProvider,
    createTheme,
    responsiveFontSizes
} from "@mui/material/styles";
import { CssBaseline, } from "@mui/material";

const themeOptions = (mode, theme) => {
    return {
        mode,
        palette: {

        },
        typography: {
            fontFamily: ["Comfortaa", "Caveat", 'cursive'].join(','),
            body2: {
                fontFamily: `'Caveat', cursive`
            }
        },
        components: {
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        [theme.breakpoints.up('lg')]: {
                            margin: '10px auto',
                            width: '95%',
                            borderRadius: 50,
                        },
                    },
                },
            }
        },
        mixins: {
            toolbar: {
                minHeight: 60,
                paddingTop: 8,
                paddingBottom: 8
            }
        }
    }
}
const mapStateToProps = state => ({
    themeMode: state.app.themeMode
});

export default connect(mapStateToProps)(({ children, themeMode }) => {
    const defaultTheme = createTheme();
    let theme = useMemo(
        () =>
            createTheme(
                themeOptions(themeMode, defaultTheme)
            ),
        [themeMode]
    );
    theme = responsiveFontSizes(theme);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    )
})