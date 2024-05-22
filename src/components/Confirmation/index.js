import styles from './style.module.css'
import {Images} from "../../assets/Images";
import {Link } from "react-router-dom"




function Confirmation()
{   

    return(
        <div className= {styles.wrapper}>
            <div className= {styles.innerwrapper}>

               <img src = {Images.Image12}  alt = "No image"/> 

                <h1 > Congratulations !</h1>
                <p> You have been added on the waiting list</p>
                
                <Link to = "/listing">
                <button   className={styles.submitdiv} > Done   </button>
                </Link>
          
            </div>

        </div>
    )
}

export default Confirmation