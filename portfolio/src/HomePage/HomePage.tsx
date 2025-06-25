import './HomePage.css'

function HomePage() {

    const faqData = [
        {
            question: "Présente-toi !",
            answer: "Je m'appelle Dylan ARAUJO LOPES et j'ai 20 ans.\n" +
                "J'aime beaucoup le développement aussi bien logiciel (avec Qt, par exemple) que web (avec React, Symfony)"
        },
        {
            question: "Où vis-tu ?",
            answer: "J'habite à Oullins, près de Lyon depuis ma naissance."
        },
        {
            question: "Peux-tu parler des langues étrangères ?",
            answer: "Oui !\n" +
                "Je sais parler français (évidemment), Anglais (Section Européenne en Anglais au Bac).\n" +
                "Je sais également parler Espagnol (DELE niveau B1) et enfin Portugais (grâce à ma famille)"
        },
        {
            question: "As-tu une alternance ?",
            answer: "Hélas, pas encore. Je suis à la recherche d'un contrat d'une ou deux années" +
                " dans le domaine du développement ou de la chefferie de projet. "
        },

    ];

    return (
        <div className={"faq-container py-2"}>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h1 className="title text-center mb-5 display-4 fw-bold">
                        À propos de moi
                    </h1>

                    {faqData.map((item, index) => (
                        <div key={index} className={"faq-card rounded p-4 mb-4"}>
                            <div className={"question-label fs-5 me-3 flex-shrink-0"}>
                                <span className={"question-text fs-5"}>{item.question}</span>
                            </div>

                            <div className={"question-answer fs-5 me-3 flex-shrink-0"}>
                                <span className={"question-answer-text"}>{item.answer}</span>
                            </div>
                        </div>
                    ))}






                </div>
            </div>

        </div>
    )

}

export default HomePage
