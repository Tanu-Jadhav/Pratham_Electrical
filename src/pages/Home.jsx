import GallerySlider from "../pages/GallerySlider";
import "../css/Home.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,  FaSyncAlt  } from "react-icons/fa";

import electric from "../assets/electric.webp";
import electric1 from "../assets/electric-1.webp";
import electric2 from "../assets/electric-2.jpg";
import electric3 from "../assets/electric-3.jpg";
import electric4 from "../assets/electric-4.jpg";
import ceo from "../assets/founder.jpeg";
import panelImg from "../assets/electric.webp";   // Left big image
import productImg from "../assets/electric-3.jpg"; // Bottom floating image

import { useState, useEffect } from "react";

function Home() {
  const [current, setCurrent] = useState(0);

  const slides = [
    { img: electric4, side: "center", h2: "WELCOME TO", h1: "Pratham Electrical" },
    { img: electric1, side: "left", h2: "Electrical", h1: "Electrical" },
    { img: electric2, side: "right", h2: "Electrical", h1: "Electrical" },
    { img: electric3, side: "left", h2: "TElectrical", h1: "Electrical" },
    { img: electric, side: "right", h2: "TElectrical", h1: "Electrical" }

  ];

  /* SLIDER */
  // ✅ AUTO SLIDE — PUT IT HERE
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(autoSlide);
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);


  /* ================= CAPTCHA STATE ================= */
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(6);
  const [answer, setAnswer] = useState("");


  /* ================= CAPTCHA FUNCTIONS ================= */

  // Refresh Captcha
  const refreshCaptcha = () => {
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
    setAnswer("");
  };

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (parseInt(answer) === num1 + num2) {
      alert("Captcha Verified ✅ Form Submitted!");
    } else {
      alert("Incorrect Captcha ❌ Try Again!");
    }
  };


  return (
    <div >

  {/* ================= BANNER SECTION ================= */}

      <section className="banner" id="banner">
        <div className="slider">
          <div className="slide">
            <img src={slides[current].img} alt="Banner" />

            <div className={slides[current].side === "left" ? "banner-text-i" : "banner-text"}>
              <h2>{slides[current].h2}</h2>
              <h1>{slides[current].h1}</h1>
            </div>
          </div>

          <div className="slider-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? "active" : ""}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>

          <span className="prev" onClick={prevSlide}>❮</span>
          <span className="next" onClick={nextSlide}>❯</span>
        </div>
      </section>

  {/* ================= HOME SECTION ================= */}

      <section className="home-section" id="home">
      
      {/* LEFT IMAGE AREA */}
      <div className="home-image-box">
        <img src={panelImg} alt="Electrical Panel" className="main-img" />

        {/* dotted design */}
        <div className="dots-design"></div>

        {/* floating bottom image */}
        <img
          src={productImg}
          alt="Switchboard"
          className="floating-img"
        />
      </div>

      {/* RIGHT CONTENT AREA */}
      <div className="home-content-box">
        
        {/* Watermark */}
        <h1 className="watermark-text">Home</h1>

        <h4 className="small-heading">
          WELCOME TO <span className="red-line"></span>
        </h4>

        <h2 className="main-heading">
          PRATHAM Electricals 
        </h2>

        <hr />

        <p className="home-desc">
          <b>Established in year 2025.</b>
          <br /><br />

          Welcome to PRATHAM Electricals, an ISO-certified
          company at the forefront of the electrical engineering sector.
          With a strong focus on System Engineering and Execution, we pride
          ourselves on delivering exceptional quality, ensuring customer
          satisfaction at every step.
          <br /><br />

          PRATHAM is trusted for its precision, craftsmanship, and commitment to
          offering value-driven solutions across various industries.
          Supported by a state-of-the-art infrastructure and a team of skilled
          professionals, we ensure seamless project execution, from design to
          delivery.
        </p>
      </div>
    </section>

      {/* ================= ABOUT SECTION ================= */}


   <section className="about-section" id="about">
      <div className="about-wrapper">

        {/* Left Side - CEO Image */}
        <div className="about-left">
          <img src={ceo} alt="Founder Prathamesh Jadhav" />
          <h3>Prathamesh Jadhav</h3>
          <p>Founder </p>

          <h4 className="hero-text mt-5" >📍 Our Location</h4>
          <p>
            Navi Sangavi, Pimpri-Chinchwad, Pune, Maharashtra – 411027
          </p>
        </div>

        {/* Right Side - Paragraphs */}
        <div className="about-right">
        <h1 className="watermark">ABOUT</h1>

          <p>
            Welcome to <b>Pratham Electrical</b>, a trusted name in electrical
            services and solutions. With more than <b>8 years of experience</b>,
            we provide safe, reliable, and high-quality electrical work for
            residential, commercial, and industrial projects.
          </p>

          <p>
            Under the leadership of our CEO, <b>Mr. Prathamesh Jadhav</b>, we
            have earned a strong reputation for professionalism, expert service,
            and customer satisfaction.
          </p>

          <p>
            Our mission is to deliver modern electrical solutions with the
            highest safety standards, transparent communication, and long-term
            reliability.
          </p>

        
          {/* Google Map */}
          <div className="about-map mt-5">
            <iframe
              title="Pratham Electrical Location"
              src="https://www.google.com/maps?q=Krishna+Chowk+Navi+Sangavi+Pimpri+Chinchwad+Pune+411027&output=embed"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="about-left">
        </div>
        </div>
        

      </div>
    </section>

  {/* ================= SERVICES SECTION ================= */}

      <section className="services" id="services">
            <h1 className="hero-text">SERVICES</h1>
      </section>

  {/* ================= GALLERY SECTION (HOME SLIDER PREVIEW) ================= */}

<section className="gallery" id="gallery">
  <GallerySlider />
</section>


  {/* ================= CONTACT SECTION ================= */}
      <section className="contact-section" id="contact">
        <div className="contact-container">

          {/* LEFT INFO */}
          <div className="contact-info">
            <h2 className="contact-title">
              Contact Info <span></span>
            </h2>

            <div className="info-block">
              <h4>Contact Number:</h4>
              <div className="info-row">
                <div className="icon-box">
                  <FaPhoneAlt />
                </div>
                <p>+91 9960377652</p>
              </div>
            </div>

            <div className="info-block">
              <h4>Mail Address:</h4>
              <div className="info-row">
                <div className="icon-box">
                  <FaEnvelope />
                </div>
                <p>prathameshj926@gmail.com</p>
              </div>
            </div>

            <div className="info-block">
              <h4> Address:</h4>
              <div className="info-row">
                <div className="icon-box">
                  <FaMapMarkerAlt />
                </div>
                <p>Krishna Chowk, Pimpari-Chinchwad, Pune, Maharashtra, India-411027</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-form">
            <form onSubmit={handleSubmit}>

              <div className="form-grid">
                <input type="text" placeholder="Enter Your Name" />
                <input type="text" placeholder="Enter Company Name" />

                <input type="text" placeholder="Enter Phone Number" />
                <input type="email" placeholder="Enter Email" />

                <input type="text" placeholder="Enter Product Name" />
                <input type="text" placeholder="Enter City Name" />
              </div>

              <textarea placeholder="Drop Your Message Here"></textarea>

              <div className="upload-row">
                <label>Upload File</label>
                <input type="file" />
              </div>

              {/* CAPTCHA + SUBMIT */}
              <div className="captcha-submit-row">
                <div>
                  <p className="captcha-text">
                    Just to prove you are a human?
                  </p>

                  <div className="captcha-box">
                    <span>{num1}</span>
                    <span>+</span>
                    <span>{num2}</span>
                    <span>=</span>

                    <input
                      type="text"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      placeholder="?"
                    />

                    <button
                      type="button"
                      className="refresh-btn"
                      onClick={refreshCaptcha}
                    >
                      <FaSyncAlt />
                    </button>
                  </div>
                </div>

                <button type="submit" className="submit-btn">
                  SUBMIT
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
