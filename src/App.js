import Quiz from "./container/quiz";
const App=()=>{
  return(
    <div>
      <div style={{width:"100%",height:"100px",backgroundColor:"black",display:"flex",justifyContent:"center",borderRadius:"11px"}}><h1>Quiz App</h1></div>
       <Quiz/>
    </div>
  )
}
export default App;
