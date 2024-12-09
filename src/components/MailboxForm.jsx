import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = ({ addBox }) => {
    const [name, setName] = useState('');
    const [boxSize, setBoxSize] = useState('small');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault;
        addBox({ name, boxSize });
        navigate('/mailboxes');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create a New Mailbox</h2>
            <label>
                BOxholder Name:
                <input 
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required />
            </label>
            <br />
            <label>
                Box Size:
                <select value={boxSize} onChange={(event) => setBoxSize(event.target.value)}>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
            </label>
            <br />
            <button type="submit">Create Mailbox</button>
        </form>
    );
};

export default MailboxForm;