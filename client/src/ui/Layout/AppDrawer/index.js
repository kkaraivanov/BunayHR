import * as React from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import DrawerHeader from './DrawerHeader';

const drawerContent = <>
    <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItemButton>
            </ListItem>
        ))}
    </List>
    <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItemButton>
            </ListItem>
        ))}
    </List>
</>;

const DrawerContainer = styled('div')(({ theme }) =>({
    display: 'flex'
}))

export default function PersistentDrawerLeft({ open, handleDrawerOpen }) {
    const theme = useTheme();
    const media = useMediaQuery(theme.breakpoints.down('lg'));
    const drawerHeader = React.useMemo(() => <DrawerHeader open={open} />, [open]);

    return (
        <DrawerContainer>
            {!media ? (
                <Drawer
                sx={(theme) => ({
                    width: theme.options.drawer.w,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: theme.options.drawer.w,
                        boxSizing: 'border-box',
                        border: 'none'
                    },
                })}
                variant="persistent"
                anchor={theme.options.drawer.anchor}
                open={open}
            >
                {drawerHeader}
                {drawerContent}
            </Drawer>
            ) : (
                <SwipeableDrawer
                    sx={(theme) => ({
                        width: theme.options.drawer.w,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: theme.options.drawer.w,
                            boxSizing: 'border-box',
                            border: 'none'
                        },
                    })}
                    anchor={theme.options.drawer.anchor}
                    open={open}
                    onClose={handleDrawerOpen}
                    onOpen={handleDrawerOpen}
                >
                    {drawerHeader}
                    {drawerContent}
                </SwipeableDrawer>
            )}
        </DrawerContainer>
    );
}