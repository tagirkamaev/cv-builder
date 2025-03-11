import '../styles/Resume.css'
import PersonalInfoSection from './personal-info/PersonalInfoSection'
import EducationInfoSection from './education/EducationInfoSection'
import ExperienceInfoSection from './experience/ExperienceInfoSection'
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Resume({ personalInfo, sections, layout }) {
    return (
        <div className='resume-container'>
            <div className={`resume ${layout}`}>
                <PersonalInfoSection
                    fullName={personalInfo.fullName}
                    email={personalInfo.email}
                    phoneNumber={personalInfo.phoneNumber}
                    address={personalInfo.address}
                />
                <div>
                    <EducationInfoSection educations={sections.educations} />
                    <ExperienceInfoSection experiences={sections.experiences} />
                </div>
            </div>
        </div>
    )
}