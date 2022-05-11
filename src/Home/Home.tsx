import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/todo");
  };

  return (
    <div className="card">
      <h5 className="card-title mt-2">Home</h5>
      <div className="row">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur nemo
          incidunt reiciendis, officiis sunt neque cumque nobis consequatur
          maxime exercitationem voluptatem modi minima! Quae eaque fuga, eum non
          accusamus nesciunt.
        </p>
      </div>
      <div className="row mb-3">
        <div className="col align-self-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleNavigation}
          >
            Go to Todo App
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
