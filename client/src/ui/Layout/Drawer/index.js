import { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Drawer, useMediaQuery } from '@mui/material';

import DrawerHeader from './DrawerHeader';

const MainDrawer = ({ open, handleDawerOpen, window }) => {
    const theme = useTheme();
    const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));
    const drawerContainer = window !== undefined ? () => window().document.body : undefined;

    const drawerHeader = useMemo(() => <DrawerHeader open={open} />, [open]);

    return (
        <Box
            component="nav"
            sx={{
                flexShrink: { md: 0 },
                zIndex: 1300
            }}
            aria-label="drawerbox menu"
        >
            {!matchDownMD ? (
                <Drawer variant="permanent" open={open}>
                    {drawerHeader}
                </Drawer>
            ) : (
                <Drawer
                    container={drawerContainer}
                    variant="temporary"
                    open={open}
                    onClose={handleDawerOpen}
                    ModalProps={{ keepMounted: true }}
                >
                    {open && drawerHeader}
                </Drawer>
            )}
        </Box>
    )
};

export default MainDrawer