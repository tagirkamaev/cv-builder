import '../styles/Buttons.css'

export default function Buttons({ save, remove, cancel }) {
    return (
        <div className="buttons">
            <button className="delete" onClick={remove} type="button"> 
                <i className="fa-solid fa-trash" /> 
                Delete
                </button>
                <div className='main-buttons'>
                    <button className='cancel' onClick={cancel} type='button'>
                        Cancel
                    </button>
                    <button className='save' onClick={save} type='button'>
                        Save
                    </button>
                </div>
        </div>
    )
}