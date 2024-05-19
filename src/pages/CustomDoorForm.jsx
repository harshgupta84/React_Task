import React, { Component } from "react";

class CustomDoorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "",
      height: "",
      style: "",
      material: "",
      accessories: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", this.state);
  };

  render() {
    const { width, height, style, material, accessories } = this.state;
    return (
      <div>
        <h1>Custom Door Order</h1>
        <form onSubmit={this.handleSubmit}>
          {/* Step 1: Door Size */}
          <div style={{ display: "block" }}>
            <h2>Step 1: Enter Door Size</h2>
            <label htmlFor="width">Width:</label>
            <input
              type="text"
              id="width"
              name="width"
              value={width}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <label htmlFor="height">Height:</label>
            <input
              type="text"
              id="height"
              name="height"
              value={height}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <button type="button" onClick={this.saveStep1}>
              Next
            </button>
          </div>

          {/* Step 2: Door Style */}
          <div style={{ display: "none" }}>
            <h2>Step 2: Choose Door Style</h2>
            <label htmlFor="style">Style:</label>
            <input
              type="text"
              id="style"
              name="style"
              value={style}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <button type="button" onClick={this.saveStep2}>
              Next
            </button>
            <button type="button" onClick={this.backToStep1}>
              Back
            </button>
          </div>

          {/* Step 3: Door Material */}
          <div style={{ display: "none" }}>
            <h2>Step 3: Choose Door Material</h2>
            <label htmlFor="material">Material:</label>
            <input
              type="text"
              id="material"
              name="material"
              value={material}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <button type="button" onClick={this.saveStep3}>
              Next
            </button>
            <button type="button" onClick={this.backToStep2}>
              Back
            </button>
          </div>

          {/* Step 4: Door Accessories */}
          <div style={{ display: "none" }}>
            <h2>Step 4: Choose Door Accessories</h2>
            <label htmlFor="accessories">Accessories:</label>
            <input
              type="text"
              id="accessories"
              name="accessories"
              value={accessories}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <button type="submit">Order Now</button>
            <button type="button" onClick={this.backToStep3}>
              Back
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CustomDoorForm;
