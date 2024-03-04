import React from 'react';


const Card = () => {
  return (
    <div>
    <div class="card text-bg-primary mb-3" style={{maxWidth: 400, display: 'inline-block', margin: 20}}>
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card text-bg-secondary mb-3" style={{maxWidth: 400, display: 'inline-block', margin: 20}}>
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Secondary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card text-bg-success mb-3" style={{maxWidth: 400, display: 'inline-block', margin: 20}}>
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Success card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
  );
};

export default Card;