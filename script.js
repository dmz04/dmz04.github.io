document.addEventListener("DOMContentLoaded", function() { 
    const params = new URLSearchParams(window.location.search);
    const oeuvre = params.get("oeuvre");

    const titreOeuvre = document.getElementById("titre-oeuvre");
    const texteOeuvre = document.getElementById("texte-oeuvre");
    
    console.log("Nom de l'œuvre récupéré :", oeuvre);


    const oeuvres = {
        "les-cahiers-de-douai": "1. Les Cahiers de Douai",
        "la-rage-de-l'expression": "2. La Rage de l'expression",
        "mes-forets": "3. Mes forêts",
        "le-menteur": "4. Le Menteur",
        "on-ne-badine-pas-avec-l-amour": "5. On ne badine pas avec l'amour",
        "pour-un-oui-ou-pour-un-non": "6. Pour un oui ou pour un non",
        "gargantua": "7. Gargantua",
        "les-caracteres": "8. Les Caractères",
        "declaration-des-droits-de-la-femme-et-de-la-citoyenne": "9. Déclaration des droits de la femme et de la citoyenne",
        "manon-lescaut": "10. Manon Lescaut",
        "la-peau-de-chagrin": "11. La Peau de chagrin",
        "sido-suivi-de-les-vrilles-de-la-vigne": "12. Sido suivi de Les Vrilles de la vigne"
    };

    const contenus = {
        "les-cahiers-de-douai": `
            <h2>Introduction:</h2>
            <p>Rimbaud est un poète mythique. Sa célébrité dans le monde des lettres est considérable. IL est une figure du génie litteraire parce qu’en cinq ans, en pleine adolescence, il crée des formes poétiques résolument nouvelles et qui forcent l’admiration. Sa légende se renforce quand il disparaît, quitte l’Europe et cesse d’écrire, alors qu’il n’a pas beaucoup plus de vingt ans. Il y a donc quelque chose de mystérieux et de fascinant chez ce jeune homme insaisissable, véritable figure de la liberté.Mais pour aborder les vingt-deux poèmes qui composent ce que la critique appelle les Cahiers de Douai, il ne faut pas se laisser impressionner par cette image rebattue du génie. Certes, ces textes nous permettent de comprendre à quel point Rimbaud était précoce, mais ils nous informent aussi sur ce qu’il doit à des formes poétiques plus anciennes et à des poètes contemporains. De fait, les Cahiers de Douai n’est pas le recueil le plus audacieux de Rimbaud sur le plan formel. Par ailleurs, en lisant ces quelques pages on découvre que ses préoccupations sont bien celles d’un adolescent: la révolte, la sensualité, le désir d’émancipation. Son écriture est celle de quelqu’un qui veut tout bousculer et qui rêve d’être toujours ailleurs. Dans cette leçon, nous verrons comment il restitue une crise intime à laquelle la vocation poétique vient répondre.</p>

            <h2>1) Un adolescent troublé dans un pays en crise</h2>
            <p>C'est à la fin du règne de Napoléon III que Rimbaud atteint l’adolescence. Instable, agité, surveillé en permanence par une mère autoritaire, il souffre probablement de la séparation de ses parents ainsi que de l’absence de son père, un capitaine d’infanterie dans l’armée française. C’est donc un être déchiré entre plusieurs aspirations comme l’est la France de la deuxième moitié du XIXe siècle: après le Premier Empire, la restauration de la monarchie et la brève Deuxième République, le Second Empire est chancelant et laissera bientôt la place à la Troisième République. La poésie de Rimbaud rend compte de cette double instabilité: la sienne et celle de son époque.</p>

            <div class="attention">
                <strong>/!\\ ATTENTION /!\\</strong>
                <p>Il ne faut pas perdre de vue que romantisme et réalisme ne sont pas des mouvements successifs, mais des mouvements qui se chevauchent dans le temps. Ils ne sont pas non plus radicalement différents: on trouve des caractéristiques du romantisme et du réalisme dans de nombreuses œuvres. Certes, Rimbaud est influencé par ces deux courants, mais il n’hésite pas à les critiquer fortement.</p>
            </div>

            <p>À partir de 1871, c'est Verlaine qui permet à Rimbaud de passer ses plus longs séjours à Paris et qui le présente à des cercles d'écrivains. Verlaine est un poète connu à cette époque, marié et père de famille, que Rimbaud admire au plus haut point.Ensemble, ils ont une liaison qui sera perçue comme scandaleuse, car Verlaine abandonne sa situation bourgeoise pour vivre ponctuellement avec un jeune homme de province. Au-delà de la simple anecdote, entre les disputes qui conduisent Verlaine à tirer au revolver sur Rimbaud, leurs séparations et leurs retrouvailles dans différentes villes d'Europe, ils entretiennent une passion charnelle et intellectuelle qui marque durablement l'histoire de notre littérature. En effet, leurs dialogues les conduisent, l'un comme l'autre, à produire des formes poétiques neuves: privilège du vers court, du rythme impair, de la musicalité, du lyrisme universel et non subjectif, etc. Pour certains, ces expérimentations en font des précurseurs du mouvement symboliste, voire, en ce qui concerne Rimbaud, pour le poète André Breton, du surréalisme (qui ne naît que dans les années 1920).</p>

            <h2>Définitions:</h2>
            <div class="definition">
                <p><strong>Sonnet :</strong> Forme poétique fixe de quatorze vers.Deux quatrains aux rimes embrassées sont suivis de deux tercets composés de deux rimes suivies et de quatre rimes croisées (ou embrassées).</p>
            </div>
            <div class="definition">
                <p><strong>Émancipation :</strong> Action de se libérer d'un état de dépendance.</p>
            </div>
            <div class="definition">
                <p><strong>Émoi:</strong> Trouble émotif très vif.</p>
            </div>

            <h2>2) Des cahiers en quête d'unité:</h2>
            <p>Rimbaud n'avait pas une vision d'ensemble sur sa création. Il faisait des expériences d'écriture, puis diffusait ses textes aux quatre vents. Il pouvait s'enorgueillir d'un poème un jour et le renier le lendemain. Son imagination est autant en mouvement que son corps. Vouloir trouver une unité au petit ensemble que forme son œuvre n'a donc pas vraiment de sens. Toutefois, la critique a pu se reposer sur quelques préconisations de l'auteur et quelques cohérences internes à l'œuvre pour nous permettre de l'appréhender aujourd'hui et d'y voir un exemple de création émancipatrice.</p>

            <h2>Conclusion:</h2>
            <p>Les poèmes des Cahiers de Douai sont les produits de l'effervescence intellectuelle d'un adolescent fugueur, épris d'idéal, d'amour, de liberté et de révolte. Ils sont à considérer comme un condensé d'inspirations poétiques diverses, qui empruntent autant à l'originalité créative du XIX® qu'aux œuvres de l'antiquité. La portée émancipatrice du recueil réside dans la diversité de ses sujets et de ses formes. Qu'il s'agisse de critiquer une société en crise ou de dire l'instabilité émotionnelle d'un garçon extrêmement sensible, il est partout question de ne pas se satisfaire de l'autorité qui opprime l'individu ou de l'environnement qui le lasse. Ce renouvellement de la poésie moderne que propose Rimbaud hante tout le vingtième siècle et nous parvient, encore aujourd'hui, comme un exemple rare de rupture avec les conventions, qu'elles soient sociales ou esthétiques</p>
        `,
        "la-rage-de-l'expression": `
        <h2>Introduction:</h2>
            <p>La Rage de l'expression est l'une des œuvres les plus marquantes de Francis Ponge, un écrivain et poète français du XXe siècle, connu pour son approche unique de la poésie. Ponge s'est consacré à explorer la relation entre les mots et le monde, en se demandant comment rendre le réel le plus fidèlement possible à travers le langage. Cette œuvre, au titre évocateur, est bien plus qu'une simple démonstration littéraire ; elle est une réflexion sur le pouvoir et la limite du langage.</p>
            <p>L'écriture de Ponge repose sur l'idée que le langage, tout en étant un instrument puissant de communication, reste un outil imparfait pour capturer la réalité dans toute sa complexité. Cette interrogation l'amène à adopter un style qui défie les conventions littéraires traditionnelles, en privilégiant une prose poétique, minutieuse et pleine de détails. Dans La Rage de l'expression, Ponge ne se contente pas de décrire des objets ; il les interroge, les examine, et cherche à révéler la poésie qui réside dans leur essence même. C'est un travail d'exploration, de recherche de la vérité cachée derrière les apparences, qui demande au lecteur de ralentir et de s'attarder sur l'infime et l'ordinaire.</p>

            <h2>1. Saisir l’insaisissable</h2>
            <p>L’œuvre de Francis Ponge questionne la faculté de la littérature à désigner justement notre environnement. Elle nous rappelle sans cesse que les mots sont des outils parfois faibles, car ils sont soumis à l’interprétation. Mais la malléabilité de la langue est aussi ce qui fait sa richesse et sa beauté. En utilisant la poésie rigoureusement possible, il semble possible de se tenir au plus près des hommes et du monde, à défaut de les comprendre absolument.</p>
    
            <h3>La poésie en question</h3>
            <p>La perception de ce qui nous entoure varie constamment, autant que les ressources de la parole sont inépuisables. Dans ce contexte, comment rester fidèle à une esthétique plutôt qu’à une autre ? Comment ne pas remettre constamment en cause son travail de poète ? Ces questions sont au cœur des interrogations de Ponge, et sa réponse est radicale : il est primordial de savoir changer de style et de s’écarter des « cénacles littéraires ». Son parcours est remarquable parce qu’il aura su se faire des amitiés auprès des représentants de toutes les mouvances politiques de son siècle.</p>
    
            <div class="definition">
                <strong>Définition :</strong> 
                <p><strong>Cénacle :</strong> Cercle restreint de personnalités réunies dans un but commun.</p>
            </div>
    
            <p>Il est important de préciser que Ponge n’est pas seulement écrivain et qu’il ne parviendra à vivre de ses livres que tardivement dans son existence. Bien sûr, il se passionne tôt pour la philosophie (pendant la Première Guerre mondiale) et publie dès lors des œuvres littéraires dès l’âge de vingt ans. Mais pendant plusieurs années, il gagne sa vie en travaillant dans des maisons d’édition, des compagnies d’assurance ou comme professeur. De plus, il s’engage dans la société dans ses marges, en lien au parti communiste ou à la Résistance contre l’occupant nazi. Ces diverses activités, cumulées à une pratique littéraire singulière, font que sa notoriété reste discrète jusqu’en 1942, date de la publication du <em>Parti pris des choses</em>.</p>
    
            <h3>Un poète des « objets » ?</h3>
            <p>Partant du principe que Ponge, principalement dans <em>Le Parti pris des choses</em>, nous pousse à connaître les choses dans leur intimité et dans leurs détails, il invite à souligner que l’ordinaire mérite autant d’attention que l’extraordinaire. Sartre perçoit très rapidement ce qu’il y a de profondément original chez ce poète.</p>
    
            <div class="definition">
                <p><strong>Pétrification :</strong> Rendre à l’état d’immobilité totale.</p>
            </div>
    
            <h3>Exemple</h3>
            <p>Dans <em>L’Huître</em>, le poète se concentre sur la description de la matérialité du mollusque :</p>
            <blockquote>
                « Une coquille vaguement bombée, une rugosité d’écorce de bois, brillant blanchâtre. »
            </blockquote>
    
            <h2>2) Une prose qui réveille son lecteur</h2>
            <p>Ponge est un écrivain qui se débat avec les mots autant qu’avec sa propre perception. Ce travail est un travail solitaire et exigeant. Mais pour autant, il ne s’arrête pas au seul regard lui-même. <em>Dans La rage de l’expression</em>, le poète inclut pleinement son lecteur dans sa démarche créative.</p>
    
            <h3>Exhiber une méthode</h3>
            <p>Le journal poétique de Ponge est comme un journal de bord. Il dévoile une méthode, c’est-à-dire un chemin emprunté pour parvenir à dérouler une démonstration.</p>
    
            <div class="example">
                <p>Voici deux manières, symétriquement présentées, d’évoquer l’aillet sans dire son nom dans <em>La rage de l’expression</em> :</p>
                <blockquote>
                    <ul>
                        <li>Papillote chiffon frais</li>
                        <li>Froissé de luxe à belles dents</li>
                    </ul>
                </blockquote>
            </div>
    
            <h2>Conclusion</h2>
            <p><p>La Rage de l'expression n'est pas seulement un exercice de style ; c'est une révolte contre la superficialité des mots et une quête de leur essence. Par son approche, Francis Ponge nous rappelle que la littérature peut être un vecteur puissant de prise de conscience et de contemplation. Dans cette œuvre, il parvient à transformer un acte littéraire en un défi à la perception, invitant chacun à voir au-delà de la surface et à redécouvrir le monde dans sa richesse la plus subtile. En cela, La Rage de l'expression reste une œuvre qui résonne comme une ode à la précision, à l'exploration et à la remise en question des vérités établies. Cette démarche poétique, exigeante et innovante, continue de captiver et d'inspirer les lecteurs, en témoignant de l'engagement indéfectible de Ponge à utiliser l'écriture comme un outil pour comprendre et représenter le réel.</p>
        `,
            "mes-forets": "<p>Aucune analyse pour 'Mes forêts'.</p>",
            "le-menteur": "<p>Aucune analyse pour 'Le Menteur'.</p>",
            "on-ne-badine-pas-avec-l'amour": "<p>Aucune analyse pour 'On ne badine pas avec l'amour'.</p>",
            "pour-un-oui-ou-pou-un-non": "<p>Aucune analyse pour 'Pour un oui ou pour un non'.</p>",
            "gargantua": "<p>Aucune analyse pour 'Gargantua'.</p>",
            "les-caracteres": "<p>Aucune analyse pour 'Les Caractères'.</p>",
            "declaration-des-droits-de-la-femme-et-de-la-citoyenne": "<p>Aucune analyse pour 'Déclaration des droits de la femme et de la citoyenne'.</p>",
            "manon-lescaut": "<p>Aucune analyse pour 'Manon Lescaut'.</p>",
            "la-peau-de-chagrin": "<p>Aucune analyse pour 'La Peau de chagrin'.</p>",
            "sido-suivi-de-les-vrilles-de-la-vigne": "<p>Aucune analyse pour 'sido suivi de les vrilles de la vigne'.</p>",
        };



// Affiche le nom complet de l'œuvre et son contenu
if (oeuvre && oeuvres[oeuvre]) {titreOeuvre.textContent = oeuvres[oeuvre]};
    texteOeuvre.innerHTML = contenus[oeuvre] || "<p>Contenu de l'œuvre non disponible.</p>";
} , {texteOeuvre,textContent : "Œuvre non trouvée"})
    texteOeuvre.innerHTML = "<p>Aucune analyse disponible pour cette œuvre.</p>";


