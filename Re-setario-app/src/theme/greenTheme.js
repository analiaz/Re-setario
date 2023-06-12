import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const greenTheme = createTheme({
    palette: {
        primary: {
            main: '#6B935D'
        },
        secondary: {
            main: '#E5F870'
        },
        error: {
            main: red.A400
        }
    }
})