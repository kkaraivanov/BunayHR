import { useTheme, styled } from '@mui/material/styles';
import { Box, Stack, Chip } from '@mui/material';

import { CompanyLogo } from '../../CompanyLogo';

const DrawerHeaderStyled = styled(Box, { forwordProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    ...theme.mixins.toolbar,
    background: theme.palette.bgHeader,
    paddingLeft: theme.spacing(open ? 3 : 0),
    justifyContent: open ? 'flex-start' : 'center',
    minWidth: theme.options.drawerWidth,
    maxHeight: theme.options.header.h,
    minHeight: theme.options.header.h,
    top: theme.options.header.top,
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    ...(open && ({
        boxShadow: '1px 2px 6px 0px rgba(117, 158, 255,0.8)',
        [theme.breakpoints.down('lg')]: {
            top: 0
        }
    }))
}));

const DrawerHeader = ({ open }) => {
    const theme = useTheme();

    return (
        <DrawerHeaderStyled theme={theme} open={open}>
            <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{

                }}
            >
                <CompanyLogo />
            </Stack>
        </DrawerHeaderStyled>
    )
}

export default DrawerHeader;