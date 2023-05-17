import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
    return {
        root: {
            display: 'flex'
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

            <Container maxWidth="lg" className={classes.mainContent}>
                {children}
            </Container>
        </div>
    )
};