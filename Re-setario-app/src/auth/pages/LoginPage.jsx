import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useState } from 'react';


export const LoginPage = () => {

  const [ error, setError] = useState('');

  const [formState, setFormState] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formState;
  
  const handleChange = (event) => {
    setFormState( {email: event.target.value, password} );
  }

  const handleChange2 = (event) => {
    setFormState( {email , password: event.target.value} );
  }
  
  const handleClick = () => {

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let body = JSON.stringify({
        email: email,
        password: password
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: body,
      redirect: 'follow'
    };

    fetch("https://backend-recipes-bootcamps-tribe.onrender.com/api/auth/login", requestOptions)
      .then((response) => { return response.json() })
      .then(result => {
        console.log(result)
        if (result?.errors?.length) {
            setError('campos requeridos'); 
            throw new Error('campos requeridos');
        }
         if (result?.error){
          setError('credenciales invalidas');
          throw new Error('credenciales invalidas');
        }
      }
      )
      .catch(error => {
        console.log(error);

        });
  }

  return (
    <AuthLayout title="Login">
      <form>
          <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField id='emailID'
                onChange={handleChange}
                value={email}
                label="Correo" 
                type="email" 
                placeholder='correo@google.com' 
                fullWidth
              />
              {error ? <div><p>{error}</p></div> : null}
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                id='passID'
                onChange={handleChange2}
                value={password}
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
              />
            </Grid>
            
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button variant='contained' onClick={handleClick} fullWidth>
                  Login
                </Button>
              </Grid>
            </Grid>


            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } color='inherit' to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>

          </Grid>


        </form>

    </AuthLayout>
  )
}
