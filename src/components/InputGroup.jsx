import '../styles/InputGroup.css'

export default function InputGroup({
    type,
    id,
    labelText,
    placeholder,
    value,
    onChange,
    "data-key": dataKey,
    recommended,
    optional,
}) {
    return (
        <div className="input-group">
            <label htmlFor={id}>
                <span className="label-text">{labelText}</span>
                {optional && <span className="optional-text">optional</span>}
                {recommended && <span className="recommended-text">recommended</span>}
            </label>
            
            {type === "Textarea" ? (
                <textarea
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                data-key={dataKey}
                ></textarea>
            ) : (
                <input
                type={type}
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                data-key={dataKey}
                />
            )}
        </div>
    )
}