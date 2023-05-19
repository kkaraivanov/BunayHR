import { Box, Typography, styled } from "@mui/material"
import { Link } from "react-router-dom"
import logo from '../../../../assets/images/bunay-logo.png';

const Container = styled(Typography)(({ theme }) => ({
    height: 40,
    textDecoration: "none",
    boxShadow: "none",
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.companyTitle.main,
}));

export const CompanyLogo = () => (
    <Container
        variant='body2'
        component={Link}
        to='/'
        sx={{
            px: 2,
            fontSize: {
                xs: '2rem',
                lg: '2rem'
            },
            fontWeight: {
                xs: 600,
                lg: 800
            }
        }}
    >
        <Box
            component= "img"
            alt="Logo"
            src={logo}
            sx={{
                height: 40,
                paddingRight: 2,
                display: {
                    xs: 'none',
                    md: 'block'
                }
            }}
        />
        Bunay SA
    </Container>
)