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
            primary: {
                main: '#fff'
            },
            companyTitle: {
                main: '#F2DD42'
            },
            ...(mode === 'light'
                ? {
                    primary: {
                        main: '#F9F9F9'
                    },
                    secondary: {
                        main: '#F2DD42'
                    },
                    divider: '#2C498F',
                    background: {
                        default: '#F9F9F9',
                        paper: '#F9F9F9',
                    },
                    text: {
                        primary: '#444444',
                        secondary: '#2C498F',
                    },
                }
                : {
                    primary: {
                        main: '#2D2D2D'
                    },
                    divider: '#2C498F',
                    background: {
                        default: '#2D2D2D',
                        paper: '#2D2D2D',
                    },
                    text: {
                        primary: '#fff',
                        secondary: '#F9F9F9',
                    },
                }),
        },
        typography: {
            fontFamily: ["Comfortaa", "Caveat", 'cursive'].join(','),
            body2: {
                fontFamily: `'Caveat', cursive`
            }
        },
        components: {
            MuiToolbar: {
                styleOverrides: {
                    root: {
                        background: '#2C498F',
                        color: '#fff',
                        boxShadow: '1px 2px 6px 0px rgba(117, 158, 255,0.8)',
                        [theme.breakpoints.up('lg')]: {
                            margin: '10px auto',
                            marginBottom: 0,
                            width: '95%',
                            borderRadius: 50,
                        },
                        ...(mode === 'dark' && {
                            background: '#21376B',
                            color: '#D6E2FF',
                            boxShadow: '1px -1px 3px 0px rgba(199,182,54,0.8)'
                        })
                    },
                }
            },
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