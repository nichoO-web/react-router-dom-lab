import { Link } from "react-router-dom";

const MailboxList = ({ mailBoxes }) => {
    return (
        <>
          <h2>Mailboxes</h2>
          <div>
            {mailBoxes.map((box) => (
                <div key={box._id}>
                    <Link to={`/mailboxes/${box._id}`}>Box #{box._id}</Link>
                </div>
            ))}
          </div>
        </>
    );
}

export default MailboxList;