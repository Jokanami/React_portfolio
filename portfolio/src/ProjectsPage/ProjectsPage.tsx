import './ProjectsPage.css'

import {
    ArduinoOriginal, AzuredevopsOriginal,
    Css3Original, FigmaOriginal, GithubOriginal, GitlabOriginal, GodotOriginal,
    Html5Original, LinuxOriginal, MysqlOriginal,
    PythonOriginal, UnifiedmodelinglanguageOriginal, CsharpOriginal,
    SpringOriginal, JavaOriginal, ReactOriginal, UnityOriginal, PhpOriginal,
    SymfonyOriginal, GitOriginal, CplusplusOriginal,
    QtOriginal, JavascriptOriginal, DockerOriginal
} from "devicons-react";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function ProjectsPage() {


    return (
        <div className={"projects-page-container"}>

            <h1 className={"title text-center mb-5 display-4 fw-bold"}>
                Mes projets et formations
            </h1>


            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#dddddd', color: '#111111' }}
                    contentArrowStyle={{ borderRight: '7px solid  #dddddd' }}
                    date="2021"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    dateClassName={"white-date"}
                >
                    <h3 className="vertical-timeline-element-title">Projet Stavosph'air</h3>
                    <h2 className="vertical-timeline-element-subtitle">Lycée Saint-Thomas D'Aquin Veritas, Oullins</h2>
                    <ul className="py-2">
                        <li>
                            Mission en collaboration avec le CNES : Mise en place de capteurs (températures, pression, altitude)
                            pour collecter des données grâce à un ballon et une nacelle envoyés dans la stratosphère
                        </li>
                        <li>
                            Mise en place d'une carte Arduino et transfert des données aux serveurs avec Python
                        </li>
                        <li>
                            Gestion des revenus pour l'achat de matériel
                        </li>

                    </ul>

                    <p className={"pb-2"}>
                        <a target={"_blank"} href={"https://www.leprogres.fr/science-et-technologie/2021/05/10/un-ballon-stratospherique-dans-le-ciel"}>
                            Hey ! On a parlé de nous dans le journal !
                        </a>
                    </p>

                    <div>
                        Les compétences que j'ai développé / acquises :
                        <div className={"pt-3"}>
                            <PythonOriginal size={50}/>
                            <ArduinoOriginal size={50}/>
                        </div>
                    </div>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#dddddd', color: '#111111' }}
                    contentArrowStyle={{ borderRight: '7px solid  #dddddd' }}
                    date="Juillet 2022"
                    iconStyle={{ background: 'rgb(55,255,0)', color: '#fff' }}
                    dateClassName={"white-date"}

                >
                    <h3 className="vertical-timeline-element-title">Baccalauréat Général</h3>
                    <h2 className="vertical-timeline-element-subtitle">Spécialité Mathématiques et NSI (Numérique et Sciences Informatiques)</h2>
                    <ul className="py-3">
                        <li>
                            Mention Bien : 15.26/20
                        </li>
                        <li>
                            Mention Anglais Européen
                        </li>
                        <li>
                            Espagnol : DELE Niveau B1
                        </li>

                    </ul>

                    <div>
                        Les compétences que j'ai développé / acquises :
                        <div className={"pt-3"}>
                            <PythonOriginal size={50}/>
                            <ArduinoOriginal size={50}/>
                            <Html5Original size={50}/>
                            <Css3Original size={50}/>
                        </div>
                    </div>


                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#dddddd', color: '#111111' }}
                    contentArrowStyle={{ borderRight: '7px solid  #dddddd' }}
                    date="Décembre 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    dateClassName={"white-date"}

                >
                    <h3 className="vertical-timeline-element-title">Développement d'un jeu Démineur</h3>
                    <h2 className="vertical-timeline-element-subtitle">Auto-formation au langage C# et au moteur Unity</h2>
                    <p className="py-3">
                        <a href={"https://youtu.be/HBrF8LJ0Hfg?si=SNDFD2O4y8uPjGkr"} target={"_blank"}>
                            La vidéo que j'ai utilisé pour me former
                        </a>
                    </p>

                    <div>
                        Les compétences que j'ai développé / acquises :
                        <div className={"pt-3"}>
                            <CsharpOriginal size={50}/>
                            <UnityOriginal size={50}/>
                        </div>
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#dddddd', color: '#111111' }}
                    contentArrowStyle={{ borderRight: '7px solid  #dddddd' }}
                    date="Mai 2023 - Juillet 2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    dateClassName={"white-date"}

                >
                    <h3 className="vertical-timeline-element-title">Formation au framework Symfony</h3>
                    <h2 className="vertical-timeline-element-subtitle">DZRFPN Sud-Est : Ministère de l'intérieur</h2>
                    <ul className="py-3">
                        <li>
                            Utilisation de la plateforme Grafikart pour la formation Symfony
                        </li>
                        <li>
                            Application des connaissances par la création d'un site e-commerce
                        </li>
                        <li>
                            Apprentissage de Git et de Gitlab
                        </li>

                    </ul>
                    <p>
                        <a href={"https://grafikart.fr/formations/apprendre-symfony-7"} target={"_blank"}>
                            Formation Grafikart
                        </a>
                    </p>

                    <div>
                        Les compétences que j'ai développé / acquises :
                        <div className={"pt-3"}>
                            <PhpOriginal size={50}/>
                            <SymfonyOriginal size={50}/>
                            <GitOriginal size={50}/>
                            <GitlabOriginal size={50}/>
                            <MysqlOriginal size={50}/>
                        </div>
                    </div>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#dddddd', color: '#111111' }}
                    contentArrowStyle={{ borderRight: '7px solid  #dddddd' }}
                    date="Janvier 2024 - Juin 2024"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    dateClassName={"white-date"}

                >
                    <h3 className="vertical-timeline-element-title">Développement d'une application bureau</h3>
                    <h2 className="vertical-timeline-element-subtitle">Client : Centre ARHM de Dardilly</h2>
                    <ul className="py-3">
                        <li>
                            Demande : Permettre aux personnes en situation de handicap et au personnel de signaler leur absence
                            via un tableau utilisable grâce à un écran tactile
                        </li>
                    </ul>
                    <div>
                        Les compétences que j'ai développé / acquises :
                        <div className={"pt-3"}>
                            <CplusplusOriginal size={50}/>
                            <QtOriginal size={50}/>
                            <GitOriginal size={50}/>
                            <AzuredevopsOriginal size={50}/>
                            <LinuxOriginal size={50}/>
                            <FigmaOriginal size={50}/>
                            <UnifiedmodelinglanguageOriginal size={50}/>
                        </div>
                    </div>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#dddddd', color: '#111111' }}
                    contentArrowStyle={{ borderRight: '7px solid  #dddddd' }}
                    date="Juillet 2024"
                    iconStyle={{ background: 'rgb(55,255,0)', color: '#fff' }}
                    dateClassName={"white-date"}

                >
                    <h3 className="vertical-timeline-element-title">BTS SNIR : Systèmes Numériques Informatique et Réseaux</h3>
                    <ul className="py-3">
                        <li>
                            Note finale : 16.57/20
                        </li>
                    </ul>
                    <div>
                        Les compétences que j'ai développé / acquises :
                        <div className={"pt-3"}>
                            <CplusplusOriginal size={50}/>
                            <JavascriptOriginal size={50}/>
                            <CsharpOriginal size={50}/>
                            <ArduinoOriginal size={50}/>
                            <PhpOriginal size={50}/>
                            <QtOriginal size={50}/>
                            <GitOriginal size={50}/>
                            <AzuredevopsOriginal size={50}/>
                            <LinuxOriginal size={50}/>
                            <FigmaOriginal size={50}/>
                            <UnifiedmodelinglanguageOriginal size={50}/>
                            <DockerOriginal size={50}/>
                        </div>
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#dddddd', color: '#111111' }}
                    contentArrowStyle={{ borderRight: '7px solid  #dddddd' }}
                    date="Décembre 2024"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    dateClassName={"white-date"}

                >
                    <h3 className="vertical-timeline-element-title">Cercle de projet</h3>
                    <h4 className="vertical-timeline-element-subtitle">Institut G4</h4>
                    <ul className="py-3">
                        <li>
                            Développement d'un site Web promouvant les gestes éco-responsables
                        </li>

                    </ul>

                    <div>
                        Les compétences que j'ai développé / acquises :
                        <div className={"pt-3"}>
                            <SymfonyOriginal size={50}/>
                            <PhpOriginal size={50}/>
                            <GitOriginal size={50}/>
                            <GithubOriginal size={50}/>
                            <FigmaOriginal size={50}/>
                        </div>
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#dddddd', color: '#111111' }}
                    contentArrowStyle={{ borderRight: '7px solid  #dddddd' }}
                    date="Février 2025 - Mars 2025"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    dateClassName={"white-date"}

                >
                    <h3 className="vertical-timeline-element-title">Développement d'un gestionnaire de propsects</h3>
                    <h4 className="vertical-timeline-element-subtitle">Institut G4</h4>
                    <ul className="py-3">
                        <li>
                            Outil permettant de gérer la venue de nouveaux élèves au sein de l'institut G4
                        </li>
                    </ul>
                    <p>
                        <a href={"https://github.com/Jokanami/javaBackCRM"} target="_blank">Accéder au dépôt Github</a>
                    </p>

                    <div>
                        Les compétences que j'ai développé / acquises :
                        <div className={"pt-3"}>
                            <ReactOriginal size={50}/>
                            <JavascriptOriginal size={50}/>
                            <JavaOriginal size={50}/>
                            <SpringOriginal size={50}/>
                            <MysqlOriginal size={50}/>
                            <UnifiedmodelinglanguageOriginal size={50}/>
                            <GitOriginal size={50}/>
                            <GithubOriginal size={50}/>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#dddddd', color: '#111111' }}
                    contentArrowStyle={{ borderRight: '7px solid  #dddddd' }}
                    date="Janvier 2025 - Juin 2025"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    dateClassName={"white-date"}

                >
                    <h3 className="vertical-timeline-element-title">Développement d'un jeu de plateforme à thématique Cyberpunk</h3>
                    <h4 className="vertical-timeline-element-subtitle">Institut G4</h4>
                    <ul className="py-3">
                        <li>
                            Auto-formation au moteur de jeu Godot
                        </li>
                        <li>
                            Gestion de l'ensemble des assets (bruitages, musique et sprites)
                        </li>
                    </ul>
                    <p>
                        <a href={"https://github.com/Jokanami/Cyberpunk_game"} target="_blank">Accéder au dépôt Github</a>
                    </p>

                    <div>
                        Les compétences que j'ai développé / acquises :
                        <div className={"pt-3"}>
                            <GodotOriginal size={50}/>
                            <UnifiedmodelinglanguageOriginal size={50}/>
                            <GitOriginal size={50}/>
                            <GithubOriginal size={50}/>
                        </div>
                    </div>
                </VerticalTimelineElement>



                <VerticalTimelineElement
                    iconStyle={{ background: '#00ff00' }}

                />
            </VerticalTimeline>


        </div>

    )

}

export default ProjectsPage