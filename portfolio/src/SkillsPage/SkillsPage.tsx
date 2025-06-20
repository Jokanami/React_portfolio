import PythonOriginal from 'devicons-react/icons/PythonOriginal';
import CplusplusOriginal from 'devicons-react/icons/CplusplusOriginal';
import QtOriginal from 'devicons-react/icons/QtOriginal';
import CsharpOriginal from 'devicons-react/icons/CsharpOriginal';
import UnityOriginal from 'devicons-react/icons/UnityOriginal';
import Html5Plain from 'devicons-react/icons/Html5Plain';
import Css3OriginalWordmark from 'devicons-react/icons/Css3OriginalWordmark';
import JavaOriginal from 'devicons-react/icons/JavaOriginal';
import SpringOriginal from 'devicons-react/icons/SpringOriginal';
import JavascriptOriginal from 'devicons-react/icons/JavascriptOriginal';
import ReactOriginal from 'devicons-react/icons/ReactOriginal';
import PhpOriginal from 'devicons-react/icons/PhpOriginal';
import MysqlOriginalWordmark from 'devicons-react/icons/MysqlOriginalWordmark';
import DartOriginalWordmark from 'devicons-react/icons/DartOriginalWordmark';
import FlutterOriginal from 'devicons-react/icons/FlutterOriginal';
import SymfonyOriginal from 'devicons-react/icons/SymfonyOriginal';
import GitOriginal from 'devicons-react/icons/GitOriginal';
import DockerOriginal from 'devicons-react/icons/DockerOriginal';



import './SkillsPage.css'

function SkillsPage() {

    const skills = [
        {
            skillName: 'Python',
            icon: PythonOriginal,
        },
        {
            skillName: 'C++',
            icon: CplusplusOriginal,
        },
        {
            skillName: 'C#',
            icon: CsharpOriginal,
        },
        {
            skillName: 'HTML',
            icon: Html5Plain,
        },
        {
            skillName: 'CSS',
            icon: Css3OriginalWordmark,
        },
        {
            skillName: 'JavaScript',
            icon: JavascriptOriginal,
        },
        {
            skillName: 'Java',
            icon: JavaOriginal,
        },
        {
            skillName: 'PHP',
            icon: PhpOriginal,
        },
        {
            skillName: 'Dart',
            icon: DartOriginalWordmark,
        },
        {
            skillName: 'Qt',
            icon: QtOriginal,
        },
        {
            skillName: 'Unity',
            icon: UnityOriginal,
        },
        {
            skillName: 'Spring',
            icon: SpringOriginal,
        },
        {
            skillName: 'React',
            icon: ReactOriginal,
        },
        {
            skillName: 'Flutter',
            icon: FlutterOriginal,
        },
        {
            skillName: 'Symfony',
            icon: SymfonyOriginal,
        },
        {
            skillName: 'Git',
            icon: GitOriginal,
        },
        {
            skillName: 'Docker',
            icon: DockerOriginal,
        },
        {
            skillName: 'MySQL',
            icon: MysqlOriginalWordmark
        }
    ];

    return (
        <div className={"skills-container"}>

            <h1 className={"title text-center mb-5 display-4 fw-bold"}>
                Mes compétences techniques
            </h1>

            <div className={"skills-grid-container"}>
                {skills.map((skill, index) => (

                    <div key={index} className={"skills-grid-card"}>

                        {(() => {
                            const IconComponent = skill.icon;
                            return (
                                <IconComponent size={100} />
                            );
                        })()}
                        <h3 className={"skills-grid-card-name"}>
                            {skill.skillName}
                        </h3>

                    </div>


                ))}


            </div>


        </div>
    )

}

export default SkillsPage