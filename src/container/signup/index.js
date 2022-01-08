
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MyCard from "../../component/Card";
import BasicTextFields from "../../component/input";
import BasicButtons from "../../component/button";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { textAlign } from "@mui/system";
// import firebase from "../../config/Firebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";







const Signup=()=>{
    const [fullName,setFullName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    let navigate = useNavigate();
    const rigester=()=>{
        console.log(fullName,email,password);
        // createUserWithEmailAndPassword(email,password)
        // .then((res)=>{
            //     console.log("agaya",res)
            // }).catch((err)=>{
                //     console.log("masla ahi ",err)
                
                // })
                // console.log(email);
                // console.log(password)
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    
                    const user = userCredential.user;
                    console.log(user)
                    navigate('/login')
                
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


    }

    return(
        <div>
            <Container>
            <Grid container>
        
        
            <Grid item xs={12} lg={6} md={12}>
    <MyCard>
        <h1>Signup</h1>
     
         <div className="mt-20">
             <BasicTextFields onChange={(e)=>setFullName(e.target.value)} value={fullName} label="FullName" type="text"/>

         </div>
         <div className="mt-20">
             <BasicTextFields onChange={(e)=>setEmail(e.target.value)} value={email} label="Email" type="email"/>

         </div>
         <div className="mt-20">
             <BasicTextFields onChange={(e)=>setPassword(e.target.value)} value={password} label="Password" type="password"/>
         </div>
        <div className="mt-20">

        <BasicButtons onClick={rigester} title="Signup"/>
        </div>
                 <div className="mt-20" style={{textAlign:"center" }}>
                     <Link to="/login">login</Link>
                 </div>
    </MyCard>
  </Grid>
    
    
                </Grid>
            </Container>
        </div>
    )
}
export default Signup;