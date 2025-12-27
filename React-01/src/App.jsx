import JobList from "./components/JobList";
import { jobOpenings } from "./components/JobOpenings";

function App() {
  return <JobList jobs={jobOpenings} />;
}

export default App;
