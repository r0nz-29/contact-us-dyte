import {
  Modal, ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay, Text,
} from "@chakra-ui/react";

export default function ThanksModal({open=false, onClose=() => {}}) {
  return (
    <Modal isOpen={open} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>Thank you !</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
          <Text pb={4}>
            We have received your request and will contact you soon
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
