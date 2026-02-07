import {useState} from "react";
import {AppBar, Box, Drawer, IconButton, Toolbar, Typography} from "@mui/material";


export const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            {/* HEADER */}
            <AppBar position="static">
                <Toolbar>
                    {/* Бургер */}
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={() => setOpen(true)}
                        sx={{ mr: 2 }}
                    >
                    </IconButton>

                    {/* Заголовок */}
                    <Typography variant="h6">
                        Junior
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* MENU */}
            <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                <Box sx={{ width: 250, p: 2 }}>
                    Menu
                </Box>
            </Drawer>
        </>
    )
}