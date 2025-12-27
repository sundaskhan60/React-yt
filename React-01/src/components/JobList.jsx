import Card from "./Card";
import "./JobList.css";
import { jobOpenings } from "./JobOpenings";

function JobList({ jobs }) {
  return (
    <div className="job-container">
      {jobs.map((job, index) => (
        <Card key={index} job={job} />
      ))}
      {jobOpenings.map(function(elem,idx){
return console.log(elem.companyName,elem.location,idx)
      })}
    </div>
  );
}

export default JobList;
