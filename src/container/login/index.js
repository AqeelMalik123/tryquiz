
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MyCard from "../../component/Card";
import BasicTextFields from "../../component/input/InputText";

import BasicButtons from "../../component/button";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";


const Login=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
  const onLoginHandler=()=>{
      console.log(email,password)
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
      });
  }
    return(
        <div>
            
            <Container>
            <Grid container>
        
        
            <Grid item xs={12} lg={6} md={12}>
    <MyCard>
        <h1>Login</h1>
     
         <div className="mt-20">
             <BasicTextFields onChange={(e)=>setEmail(e.target.value)} value={email} label="Email" type="email"/>

         </div>
         <div className="mt-20">
             <BasicTextFields onChange={(e)=>setPassword(e.target.value)} value={password} label="Password" type="password"/>
         </div>
        <div className="mt-20">

        <BasicButtons onClick={onLoginHandler} title="login"/>
        </div>
                 <div className="mt-20" style={{textAlign:"center"}}>
                     <Link to="/">Register Now</Link>
                 </div>
    </MyCard>
  </Grid>
    
    
                </Grid>
            </Container>
        </div>
    )
}
export default Login;




