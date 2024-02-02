import './App.css'
import { TfiEmail } from "react-icons/tfi";
import { GoVerified } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoMdPlay } from "react-icons/io";
import { PiStudent } from "react-icons/pi";
import { PiQuotesFill } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";
import logo from "./image/creative.svg"
import logonav from "./image/creative-logo-blue.svg";
import { FaHandPointRight } from "react-icons/fa";
import { RiHomeOfficeLine } from "react-icons/ri";
import Logo from './Logo';


function Home(props) {
  return (
    <div>
      {/* ================================= top header =================================== */}

      <div className="header_part">
        <div className="top_header space-between">
          <div className="header">
            <div className="top flex">
              <div className="left_header">
                <a>
                  <TfiEmail></TfiEmail>
                  <span>info@cdmi.in</span>
                </a>
                <a>
                  <GoVerified></GoVerified>
                  <span>Verify Certificate</span>
                </a>
              </div>
              <div className='center_header'>

                <a>HAVE ANY QUESTION ? +91 90333 16003</a>

              </div>
              <div className='right_header '>
                <a>
                  <FaFacebookF></FaFacebookF>
                </a>
                <a>
                  <IoLogoTwitter></IoLogoTwitter>
                </a>
                <a>
                  <TiSocialGooglePlus></TiSocialGooglePlus>
                </a>
                <a>
                  <FaLinkedin></FaLinkedin>
                </a>
                <a>
                  <TiSocialInstagram></TiSocialInstagram>
                </a>
                <a>
                  <AiOutlineYoutube></AiOutlineYoutube>
                </a>
                <a>
                  <FaWhatsapp></FaWhatsapp>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =============================== lgo_nav =========================== */}
      <Logo></Logo>

      {/* =============================== slider ========================== */}
      {/* <div className="slider">
        <img src={require('./image/slider.webp')}></img>
      </div> */}
      {/* ==================================== offer course ========================= */}
      <section>
        <div className="heading">
          <div className=' text-center'>
            <p>CREATIVE COURSE</p>
          </div>
          <h2>OFFERED COURSES</h2>
        </div>
        <div>
          <div className="contentimg flex">
            <div className="one">
              <div className="image">
                <img src={require('./image/data1.webp')}></img>
              </div>
              <h3 className="dev">Development Courses</h3>
              <p className="border"></p>
              <div className="main_part flex space-between">
                <p className='icon'>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStarHalfAlt></FaStarHalfAlt>
                </p>
                <p className='btn'>
                  <a href='#'>
                    <button>Know more..!</button>
                  </a>
                </p>
              </div>
            </div>
            <div className="two">
              <div className="image">
                <img src={require('./image/data2.webp')}></img>
              </div>
              <h3 className="dev">Development Courses</h3>
              <p className="border"></p>
              <div className="main_part flex space-between">
                <p className='icon'>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStarHalfAlt></FaStarHalfAlt>
                </p>
                <p className='btn'>
                  <a href='#'>
                    <button>Know more..!</button>
                  </a>
                </p>
              </div>
            </div>
            <div className="three">
              <div className="image">
                <img src={require('./image/data3.webp')}></img>
              </div>
              <h3 className="dev">Development Courses</h3>
              <p className="border"></p>
              <div className="main_part flex space-between">
                <p className='icon'>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStarHalfAlt></FaStarHalfAlt>
                </p>
                <p className='btn'>
                  <a href='#'>
                    <button>Know more..!</button>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="contentimg flex">
            <div className="one">
              <div className="image">
                <img src={require('./image/data4.webp')}></img>
              </div>
              <h3 className="dev">Development Courses</h3>
              <p className="border"></p>
              <div className="main_part flex space-between">
                <p className='icon'>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStarHalfAlt></FaStarHalfAlt>
                </p>
                <p className='btn'>
                  <a href='#'>
                    <button>Know more..!</button>
                  </a>
                </p>
              </div>
            </div>
            <div className="two">
              <div className="image">
                <img src={require('./image/data5.webp')}></img>
              </div>
              <h3 className="dev">Development Courses</h3>
              <p className="border"></p>
              <div className="main_part flex space-between">
                <p className='icon'>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStarHalfAlt></FaStarHalfAlt>
                </p>
                <p className='btn'>
                  <a href='#'>
                    <button>Know more..!</button>
                  </a>
                </p>
              </div>
            </div>
            <div className="three">
              <div className="image">
                <img src={require('./image/data6.webp')}></img>
              </div>
              <h3 className="dev">Development Courses</h3>
              <p className="border"></p>
              <div className="main_part flex space-between">
                <p className='icon'>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStarHalfAlt></FaStarHalfAlt>
                </p>
                <p className='btn'>
                  <a href='#'>
                    <button>Know more..!</button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='view'>
          <div className='button'>
            <a href='#'>
              View All Courses
              <i>
                <IoIosArrowRoundForward></IoIosArrowRoundForward>
              </i>
            </a>
          </div>
        </div>
      </section>

      {/* =============================== video ================================ */}
      <div>
        <div>
          <div className="section_a">
            <div className='overlap_section'>
              <div className='heading_1'>
                <div className='sub_heading flex'>
                  <p className='a_line'></p>
                  <p>About Us</p>
                </div>
                <h5>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h5>
                <p className='a_text'>
                  Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Gujarat for Data Science, Machine Learning, Blockchain Development, AR/VR Game Development, Full Stack Web Development, Web Design, Game Design, Mobile App Development, Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.
                </p>
                <div className='a_btn'>
                  <a href='#'>
                    Enroll Now...!
                    <i>
                      <IoIosArrowRoundForward></IoIosArrowRoundForward>
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div className='a_image'>
              <div className='photo'>
                <div className='a_img'>
                  <img src={require('./image/sir.webp')}></img>
                </div>
                <p className='play'>
                  <a href='https://www.youtube.com/watch?v=ZZpoqf-mwEM'>
                    <i className='p_icon'><IoMdPlay></IoMdPlay ></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================================ count ================================== */}
      <div className='bg_image flex'>
        <div className='one_image'>
          <div className='img_bg'>
            <PiStudent></PiStudent>
          </div>
          <p className='number'>18000+</p>
          <p className='creativ'>HAPPY STUDENT</p>
        </div>
        <div className='one_image'>
          <div className='img_bg'>
            <PiStudent></PiStudent>
          </div>
          <p className='number'>10+</p>
          <p className='creativ'>CERTIFICATION APPROVAL</p>
        </div>
        <div className='one_image'>
          <div className='img_bg'>
            <PiStudent></PiStudent>
          </div>
          <p className='number'>100+</p>
          <p className='creativ'>CERTIFIED TEACHERS</p>
        </div>
        <div className='one_image'>
          <div className='img_bg'>
            <PiStudent></PiStudent>
          </div>
          <p className='number'>12000+</p>
          <p className='creativ'>STUDENTS PLACED</p>
        </div>
      </div>

      {/* ================================= testimonial =============================== */}
      <div className='testimonial'>
        <div className='testi'>
          <div className='heading_2'>
            <div className=' sub_heading flex'>
              <p className='a_line'></p>
              <p>HAPPY STUDENTS</p>
            </div>
            <h2>ALUMNI SPEAK</h2>
            <div className='quotes flex'>
              <PiQuotesFill></PiQuotesFill>
            </div>
            <p className='testi_justify'>
              I have joined creative multimedia institute for UI/UX Design course two months ago. Had a really great experience in learning the course. I am thankful to the sir who taught us really well with different approaches. This learning process gave me confidence on how to explore myself better with higher level of understanding. Thank you creative multimedia.
            </p>
            <div className='testimonial_img flex'>
              <img src={require('./image/testi.jpg')}></img>
              <div className="testi_user">
                <h6>KOLADIYA MANSI</h6>
                <p className='course'>
                  <span className='cou'>UI/UX Designer </span>
                  <span className='info'>@  Patoliya Infotech</span>
                </p>
              </div>
            </div>
          </div>
          <div className='testi_img'>
            <div className='std_photo'>
              <img src={require('./image/std_p.png')}></img>
            </div>
          </div>
        </div>
      </div>

      {/* ================================= choose_part ================================== */}
      <div className='choose_part'>
        <div className='our_part'>
          <div className='read_part flex'>
            <p className='a_line'></p>
            <p>READ OUR DIFFERENCE</p>
          </div>
          <h2>WHY CHOOSE CREATIVE</h2>
        </div>
        <div className='read'>
          <div className='first '>
            <div className='one1'>
              <div className='img1'>
                <img src={require('./image/ch1.png')}></img>
              </div>
              <h3>Industry Experts As Trainers</h3>
              <p className='read_txt'>Our trainers have 5+ years of industry experience coupled with extensive research and analysis</p>
            </div>
            <div className='one1'>
              <div className='img2'>
                <img src={require('./image/ch2.png')}></img>
              </div>
              <h3>Latest Curriculum</h3>
              <p className='read_txt'>We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.</p>
            </div>
            <div className='one1'>
              <div className='img3'>
                <img src={require('./image/ch3.png')}></img>
              </div>
              <h3>Latest Technology</h3>
              <p className='read_txt'>We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.</p>
            </div>
          </div>
          <div className='first'>
            <div className='one1'>
              <div className='img4'>
                <img src={require('./image/ch4.png')}></img>
              </div>
              <h3>Interview Assistance</h3>
              <p className='read_txt'>At the end of each training,our training instructor will go through the possible technical questions you may be asked.</p>
            </div>
            <div className='one1'>
              <div className='img5'>
                <img src={require('./image/ch5.png')}></img>
              </div>
              <h3>Free Upgradation</h3>
              <p className='read_txt'>We will be provided free upgradation for any newer version of the course you have.</p>
            </div>
            <div className='one1'>
              <div className='img6'>
                <img src={require('./image/ch6.png')}></img>
              </div>
              <h3>Lifetime Support</h3>
              <p className='read_txt'>We will provide you lifetime support on all the courses you learned from us.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ============================ STUDENT PLACEMENT ======================== */}
      <div className='our_std'>
        <div className='students'>
          <div className='read_part flex'>
            <p className='a_line'></p>
            <p>STUDENT PLACEMENT</p>
          </div>
          <h2>OUR RECRUITMENT PARTNERS</h2>
        </div>
        <div className='s_image'>
          <div className='slider_img flex'>
            <div className='slider1'>
              <img src={require('./image/std1.png')}></img>
            </div>
            <div className='slider1'>
              <img src={require('./image/std2.png')}></img>
            </div>
            <div className='slider1'>
              <img src={require('./image/std3.png')}></img>
            </div>
            <div className='slider1'>
              <img src={require('./image/std4.png')}></img>
            </div>
            <div className='slider1'>
              <img src={require('./image/std5.png')}></img>
            </div>
            <div className='slider1'>
              <img src={require('./image/std6.png')}></img>
            </div>
          </div>
        </div>
      </div>

      {/* =============================== Decmanded Cou =========================== */}
      <div className='cou_demand'>
        <div className='our_title'>Our Demanded Course -</div>
        <div className='demand '>
          <div className='d_course'>
            <p className='our'>Multimedia Training Institute In Varachha</p>
            <p className='our'>spoken english class in katargam</p>
            <p className='our'>Web development training in katargam</p>
            <p className='our'>Best animation training course</p>
          </div>
        </div>
        <div className='demand'>
          <div className='d_course'>
            <p className='our'>C++ Programming Language Training Institute In Varachha</p>
            <p className='our'>Python Training Institute In Varachha</p>
            <p className='our'>Adobe illustrator design</p>
            <p className='our'>Adobe xd design training institute in varachha</p>
          </div>
        </div>
        <div className='demand'>
          <div className='d_course'>
            <p className='our'>Multimedia Training Institute In Varachha</p>
            <p className='our'>spoken english class in katargam</p>
            <p className='our'>Web development training in katargam</p>
            <p className='our'>Best animation training course</p>
          </div>
        </div>
        <p className='show'>Show More</p>
      </div>

      {/* ===================================== footer ================================== */}
      <div className='footer'>
        <div className='three_part'>
          <div className='footer_p'>
            <div className='first_inner'>
              <div className='cretive_logo'>
                <img src={logo}></img>
              </div>
              <p className='cdmi_p'>
                Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.
              </p>
              <a href='#'><p className='follow'>FOLLOW US ON</p></a>
              <p className='icon1'>
                <p>
                  <i><FaFacebookF></FaFacebookF></i>
                </p>
                <p>
                  <i><IoLogoTwitter></IoLogoTwitter></i>
                </p>
                <p>
                  <i><TiSocialGooglePlus></TiSocialGooglePlus></i>
                </p>
                <p>
                  <i><FaLinkedin></FaLinkedin></i>
                </p>
                <p>
                  <i><TiSocialInstagram></TiSocialInstagram></i>
                </p>
                <p>
                  <i><AiOutlineYoutube></AiOutlineYoutube></i>
                </p>
                <p>
                  <i><FaWhatsapp></FaWhatsapp></i>
                </p>
              </p>
            </div>
          </div>
          <div className='sec_p'>
            <div className='inner_c'>
              <p className='feature'>FEATURE LINKS</p>
              <div className='i_one'>
                <i><FaHandPointRight></FaHandPointRight></i>
                <span>About Us</span>
              </div>
              <div className='i_one'>
                <i><FaHandPointRight></FaHandPointRight></i>
                <span>Blogs</span>
              </div>
              <div className='i_one'>
                <i><FaHandPointRight></FaHandPointRight></i>
                <span>Join Us</span>
              </div>
              <div className='i_one'>
                <i><FaHandPointRight></FaHandPointRight></i>
                <span>Company Login</span>
              </div>
              <div className='i_one'>
                <i><FaHandPointRight></FaHandPointRight></i>
                <span>Certificate Verification</span>
              </div>
            </div>
          </div>
          <div className='third_p'>
            <div className='inner_con'>
              <p className='contact'>CONTACT US</p>
              <p className='head'>HEAD OFFICE - YOGICHOWK</p>
              <p className='p_404'>
                401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat</p>
              <p className='mo'>Mo :<font color="#FFBC06"> +91 90333 16003</font></p>
              <p className='other'>OTHER BRANCHES</p>
              <div className='i_one'>
                <i><RiHomeOfficeLine></RiHomeOfficeLine></i>
                <span>Katargam</span>
              </div>
              <div className='i_one'>
                <i><RiHomeOfficeLine></RiHomeOfficeLine></i>
                <span> Mota Varachha</span>
              </div>
              <div className='i_one'>
                <i><RiHomeOfficeLine></RiHomeOfficeLine></i>
                <span> Adajan</span>
              </div>
              <div className='i_one'>
                <i><RiHomeOfficeLine></RiHomeOfficeLine></i>
                <span> Navsari</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Home
