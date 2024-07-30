import React from "react";

const Services = () => {
    const descriptions = [
        {
          title: "Front End Web Development",
          desc: "Developing the Front End using the latest technologies, leveraging HTML5/CSS3, design systems like Fluent, Elastic UI, and adding dynamic functionality with JavaScript and React.js.",
        },
        {
          title: "UI/UX Designer",
          desc: "Creating intuitive user experiences through engaging interface design, efficient wireframe creation, and user flow diagram development for web applications.",
        },
        {
          title: "Axios API",
          desc: "Integrating APIs in the frontend allows for dynamic content updates and seamless communication with backend services, enhancing the user experience.",
        }
      ];
      
  return (
    <section className="section" id="services">
      <div className="section-heading">
        <h3 className="title is-2">Services</h3>
        <h4 className="subtitle is-5">What can I do for you?</h4>
      </div>
      <div className="container">
        {descriptions.map((item, index) => (
          <div className="columns" key={index}>
            <div className="column">
              <div className="box">
                <div className="content">
                  <h4 className="title is-5">{item.title}</h4>
                  {item.desc}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
