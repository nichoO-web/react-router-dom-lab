import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailBoxes }) => {
    const { id } = useParams();
    const mailbox = mailBoxes.find((box) => box._id === Number(id));

    if (!mailbox) {
        return <h2>Mailbox Not Found!</h2>;
    }

    return (
        <>
          <h2>Mailbox Details</h2>
          <p><strong>Box Number:</strong> {mailbox._id}</p>
          <p><strong>Boxholder Name:</strong> {mailbox.name}</p>
          <p><strong>Box Size:</strong> {mailbox.boxSize}</p>
        </>
    );
}

export default MailboxDetails;