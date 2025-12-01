import { createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: teal[500],
        },
        secondary: {
            main: '#f50057',
        },
    },
});

export default theme;
