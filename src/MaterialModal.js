import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { Button } from "@chakra-ui/react";

import "./Main.css";

function MaterialModal({ isOpen, onClose }) {
  return (
    <Modal
      onClose={onClose}
      //   finalFocusRef={btnRef}
      isOpen={isOpen}
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>List of Materials</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className="material-container">
            <div>
              <h3 className="material-title">Aluminium 5083</h3>
              <img
                src={`${process.env.PUBLIC_URL}/materials/alumium_5083.png`}
                alt="alumium_5083"
              />
              <p>
                Aluminum 5083 is a high-strength, corrosion-resistant alloy
                known for its excellent performance in extreme environments. It
                has a high magnesium content, which enhances its strength while
                maintaining good weldability and formability. Aluminum 5083 is
                widely used in marine applications, such as shipbuilding, and in
                industries requiring resistance to saltwater, chemicals, and
                extreme temperatures. It also offers good performance in
                cryogenic applications.
              </p>
            </div>
            <div>
              <h3 className="material-title">Weldox 500E</h3>
              <img
                src={`${process.env.PUBLIC_URL}/materials/weldox_500E.png`}
                alt="alumium_5083"
              />
              <p>
                Weldox 500E is a high-strength structural steel designed for
                welding and heavy-duty applications. It features excellent
                toughness and weldability, making it suitable for construction,
                shipbuilding, and various engineering projects. This steel grade
                offers high yield strength and impact resistance, ensuring
                durability and performance under demanding conditions. Weldox
                500E is often used in applications such as heavy machinery,
                bridges, and storage tanks, where strength and reliability are
                critical. Its ability to withstand harsh environments makes it a
                preferred choice in the construction and manufacturing
                industries.
              </p>
            </div>
            <div>
              <h3 className="material-title">Inconel 718</h3>
              <img
                src={`${process.env.PUBLIC_URL}/materials/inconel_718.png`}
                alt="alumium_5083"
              />
              <p>
                Inconel 718 is a high-performance nickel-chromium alloy known
                for its exceptional strength and corrosion resistance at
                elevated temperatures. It is primarily composed of nickel (about
                50-55%) with chromium (17-21%) and is strengthened through
                age-hardening, which enhances its mechanical properties. Inconel
                718 is widely used in aerospace, oil and gas, and chemical
                processing applications due to its ability to withstand extreme
                temperatures and harsh environments. Its excellent weldability
                and resistance to oxidation make it suitable for critical
                components such as turbine blades, rocket engines, and gas
                turbines.
              </p>
            </div>
            <div>
              <h3 className="material-title">DH-36 Steel</h3>
              <img
                src={`${process.env.PUBLIC_URL}/materials/dh_36_steel.png`}
                alt="alumium_5083"
              />
              <p>
                DH 36 steel is a high-strength structural steel primarily used
                in shipbuilding and offshore applications. It belongs to the
                ASTM A131/A131M standard and is known for its excellent
                toughness and weldability, making it suitable for use in marine
                environments. With a minimum yield strength of 355 MPa (51.5
                ksi) and good impact resistance, DH 36 steel is often utilized
                in the construction of hulls, decks, and other critical
                structures in ships. Its properties ensure reliability and
                durability, even in harsh conditions, making it a preferred
                choice in the maritime industry.
              </p>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default MaterialModal;
