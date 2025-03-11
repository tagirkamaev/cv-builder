import DisplayForms from "../DisplayForms";
import ExpandSection from '../ExpandSection'
import CreateForm from '../CreateForm'
import ExperienceForm from "./ExperienceForm";
import '../../styles/Section.css'

export default function AddEducationSection({
    experiences,
    isOpen,
    onChange,
    createForm,
    setOpen,
    onCancel,
    toggleCollapsed,
    onHide,
    onRemove,
}) {
    return (
        <div className="add-experience-section section">
            <ExpandSection
                isOpen={isOpen}
                setOpen={setOpen}
                sectionName='Experience'
                iconName='fa-solid fa-briefcase'
            />

            <div className={`section-content ${isOpen ? 'open' : ''}`}>
                <DisplayForms
                    forms={experiences}
                    FormComponent={ExperienceForm}
                    onChange={onChange}
                    onCancel={onCancel}
                    onHide={onHide}
                    onRemove={onRemove}
                    toggleCollapsed={toggleCollapsed}
                    titleKey='companyName'
                    arrayName='experiences'
                />
                <CreateForm onClick={createForm} buttonText='Experience' />
            </div>
        </div>
    )
}