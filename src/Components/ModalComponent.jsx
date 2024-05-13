// ModalComponent.js

import React from 'react';

function ModalComponent() {
  return (
    <div className="card">
      <div className="content">
        <h1>Modal</h1>
        <label className="modal-open modal-label" htmlFor="modal-open">
          <p>Open Modal</p>
        </label>
        <input type="radio" name="modal" value="open" id="modal-open" className="modal-radio" />
        <div className="modal">
          <label className="modal-label overlay">
            <input type="radio" name="modal" value="close" className="modal-radio" />
          </label>
          <div className="content">
            <div className="top">
              <h2>Heading</h2>
              <label className="modal-label close-btn">
                <input type="radio" name="modal" value="close" className="modal-radio" />
              </label>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,  commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalComponent;
