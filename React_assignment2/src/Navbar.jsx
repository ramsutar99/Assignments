import React from "react";
const Navbar = () => {
  return (
    <>
      <header>
        {/* <!-- container of logo , head information and navigation button of main website - starts here--> */}

        <div className="head-container">
          {/* <!-- logo & logo caption starts here --> */}
          <div className="logobox">
            <div className="logo">EDYODA</div>
            <i className="logo-caption">Stories</i>
          </div>
          {/* <!-- logo & logo caption ends here --> */}

          {/* <!-- dropdown menu starts here --> */}

          <div className="dropdown">
            <label htmlFor="lists">Explore Categories</label>
            <select name="catlog" id="lists">
              <option value=""></option>
              <option value="AI" id="#AI">
                Artifitial Inteligence
              </option>
              <option value="CloudComputing" id="CloudComputing">
                Cloud Computing
              </option>
              <option value="DevOps" id="DevOps">
                DevOps
              </option>
              <option value="programminglanguages" id="programminglanguages">
                Programming languages
              </option>
              <option value="mobileappdevelopment" id="mobileappdevelopment">
                Mobile Application Development
              </option>
              <option value="technology-tools" id="technology_tools">
                Technology and tools
              </option>
              <option value="getjob" id="getjob">
                Get a Job in Tech Company
              </option>

              <option value="others">Others</option>
            </select>
          </div>
          {/* <!-- dropdown menu ends here --> */}

          {/* <!-- header content of information starts here --> */}
          <div className="headinfo">
            {/* EdYoda is free learning and knowledge sharing platform for techies */}
          </div>
          <div className="button">
            <button className="gotobtn">
              <a href="https://www.edyoda.com/home" target="_blank">
                Go To Main Website
              </a>
            </button>
          </div>
          {/* <!-- header content of information ends here --> */}
        </div>
        {/* <!-- container of logo , head information and navigation button of main website - ends here--> */}
      </header>
    </>
  );
};

export default Navbar;
