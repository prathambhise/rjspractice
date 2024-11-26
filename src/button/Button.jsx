import styles from "./Button.module.css";
//For External CSS use index.css

//Module CSS
///*
function Button() {
  let count = 0;
  var uname = "Ben";
  const handleClick = () => console.log("ok");
  const handleClick2 = (name) => console.log(`${name} stop clicking me.`);
  const handleClick3 = (uname) => {
    if(count < 3){
      count++;
      console.log(`${uname} clicked me ${count} time/s.`);
    }
    else{
      console.log(`${count}`);
    }

  }
  const handleClick4 = (e) => console.log(e);
  const handleClick5 = (e) => e.target.textContent = "ouch!";
  
  // for img e.target.style.display ="none";

  return (
     /* for0-3 <button className={styles.button} onClick={() => handleClick0-3(uname)}> */
    <>
     

      <button className={styles.button} onClick={(e) => handleClick5(e)}>
        click me
      </button>
    </>
  );
}

export default Button;
//*/
/*
//Inline CSS
function Button() {
  const styles = {
    backgroundColor: "red",
  };
  return (
    <>
      <button style={styles}>Inline CSS</button>
    </>
  );
}

export default Button;
*/
