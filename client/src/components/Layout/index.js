import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "./Header";

const useStyles = makeStyles(() => {
    return {
        root: {
            display: 'flex',
        },
        mainContent: {
            marginTop: '60px'
        }
    }
})

export default ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <Container maxWidth="lg" className={classes.mainContent}>
                {children}
            </Container>
        </div>
    )
};