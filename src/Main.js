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
  const [A, setA] = useState("");
  const [B, setB] = useState("");
  const [c, setC] = useState("");
  const [n, setN] = useState("");
  const [m, setM] = useState("");
  const [mass, setMass] = useState("");
  const [velocity, setVelocity] = useState("");

  const handleSubmit = () => {
    if (A >= 215 && A <= 2030) {
      if (B >= 151 && B <= 1530) {
        if (n >= 0.17 && n <= 1) {
          if (c >= 0.000001 && c <= 0.0427) {
            if (m >= 0.32 && m <= 2.77) {
              onOpen();
            } else {
              toast.error("Please enter a value between 0.32 and 2.77");
            }
          } else {
            toast.error(
              "Please enter a value between 1E-6 and 0.0427 for C value",
            );
          }
        } else {
          toast.error("Please enter a value between 0.17 and 1 for n value");
        }
      } else {
        toast.error("Please enter a value between 151 and 1530 for B value");
      }
    } else {
      toast.error("Please enter a value between 215 and 2030 for A value");
    }
  };
  const handleJCsubmit = () => {
    if (A >= 215 && A <= 2030) {
      if (B >= 151 && B <= 1530) {
        if (n >= 0.17 && n <= 1) {
          if (c >= 0.000001 && c <= 0.0427) {
            if (m >= 0.32 && m <= 2.77) {
              onSecondOpen();
            } else {
              toast.error("Please enter a value between 0.32 and 2.77");
            }
          } else {
            toast.error(
              "Please enter a value between 1E-6 and 0.0427 for C value",
            );
          }
        } else {
          toast.error("Please enter a value between 0.17 and 1 for n value");
        }
      } else {
        toast.error("Please enter a value between 151 and 1530 for B value");
      }
    } else {
      toast.error("Please enter a value between 215 and 2030 for A value");
    }
  };

  const handleA = (e) => {
    console.log(e.target.value);
    setA(e.target.value);
  };
  const handleB = (e) => {
    console.log(e.target.value);
    setB(e.target.value);
  };

  const handleC = (e) => {
    console.log(e.target.value);
    setC(e.target.value);
  };

  const handleN = (e) => {
    console.log(e.target.value);
    setN(e.target.value);
  };

  const handleM = (e) => {
    console.log(e.target.value);
    setM(e.target.value);
  };

  const handleMass = (e) => {
    console.log(e.target.value);
    setMass(e.target.value);
  };
  const handleVelocity = (e) => {
    console.log(e.target.value);
    setVelocity(e.target.value);
  };

  return (
    <div className="parent">
      <div className="main-container">
        <h1>Sheet Metal Mid Plate Displacement Predictor</h1>
        <div className="first-row">
          <div className="input-box">
            <h3>Length (mm)</h3>
            <SliderComponent title="length" />
          </div>
        </div>
        <div className="first-row">
          <div className="input-box">
            <h3>Width (mm)</h3>
            <SliderComponent title="width" />
          </div>
        </div>
        <div className="first-row">
          <div className="input-box">
            <h3>Thickness</h3>
            <Dropdown />
          </div>
          <div className="input-box">
            <h3>Impactor Mass (Kg) (4.0 - 5.0)</h3>
            <Input
              placeholder="Impactor Mass"
              value={mass}
              onChange={(e) => handleMass(e)}
            />
          </div>
          <div className="input-box">
            <h3>Impactor Velocity (m/s) (8 - 16)</h3>
            <Input
              placeholder="Impactor Velocity"
              value={velocity}
              onChange={(e) => handleVelocity(e)}
            />
          </div>
        </div>
        <div className="first-row">
          <div className="input-box">
            <h3>A (MPa) (215 - 2030)</h3>
            <Input
              placeholder="Yield Stress"
              value={A}
              onChange={(e) => handleA(e)}
            />
          </div>
          <div className="input-box">
            <h3>B (MPa) (151 - 1530)</h3>
            <Input
              placeholder="Strain Hardening Constant"
              value={B}
              onChange={(e) => handleB(e)}
            />
          </div>
          <div className="input-box">
            <h3>n (0.17 - 1)</h3>
            <Input
              placeholder="Strain Hardening Coefficient"
              value={n}
              onChange={(e) => handleN(e)}
            />
          </div>
        </div>
        <div className="first-row">
          <div className="input-box">
            <h3>C (1E-6 - 0.0427)</h3>
            <Input
              placeholder="Strengthening Coefficient"
              value={c}
              onChange={(e) => handleC(e)}
            />
          </div>
          <div className="input-box">
            <h3>m (0.32 - 2.77)</h3>
            <Input
              placeholder="Thermal Softening Coefficient"
              value={m}
              onChange={(e) => handleM(e)}
            />
          </div>
        </div>
        <div className="btn-row">
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
              graphData={mldata}
              lable="Displacement"
              graphTitle="Mid Plate Node Displacement for Selected Material"
              xAxis="Time (ms)"
              yAxis="Displacement (mm)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

// onClick={onOpen}
