import React from "react";
import login from "../img/indo.jpg";
import { NavLink } from "react-router-dom";

const Book = () => {
  return (
    <div className="row justify-content-center">
      
      <div className="col-md-4 mb-5 ">
        <div className="container my-8 py-8">
          <div class="h-100 text-center p-4">
            <img src={login} class="card-img-top rounded" />
            <div class="card-body">
              <h5 class="card-title mb-0">Buku Bahasa</h5>
              <p class="card-text lead fw-bold">Buku Bahasa Indo</p>
              <NavLink to={`/`} class="btn btn-outline-primary d-grid">
                Detail
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-5 ">
        <div className="container my-8 py-8">
          <div class="h-100 text-center p-4">
            <img src={login} class="card-img-top rounded" />
            <div class="card-body">
              <h5 class="card-title mb-0">Buku Bahasa</h5>
              <p class="card-text lead fw-bold">Buku Bahasa Indo</p>
              <NavLink to={`/`} class="btn btn-outline-primary d-grid">
                Detail
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
