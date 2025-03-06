import InputGroup from "../InputGroup";
import Buttons from "../Buttons";

export default function EducationForm(props) {
    const { degree, schoolName, location, startDate, endDate, id } = props.form;
    const { onChange, cancel, save, remove  } = props;

    return (
        <form
            className="education-form section-form"
            id={id}
            data-array-name="educations"
            onSubmit={(e) => e.preventDefault()}
        >
            <InputGroup
            type="text"
            id="school-name"
            labelText="School Name"
            placeholder="Enter School Name / University"
            value={schoolName}
            onChange={onChange}
            data-key="schoolName"
            />
            <InputGroup
            type="text"
            id="degree"
            labelText="Degree"
            placeholder="Enter Degree / Field of Study"
            value={degree}
            onChange={onChange}
            data-key="degree"
            />
            <div className="dates-group">
                <InputGroup
                type="text"
                id="date"
                labelText="Start Date"
                placeholder="Enter Start Date"
                value={startDate}
                onChange={onChange}
                data-key="startDate"
                />
                <InputGroup
                type="text"
                id="date"
                labelText="End Date"
                placeholder="Enter End Date"
                value={endDate}
                onChange={onChange}
                data-key="endDate"
                />
            </div>
            <InputGroup
            type="text"
            id="location"
            labelText="Location"
            placeholder="Enter Location"
            value={location}
            onChange={onChange}
            data-key="location"
            optional
            />

            <Buttons
            cancel={cancel}
            save={save}
            remove={remove}
            />
        </form>        
    )
}