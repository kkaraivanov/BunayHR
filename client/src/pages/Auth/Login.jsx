import * as React from 'react';
import { connect } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

const Login = ({ login }) => {
    const navigate = useNavigate()

    function handleLogin(e) {
        e.preventDefault();
        const role = 'admin'
        login(role);
        navigate(`/${role}`);
    }

    return (
        <Container maxWidth="md">
            <Box
              sx={(theme) => ({
                margin: 8,
                padding: theme.spacing(6),
                borderRadius: 5,
                boxShadow: '1px 2px 6px 0px rgba(117, 158, 255,0.8)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              })}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Вход в системата
              </Typography>
              <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email адрес"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Парола"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Вход
                </Button>
              </Box>
            </Box>
          </Container>
      );
}

const mapDispatchToProps = dispatch => ({
    login: (role) => dispatch({ type: 'SET_USER_LOGEDIN', payload: role }),
});

export default connect(null, mapDispatchToProps)(Login)

