import { Cards } from "./Cards/Card";

const Project = () => {
  return (
    <section className="sect5" id="sec5">
      <div className="row m-0">
        <div className="col-md-1"></div>
        <div className="col-md-11 about">
          <h1>
            <span className="num">04.</span>Projects
          </h1>
          <p>These are some of the projects have worked on: </p>
          <Cards />
        </div>
      </div>
    </section>
  );
};

export default Project;
