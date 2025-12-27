import "./JobCard.css";

function Card({ job }) {
  return (
    <div className="job-card">
      <img src={job.brandLogo} alt={job.companyName} className="job-logo" />

      <h3 className="job-title">{job.companyName}</h3>

      <p className="job-date">{job.datePosted}</p>

      <p className="job-tags">
        {job.postType} • {job.level}
      </p>

      <p className="job-pay">${job.payPerHour}/hour</p>

      <p className="job-location">{job.location}</p>
    </div>
  );
}

export default Card;
