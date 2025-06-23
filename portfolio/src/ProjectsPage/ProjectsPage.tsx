import './ProjectsPage.css'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function ProjectsPage() {


    return (
        <div className={"projects-page-container"}>

            <h1 className={"title text-center mb-5 display-4 fw-bold"}>
                Mes projets
            </h1>


            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#dddddd', color: '#111111' }}
                    contentArrowStyle={{ borderRight: '7px solid  #dddddd' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                >
                    <h3 className="vertical-timeline-element-title">Projet Stavosph'air</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#dddddd', color: '#111111' }}
                    contentArrowStyle={{ borderRight: '7px solid  #dddddd' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                >
                    <h3 className="vertical-timeline-element-title">Baccalauréat Général : Spécialité Mathématiques et NSI</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#dddddd', color: '#111111' }}
                    contentArrowStyle={{ borderRight: '7px solid  #dddddd' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                >
                    <h3 className="vertical-timeline-element-title">Développement d'un jeu Démineur</h3>
                    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                    <p>
                        User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#dddddd', color: '#111111' }}
                    contentArrowStyle={{ borderRight: '7px solid  #dddddd' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                >
                    <h3 className="vertical-timeline-element-title">Développement d'une application bureau pour le centre ARHM de Dardilly</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                        User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#dddddd', color: '#111111' }}
                    contentArrowStyle={{ borderRight: '7px solid  #dddddd' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                >
                    <h3 className="vertical-timeline-element-title">BTS Systèmes Numériques : Informatique et Réseaux</h3>
                    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                    <p>
                        Strategy, Social Media
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    iconStyle={{ background: '#00ff00' }}

                />
            </VerticalTimeline>


        </div>

    )

}

export default ProjectsPage