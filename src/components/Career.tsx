import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Finance Intern</h4>
                <h5>Gravitas Masters</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Demonstrated analytical and problem-solving skills throughout the internship and understood financial concepts and practices well.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Content Writing Intern</h4>
                <h5>WeDidit</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed content writing skills and promoted books through digital marketing campaigns.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Placement Co-ordinator</h4>
                <h5>Placement Cell, DDUC</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Support the recruitment team in organizing and attending job fairs and recruitment events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
