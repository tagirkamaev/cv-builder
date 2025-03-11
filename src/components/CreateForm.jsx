import '../styles/CreateForm.css'

export default function CreateForm({ onClick, buttonText }) {
    return (
        <button className="create-form" onClick={onClick}>
            <h4 className="button-content">
                <i className="fa-solid fa-plus" />
                {buttonText}
            </h4>
        </button>
    )
}