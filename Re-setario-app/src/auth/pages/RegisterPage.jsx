import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Input, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useState } from 'react';

export const RegisterPage = () => {

  const [ error, setError] = useState('');

  const [formState, setFormState] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formState;



const handleChange = () => {
 // minimo de 6 caracteres, que ambas paswords sean iguales caso contrario no se activa el boton 
 // mostrar msj 
 //
}


const handleSend = () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "email": "any-test@mail.com",
    "password": "123456"
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://backend-recipes-bootcamps-tribe.onrender.com/api/auth/signup", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

  return (
    <AuthLayout title="Crear cuenta">
      <form>
          <Grid container>
           
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Nombre completo" 
                type="text" 
                placeholder='Nombre completo' 
                fullWidth
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField id='emailID'
                pattern=""
                value={email}                 
                label="Correo" 
                type="email" 
                placeholder='correo@google.com' 
                fullWidth
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField
                id='passID'
                onChange={handleChange}
                value={password}
                minLength="6"
                maxLength="10"
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
              />
            </Grid>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField
                id='passID'
                onChange={handleChange}
                value={password}
                minLength="6"
                maxLength="10"
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
              />
            </Grid>
            
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 }>
                {/* agregarle onclick , handleclick (comprueba */}
                <Button 
                variant='contained'
                
                handleclick={handleSend} 
                fullWidth>
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>


            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
              <Link component={ RouterLink } color='inherit' to="/auth/login">
                ingresar
              </Link>
            </Grid>

          </Grid>


        </form>

    </AuthLayout>
  )
}