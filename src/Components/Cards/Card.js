import DB from "../../DB.json";
export const CardBase = (props) => {
  const { imgs, title1, text1, link1 } = props;
  return (
    <>
      <div className="card">
        <img className="card-img-top" src={imgs} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title1}</h5>
          <p className="card-text">{text1}</p>
          <a href={link1} className="btn btn-primary">
            Click to View
          </a>
        </div>
      </div>
    </>
  );
};
export const Cards = () => {
  return (
    <>
      <div className="row m-0">
        {DB.works.map((work) => {
          return (
            <div className="col-md-4 col-lg-4 col-sm-12">
              <CardBase {...work}></CardBase>
            </div>
          );
        })}
      </div>
    </>
  );
};
