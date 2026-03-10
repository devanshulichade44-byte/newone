import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Home.css";

import denimj from "../assets/denimj.png";
import modimg2 from "../assets/modimg2.png";
import barber from "../assets/barber.jpg";
import men3 from "../assets/men 3.jpg";
import skincare1 from "../assets/skincare1.jpg";
import newmodgirl from "../assets/newmodgirl.jpg";

/* -------------------------------------------------
 🔎 Simple Search Bar
-------------------------------------------------- */
const SimpleSearchBar = ({ navigate }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const lowerQuery = query.toLowerCase();

    if (
      lowerQuery.includes("men") ||
      lowerQuery.includes("formal") ||
      lowerQuery.includes("shirt") ||
      lowerQuery.includes("grooming")
    ) {
      navigate("/mens");
    } else if (
      lowerQuery.includes("women") ||
      lowerQuery.includes("dress") ||
      lowerQuery.includes("skincare")
    ) {
      navigate("/women");
    } else {
      alert(`No specific category found for "${query}". Showing general results.`);
    }
    setQuery("");
  };

  return (
    <form onSubmit={handleSearch} className="simple-search-form">
      <input
        type="text"
        placeholder="Search Fashion, Grooming, or Skincare..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="simple-search-input"
      />
      <button type="submit" className="simple-search-button">
        🔍
      </button>
    </form>
  );
};

/* -------------------------------------------------
 🏠 HOME COMPONENT
-------------------------------------------------- */
function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  /* -------------------------------------------------
   🧠 CHECK IF USER IS LOGGED IN
  -------------------------------------------------- */
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth/me", { withCredentials: true })
      .then((res) => {
        setUser(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      })
      .catch(() => {
        setUser(null);
        localStorage.removeItem("user");
      });
  }, []);

  /* -------------------------------------------------
   🚪 LOGOUT
  -------------------------------------------------- */
  const handleLogout = () => {
    axios
      .post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true })
      .then(() => {
        setUser(null);
        localStorage.removeItem("user");
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  /* -------------------------------------------------
   🔒 SECURE ACTION HANDLER
  -------------------------------------------------- */
  const handleProtectedClick = (path) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      alert("Please login to access this section.");
      navigate("/login");
      return;
    }
    navigate(path);
  };

  /* -------------------------------------------------
   🧱 RENDER
  -------------------------------------------------- */
  return (
    <div className="main-container">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Jura:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* 🔝 Navbar */}
      <header>
        <nav className="navbar">
          <div className="navbar-inner">
            <div className="logo">STYLEGLANZ</div>

            <SimpleSearchBar navigate={navigate} />

            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>

              {!user ? (
                <>
                  <li><Link to="/login" className="login-button">Login</Link></li>
                  <li><Link to="/signup" className="signup-button">Signup</Link></li>
                </>
              ) : (
                <li>
                  <button onClick={handleLogout} className="logout-button">
                    Logout ({user.username})
                  </button>
                </li>
              )}
            </ul>
          </div>
        </nav>

        {/* 🖼️ Hero */}
        <div className="hero-container">
          <div className="hero-image-left" style={{ backgroundImage: `url(${denimj})` }}></div>
          <div className="hero-image-right" style={{ backgroundImage: `url(${modimg2})` }}></div>
          <div className="hero-text">
            <h2 className="hero-text1">WELCOME TO STYLEGLANZ</h2>
            <h1 className="hero-text2">FASHION AND GROOMING</h1>
            <p className="hero-text3">Elevate your fashion sense</p>
          </div>
        </div>
      </header>

      {/* 🧍 Fashion Section */}
      <section className="fashion-section">
        <div className="fashion-content">
          <div className="fashion-text">
            <h1>"Style is a way to say who you are without having to speak."</h1>
            <h2>WHERE FASHION MEETS THE FUTURE</h2>
            <p>
              Welcome to the ultimate destination where fashion meets grooming. Discover the best tips,
              trends, and grooming hacks to elevate your personal style.
            </p>
          </div>
          <div className="image-wrapper">
            <img src={barber} alt="Barber working" className="model-image" />
          </div>
        </div>
      </section>

      {/* 👕 Fashion Choice Section */}
      <section className="fashion-choice-section">
        <div className="choice-container">
          <div className="image-wrapper men-container">
            <img src={men3} alt="Stylish man" className="fashion-image men-image" />
            <div className="button-overlay">
              <button
                className="fashion-button men-button"
                onClick={() => handleProtectedClick("/mens")}
              >
                Men's Fashion
              </button>
            </div>
          </div>

          <div className="image-wrapper women-container">
            <img src={newmodgirl} alt="Stylish woman" className="fashion-image women-image" />
            <div className="button-overlay">
              <button
                className="fashion-button women-button"
                onClick={() => handleProtectedClick("/women")}
              >
                Women's Fashion
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 💆 Skincare Section */}
      <section className="skincare-section">
        <div className="skincare-content-wrapper">
          <div className="text-overlay">
            <h1 className="main-slogan">Glow Naturally, Shine Brighter</h1>
            <h2 className="sub-slogan">Nurture Your Skin, Elevate Your Confidence</h2>
            <p className="description">
              Skincare is not just a routine — it’s a commitment to nurturing your natural beauty every day.
              Start your journey to healthy, glowing skin.
            </p>
          </div>

          <div className="image-wrapper skincare-container">
            <img src={skincare1} alt="Skincare" className="skincare-image" />
            <div className="button-overlay">
              <button
                className="fashion-button skincare-button"
                onClick={() => handleProtectedClick("/skincare")}
              >
                Start Your Skincare Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 📱 Footer */}
      <footer>
        <a href="https://www.instagram.com" className="footof" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-instagram"></i> INSTAGRAM
        </a>
        <a href="https://www.facebook.com" className="thegu" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-facebook"></i> FACEBOOK
        </a>
        <a href="https://x.com" className="tweet" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-twitter"></i> TWITTER
        </a>
      </footer>

      <hr className="section-divider" />
      <hr className="section-divider" />
    </div>
  );
}

export default Home;
