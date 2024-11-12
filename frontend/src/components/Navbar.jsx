import {AppBar, Toolbar, Typography, Box, Button} from '@mui/material'

const Navbar = () => {
    return (
        <AppBar sx={{
            backgroundColor: 'white'
        }}>
            <Toolbar>
                <Box sx={{display: 'flex'}}>
                    <Button>Login</Button>
                    <Button>Signup</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar