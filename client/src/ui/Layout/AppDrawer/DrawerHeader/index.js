import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

import { CompanyLogo } from '../../CompanyLogo';

const HeaderContainer = styled(
    'div',
    { shouldForwardProp: (prop) => prop !== 'open' })
    (({ theme, open }) => ({
        ...theme.mixins.toolbar,
        background: theme.palette.background.toolbar,
        paddingLeft: theme.spacing(0, 1),
        minHeight: theme.options.header.h,
        marginTop: theme.options.header.top,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        ...(open && ({
            boxShadow: '1px 2px 6px 0px rgba(117, 158, 255,0.8)',
            [theme.breakpoints.down('lg')]: {
                marginTop: 0
            }
        }))
    }));

const DrawerHeader = ({ open }) => {
    return (
        <HeaderContainer className='drawer-header' open={open}>
            <CompanyLogo />
        </HeaderContainer>
    )
}

export default DrawerHeader;