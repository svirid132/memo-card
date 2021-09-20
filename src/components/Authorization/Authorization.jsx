import { Container, makeStyles, Box, TextField, CssBaseline, createTheme, ThemeProvider, Button
} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import { useDispatch, useSelector } from 'react-redux';
import { authorization, removeUser, selectUsers, setUser } from './authorizationSlice';

const useStyle = makeStyles((theme) => ({
    root: {
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        height: "100%",
        overflow: "hidden",
        backgroundColor: "orange",
        flexDirection: "column",
        alignItems: "center",
    },
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8)
    },
    btns: {
        alignSelf: "flex-end",
    }
}));

const theme = createTheme({
    palette: {
        primary: {
            main: '#fff',
        },
        text: {
            primary: "#fff",
            secondary: "#424242",
        },
        action: {
            active: "#fff",
        }
    },
    typography: {
        fontSize: 30,
    },
  });

  //change over style
  //https://stackblitz.com/edit/material-ui-custom-outline-color?file=ValidField.js

function Authorization() {

    const classes = useStyle();

    const users = useSelector(selectUsers);
    const dispatch = useDispatch();

    const userElems = users.map((user, index) => {
        return (
            <Box key = {user.id} component = "li" mt={3} style={{listStyleType: "none"}}>
                <TextField 
                    value = {user.name} 
                    error={ user.isError }
                    onChange = {(e) => dispatch(setUser({...user, name: e.target.value}))} 
                    variant="outlined" 
                    fullWidth 
                    label={`user ${index + 1}`} 
                />
            </Box>);
    });

    const handleAdd = () => {
        const userLength = users.length;
        if (userLength === 4) return;
        dispatch(setUser({id: userLength + 1, name: ""}));
    }

    const handleRemove = () => {
        const userLength = users.length;
        if (userLength === 2) return;
        dispatch(removeUser(userLength));
    }

    const handlePlayGame = () => {
        dispatch(authorization());
    }

    return (
        <div className={classes.root}>
            {/* <CssBaseline /> */}
            <ThemeProvider theme={theme}>
                <Container component = "form" className={classes.wrapper} maxWidth="xs">
                    <Box component = "ul" width="100%">
                        { userElems }
                    </ Box>
                        <Box className = {classes.btns} component="div" mt={5}>
                            <IconButton onClick={() => handleRemove()}><RemoveIcon /></IconButton>
                            <IconButton onClick={() => handleAdd()}><AddIcon /></IconButton>
                        </Box>
                    <Box mt={4}>
                        <Button onClick={() => handlePlayGame()} size="large" variant="contained" endIcon={<SportsEsportsIcon />}>Играть</Button>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    )
}

export default Authorization
