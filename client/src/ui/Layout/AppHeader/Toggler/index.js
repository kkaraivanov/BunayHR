import { connect } from "react-redux";
import { Box, IconButton } from "@mui/material";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';

import { CompanyLogo } from "../../CompanyLogo";

const Toggler = ({ isAuthorized, isDrawerOpen, dawerIsOpen }) => {
    function handleDrawerOpen() {
        dawerIsOpen();
    };

    return (
        <Box sx={{width: '100%'}}>
            {isAuthorized ? (
                <IconButton
                    disableRipple
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    sx={{
                        color: 'companyTitle.main',
                        bgcolor: 'transparent',
                        ml: { xs: 0, lg: -2 }
                    }}
                >
                    {!isDrawerOpen
                        ? <MenuUnfoldOutlined />
                        : <MenuFoldOutlined />
                    }
                </IconButton>
            ) : <CompanyLogo />}
        </Box>
    )
};

const mapStateToProps = state => ({
    isAuthorized: state.app.isAuthorized,
    isDrawerOpen: state.app.isDrawerOpen
});

const mapDispatchToProps = dispatch => ({
    dawerIsOpen: () => dispatch({ type: 'SET_DRAWER_OPEN' })
});

export default connect(mapStateToProps, mapDispatchToProps)(Toggler)