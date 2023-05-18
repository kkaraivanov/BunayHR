import { useMemo } from "react";
import { connect } from "react-redux";
import {
    ThemeProvider,
    StyledEngineProvider,
    createTheme,
    responsiveFontSizes
} from "@mui/material/styles";
import { CssBaseline, } from "@mui/material";

const themeOptions = (mode) => {
    return {
        mode,
        palette: {
            
        },
        mixins: {
            toolbar: {
                minHeight: 60,
                paddingTop: 8,
                paddingBottom: 8
            }
        },
    }
}
const mapStateToProps = state => ({
    themeMode: state.app.themeMode
});

export default connect(mapStateToProps)(({ children, themeMode }) => {
    let theme = useMemo(
        () =>
            createTheme(
                themeOptions(themeMode)
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