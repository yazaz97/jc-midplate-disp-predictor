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
import JCEquation from "./JCEquation";

function ScrollModal({ isOpen, onClose }) {
  return (
    <Modal
      onClose={onClose}
      //   finalFocusRef={btnRef}
      isOpen={isOpen}
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>About This App</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div>
            <div className="gif-container">
              <img
                src={`${process.env.PUBLIC_URL}/simulation.gif`}
                alt="GIF description"
                className="gif-image"
              />
            </div>
            <p className="pt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sed elit tristique, suscipit leo a, placerat erat. Mauris eget
              odio at elit accumsan mattis non eget velit. Morbi non dui dolor.
              Quisque consectetur luctus dolor, at suscipit metus fringilla
              eget. Vivamus convallis arcu felis, sit amet tincidunt neque
              pretium ut. Donec elit arcu, euismod sed sapien nec, rutrum
              elementum lacus. Etiam egestas dignissim erat eget ultrices. Nulla
              facilisi. Aliquam eu nunc condimentum, accumsan justo ut,
              vulputate lorem. Vestibulum at sollicitudin lacus. Etiam posuere
              mauris in diam euismod, nec ultrices metus posuere. Phasellus
              molestie sagittis lacus, ac congue libero consequat at.
            </p>
            <JCEquation />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sed elit tristique, suscipit leo a, placerat erat. Mauris eget
              odio at elit accumsan mattis non eget velit. Morbi non dui dolor.
              Quisque consectetur luctus dolor, at suscipit metus fringilla
              eget. Vivamus convallis arcu felis, sit amet tincidunt neque
              pretium ut. Donec elit arcu, euismod sed sapien nec, rutrum
              elementum lacus. Etiam egestas dignissim erat eget ultrices. Nulla
              facilisi. Aliquam eu nunc condimentum, accumsan justo ut,
              vulputate lorem. Vestibulum at sollicitudin lacus. Etiam posuere
              mauris in diam euismod, nec ultrices metus posuere. Phasellus
              molestie sagittis lacus, ac congue libero consequat at.
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ScrollModal;
