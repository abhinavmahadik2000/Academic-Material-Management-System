import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="App">
      <header>
        <h1>Services</h1>
        <h4 className='login_heading'><Link to="/login" className="login_heading">Login</Link></h4>
      </header>
      <main>
        <div className="services-content">
          <div className="service-item">
            <h3>Course Catalog</h3>
            <p>
              Explore our wide range of courses from various fields. Find the courses that match your interests and career goals.
            </p>
            <Link to="/learn-more-course-catalog" className="service-button">Learn More</Link>
          </div>
          <div className="service-item">
            <h3>Online Learning</h3>
            <p>
              Access course materials, lectures, and assignments online. Learn at your own pace from anywhere in the world.
            </p>
            <Link to="/learn-more-online-learning" className="service-button">Learn More</Link>
          </div>
          <div className="service-item">
            <h3>Assessment and Feedback</h3>
            <p>
              Receive regular feedback on your progress. Take quizzes and exams to test your knowledge and skills.
            </p>
            <Link to="/learn-more-assessment-feedback" className="service-button">Learn More</Link>
          </div>
          {/* Other service items */}
        </div>
      </main>
    </div>
  );
}

export default Services;


