import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";

function JCEquation() {
  return (
    <BlockMath
      math="\sigma = \left( A + B \varepsilon^n \right) \left( 1 + C \ln\left( \dot{\varepsilon} \right) \right) \left( 1 - \left( \frac{T - T_0}{T_m - T_0} \right)^m \right)
"
    />
  );
}

export default JCEquation;
