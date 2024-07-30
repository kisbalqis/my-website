import React from 'react';

const Resume = () => {
  return (
    <section className="section" id="resume">
      <div className="section-heading">
        <h3 className="title is-2">Resume</h3>
        <h4 className="subtitle is-5">More about my past</h4>
        <a href="https://drive.google.com/file/d/1Y_76cGGdLw06oAhzXORUOlbyaU7BrDrB/view?usp=drive_link" className="button is-link is-medium">
          <span className="icon">
            <i className="fas fa-file-alt"></i>
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
    </section>
  );
};

export default Resume;
