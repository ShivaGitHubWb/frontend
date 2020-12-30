import './Footer.css';
import { Link } from 'react-router-dom';
const md_icon = process.env.PUBLIC_URL + '/assets/images/';

function Footer() {
  return (
    <footer className="row_full footer_bg pad_t_b_45">
        <div className="container">
            <div className="row">
                <div class="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 float_l mob_m_b_20">
                    <div className="footer_title row_full">
                        <h3>Follow us</h3>
                        <ul className="socialLink">
                            {/* <li><a href=""><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                            <li><a href=""><i class="fa fa-google-plus-square" aria-hidden="true"></i></a></li>
                            <li><a href=""><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                            <li><a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href=""><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li> */}
                            <li><a href=""><img className="image-icon" src={`${md_icon}facebook.png`} /></a></li>
                            <li><a href=""><img className="image-icon" src={`${md_icon}googlePlus.png`} /></a></li>
                            <li><a href=""><img className="image-icon" src={`${md_icon}linkedIn.png`} /></a></li>
                            <li><a href=""><img className="image-icon" src={`${md_icon}instagram.png`} /></a></li>
                            <li><a href=""><img className="image-icon" src={`${md_icon}twitter.png`} /></a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5 float_l mob_m_b_20">
                    <div className="footer_title row_full">
                    <ul className="footer_title row_full">
                     <Link to="/about">
                        <li style={{listStyle:"none",color:"white",cursor:"pointer" }} className="pad_l_100">About us</li>
                        {/* <p style={{color:'#424242'}} className="mar_b_0">Copyright &copy; 2020 Gyansutram, All Rights  Reserved</p> */}
                    </Link>
                    </ul>    
                    <p style={{color:'#fff'}} className="mar_b_0">Copyright &copy; 2020 Gyansutram, All Rights  Reserved</p>
                    </div>
                </div>

                <div class="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 float_l">
                    <div className="footer_title row_full">
                    <ul className="footer_title row_full" >
                     <Link to='/contact'>
                        <li style={{listStyle:"none",color:"white",cursor:"pointer"}}>Contact us</li>
                    </Link>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}
export default Footer;