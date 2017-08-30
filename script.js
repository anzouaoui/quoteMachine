var quotes = [
    {
        quote: 'Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d\'ennuis te seront épargnés.',
        author: 'Confucius'
    },
    {
        quote: 'Dans la vie on ne fait pas ce que l\'on veut mais on est responsable de ce que l\'on est.',
        author: 'Jean-Paul Sartre'
    },
    {
        quote: 'La vie est un mystère qu\'il faut vivre, et non un problème à résoudre.',
        author: 'Gandhi'
    },
    {
        quote: 'Pour critiquer les gens il faut les connaître, et pour les connaître, il faut les aimer.',
        author: 'Coluche'
    },
    {
        quote: 'On passe une moitié de sa vie à attendre ceux qu\'on aimera et l\'autre moitié à quitter ceux qu\'on aime.',
        author: 'Victor Hugo'
    },

    {
        quote: 'Dans la vengeance et en amour, la femme est plus barbare que l\'homme.',
        author: 'Friedrich Nietzsche'
    },
    {
        quote: 'Il ne faut avoir aucun regret pour le passé, aucun remords pour le présent, et une confiance inébranlable pour l\'avenir.',
        author: 'Jean Jaurès'
    },
    {
        quote: 'L\'homme veut être le premier amour de la femme, alors que la femme veut être le dernier amour de l\'homme.',
        author: 'Oscar Wilde'
    },
    {
        quote: 'L\'honnêteté, la sincérité, la simplicité, l\'humilité, la générosité, l\'absence de vanité, la capacité à servir les autres - ' +
                'qualités à la portée de toutes les âmes- sont les véritables fondations de notre vie spirituelle.',
        author: 'Nelson Mandela'
    },
    {
        quote: 'Il n\'existe que deux choses infinies, l\'univers et la bêtise humaine... mais pour l\'univers, je n\'ai pas de certitude absolue.',
        author: 'Albert Einstein'
    },

    {
        quote: 'Ne demandez jamais quelle est l\'origine d\'un homme ; interrogez plutôt sa vie et vous saurez ce qu\'il est.',
        author: 'Abd El-Kader'
    },
    {
        quote: 'Un sourire coûte moins cher que l\'électricité, mais donne autant de lumière.',
        author: 'Abbé Pierre'
    },
    {
        quote: 'Les jaloux sont comme les fous et les ivrognes, ils ne se rendent jamais compte de leurs souffrances. La jalousie provient' +
                ' d\'un manque de confiance non pas envers l\'autre, mais envers soi-même.',
        author: 'Eugène Cloutier'
    },
    {
        quote: 'Il paraît que la crise rend les riches plus riches et les pauvres plus pauvres. Je ne vois pas en quoi ' +
                'c\'est une crise. Depuis que je suis petit, c\'est comme ça.',
        author: 'Coluche'
    },
    {
        quote: 'Enfer chrétien, du feu. Enfer païen, du feu. Enfer mahométan, du feu. Enfer hindou, des flammes. A en croire les religions, ' +
                'Dieu est né rôtisseur.',
        author: 'Victor Hugo'
    },

    {
        quote: 'J\'entends au-dessus de moi dans les cieux, Les anges qui chantent entre eux. Ils ne peuvent trouver de mot d\'amour plus grand' +
                ' Que celui-ci : Maman.',
        author: 'Edgar Allan Poe'
    },
    {
        quote: 'L\'ignorance mène à la peur, la peur mène à la haine et la haine conduit à la violence. Voilà l\'équation.',
        author: 'Averroès'
    },
    {
        quote: 'Tout obstacle renforce la détermination. Celui qui s\'est fixé un but n\'en change pas.',
        author: 'Léonard De Vinci'
    },
    {
        quote: 'Sous un bon gouvernement, la pauvreté est une honte ; sous un mauvais gouvernement, la richesse est aussi une honte.',
        author: 'Confucius'
    },
    {
        quote: 'N\'essayez pas de devenir un homme qui a du succès. Essayez de devenir un homme qui a de la valeur.',
        author: 'Albert Einstein'
    },

    {
        quote: 'La musique chasse la haine chez ceux qui sont sans amour. Elle donne la paix à ceux qui sont sans repos, elle console ceux qui pleurent.',
        author: 'Pablo Casals'
    },
    {
        quote: 'La valeur d\'un homme ne se mesure pas à son argent, son statut ou ses possessions. La valeur d\'un homme réside dans sa personnalité,' +
                ' sa sagesse, sa créativité, son courage, son indépendance et sa maturité.',
        author: 'Mark W. B. Brinton'
    },
    {
        quote: 'La jalousie ne permet jamais de voir les choses telles qu\'elles sont. Les jaloux voient le réel à travers un miroir déformant' +
                ' qui grossit les détails insignifiants, transforme les nains en géants et les soupçons en vérité.',
        author: 'Miguel De Cervantes'
    },
    {
        quote: 'Le meilleur gouvernement est celui où il y a le moins d\'hommes inutiles.',
        author: 'Voltaire'
    },
    {
        quote: 'Nos jeunes aiment le luxe, ont de mauvaises manières, se moquent de l\'autorité et n\'ont aucun respect pour l\'âge. À notre époque, ' +
                'les enfants sont des tyrans.',
        author: 'Socrate'
    },

    {
        quote: 'Le secret du bonheur en amour, ce n\'est pas d\'être aveugle mais de savoir fermer les yeux quand il le faut.',
        author: 'Simone Signoret'
    },
    {
        quote: 'Si vous voulez connaître la lie des sentiments humains, penchez-vous sur les sentiments que nourrissent les femmes envers les ' +
                'autres femmes : vous frissonnerez d\'horreur devant tant d\'hypocrisie, de jalousie, de méchanceté, de bassesse.',
        author: 'Amélie Nothomb'
    },
    {
        quote: 'La famille c\'est une richesse incroyable, ça donne des outils pour pouvoir affronter les moments extraordinaires, ' +
                'les moments plus difficiles, les hauts, les bas.',
        author: 'Céline Dion'
    },
    {
        quote: 'L\'égoïste n\'est pas celui qui vit comme il lui plaît, c\'est celui qui demande aux autres de vivre comme il lui plaît ;' +
                ' l\'altruiste est celui qui laisse les autres vivre leur vie, sans intervenir.',
        author: 'Oscar Wilde'

    },
    {
        quote: 'L\'éducation, c\'est la famille qui la donne ; l\'instruction, c\'est l\'Etat qui la doit.',
        author: 'Victor Hugo'
    },

    {
        quote: 'Tout groupe humain prend sa richesse dans la communication, l\'entraide et la solidarité visant à un but commun : ' +
                'l\'épanouissement de chacun dans le respect des différences.',
        author: 'Françoise Dolto'
    },
    {
        quote: 'Les enfants sont la chose la plus précieuse dans la vie. Un parent doit faire tout ce qu\'il peut pour donner à un' +
        ' enfant le sens de la famille.',
        author: 'Elvis Presley'
    },
    {
        quote: 'Il suffit d\'un gramme de merde pour gâcher un kilo de caviar. Un gramme de caviar n\'améliore en rien un kilo de merde.',
        author: 'Roland Topor'
    },
    {
        quote: 'Plus l\'espérance est grande, plus la déception est violente.',
        author: 'Franz-Olivier Giesbert'
    },
    {
        quote: 'La musique donne une âme à nos coeurs et des ailes à la pensée.',
        author: 'Platon'
    },

    {
        quote: 'Le courage, c\'est de comprendre sa propre vie... Le courage, c\'est d\'aimer la vie et de regarder la mort d\'un regard tranquille...' +
                ' Le courage, c\'est d\'aller à l\'idéal et de comprendre le réel.',
        author: 'Jean Jaurès'
    },
    {
        quote: 'L\'éducation ne se borne pas à l\'enfance et à l\'adolescence. L\'enseignement ne se limite pas à l\'école.' +
                ' Toute la vie, notre milieu est notre éducation, et un éducateur à la fois sévère et dangereux.',
        author: 'Paul Valéry'
    },
    {
        quote: 'L\'ennui dans ce monde, c\'est que les idiots sont sûrs d\'eux et les gens sensés pleins de doutes.',
        author: 'Bertrand Russell'
    },
    {
        quote: 'J\'ai appris que le courage n\'est pas l\'absence de peur, mais la capacité de la vaincre.',
        author: 'Nelson Mandela'
    },
    {
        quote: 'Mes amis, retenez ceci, il n\'y a ni mauvaises herbes ni mauvais hommes. Il n\'y a que de mauvais cultivateurs.',
        author: 'Victor Hugo'
    },

    {
        quote: 'Que pouvez-vous faire pour promouvoir la paix dans le monde ? Rentrer chez vous et aimer votre famille !',
        author: 'Mère Teresa'
    },
    {
        quote: 'Le racisme est une manière de déléguer à l\'autre le dégoût qu\'on a de soi-même.',
        author: 'Robert Sabatier'
    },
    {
        quote: 'Soyez polis envers tous, mais intimes avec peu ; et choisissez-les bien avant de leur faire confiance.',
        author: 'George Washington'
    },
    {
        quote: 'Une belle femme plaît aux yeux, une bonne femme plaît au coeur ; l\'une est un bijou, l\'autre un trésor.',
        author: 'Napoléon Bonaparte'
    },
    {
        quote: 'Le secret du changement consiste à concentrer son énergie pour créer du nouveau, et non pas pour se battre contre l\'ancien.',
        author: 'Dan Millman'
    },

    {
        quote: 'En politique, on succède à des imbéciles et on est remplacé par des incapables.',
        author: 'Georges Clemenceau'
    },
    {
        quote: 'Géométrie politique : le carré de l\'hypoténuse parlementaire est égal à la somme de l\'imbécillité construite sur ses deux côtés extrêmes.',
        author: 'Pierre Dac'
    },
    {
        quote: 'Etre libre, ce n\'est pas pouvoir faire ce que l\'on veut, mais c\'est vouloir ce que l\'on peut.',
        author: 'Jean-Paul Sartre'
    },
    {
        quote: 'On est si petit, le monde est si grand.Que serait la vie, sans notre Maman.',
        author: 'Mick Micheyl'
    },
    {
        quote: 'Le jour viendra où les personnes comme moi regarderont le meurtre des animaux comme ils regardent aujourd\'hui le meurtre des êtres humains.',
        author: 'Léonard De Vinci'
    }
];

function newQuote() {
    var rdm = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerHTML = quotes[rdm].quote;
    document.getElementById('author').innerHTML = quotes[rdm].author;
}