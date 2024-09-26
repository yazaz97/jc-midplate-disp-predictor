import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";
import { useState } from "react";

function SliderComponent({ title }) {
  const initialSliderValue = title === "length" ? 273 : 200;
  const [sliderValue, setSliderValue] = useState(initialSliderValue);
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <Slider
      id="slider"
      defaultValue={initialSliderValue}
      min={150}
      max={450}
      colorScheme="teal"
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderMark value={25} mt="1" ml="-2.5" fontSize="sm">
        150
      </SliderMark>
      <SliderMark value={50} mt="1" ml="-2.5" fontSize="sm">
        250
      </SliderMark>
      <SliderMark value={75} mt="1" ml="-2.5" fontSize="sm">
        450
      </SliderMark>
      <SliderTrack bg="#d3d3d3">
        <SliderFilledTrack bg="#506177" />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg="#506177"
        color="white"
        placement="top"
        isOpen={showTooltip}
        label={`${sliderValue}`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
  );
}

export default SliderComponent;
