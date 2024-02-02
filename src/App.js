import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import logo from "./image/creative.svg"
import { FaHandPointRight } from "react-icons/fa";
import { RiHomeOfficeLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { PiStudent, PiQuotesFill } from "react-icons/pi";
import { IoIosArrowRoundForward, IoMdPlay } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { GoVerified } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import Logo from './Logo';

const Option = {
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 1,
    }
  }
}

const nav = [
  {
    "menu1": "HOME",
    "menu2": "COURSE",
    "menu3": "ACTIVITIES",
    "menu4": "BLOG",
    "menu5": "KNOW US",
    "menu6": "GET IN TOUCH",
    "menu7": "STUDENT ZONE",
  }
]

var slider = [require('./image/s1.webp'), require('./image/s2.webp'), require('./image/s3.webp')]

const offer = [
  { img: require('./image/data1.webp'), name: 'Development Courses' },
  { img: require('./image/data2.webp'), name: 'Design Courses' },
  { img: require('./image/data3.webp'), name: 'Programming IT' },
  { img: require('./image/data4.webp'), name: 'Trendy Courses' },
  { img: require('./image/data5.webp'), name: 'Civil-Mech. Engineering' },
  { img: require('./image/data6.webp'), name: 'Business Development' },

]

const student = [
  { num: '18000+', std: 'HAPPY STUDENTS' },
  { num: '10+', std: 'CERTIFICATION APPROVAL' },
  { num: '100+', std: 'CERTIFIED TEACHERS' },
  { num: '12000+', std: 'STUDENTS PLACED' },
]

const read = [
  { img: require('./image/ch1.png'), head: "Industry Experts As Trainers", des: "Our     trainers have 5+ years of industry experience coupled with extensive research and analysis." },

  { img: require('./image/ch2.png'), head: "Latest Curriculum", des: "We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time." },

  { img: require('./image/ch3.png'), head: "Latest Technology", des: "We strive to let you have a solid foundational knowledge of technologies shaping the IT World today." },

  { img: require('./image/ch4.png'), head: "Interview Assistance", des: "At the end of each training,our training instructor will go through the possible technical questions you may be asked." },

  { img: require('./image/ch5.png'), head: "Free Upgradation", des: "We will be provided free upgradation for any newer version of the course you have." },

  { img: require('./image/ch6.png'), head: "Lifetime Support", des: "We will provide you lifetime support on all the courses you learned from us." },

]

const slider1 = [
  require('./image/std1.png'),
  require('./image/std2.png'),
  require('./image/std3.png'),
  require('./image/std4.png'),
  require('./image/std5.png'),
  require('./image/std6.png'),

]

const demand = [
  'Multimedia Training Institute In Varachha', 'spoken english class in katargam',
  'Web development training in katargam', 'Best animation training course',
  'C++ Programming Language Training Institute In Varachha',
  'Python Training Institute In Varachha', 'Adobe illustrator design',
  'Adobe xd design training institute in varachha', 'Multimedia Training Institute In Varachh',
  'spoken english class in katargam', 'Web development training in katargam',
  'Best animation training course']

function App(props) {
  return (
    <>
      {/* ================================= top header =================================== */}

      <div className="header_part ">
        <div className='container'>
          <div className="top_header">
            <div className="header">
              <div className="top flex space-between">
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
      </div>

      {/* =============================== lgo_nav =========================== */}

      {
        nav.map((ele, ind) => {
          return (

            <Logo key={ind} m1={ele.menu1} m2={ele.menu2} m3={ele.menu3} m4={ele.menu4} m5={ele.menu5} m6={ele.menu7}></Logo>

          )
        })
      }


      {/* =============================== slider ========================== */}

      <OwlCarousel className='owl-theme' autoplay {...Option} loop margin={10} nav={false} dots={false}>
        {
          slider.map((ele) => {
            return (
              <div class='item'>
                <img src={ele}></img>
              </div>
            )
          })
        }
      </OwlCarousel>

      {/* ==================================== offer course ========================= */}

      <section>
        <div className="heading">
          <div className='read_part flex'>
            <p className='a_line'></p>
            <p>CREATIVE COURSE</p>
          </div>
          <h2>OFFERED COURSES</h2>
        </div>

        <div className="contentimg flex">
          {
            offer.map((ele, ind) => {
              return (
                <div className="one">
                  <div className="image">
                    <img src={ele.img}></img>
                  </div>
                  <h3 className="dev">{ele.name}</h3>
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
              )
            })
          }
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

      </section >

      {/* =============================== video ================================ */}

      <section>
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
      </section>

      {/* ================================ count ================================== */}

      <div className='bg_image flex'>
        {
          student.map((ele, ind) => {
            return (
              <div className='one_image'>
                <div className='img_bg'>
                  <PiStudent></PiStudent>
                </div>
                <p className='number'>{ele.num}</p>
                <p className='creativ'>{ele.std}</p>
              </div>
            )
          })
        }
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
                  <span className='info'>@ Patoliya Infotech</span>
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
          <div className='first flex'>
            {
              read.map((ele, ind) => {
                return (
                  <div className='one1'>
                    <div className='img1'>
                      <img src={ele.img}></img>
                    </div>
                    <h3>{ele.head}</h3>
                    <p className='read_txt'>{ele.des}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      {/* ============================ STUDENT PLACEMENT ======================== */}

      <div className='our_std container'>
        <div className='students'>
          <div className='read_part flex'>
            <p className='a_line'></p>
            <p>STUDENT PLACEMENT</p>
          </div>
          <h2>OUR RECRUITMENT PARTNERS</h2>
        </div>
        <OwlCarousel className='owl-theme' items={6} autoplay={1000} margin={10} nav={false} dots={false}>
          {
            <div className='s_image'>
              <div className='slider_img'>
                {
                  slider1.map((ele) => {
                    return (
                      <div className='slider1'>
                        <img src={ele}></img>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          }
        </OwlCarousel>
      </div>

      {/* =============================== Decmanded Cou =========================== */}

      <div className='cou_demand container'>
        <div className='our_title'>Our Demanded Course -</div>
        <div className='demand flex'>
          <div className='d_course flex'>
            {
              demand.map((ele, ind) => {
                return (
                  <p className='our'>{ele}</p>
                )
              })
            }
          </div>
        </div>
        <p className='show'>Show More</p>
      </div>

      {/* ===================================== footer ================================== */}
      <div className='footer'>
        <div className=' container three_part space-between'>
          <div className='footer_p'>
            <div className='first_inner'>
              <div className='cretive_logo'>
                <img src={logo}></img>
              </div>
              <p className='cdmi_p'>
                Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.
              </p>
              <p className='follow'>
                <a href='#'>FOLLOW US ON</a>
              </p>
              <p className='icon1 flex'>
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

    </>
  )
}

export default App;
