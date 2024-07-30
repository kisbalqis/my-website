import React from "react";
import { profileData } from "../data";

const About = () => {
  const { heading, profile, skills } = profileData;

  return (
    <section className="section" id="about">
      <div className="section-heading">
        <h3 className="title is-2">{heading.title}</h3>
        <h4 className="subtitle is-5">{heading.subtitle}</h4>
        <div className="container">
          <p>{heading.description}</p>
        </div>
      </div>
      <div className="columns has-same-height is-gapless">
        <div className="column is-4">
          <div className="card" style={{ height: "100%" }}>
            <div className="card-content">
              <h3 className="title is-4">Profile</h3>
              <div className="content">
                <table className="table-profile">
                  <tbody>
                    <tr>
                      <td>Education:</td>
                      <td>{profile.education}</td>
                    </tr>
                    <tr>
                      <td>Phone:</td>
                      <td>{profile.phone}</td>
                    </tr>
                    <tr>
                      <td>Email:</td>
                      <td>{profile.email}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <div className="buttons has-addons is-centered">
                {profile.socialLinks.map((link, index) => (
                  <a key={index} href={link.href} className="button is-link">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="card" style={{ height: "100%" }}>
            <div className="card-image">
              <figure className="image is-4">
                <video
                  src="https://cdn.dribbble.com/userupload/14651436/file/original-a5d1cc34f3840686dca89a13461bd790.mp4"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  autoPlay
                  loop
                  muted
                  playsInline>
                  Your browser does not support the video tag.
                </video>
              </figure>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="card" style={{ height: "100%" }}>
            <div className="card-content skills-content">
              <h3 className="title is-4">Skills</h3>
              <div className="content">
                {skills.map((skill, index) => (
                  <article key={index} className="media">
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <strong>{skill.name}:</strong>
                          <br />
                          <progress
                            className="progress is-primary"
                            value={skill.value}
                            max="100"></progress>
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
