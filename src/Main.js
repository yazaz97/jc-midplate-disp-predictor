import "./Main.css";
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import toast from "react-hot-toast";
import mldata from "./mldata.json";
import jcdata from "./jcdata.json";

// Import Chart.js and register necessary components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import SliderComponent from "./Slider";
import { useState } from "react";
import Dropdown from "./Dropdown";
import ModalComp from "./ModalComp";
import ScrollModal from "./ScrollModal";
import axios from "axios"
import { calcLength } from "framer-motion";
import PreDefinedMaterial from "./PreDefinedMaterial";
import MaterialModal from "./MaterialModal";
import ParticlesComponent from "./ReactParticles";


// Register the components (this is essential for Chart.js v3+)
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isSecondOpen,
    onOpen: onSecondOpen,
    onClose: onSecondClose,
  } = useDisclosure();
  const {
    isOpen: isThirdOpen,
    onOpen: onThirdOpen,
    onClose: onThirdClose,
  } = useDisclosure();
  const {
    isOpen: isFourthOpen,
    onOpen: onFourthOpen,
    onClose: onFourthClose,
  } = useDisclosure();
  const [sliderValue, setSliderValue] = useState(273);
  const [preMaterial, setPreMaterial] = useState(null);
  const [thickness, setThickness] = useState(null);
  const [density, setDensity] = useState(null);
  const [A, setA] = useState(null);
  const [B, setB] = useState(null);
  const [c, setC] = useState(null);
  const [n, setN] = useState(null);
  const [m, setM] = useState(null);
  const [mass, setMass] = useState(null);
  const [velocity, setVelocity] = useState(null);
  const [isInvalid, setIsInvalid] = useState({
    thickness: false,
    mass: false,
    velocity: false,
    A: false,
    B: false,
    n: false,
    c: false,
    m: false,
    density: false,
  });
  const [grData, setGrData] = useState([]);
  const [spinner, setSpinner] = useState(false);

  // const testRequest = async() => {
  //   const A_json = parseFloat(A)
  //   const B_json = parseFloat(B)
  //   const n_json = parseFloat(n)
  //   const c_json = parseFloat(c)
  //   const m_json = parseFloat(m)
  //   const velocity_json = parseFloat(velocity)
  //   const density_json = parseFloat(density)
  //   const mass_json = parseFloat(mass)
  //   const length_json = parseFloat(sliderValue)
  //   const thickness_json = parseFloat(thickness)
  //   const requestBody = {
  //     "A": A_json,
  //     "B": B_json,
  //     "n": n_json,
  //     "C": c_json,
  //     "m": m_json,
  //     "velocity": velocity_json,
  //     "density": density_json,
  //     "impactor_mass": mass_json,
  //     "length": length_json,
  //     "width": length_json,
  //     "thickness": thickness_json
  //   }

  //   const response = await axios.post("http://localhost:5000/",requestBody,    {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   setGrData(response.data)
  // }

  const handleSubmit = async () => {
    let newInvalidFields = { ...isInvalid };
    if (thickness) {
      newInvalidFields["thickness"] = false;
      if (mass >= 4 && mass <= 5) {
        newInvalidFields["mass"] = false;
        if (velocity >= 8 && velocity <= 16) {
          newInvalidFields["velocity"] = false;
          if (density >= 2750 && density <= 7850) {
            newInvalidFields["density"] = false;
            if (A >= 215 && A <= 2030) {
              newInvalidFields["A"] = false;
              if (B >= 151 && B <= 1530) {
                newInvalidFields["B"] = false;
                if (n >= 0.17 && n <= 1) {
                  newInvalidFields["n"] = false;
                  if (c >= 0.000001 && c <= 0.0427) {
                    newInvalidFields["c"] = false;
                    if (m >= 0.32 && m <= 2.77) {
                      newInvalidFields["m"] = false;
                      const A_json = parseFloat(A);
                      const B_json = parseFloat(B);
                      const n_json = parseFloat(n);
                      const c_json = parseFloat(c);
                      const m_json = parseFloat(m);
                      const velocity_json = parseFloat(velocity) * -1;
                      const density_json = parseFloat(density);
                      const mass_json = parseFloat(mass);
                      const length_json = parseFloat(sliderValue);
                      const thickness_json = parseFloat(thickness);
                      const requestBody = {
                        A: A_json,
                        B: B_json,
                        n: n_json,
                        C: c_json,
                        m: m_json,
                        velocity: velocity_json,
                        density: density_json,
                        impactor_mass: mass_json,
                        length: length_json,
                        width: length_json,
                        thickness: thickness_json,
                      };
                      setSpinner(true);
                      try {
                        onOpen();
                        const response = await axios.post(
                          "http://127.0.0.1:5000/",
                          requestBody,
                          {
                            headers: {
                              "Content-Type": "application/json",
                            },
                          },
                        );
                        await setGrData(response.data);
                        setSpinner(false);
                      } catch (error) {
                        console.log("There is an Error");
                        setSpinner(true);
                      }
                    } else {
                      newInvalidFields["m"] = true;
                      toast.error("Please enter a value between 0.32 and 2.77");
                    }
                  } else {
                    newInvalidFields["c"] = true;
                    toast.error("Please enter a value between 1E-6 and 0.0427");
                  }
                } else {
                  newInvalidFields["n"] = true;
                  toast.error("Please enter a value between 0.17 and 1");
                }
              } else {
                newInvalidFields["B"] = true;
                toast.error("Please enter a value between 151 and 1530");
              }
            } else {
              newInvalidFields["A"] = true;
              toast.error("Please enter a value between 215 and 2030");
            }
          } else {
            newInvalidFields["density"] = true;
            toast.error("Please enter a value between 2750 and 7850");
          }
        } else {
          newInvalidFields["velocity"] = true;
          toast.error("Please enter a value between 8 and 16");
        }
      } else {
        newInvalidFields["mass"] = true;
        toast.error("Please enter a value between 4 and 5");
      }
    } else {
      newInvalidFields["thickness"] = true;
      toast.error("Please select a Thickness");
    }

    setIsInvalid(newInvalidFields);
  };
  const handleJCsubmit = () => {
    let newInvalidFields = { ...isInvalid };
    if (thickness) {
      newInvalidFields["thickness"] = false;
      if (mass >= 4 && mass <= 5) {
        newInvalidFields["mass"] = false;
        if (velocity >= 8 && velocity <= 16) {
          newInvalidFields["velocity"] = false;
          if (density >= 2750 && density <= 7850) {
            newInvalidFields["density"] = false;
            if (A >= 215 && A <= 2030) {
              newInvalidFields["A"] = false;
              if (B >= 151 && B <= 1530) {
                newInvalidFields["B"] = false;
                if (n >= 0.17 && n <= 1) {
                  newInvalidFields["n"] = false;
                  if (c >= 0.000001 && c <= 0.0427) {
                    newInvalidFields["c"] = false;
                    if (m >= 0.32 && m <= 2.77) {
                      newInvalidFields["m"] = false;
                      onSecondOpen();
                    } else {
                      newInvalidFields["m"] = true;
                      toast.error("Please enter a value between 0.32 and 2.77");
                    }
                  } else {
                    newInvalidFields["c"] = true;
                    toast.error("Please enter a value between 1E-6 and 0.0427");
                  }
                } else {
                  newInvalidFields["n"] = true;
                  toast.error("Please enter a value between 0.17 and 1");
                }
              } else {
                newInvalidFields["B"] = true;
                toast.error("Please enter a value between 151 and 1530");
              }
            } else {
              newInvalidFields["A"] = true;
              toast.error("Please enter a value between 215 and 2030");
            }
          } else {
            newInvalidFields["density"] = true;
            toast.error("Please enter a value between 2750 and 7850");
          }
        } else {
          newInvalidFields["velocity"] = true;
          toast.error("Please enter a value between 8 and 16");
        }
      } else {
        newInvalidFields["mass"] = true;
        toast.error("Please enter a value between 4 and 5");
      }
    } else {
      newInvalidFields["thickness"] = true;
      toast.error("Please select a Thickness");
    }

    setIsInvalid(newInvalidFields);
  };

  const handleMaterials = () => {
    onFourthOpen();
  };

  const handleAbout = (e) => {
    onThirdOpen();
  };

  const handleA = (e) => {
    setA(e.target.value);
  };
  const handleB = (e) => {
    setB(e.target.value);
  };

  const handleC = (e) => {
    setC(e.target.value);
  };

  const handleN = (e) => {
    setN(e.target.value);
  };

  const handleM = (e) => {
    setM(e.target.value);
  };

  const handleMass = (e) => {
    setMass(e.target.value);
  };
  const handleVelocity = (e) => {
    setVelocity(e.target.value);
  };

  const handleDensity = (e) => {
    setDensity(e.target.value);
  };

  return (
    <div className="parent">
      <ParticlesComponent/>

      <div className="main-container">
        <h1>Sheet Metal Mid Plate Displacement Predictor</h1>
        <div className="first-row">
          <div className="input-box">
            <h3>Length (mm)</h3>
            <SliderComponent
              sliderValue={sliderValue}
              setSliderValue={setSliderValue}
            />
          </div>
        </div>
        <div className="first-row">
          <div className="input-box">
            <h3>Thickness</h3>
            <Dropdown
              thickness={thickness}
              setThickness={setThickness}
              isInvalid={isInvalid}
              setIsInvalid={setIsInvalid}
            />
          </div>
          <div className="input-box">
            <h3>Impactor Mass (Kg) (4.0 - 5.0)</h3>
            <Input
              placeholder="Impactor Mass"
              value={mass}
              onChange={(e) => handleMass(e)}
              isInvalid={isInvalid.mass}
              errorBorderColor="red.500"
              type="number"
            />
          </div>
          <div className="input-box">
            <h3>Impactor Velocity (m/s) (8 - 16)</h3>
            <Input
              placeholder="Impactor Velocity"
              value={velocity}
              onChange={(e) => handleVelocity(e)}
              isInvalid={isInvalid.velocity}
              errorBorderColor="red.500"
            />
          </div>
        </div>
        <div>
          <h3 className="sub-titles">Select Predifined Material</h3>
        </div>
        <div className="first-row-center-align">
          <div className="first-row-center">
            <PreDefinedMaterial
              preMaterial={preMaterial}
              setPreMaterial={setPreMaterial}
              setA={setA}
              setB={setB}
              setN={setN}
              setM={setM}
              setC={setC}
              setDensity={setDensity}
            />
            <Button colorScheme="blue" onClick={handleMaterials}>
              Learn more about Materials
            </Button>
            <MaterialModal isOpen={isFourthOpen} onClose={onFourthClose} />
          </div>
        </div>
        <div>
          <h3 className="sub-titles-center">OR</h3>
        </div>
        <div>
          <h3 className="sub-titles">Enter your material parameters</h3>
        </div>
        <div className="first-row">
          <div className="input-box">
            <h3>Density (kg/㎥) (2750 - 7850)</h3>
            <Input
              placeholder="Density"
              value={density}
              onChange={(e) => handleDensity(e)}
              isInvalid={isInvalid.density}
              errorBorderColor="red.500"
            />
          </div>
          <div className="input-box">
            <h3>A (MPa) (215 - 2030)</h3>
            <Input
              placeholder="Yield Stress"
              value={A}
              onChange={(e) => handleA(e)}
              isInvalid={isInvalid.A}
              errorBorderColor="red.500"
            />
          </div>
          <div className="input-box">
            <h3>B (MPa) (151 - 1530)</h3>
            <Input
              placeholder="Strain Hardening Constant"
              value={B}
              onChange={(e) => handleB(e)}
              isInvalid={isInvalid.B}
              errorBorderColor="red.500"
            />
          </div>
        </div>
        <div className="first-row">
          <div className="input-box">
            <h3>n (0.17 - 1)</h3>
            <Input
              placeholder="Strain Hardening Coefficient"
              value={n}
              onChange={(e) => handleN(e)}
              isInvalid={isInvalid.n}
              errorBorderColor="red.500"
            />
          </div>
          <div className="input-box">
            <h3>C (1E-6 - 0.0427)</h3>
            <Input
              placeholder="Strengthening Coefficient"
              value={c}
              onChange={(e) => handleC(e)}
              isInvalid={isInvalid.c}
              errorBorderColor="red.500"
            />
          </div>
          <div className="input-box">
            <h3>m (0.32 - 2.77)</h3>
            <Input
              placeholder="Thermal Softening Coefficient"
              value={m}
              onChange={(e) => handleM(e)}
              isInvalid={isInvalid.m}
              errorBorderColor="red.500"
            />
          </div>
        </div>
        <div className="btn-row">
          <div className="right-btns">
            <div className="btn">
              <Button
                backgroundColor="#506177"
                color="white"
                onClick={handleJCsubmit}
              >
                JC Model
              </Button>
              <ModalComp
                isOpen={isSecondOpen}
                onClose={onSecondClose}
                graphData={jcdata}
                lable="Stress"
                graphTitle="Johnson Cook Material Model for Selected Material"
                xAxis="Strain"
                yAxis="Stress (Pa)"
              />
            </div>
            <div className="btn">
              <Button
                backgroundColor="#506177"
                color="white"
                onClick={handleSubmit}
              >
                Generate Graph
              </Button>
              <ModalComp
                isOpen={isOpen}
                onClose={onClose}
                graphData={grData}
                lable="Displacement"
                graphTitle="Mid Plate Node Displacement for Selected Material"
                xAxis="Time (ms)"
                yAxis="Displacement (mm)"
                spinner={spinner}
              />
            </div>
          </div>
          <div>
            <Button colorScheme="blue" onClick={handleAbout}>
              About
            </Button>
            <ScrollModal isOpen={isThirdOpen} onClose={onThirdClose} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

// onClick={onOpen}
