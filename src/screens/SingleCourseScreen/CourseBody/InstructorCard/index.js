import React from "react";
import "./instructorCard.css";

const InstructorCard = () => {
  return (
    <div className="body-card-container">
      <div className="row">
        <div className="instructor-card-profile center">PROFILE</div>
        <div className="instructor-card-info">
          <div className="instructor-card-tag">INSTRUCTOR</div>
          <div className="instructor-card-name">Mehdi Mitiche</div>
        </div>
      </div>
      <div className="card-instructor-description">
        Simon Prickett is a Curriculum Software Engineer at Redis Labs. He began
        his career writing C++ for Hewlett-Packard Labs, and has subsequently
        held senior roles with companies ranging from startups to enterprises
        including Capital One, USA Today, and New Zealand’s Customs Service.
        Simon has created software for mobile and embedded devices since the
        late 1990s, from early browser-based cellphone portals to today’s IoT
        and cloud architectures. The need for high performance, efficiency, and
        personalization that makes these systems successful led him to discover
        Redis.
      </div>
    </div>
  );
};

export default InstructorCard;
