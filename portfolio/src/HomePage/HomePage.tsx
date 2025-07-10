import './HomePage.css'
import FlashCardComponent from "../FlippingCardComponent/FlippingCardComponent.tsx";
import Particles from "../ParticlesBackgroundComponent/ParticlesBackgroundComponent.tsx";

function HomePage() {

    const faqData = [
        {
            question: "Présente-toi !",
            answer: "Je m'appelle Dylan ARAUJO LOPES et j'ai 20 ans. " +
                "J'aime beaucoup le développement aussi bien logiciel (avec Qt, par exemple) que web (avec React, Symfony)"
        },
        {
            question: "Où vis-tu ?",
            answer: "J'habite à Oullins, près de Lyon depuis ma naissance."
        },
        {
            question: "Peux-tu parler des langues étrangères ?",
            answer: "Oui ! " +
                "Je sais parler français (évidemment), Anglais (Section Européenne en Anglais au Bac). " +
                "Je sais également parler Espagnol (DELE niveau B1) et enfin Portugais (grâce à ma famille)"
        },
        {
            question: "As-tu une alternance ?",
            answer: "Hélas, pas encore. Je suis à la recherche d'un contrat d'une ou deux années" +
                " dans le domaine du développement ou de la chefferie de projet. "
        },
        {
            question: "En dehors du code, quelles sont tes passions ?",
            answer: "J'adore écouter de la musique (Rock, Metal, Pop, Hip-Hop). " +
                "Quand j'ai du temps, j'aime bien jouer de la basse. " +
                "J'aime beaucoup regarder des séries (surtout animées). " +
                "J'étais un gros joueur mais j'ai beaucoup ralenti dernièrement."
        },
        {
            question: "Pourquoi t'es-tu lancé dans l'informatique ?",
            answer: "Au début, je voulais me lancer dans des études de droit ou de langue mais " +
                "après quelques désillusions, j'ai décidé de me tourner vers l'informatique avec pour seul objectif de devenir développeur Web. " +
                "En 1ère et en terminale, j'y ai vraiment pris goût et j'ai décidé de poursuivre pour acquérir plus de connaissances."
        },

    ];

    return (
        <div className={"faq-container py-2"}>

            <Particles className={"particles-background"}
                particleColors={['#78d990', '#78d990']}
                particleCount={300}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={200}
                moveParticlesOnHover={false}
                alphaParticles={false}
                disableRotation={false}
            />


            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h1 className="title text-center mb-5 display-4 fw-bold">
                        À propos de moi
                    </h1>

                    <div className={"flipcards-grid"}>
                        {faqData.map((item, index) => (
                            <FlashCardComponent
                                key={index}
                                question={item.question}
                                answer={item.answer}
                            />
                        ))}
                    </div>

                </div>
            </div>

        </div>
    )

}

export default HomePage
