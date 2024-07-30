import React from "react";

const Header = () => {
  return (
    <section
      className="hero is-link is-fullheight is-fullheight-with-navbar"
      style={{
        backgroundImage:
          "url(https://cdn.dribbble.com/userupload/14652135/file/still-4d30fc814ad2fe4ce74aa7c35ccf84a8.png?resize=840x630&vertical=center)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div>
              <h1 className="title is-1">Balqis Seisar Amalia</h1>
              <h2 className="subtitle is-3">
                Frontend Web Developer & UI/UX Designer
              </h2>
              <p>
                Hello! I am Balqis Seisar Amalia, wellcome to my profile
                website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
