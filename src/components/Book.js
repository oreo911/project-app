import React from 'react';
import login from "./indo.jpg";


const Book = () => {
  return (
  <div class="container py-4" id="book">
       <div class="row row-cols-1 row-cols-md-5 g-4">
  <div class="col">
    <div class="card border-0">
      <img src={login} class="card-img-top rounded-3 shadow-sm" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-center" href="/">Card title</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-0">
      <img src={login} class="card-img-top rounded-3 shadow-sm" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-center" href="/">Card title</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-0">
      <img src={login} class="card-img-top rounded-3 shadow-sm" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-center" href="/">Card title</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-0">
      <img src={login} class="card-img-top rounded-3 shadow-sm" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-center" href="/">Card title</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-0">
      <img src={login} class="card-img-top rounded-3 shadow-sm" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-center" href="/">Card title</h5>
      </div>
    </div>
  </div>
</div>
</div>
  );
};

export default Book;
