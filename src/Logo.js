import './App.css'
import logonav from "./image/creative-logo-blue.svg";

function Logo(props) {
    
    return(

        <nav className='container'>
        <div className='bg_nav flex space-between '>
          <div className='left_nav'>
            <div className='img_nav'>
              <img src={logonav}></img>
            </div>
          </div>
          <div className='right_nav'>
            <ul className='main flex'>
              <li>{props.m1}</li>
              <li>{props.m2}</li>
              <li>{props.m3}</li>
              <li>{props.m4}</li>
              <li>{props.m5}</li>
              <li>{props.m6}</li>
              <li>{props.m7s}</li>
            </ul>
          </div>
        </div>
      </nav>

    )

}
export default Logo