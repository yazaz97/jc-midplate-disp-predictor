import { Button } from "@chakra-ui/react";
function Form() {
  return (
    <div className="form-container">
      <div className="form-container">
        <div className="form-sub-container">
          <h1 className="title">Material Mid Plate Displacement Predictor</h1>
          <form class="form">
            <div className="first-row">
              <div class="input-box">
                <label for="name">A (MPa)</label>
                <input type="text" placeholder="A or Yield Stress" />
              </div>
              <div class="input-box">
                <label for="name">B (MPa)</label>
                <input type="text" placeholder="Strain Hardening Constant" />
              </div>
            </div>
            <div className="second-row">
              <div class="input-box">
                <label for="name">n</label>
                <input type="text" placeholder="Strain Hardening Coefficient" />
              </div>
              <div class="input-box">
                <label for="name">C</label>
                <input type="text" placeholder="Strengthening Coefficient" />
              </div>
              <div class="input-box">
                <label for="name">m</label>
                <input
                  type="text"
                  placeholder="Thermal Softening Coefficient"
                />
              </div>
            </div>
          </form>

          <Button colorScheme="blue">Generate Graph</Button>
        </div>
      </div>
    </div>
  );
}

export default Form;
