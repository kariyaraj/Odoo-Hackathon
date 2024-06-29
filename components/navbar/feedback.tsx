// import React, { useState } from "react";
// import { Modal, Button, Input, Textarea } from "@nextui-org/react";
// import { InfoIcon } from "../icons/accounts/info-icon"; // Assume you have a MailIcon component

// const Feedback = () => {
//   const [visible, setVisible] = useState(false);
//   const [feedback, setFeedback] = useState("");
//   const [email, setEmail] = useState("");

//   const handler = () => setVisible(true);
//   const closeHandler = () => {
//     setVisible(false);
//     console.log("closed");
//   };

//   const handleSubmit = async () => {
//     try {
//       await fetch('/api/send-feedback', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, feedback }),
//       });

//       alert("Feedback sent successfully!");
//       setFeedback("");
//       setEmail("");
//       setVisible(false);
//     } catch (error) {
//       console.error("Error sending feedback: ", error);
//       alert("Failed to send feedback.");
//     }
//   };

//   return (
//     <>
//       <Button auto flat icon={<Info />} onPress={handler}>
//         Feedback
//       </Button>
//       <Modal closeButton aria-labelledby="modal-title" open={visible} onClose={closeHandler}>
//         <Modal.Header>
//           <h3>Feedback</h3>
//         </Modal.Header>
//         <Modal.Body>
//           <Input
//             label="Your Email"
//             placeholder="Enter your email"
//             fullWidth
//             clearable
//             bordered
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <Textarea
//             label="Your Feedback"
//             placeholder="Enter your feedback"
//             fullWidth
//             bordered
//             value={feedback}
//             onChange={(e) => setFeedback(e.target.value)}
//           />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button auto flat color="error" onPress={closeHandler}>
//             Close
//           </Button>
//           <Button auto onPress={handleSubmit}>
//             Submit
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default Feedback;
