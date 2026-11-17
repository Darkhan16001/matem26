
"use strict";

// ====================================================
// §25. КЕЗДЕЙСОҚ ШАМА.
// ТАҢДАУ ӘДІСТЕРІНІҢ ЭЛЕМЕНТТЕРІ
// MATH LAB PRO — BY DARKHAN
// ====================================================

const $ = id => document.getElementById(id);
const M = String.raw;

const lesson = {
  title: "Кездейсоқ шама. Таңдау әдістерінің элементтері",
  goal:
    "Кездейсоқ шамаларды ажырату, дискретті " +
    "шаманың үлестірім заңын түсіну, математикалық " +
    "күтім мен дисперсияны есептеу, таңдама, " +
    "орташа мән, медиана, мода және салыстырмалы " +
    "жиілік ұғымдарын қолдану."
};

// ====================================================
// 1. БЕС ТЕОРИЯЛЫҚ ТҮСІНДІРМЕ
// ====================================================

const theory = [
  {
    title: "Кездейсоқ шама ұғымы",

    definition:
      "Кездейсоқ шама — кездейсоқ тәжірибе " +
      "нәтижесіне байланысты сандық мән қабылдайтын " +
      "шама. Оны көбінесе X, Y әріптерімен белгілейміз.",

    explain:
      "Мысалы, әділ ойын сүйегін лақтырғанда " +
      "үстіңгі бетінде бірден алтыға дейінгі " +
      "сандардың біреуі пайда болады. Түскен санды " +
      "X кездейсоқ шамасы деп белгілейік. " +
      "X саны 1, 2, 3, 4, 5 немесе 6 мәндерін " +
      "қабылдай алады. Әр санның ықтималдығы " +
      "алтыдан бірге тең. Ал белгілі бір " +
      "уақыттағы температураны кездейсоқ шама " +
      "ретінде қарастырсақ, ол бүтін сандармен " +
      "ғана шектелмейді. Сондықтан кездейсоқ " +
      "шамалар дискретті және үздіксіз болады.",

    rule:
      "Дискретті кездейсоқ шама жеке-жеке " +
      "мәндер қабылдайды. Үздіксіз кездейсоқ " +
      "шама белгілі бір аралықтағы мәндерді " +
      "қабылдауы мүмкін.",

    formula:
      M`X\in\{1,2,3,4,5,6\}`,

    steps: [
      M`X\in\{1,2,3,4,5,6\}`,
      M`P(X=1)=\frac16`,
      M`P(X=6)=\frac16`,
      M`\sum_{i=1}^{6}P(X=i)=1`
    ],

    warning:
      "Кездейсоқ шама мен оның нақты қабылдаған " +
      "мәнін шатастырмаңдар: X — шама, ал X = 3 — " +
      "оның ықтимал нәтижелерінің бірі."
  },

  {
    title: "Үлестірім заңы және ықтималдық",

    definition:
      "Дискретті кездейсоқ шаманың үлестірім заңы " +
      "оның мүмкін мәндері мен сол мәндердің " +
      "ықтималдықтарын көрсетеді.",

    explain:
      "Мысалы, әділ тиынды екі рет лақтырайық. " +
      "X — елтаңба жағының түсу саны болсын. " +
      "Онда X нөл, бір немесе екі мәндерін " +
      "қабылдайды. Ешбір рет елтаңба түспеу " +
      "ықтималдығы төрттен бір. Бір рет " +
      "түсу ықтималдығы төрттен екі. Екі рет " +
      "түсу ықтималдығы төрттен бір. Осы " +
      "мәндер мен ықтималдықтарды кестеге " +
      "жазсақ, үлестірім заңын аламыз. " +
      "Барлық ықтималдықтың қосындысы бірге " +
      "тең болуы міндетті.",

    rule:
      "Дискретті үлестірімдегі ықтималдықтар " +
      "теріс болмайды және олардың қосындысы " +
      "бірге тең болады.",

    formula:
      M`\sum_{i=1}^{n}p_i=1`,

    steps: [
      M`X\in\{0,1,2\}`,
      M`P(X=0)=\frac14`,
      M`P(X=1)=\frac12`,
      M`P(X=2)=\frac14`,
      M`\frac14+\frac12+\frac14=1`
    ],

    warning:
      "Үлестірім кестесіндегі ықтималдықтардың " +
      "қосындысы бірге тең болмаса, есепті қайта тексер."
  },

  {
    title: "Математикалық күтім",

    definition:
      "Математикалық күтім — дискретті кездейсоқ " +
      "шаманың ықтималдықтармен өлшенген орташа " +
      "мәні. Ол көптеген тәжірибе қайталанғанда " +
      "күтілетін орташа нәтижені сипаттайды.",

    explain:
      "Екі тиынды лақтырғанда елтаңбаның түсу " +
      "санын X деп алайық. Нөл елтаңбаның " +
      "ықтималдығы төрттен бір, бір елтаңбаның " +
      "ықтималдығы екіден бір, екі елтаңбаның " +
      "ықтималдығы төрттен бір. " +
      "Математикалық күтімді табу үшін әр " +
      "мәнді оның ықтималдығына көбейтіп, " +
      "нәтижелерді қосамыз. Нөл көбейтілген " +
      "төрттен бір, бір көбейтілген екіден бір " +
      "және екі көбейтілген төрттен бір қосындысы " +
      "бірге тең. Бұл әр тәжірибеде міндетті " +
      "түрде бір елтаңба түседі деген сөз емес.",

    rule:
      "Математикалық күтім барлық мүмкін " +
      "мәндердің ықтималдықпен өлшенген қосындысына тең.",

    formula:
      M`M(X)=\sum_{i=1}^{n}x_i p_i`,

    steps: [
      M`x_1=0,\quad p_1=\frac14`,
      M`x_2=1,\quad p_2=\frac12`,
      M`x_3=2,\quad p_3=\frac14`,
      M`M(X)=0\cdot\frac14+1\cdot\frac12+2\cdot\frac14`,
      M`M(X)=1`
    ],

    warning:
      "Математикалық күтім кездейсоқ шаманың " +
      "міндетті түрде қабылдайтын жеке мәні болмауы мүмкін."
  },

  {
    title: "Дисперсия және стандартты ауытқу",

    definition:
      "Дисперсия — кездейсоқ шама мәндерінің " +
      "математикалық күтімнен қаншалықты " +
      "шашыраңқы орналасатынын сипаттайды. " +
      "Стандартты ауытқу дисперсияның " +
      "квадрат түбіріне тең.",

    explain:
      "Егер кездейсоқ шама тек нөл және екі " +
      "мәндерін бірдей ықтималдықпен қабылдаса, " +
      "математикалық күтім бірге тең. " +
      "Нөлдің орташа мәннен айырмасы минус бір, " +
      "ал екінің айырмасы плюс бір. " +
      "Осы айырмаларды квадраттап, ықтималдыққа " +
      "көбейтіп қосамыз. Дисперсия бірге тең. " +
      "Стандартты ауытқу да бірге тең болады. " +
      "Егер барлық мән бірдей болса, дисперсия " +
      "нөлге тең. Дисперсия ешқашан теріс болмайды.",

    rule:
      "Әр мәннен математикалық күтімді азайтып, " +
      "айырманың квадратын ықтималдыққа " +
      "көбейтіп қосамыз.",

    formula:
      M`D(X)=\sum_{i=1}^{n}(x_i-M(X))^2p_i`,

    steps: [
      M`P(X=0)=\frac12`,
      M`P(X=2)=\frac12`,
      M`M(X)=1`,
      M`D(X)=(0-1)^2\cdot\frac12+(2-1)^2\cdot\frac12`,
      M`D(X)=1`,
      M`\sigma(X)=\sqrt{D(X)}=1`
    ],

    warning:
      "Дисперсия мен стандартты ауытқу " +
      "бірдей шама емес: біріншісі квадраттық " +
      "өлшемде, екіншісі бастапқы өлшемде беріледі."
  },

  {
    title: "Таңдама, жиілік, орташа мән, медиана және мода",

    definition:
      "Таңдама — бас жиынтықтан зерттеу үшін " +
      "алынған бақылаулар жиыны. Оның " +
      "негізінде жиілік, орташа мән, " +
      "медиана мен мода есептеледі.",

    explain:
      "Мысалы, бес оқушының ұпайлары " +
      "екі, үш, үш, төрт және сегіз болсын. " +
      "Орташа мән — барлық сандар қосындысын " +
      "бесеуге бөлу. Нәтиже төрт. " +
      "Медиана — өсу ретімен орналасқан " +
      "сандардың ортаңғысы, ол үш. " +
      "Мода — ең жиі кездескен мән, " +
      "мұнда үш. Үш саны екі рет кездесті, " +
      "сондықтан оның абсолюттік жиілігі екі, " +
      "салыстырмалы жиілігі бестен екіге тең. " +
      "Таңдаманы мүмкіндігінше әділ алу маңызды, " +
      "әйтпесе қорытынды бұрмалануы мүмкін.",

    rule:
      "Орташа мән — қосындыны санына бөлу. " +
      "Медиана — реттелген қатардың ортасы. " +
      "Мода — ең жиі кездесетін мән.",

    formula:
      M`\overline x=\frac{x_1+x_2+\cdots+x_n}{n}`,

    steps: [
      M`2,\ 3,\ 3,\ 4,\ 8`,
      M`\overline x=\frac{2+3+3+4+8}{5}=4`,
      M`Me=3`,
      M`Mo=3`,
      M`w_3=\frac25=0.4`
    ],

    warning:
      "Медиананы табу үшін деректерді алдымен " +
      "өсу ретімен орналастыру қажет. " +
      "Мода біреу, бірнешеу немесе мүлде болмауы мүмкін."
  }
];

// ====================================================
// 2. КОНСПЕКТ ЖӘНЕ ЕСЕП ФУНКЦИЯЛАРЫ
// ====================================================

function ex(q, steps, answer, label = "") {
  return {q, steps, answer, label};
}

function note(title, text, formula, example, a, b) {
  return {
    title,
    text,
    formula,
    example,
    self: [a, b]
  };
}

// ====================================================
// 3. 10 КОНСПЕКТ — 20 ӨЗІНДІК ЕСЕП
// ====================================================

const notes = [
  note(
    "Кездейсоқ шама",
    "Кездейсоқ шама тәжірибе нәтижесіне " +
    "сәйкес сандық мән қабылдайды. " +
    "Дискретті шама жеке мәндерден тұрады.",
    M`X\in\{0,1,2\}`,
    [
      M`X\in\{0,1,2\}`,
      M`P(X=0)=\frac14`,
      M`P(X=1)=\frac12`,
      M`P(X=2)=\frac14`
    ],
    ex(
      M`X\in\{1,2,3,4,5,6\}`,
      [M`P(X=4)=\frac16`],
      M`\frac16`,
      "Әділ сүйектен төрт саны түсу ықтималдығы."
    ),
    ex(
      M`X\in\{0,1,2\}`,
      [M`P(X=2)=\frac14`],
      M`\frac14`,
      "Екі әділ тиында екі елтаңба түсу ықтималдығы."
    )
  ),

  note(
    "Дискретті үлестірім",
    "Үлестірім заңында ықтималдықтар " +
    "қосындысы бірге тең болады.",
    M`\sum_{i=1}^{n}p_i=1`,
    [
      M`p_1=0.2,\quad p_2=0.3`,
      M`p_3=1-0.2-0.3`,
      M`p_3=0.5`
    ],
    ex(
      M`p_1=0.4,\ p_2=0.2,\ p_3=?`,
      [M`p_3=1-0.4-0.2`],
      M`0.4`
    ),
    ex(
      M`p_1=\frac14,\ p_2=\frac14,\ p_3=?`,
      [M`p_3=1-\frac14-\frac14`],
      M`\frac12`
    )
  ),

  note(
    "Математикалық күтім",
    "Математикалық күтімді табу үшін " +
    "әр мәнді оның ықтималдығына көбейтіп, " +
    "барлық нәтижені қосамыз.",
    M`M(X)=\sum_{i=1}^{n}x_i p_i`,
    [
      M`P(X=1)=\frac12`,
      M`P(X=3)=\frac12`,
      M`M(X)=1\cdot\frac12+3\cdot\frac12`,
      M`M(X)=2`
    ],
    ex(
      M`P(X=0)=0.5,\ P(X=4)=0.5`,
      [M`M(X)=0\cdot0.5+4\cdot0.5`],
      M`2`
    ),
    ex(
      M`P(X=1)=0.2,\ P(X=2)=0.8`,
      [M`M(X)=1\cdot0.2+2\cdot0.8`],
      M`1.8`
    )
  ),

  note(
    "Математикалық күтімді кестемен табу",
    "Мүмкін мәндерді және сәйкес " +
    "ықтималдықтарды кестеден алып, " +
    "формулаға қоямыз.",
    M`M(X)=x_1p_1+x_2p_2+x_3p_3`,
    [
      M`x_1=0,\ x_2=1,\ x_3=2`,
      M`p_1=\frac14,\ p_2=\frac12,\ p_3=\frac14`,
      M`M(X)=1`
    ],
    ex(
      M`x_1=1,\ x_2=3,\ p_1=0.25,\ p_2=0.75`,
      [M`M(X)=1\cdot0.25+3\cdot0.75`],
      M`2.5`
    ),
    ex(
      M`x_1=2,\ x_2=6,\ p_1=0.5,\ p_2=0.5`,
      [M`M(X)=2\cdot0.5+6\cdot0.5`],
      M`4`
    )
  ),

  note(
    "Дисперсия",
    "Дисперсия кездейсоқ шаманың " +
    "математикалық күтімнен ауытқуының " +
    "квадраттық орташа мәнін көрсетеді.",
    M`D(X)=\sum(x_i-M(X))^2p_i`,
    [
      M`P(X=0)=\frac12`,
      M`P(X=2)=\frac12`,
      M`M(X)=1`,
      M`D(X)=1`
    ],
    ex(
      M`P(X=1)=0.5,\ P(X=3)=0.5`,
      [
        M`M(X)=2`,
        M`D(X)=\frac12(1-2)^2+\frac12(3-2)^2`
      ],
      M`1`
    ),
    ex(
      M`P(X=2)=0.5,\ P(X=6)=0.5`,
      [
        M`M(X)=4`,
        M`D(X)=\frac12(2-4)^2+\frac12(6-4)^2`
      ],
      M`4`
    )
  ),

  note(
    "Стандартты ауытқу",
    "Стандартты ауытқу дисперсияның " +
    "квадрат түбіріне тең. Ол шашырауды " +
    "бастапқы өлшем бірлігімен көрсетеді.",
    M`\sigma(X)=\sqrt{D(X)}`,
    [
      M`D(X)=9`,
      M`\sigma(X)=\sqrt9`,
      M`\sigma(X)=3`
    ],
    ex(
      M`D(X)=16`,
      [M`\sigma(X)=\sqrt{16}`],
      M`4`
    ),
    ex(
      M`D(X)=0.25`,
      [M`\sigma(X)=\sqrt{0.25}`],
      M`0.5`
    )
  ),

  note(
    "Таңдаманың орташа мәні",
    "Таңдамадағы барлық бақылауларды " +
    "қосып, бақылаулар санына бөлеміз.",
    M`\overline x=\frac{\sum x_i}{n}`,
    [
      M`2,\ 4,\ 6`,
      M`\overline x=\frac{2+4+6}{3}`,
      M`\overline x=4`
    ],
    ex(
      M`3,\ 5,\ 7`,
      [M`\overline x=\frac{3+5+7}{3}`],
      M`5`
    ),
    ex(
      M`1,\ 2,\ 3,\ 4`,
      [M`\overline x=\frac{1+2+3+4}{4}`],
      M`2.5`
    )
  ),

  note(
    "Медиана",
    "Медиана — өсу ретімен жазылған " +
    "деректердің ортаңғы мәні. " +
    "Бақылаулар саны жұп болса, " +
    "ортадағы екі мәннің орташа саны алынады.",
    M`Me=\frac{x_{n/2}+x_{n/2+1}}{2}`,
    [
      M`1,\ 3,\ 5,\ 7`,
      M`Me=\frac{3+5}{2}`,
      M`Me=4`
    ],
    ex(
      M`2,\ 4,\ 9`,
      [M`Me=4`],
      M`4`
    ),
    ex(
      M`1,\ 2,\ 6,\ 8`,
      [M`Me=\frac{2+6}{2}`],
      M`4`
    )
  ),

  note(
    "Мода және жиілік",
    "Мода — ең жиі кездесетін мән. " +
    "Абсолюттік жиілік — сол мәннің " +
    "неше рет кездескені.",
    M`n_i=\textstyle\sum_{j=1}^{n}I(x_j=x_i)`,
    [
      M`2,\ 3,\ 3,\ 4,\ 5`,
      M`Mo=3`,
      M`n_3=2`
    ],
    ex(
      M`1,\ 2,\ 2,\ 3`,
      [M`Mo=2`],
      M`2`
    ),
    ex(
      M`4,\ 4,\ 5,\ 6,\ 6,\ 6`,
      [M`n_6=3`, M`Mo=6`],
      M`6`
    )
  ),

  note(
    "Салыстырмалы жиілік",
    "Салыстырмалы жиілік — мәннің " +
    "абсолюттік жиілігінің барлық " +
    "бақылаулар санына қатынасы.",
    M`w_i=\frac{n_i}{n}`,
    [
      M`n_i=3,\quad n=10`,
      M`w_i=\frac3{10}`,
      M`w_i=0.3`
    ],
    ex(
      M`n_i=4,\quad n=20`,
      [M`w_i=\frac4{20}`],
      M`0.2`
    ),
    ex(
      M`n_i=6,\quad n=15`,
      [M`w_i=\frac6{15}`],
      M`0.4`
    )
  )
];

// ====================================================
// 4. ДЕҢГЕЙЛІК ЕСЕПТЕР — 20
// ====================================================

function task(q, options, correct, steps, label = "") {
  return {q, options, correct, steps, label};
}

const levels = [
  {
    name: "I деңгей — Жеңіл",
    points: 5,
    tasks: [
      task(
        M`P(X=1)=\frac16`,
        ["1/6", "1/2", "1/3", "1"],
        0,
        [M`P(X=1)=\frac16`],
        "Әділ сүйектен бір санының түсу ықтималдығы?"
      ),
      task(
        M`p_1=0.3,\ p_2=0.7`,
        ["0.7", "1", "0.3", "1.3"],
        1,
        [M`0.3+0.7=1`],
        "Ықтималдықтар қосындысын табыңдар."
      ),
      task(
        M`2,\ 4,\ 6`,
        ["3", "5", "4", "6"],
        2,
        [M`\overline x=\frac{2+4+6}{3}=4`],
        "Орташа мәнді табыңдар."
      ),
      task(
        M`1,\ 3,\ 5`,
        ["1", "5", "4", "3"],
        3,
        [M`Me=3`],
        "Медиананы табыңдар."
      ),
      task(
        M`2,\ 2,\ 3,\ 4`,
        ["2", "3", "4", "2.5"],
        0,
        [M`Mo=2`],
        "Моданы анықтаңдар."
      )
    ]
  },

  {
    name: "II деңгей — Орташа",
    points: 10,
    tasks: [
      task(
        M`P(X=1)=0.5,\ P(X=3)=0.5`,
        ["1", "2", "3", "4"],
        1,
        [M`M(X)=1\cdot0.5+3\cdot0.5=2`],
        "Математикалық күтімді табыңдар."
      ),
      task(
        M`p_1=0.2,\ p_2=0.5,\ p_3=?`,
        ["0.2", "0.5", "0.3", "0.7"],
        2,
        [M`p_3=1-0.2-0.5=0.3`],
        "Белгісіз ықтималдықты табыңдар."
      ),
      task(
        M`1,\ 3,\ 5,\ 7`,
        ["3", "5", "5.5", "4"],
        3,
        [M`Me=\frac{3+5}{2}=4`],
        "Медиананы анықтаңдар."
      ),
      task(
        M`n_i=3,\quad n=12`,
        ["0.25", "0.5", "0.75", "0.3"],
        0,
        [M`w_i=\frac3{12}=0.25`],
        "Салыстырмалы жиілікті табыңдар."
      ),
      task(
        M`D(X)=25`,
        ["25", "5", "10", "2.5"],
        1,
        [M`\sigma(X)=\sqrt{25}=5`],
        "Стандартты ауытқуды табыңдар."
      )
    ]
  },

  {
    name: "III деңгей — Қиын",
    points: 15,
    tasks: [
      task(
        M`P(X=0)=0.2,\ P(X=2)=0.8`,
        ["2", "1.2", "1.6", "0.8"],
        2,
        [M`M(X)=0\cdot0.2+2\cdot0.8=1.6`],
        "Математикалық күтімді есептеңдер."
      ),
      task(
        M`P(X=0)=0.5,\ P(X=2)=0.5`,
        ["0", "2", "0.5", "1"],
        3,
        [
          M`M(X)=1`,
          M`D(X)=0.5(0-1)^2+0.5(2-1)^2`,
          M`D(X)=1`
        ],
        "Дисперсияны есептеңдер."
      ),
      task(
        M`4,\ 5,\ 5,\ 7,\ 9`,
        ["6", "5", "7", "9"],
        0,
        [M`\overline x=\frac{4+5+5+7+9}{5}=6`],
        "Орташа мәнді табыңдар."
      ),
      task(
        M`P(X=1)=0.2,\ P(X=2)=0.3,\ P(X=4)=0.5`,
        ["3", "2.8", "2", "3.2"],
        1,
        [M`M(X)=0.2+0.6+2=2.8`],
        "Математикалық күтімді есептеңдер."
      ),
      task(
        M`1,\ 2,\ 2,\ 3,\ 4,\ 4,\ 4`,
        ["2", "3", "4", "1"],
        2,
        [M`Mo=4`],
        "Ең жиі кездесетін мәнді табыңдар."
      )
    ]
  },

  {
    name: "IV деңгей — Өте қиын",
    points: 20,
    tasks: [
      task(
        M`P(X=0)=\frac14,\ P(X=1)=\frac12,\ P(X=2)=\frac14`,
        ["0.5", "1.5", "2", "1"],
        3,
        [
          M`M(X)=0\cdot\frac14+1\cdot\frac12+2\cdot\frac14`,
          M`M(X)=1`
        ],
        "Математикалық күтімді есептеңдер."
      ),
      task(
        M`P(X=0)=\frac14,\ P(X=1)=\frac12,\ P(X=2)=\frac14`,
        ["0.5", "1", "0.25", "2"],
        0,
        [
          M`M(X)=1`,
          M`D(X)=\frac14(0-1)^2+\frac12(1-1)^2+\frac14(2-1)^2`,
          M`D(X)=\frac12`
        ],
        "Дисперсияны есептеңдер."
      ),
      task(
        M`x_1=0,\ x_2=4,\ p_1=0.25,\ p_2=0.75`,
        ["2", "3", "1", "4"],
        1,
        [M`M(X)=0\cdot0.25+4\cdot0.75=3`],
        "Математикалық күтімді есептеңдер."
      ),
      task(
        M`P(X=1)=0.25,\ P(X=3)=0.75`,
        ["1", "0.5", "0.75", "2.5"],
        2,
        [
          M`M(X)=2.5`,
          M`D(X)=0.25(1-2.5)^2+0.75(3-2.5)^2`,
          M`D(X)=0.75`
        ],
        "Дисперсияны есептеңдер."
      ),
      task(
        M`2,\ 4,\ 4,\ 6,\ 9,\ 11`,
        ["4", "6", "9", "5"],
        3,
        [M`Me=\frac{4+6}{2}=5`],
        "Медиананы табыңдар."
      )
    ]
  }
];

// ====================================================
// 5. ҮШ ТОПҚА — 15 СҰРАҚ
// ====================================================

const quiz = [
  {
    q: "Кездейсоқ шама дегеніміз не?",
    a: ["Тек тұрақты сан", "Кездейсоқ нәтижеге тәуелді сандық шама",
        "Тек теріс сан", "Тек айнымалысыз өрнек"],
    c: 1
  },
  {
    q: "Әділ сүйектегі мүмкін нәтижелер саны?",
    a: ["6", "3", "2", "12"],
    c: 0
  },
  {
    q: "Үлестірімдегі ықтималдықтар қосындысы?",
    a: ["0", "0.5", "1", "2"],
    c: 2
  },
  {
    q: "Математикалық күтім нені сипаттайды?",
    a: ["Ең үлкен мән", "Медиана", "Мода", "Ықтималдықпен өлшенген орташа мән"],
    c: 3
  },
  {
    q: "Дисперсия теріс болуы мүмкін бе?",
    a: ["Иә", "Жоқ", "Әрқашан", "Тек бүтін сан болса"],
    c: 1
  },
  {
    q: "Стандартты ауытқу қалай табылады?",
    a: ["Дисперсияның квадрат түбірі", "Дисперсияны екіге бөлу",
        "Орташа мән", "Ең үлкен мән"],
    c: 0
  },
  {
    q: "3, 5, 7 сандарының орташа мәні?",
    a: ["3", "7", "5", "15"],
    c: 2
  },
  {
    q: "1, 2, 2, 4 жиынындағы мода?",
    a: ["1", "4", "2.25", "2"],
    c: 3
  },
  {
    q: "1, 3, 5, 7 қатарының медианасы?",
    a: ["3", "4", "5", "7"],
    c: 1
  },
  {
    q: "Салыстырмалы жиіліктің формуласы?",
    a: ["nᵢ/n", "n/nᵢ", "nᵢ+n", "nᵢ×n"],
    c: 0
  },
  {
    q: "Таңдама дегеніміз не?",
    a: ["Барлық мүмкін сан", "Тек бір сан",
        "Бас жиынтықтан алынған бақылаулар", "Тек ықтималдық"],
    c: 2
  },
  {
    q: "Барлық бақылаулар бірдей болса, дисперсия?",
    a: ["1", "10", "−1", "0"],
    c: 3
  },
  {
    q: "Орташа мәнді табу үшін не істейміз?",
    a: ["Сандарды көбейтеміз", "Қосындыны санына бөлеміз",
        "Ең үлкен санды аламыз", "Тек ортасын аламыз"],
    c: 1
  },
  {
    q: "0.2 және 0.8 ықтималдықтарының қосындысы?",
    a: ["1", "0.6", "1.2", "0.16"],
    c: 0
  },
  {
    q: "0, 2 мәндері тең ықтималдықпен болса, M(X)?",
    a: ["0", "2", "1", "4"],
    c: 2
  }
];

// ====================================================
// 6. ҮЙ ЖҰМЫСЫ
// ====================================================

const homework = [
  {
    title: "1. Үлестірім заңын құру",
    text:
      "Әділ тиынды екі рет лақтырыңдар. " +
      "X — елтаңба түсу саны. " +
      "Мүмкін мәндер мен олардың ықтималдықтарын " +
      "кестеге жазыңдар. Барлық ықтималдықтың " +
      "қосындысын тексеріңдер.",
    formulas: [
      M`X\in\{0,1,2\}`,
      M`\sum p_i=1`
    ]
  },
  {
    title: "2. Математикалық күтім мен дисперсия",
    text:
      "Кездейсоқ шама 0 және 4 мәндерін " +
      "тиісінше 0,25 және 0,75 ықтималдықтарымен " +
      "қабылдайды. Математикалық күтімін, " +
      "дисперсиясын және стандартты ауытқуын табыңдар.",
    formulas: [
      M`P(X=0)=0.25`,
      M`P(X=4)=0.75`,
      M`M(X)=\sum x_ip_i`,
      M`D(X)=\sum (x_i-M(X))^2p_i`
    ]
  },
  {
    title: "3. Таңдамалық зерттеу",
    text:
      "Өзің ойдан құрастырған 10 саннан тұратын " +
      "таңдама жаса. Сандарды өсу ретімен жаз. " +
      "Орташа мәнін, медианасын, модасын және " +
      "бір мәннің салыстырмалы жиілігін есепте. " +
      "Нәтижені дәптерге жазып, ауызша түсіндір.",
    formulas: [
      M`\overline x=\frac{\sum x_i}{n}`,
      M`w_i=\frac{n_i}{n}`
    ]
  }
];

// ====================================================
// 7. 37 СЛАЙД
// ====================================================

const slides = [{type:"intro",title:"Кіріспе"}];

theory.forEach((_,i) => slides.push({
  type:"theory",
  index:i,
  title:`Түсіндірме ${i+1}`
}));

notes.forEach((_,i) => slides.push({
  type:"note",
  index:i,
  title:`Конспект ${i+1}`
}));

levels.forEach((_,i) => slides.push({
  type:"level",
  index:i,
  title:`${i+1}-деңгей`
}));

quiz.forEach((_,i) => slides.push({
  type:"game",
  index:i,
  title:`${i%3+1}-топ — ${i+1}-сұрақ`
}));

slides.push(
  {type:"homework",title:"Үй жұмысы"},
  {type:"finish",title:"Қорытынды"}
);

// ====================================================
// 8. САЙТ КҮЙІ
// ====================================================

let page=0;
let individualScore=0;
let teamScores=[0,0,0];

const levelAnswers=new Map();
const gameAnswers=new Map();
const openedSolutions=new Set();

const TOTAL_SECONDS=4800;

let remainingSeconds=TOTAL_SECONDS;
let timerID=null;
let deadline=0;

// ====================================================
// 9. HTML ҚАУІПСІЗДІГІ
// ====================================================

function safe(value) {
  return String(value).replace(/[&<>"']/g,ch=>({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#39;"
  })[ch]);
}

// ====================================================
// 10. МАТЕМАТИКАЛЫҚ ФОРМУЛА
// ====================================================

function math(tex) {
  return `<div class="math"
    data-tex="${encodeURIComponent(String(tex))}"></div>`;
}

// ====================================================
// 11. MATHJAX — ФОРМУЛАЛАРДЫ КӨРСЕТУ
// ====================================================

let mathVersion=0;

async function drawFormulas() {
  const version=++mathVersion;

  const elements=[
    ...$("content").querySelectorAll(".math[data-tex]")
  ].filter(el=>!el.closest("[hidden]"));

  for(const el of elements) {
    el.textContent=decodeURIComponent(el.dataset.tex);
    el.classList.add("fallback");
  }

  if(!window.MathJax) return;

  try {
    await MathJax.startup.promise;

    if(typeof MathJax.tex2svgPromise!=="function") return;

    for(const el of elements) {
      if(version!==mathVersion) return;
      if(!el.isConnected) continue;

      const encoded=el.getAttribute("data-tex");
      if(!encoded) continue;

      const tex=decodeURIComponent(encoded);

      try {
        const node=await MathJax.tex2svgPromise(
          tex,{display:true}
        );

        if(version!==mathVersion||!el.isConnected) return;

        el.replaceChildren(node);
        el.classList.remove("fallback");
        el.removeAttribute("data-tex");
      } catch(error) {
        el.textContent=tex;
        console.warn("Формула қатесі:",tex,error);
      }
    }
  } catch(error) {
    console.warn("MathJax қатесі:",error);
  }
}

// ====================================================
// 12. КАРТОЧКАЛАР МЕН ШЕШУ ЖОЛДАРЫ
// ====================================================

function card(color,title,body) {
  return `<section class="card ${color}">
    <h3>${safe(title)}</h3>
    ${body}
  </section>`;
}

function stepsHTML(steps) {
  return steps.map((step,i)=>`
    <div class="step">
      <strong>${i+1}-қадам</strong>
      ${math(step)}
    </div>
  `).join("");
}

function solutionHTML(id,steps,answer,isMath=true) {
  const opened=openedSolutions.has(id);

  return `
    <button class="action" data-toggle="${id}">
      ${opened?"Шешу жолын жасыру":"Шешу жолын көрсету"}
    </button>
    <div class="solution" id="${id}" ${opened?"":"hidden"}>
      ${stepsHTML(steps)}
      <h3>Дұрыс жауап</h3>
      ${isMath?math(answer):`<p>${safe(answer)}</p>`}
    </div>
  `;
}

// ====================================================
// 13. КІРІСПЕ
// ====================================================

function introHTML() {
  return `<div class="slide">
    <div class="eyebrow">МАТЕМАТИКА · 1 КУРС · 80 МИНУТ</div>
    <h1 class="gradient">§25. ${safe(lesson.title)}</h1>

    ${card("blue","Сабақ мақсаты",
      `<p>${safe(lesson.goal)}</p>`)}

    ${card("gold","Математикалық күтім",
      math(M`M(X)=\sum x_ip_i`))}

    ${card("purple","Дисперсия",
      math(M`D(X)=\sum (x_i-M(X))^2p_i`))}

    ${card("green","Сабақ құрылымы",`
      <p>5 теориялық түсіндірме</p>
      <p>10 конспект және 20 өзіндік есеп</p>
      <p>4 деңгейдегі 20 есеп</p>
      <p>3 топқа арналған 15 ойын сұрағы</p>
      <p>Үй тапсырмасы және қорытынды</p>
    `)}

    ${card("blue","80 минуттық жоспар",`
      <p>Кіріспе — 5 минут</p>
      <p>Теория — 20 минут</p>
      <p>Конспект — 15 минут</p>
      <p>Деңгейлік есептер — 20 минут</p>
      <p>Топтық ойын — 15 минут</p>
      <p>Үй жұмысы, қорытынды — 5 минут</p>
    `)}
  </div>`;
}

// ====================================================
// 14. ТҮСІНДІРМЕ
// ====================================================

function theoryHTML(i) {
  const t=theory[i];

  return `<div class="slide">
    <div class="eyebrow">ТҮСІНДІРМЕ ${i+1} / 5</div>
    <h2>${safe(t.title)}</h2>

    ${card("blue","Анықтама",
      `<p>${safe(t.definition)}</p>`)}

    ${card("purple","Толық түсіндірме",
      `<p>${safe(t.explain)}</p>`)}

    ${card("green","Негізгі ереже",
      `<p>${safe(t.rule)}</p>`)}

    ${card("gold","Формула",math(t.formula))}

    ${card("green","Шығарылған мысал",
      stepsHTML(t.steps))}

    ${card("red","Маңызды ескерту",
      `<p>${safe(t.warning)}</p>`)}
  </div>`;
}

// ====================================================
// 15. КОНСПЕКТ
// ====================================================

function noteHTML(i) {
  const n=notes[i];

  return `<div class="slide">
    <div class="eyebrow">КОНСПЕКТ ${i+1} / 10</div>
    <h2>${safe(n.title)}</h2>

    <div class="notebook">
      <h3>Дәптерге жазып алыңдар</h3>
      <p>${safe(n.text)}</p>
    </div>

    ${card("gold","Негізгі формула",math(n.formula))}

    ${card("green","Шығарылған мысал",
      stepsHTML(n.example))}

    <div class="eyebrow">ӨЗІНДІК ЖҰМЫС</div>
    <h2>Екі есеп</h2>

    ${n.self.map((t,j)=>`
      <section class="self-task">
        <h3>${j+1}-өзіндік есеп</h3>
        ${t.label?`<p>${safe(t.label)}</p>`:""}
        ${math(t.q)}
        <p>Алдымен есепті дәптерге шығарыңдар.</p>
        ${solutionHTML(
          `self_${i}_${j}`,
          t.steps,t.answer
        )}
      </section>
    `).join("")}
  </div>`;
}

// ====================================================
// 16. ТӨРТ ДЕҢГЕЙ
// ====================================================

function levelHTML(i) {
  const level=levels[i];

  return `<div class="slide">
    <div class="eyebrow">ДЕҢГЕЙ ${i+1} / 4</div>
    <h2>${safe(level.name)}</h2>

    <div class="level-header">
      <span>5 есеп</span>
      <span>Дұрыс жауап: +${level.points} ұпай</span>
    </div>

    <p>Алдымен дәптерге шығарып, дұрыс нұсқаны таңдаңдар.</p>

    <div class="level-grid">
      ${level.tasks.map((t,j)=>{
        const key=`${i}_${j}`;
        const selected=levelAnswers.get(key);
        const done=selected!==undefined;

        return `<section class="level-task">
          <h3>${j+1}-есеп</h3>

          ${t.label?`<p>${safe(t.label)}</p>`:""}
          ${math(t.q)}

          <div class="answers">
            ${t.options.map((option,k)=>{
              let cls="";
              if(done) {
                if(k===t.correct)cls="correct";
                else if(k===selected)cls="wrong";
              }

              return `<button
                data-task="${key}"
                data-option="${k}"
                class="${cls}"
                ${done?"disabled":""}>
                ${"ABCD"[k]}. ${safe(option)}
              </button>`;
            }).join("")}
          </div>

          <p class="feedback ${selected===t.correct&&done?"correct":""}">
            ${!done
              ?"Бір жауап таңдаңдар."
              :selected===t.correct
                ?`Дұрыс! +${level.points} ұпай`
                :"Қате. Дұрыс нұсқа белгіленді."}
          </p>

          ${solutionHTML(
            `level_${key}`,
            t.steps,t.options[t.correct],false
          )}
        </section>`;
      }).join("")}
    </div>
  </div>`;
}

// ====================================================
// 17. ТОПТЫҚ ОЙЫН
// ====================================================

function gameHTML(i) {
  const q=quiz[i];
  const team=i%3;
  const selected=gameAnswers.get(i);
  const done=selected!==undefined;

  return `<div class="slide">
    <div class="eyebrow">КОМАНДАЛЫҚ ОЙЫН ${i+1} / 15</div>
    <h2>${team+1}-топ жауап береді</h2>

    <div class="scores">
      ${teamScores.map((score,j)=>`
        <div class="team ${j===team?"current":""}">
          ${j+1}-топ
          <strong>${score}</strong>
        </div>
      `).join("")}
    </div>

    ${card("gold",`${i+1}-сұрақ`,`
      <p>${safe(q.q)}</p>

      <div class="answers">
        ${q.a.map((answer,k)=>{
          let cls="";
          if(done) {
            if(k===q.c)cls="correct";
            else if(k===selected)cls="wrong";
          }

          return `<button
            data-choice="${k}"
            class="${cls}"
            ${done?"disabled":""}>
            ${"ABCD"[k]}. ${safe(answer)}
          </button>`;
        }).join("")}
      </div>

      <p>
        ${!done
          ?"Бір жауап таңдаңдар."
          :selected===q.c
            ?"Дұрыс! +10 ұпай."
            :"Дұрыс жауап: "+safe(q.a[q.c])}
      </p>
    `)}

    ${card("blue","Ойын ережесі",`
      <p>1-топ → 2-топ → 3-топ.</p>
      <p>Әр дұрыс жауапқа 10 ұпай.</p>
      <p>Жауаптан кейін «Келесі» батырмасын басыңдар.</p>
    `)}
  </div>`;
}

// ====================================================
// 18. ҮЙ ЖҰМЫСЫ
// ====================================================

function homeworkHTML() {
  return `<div class="slide">
    <div class="eyebrow">ҮЙ ТАПСЫРМАСЫ</div>
    <h2>Үй жұмысы</h2>

    ${homework.map((h,i)=>card(
      ["blue","gold","green"][i],
      h.title,
      `<p>${safe(h.text)}</p>`+
      h.formulas.map(math).join("")
    )).join("")}
  </div>`;
}

// ====================================================
// 19. ҚОРЫТЫНДЫ
// ====================================================

function finishHTML() {
  const finished=gameAnswers.size===quiz.length;
  const max=Math.max(...teamScores);

  const winners=teamScores
    .map((v,i)=>v===max?`${i+1}-топ`:null)
    .filter(Boolean);

  const correct=[...levelAnswers].filter(([key,v])=>{
    const [i,j]=key.split("_").map(Number);
    return v===levels[i].tasks[j].correct;
  }).length;

  return `<div class="slide">
    <div class="eyebrow">САБАҚ ҚОРЫТЫНДЫСЫ</div>
    <h1 class="gradient">Сабақ аяқталды!</h1>

    <div class="scores">
      ${teamScores.map((score,i)=>`
        <div class="team">
          ${i+1}-топ
          <strong>${score}</strong>
        </div>
      `).join("")}
    </div>

    ${card("green","Топтық ойын",`
      <p>Жауап берілген сұрақтар: ${gameAnswers.size}/15</p>
      <p>${finished
        ?winners.join(", ")+(winners.length===1
          ?" — жеңімпаз!":" — тең ұпай!")
        :"Ойын толық аяқталған жоқ."}
      </p>
    `)}

    ${card("blue","Деңгейлік тапсырмалар",`
      <p>Жауап берілген есептер: ${levelAnswers.size}/20</p>
      <p>Дұрыс жауаптар: ${correct}/20</p>
      <p>Жеке ұпай: ${individualScore}</p>
    `)}

    ${card("gold","Бүгін не үйрендік?",`
      <p>Кездейсоқ шаманың түрлерін ажыраттық.</p>
      <p>Үлестірім заңын қолдандық.</p>
      <p>Математикалық күтім мен дисперсияны есептедік.</p>
      <p>Медиананы, моданы және орташа мәнді таптық.</p>
      <p>Таңдаманың салыстырмалы жиілігін анықтадық.</p>
    `)}

    <h2>Сау болыңыздар!</h2>
  </div>`;
}

// ====================================================
// 20. СЛАЙДТАРДЫ КӨРСЕТУ
// ====================================================

function updateScore() {
  $("totalScore").textContent=
    individualScore+
    teamScores.reduce((sum,v)=>sum+v,0);
}

function render() {
  const s=slides[page];

  mathVersion++;

  const views={
    intro:()=>introHTML(),
    theory:()=>theoryHTML(s.index),
    note:()=>noteHTML(s.index),
    level:()=>levelHTML(s.index),
    game:()=>gameHTML(s.index),
    homework:()=>homeworkHTML(),
    finish:()=>finishHTML()
  };

  $("content").innerHTML=views[s.type]();
  $("content").scrollTop=0;

  $("pageCounter").textContent=`${page+1} / ${slides.length}`;
  $("pageTitle").textContent=s.title;
  $("pageProgress").style.width=
    `${(page+1)/slides.length*100}%`;

  $("prevPage").disabled=page===0;
  $("nextPage").disabled=page===slides.length-1;

  document.querySelectorAll("[data-section]").forEach(btn=>{
    btn.classList.toggle(
      "active",btn.dataset.section===s.type
    );
  });

  updateScore();
  drawFormulas();
}

// ====================================================
// 21. БЕТ БАСҚАРУЫ
// ====================================================

$("nextPage").addEventListener("click",()=>{
  if(page<slides.length-1) {
    page++;
    render();
  }
});

$("prevPage").addEventListener("click",()=>{
  if(page>0) {
    page--;
    render();
  }
});

document.querySelectorAll("[data-section]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const index=slides.findIndex(
      s=>s.type===btn.dataset.section
    );

    if(index>=0) {
      page=index;
      render();
    }
  });
});

// ====================================================
// 22. ЕСЕП ЖӘНЕ ОЙЫН БАТЫРМАЛАРЫ
// ====================================================

$("content").addEventListener("click",event=>{
  const toggle=event.target.closest("[data-toggle]");

  if(toggle) {
    const id=toggle.dataset.toggle;

    if(openedSolutions.has(id)) {
      openedSolutions.delete(id);
    } else {
      openedSolutions.add(id);
    }

    const el=$(id);

    if(el) {
      el.hidden=!openedSolutions.has(id);
      toggle.textContent=el.hidden
        ?"Шешу жолын көрсету"
        :"Шешу жолын жасыру";

      if(!el.hidden)drawFormulas();
    }
    return;
  }

  const taskBtn=event.target.closest("[data-task]");

  if(taskBtn) {
    const key=taskBtn.dataset.task;
    if(levelAnswers.has(key))return;

    const [i,j]=key.split("_").map(Number);
    const selected=Number(taskBtn.dataset.option);

    levelAnswers.set(key,selected);

    if(selected===levels[i].tasks[j].correct) {
      individualScore+=levels[i].points;
    }

    render();
    return;
  }

  const choice=event.target.closest("[data-choice]");

  if(choice) {
    const s=slides[page];

    if(s.type!=="game")return;
    if(gameAnswers.has(s.index))return;

    const selected=Number(choice.dataset.choice);
    gameAnswers.set(s.index,selected);

    if(selected===quiz[s.index].c) {
      teamScores[s.index%3]+=10;
    }

    render();
  }
});

// ====================================================
// 23. ОЙЫНДЫ ЖАҢАРТУ
// ====================================================

$("resetGame").addEventListener("click",()=>{
  gameAnswers.clear();
  teamScores=[0,0,0];
  render();
});

// ====================================================
// 24. ТОЛЫҚ ЭКРАН
// ====================================================

$("fullscreenBtn").addEventListener("click",async()=>{
  try {
    if(document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
  } catch(error) {
    console.warn("Толық экран қатесі:",error);
  }
});

// ====================================================
// 25. 80 МИНУТТЫҚ ТАЙМЕР
// ====================================================

function formatTime(seconds) {
  return String(Math.floor(seconds/60)).padStart(2,"0")+
    ":"+String(seconds%60).padStart(2,"0");
}

function updateTimer() {
  $("remaining").textContent=formatTime(remainingSeconds);
  $("elapsed").textContent=
    formatTime(TOTAL_SECONDS-remainingSeconds);

  $("timeProgress").style.width=
    `${(TOTAL_SECONDS-remainingSeconds)/TOTAL_SECONDS*100}%`;
}

function pauseTimer() {
  if(timerID!==null) {
    remainingSeconds=Math.max(
      0,Math.ceil((deadline-Date.now())/1000)
    );

    clearInterval(timerID);
    timerID=null;
    updateTimer();
  }
}

function startTimer() {
  if(timerID!==null||remainingSeconds<=0)return;

  deadline=Date.now()+remainingSeconds*1000;

  timerID=setInterval(()=>{
    remainingSeconds=Math.max(
      0,Math.ceil((deadline-Date.now())/1000)
    );

    updateTimer();

    if(remainingSeconds===0) {
      clearInterval(timerID);
      timerID=null;
    }
  },250);
}

function resetTimer() {
  if(timerID!==null)clearInterval(timerID);

  timerID=null;
  remainingSeconds=TOTAL_SECONDS;
  updateTimer();
}

$("timerStart").addEventListener("click",startTimer);
$("timerPause").addEventListener("click",pauseTimer);
$("timerReset").addEventListener("click",resetTimer);

// ====================================================
// 26. АЛМАТЫ САҒАТЫ
// ====================================================

function updateClock() {
  $("clock").textContent=
    new Intl.DateTimeFormat("kk-KZ",{
      timeZone:"Asia/Almaty",
      hour:"2-digit",
      minute:"2-digit",
      second:"2-digit",
      hour12:false
    }).format(new Date());
}

updateClock();
setInterval(updateClock,1000);

// ====================================================
// 27. ЕКІ КАЛЬКУЛЯТОР
// ====================================================

const calcValues={basic:"",science:""};

const calcKeys={
  basic:[
    "C","⌫","(",")",
    "7","8","9","÷",
    "4","5","6","×",
    "1","2","3","−",
    "%","0",".","+","="
  ],
  science:[
    "C","⌫","(",")",
    "sin","cos","tan","ctg",
    "√","∛","x²","xʸ",
    "log","ln","π","e",
    "7","8","9","÷",
    "4","5","6","×",
    "1","2","3","−",
    "%","0",".","+","="
  ]
};

const calcMap={
  "×":"*","÷":"/","−":"-",
  "sin":"sin(","cos":"cos(",
  "tan":"tan(","ctg":"ctg(",
  "√":"sqrt(","∛":"cbrt(",
  "log":"log(","ln":"ln(",
  "π":"pi","x²":"^2","xʸ":"^"
};

function createCalculator(type) {
  const grid=$("keys-"+type);
  grid.replaceChildren();

  calcKeys[type].forEach(key=>{
    const btn=document.createElement("button");
    btn.type="button";
    btn.textContent=key;

    if(key==="C")btn.classList.add("clear");
    if(key==="=")btn.classList.add("equal");

    if(["sin","cos","tan","ctg","log","ln"].includes(key)) {
      btn.classList.add("trig");
    }

    if(["×","÷","−","+","√","∛","x²","xʸ"].includes(key)) {
      btn.classList.add("op");
    }

    btn.addEventListener("click",()=>pressCalculator(type,key));
    grid.appendChild(btn);
  });
}

function pressCalculator(type,key) {
  let value=calcValues[type];

  if(key==="C") {
    value="";
  } else if(key==="⌫") {
    value=value==="Қате"?"":value.slice(0,-1);
  } else if(key==="=") {
    try {
      value=String(Number(calculate(value).toPrecision(12)));
    } catch(error) {
      value="Қате";
    }
  } else {
    if(value==="Қате")value="";
    value+=calcMap[key]??key;
  }

  calcValues[type]=value;

  const display=$("display-"+type);
  display.textContent=value||"0";
  display.scrollLeft=display.scrollWidth;
}

// ====================================================
// 28. ҚАУІПСІЗ ЕСЕПТЕУ ЖҮЙЕСІ
// ====================================================

function calculate(input) {
  const source=String(input)
    .replace(/\s+/g,"")
    .replace(/,/g,".")
    .replace(/−/g,"-")
    .replace(/×/g,"*")
    .replace(/÷/g,"/");

  let pos=0;

  const rad=x=>x*Math.PI/180;

  const funcs={
    sin:x=>Math.sin(rad(x)),
    cos:x=>Math.cos(rad(x)),
    tan:x=>{
      if(Math.abs(Math.cos(rad(x)))<1e-12)
        throw Error("tan анықталмаған");
      return Math.tan(rad(x));
    },
    ctg:x=>{
      if(Math.abs(Math.sin(rad(x)))<1e-12)
        throw Error("ctg анықталмаған");
      return Math.cos(rad(x))/Math.sin(rad(x));
    },
    sqrt:Math.sqrt,
    cbrt:Math.cbrt,
    log:Math.log10,
    ln:Math.log
  };

  function take(char) {
    if(source[pos]===char) {
      pos++;
      return true;
    }
    return false;
  }

  function atom() {
    if(take("(")) {
      const value=expression();
      if(!take(")"))throw Error("Жақша қатесі");
      return value;
    }

    const rest=source.slice(pos);
    const number=rest.match(/^(?:\d+\.?\d*|\.\d+)/);

    if(number) {
      pos+=number[0].length;
      return Number(number[0]);
    }

    for(const name of Object.keys(funcs)) {
      if(rest.startsWith(name+"(")) {
        pos+=name.length+1;

        const argument=expression();
        if(!take(")"))throw Error("Жақша қатесі");

        const result=funcs[name](argument);
        if(!Number.isFinite(result))
          throw Error("Анықталмаған мән");

        return result;
      }
    }

    if(rest.startsWith("pi")) {
      pos+=2;
      return Math.PI;
    }

    if(rest.startsWith("e")) {
      pos++;
      return Math.E;
    }

    throw Error("Қате өрнек");
  }

  function postfix() {
    let value=atom();
    while(take("%"))value/=100;
    return value;
  }

  function unary() {
    if(take("+"))return unary();
    if(take("-"))return -unary();
    return power();
  }

  function power() {
    let value=postfix();
    if(take("^"))value=Math.pow(value,unary());
    return value;
  }

  function term() {
    let value=unary();

    while(true) {
      if(take("*")) {
        value*=unary();
      } else if(take("/")) {
        const d=unary();
        if(d===0)throw Error("Нөлге бөлу");
        value/=d;
      } else {
        break;
      }
    }
    return value;
  }

  function expression() {
    let value=term();

    while(true) {
      if(take("+"))value+=term();
      else if(take("-"))value-=term();
      else break;
    }

    return value;
  }

  if(!source)throw Error("Бос өрнек");

  const result=expression();

  if(pos!==source.length||!Number.isFinite(result))
    throw Error("Есептеу қатесі");

  return Math.abs(result)<1e-12?0:result;
}

// ====================================================
// 29. КАЛЬКУЛЯТОРДЫ АШУ / ЖАБУ
// ====================================================

function toggleCalculator(type) {
  const el=$("calc-"+type);
  const opening=!el.classList.contains("visible");

  el.classList.toggle("visible",opening);

  if(opening) {
    const rect=el.getBoundingClientRect();
    const maxX=Math.max(0,innerWidth-el.offsetWidth);
    const maxY=Math.max(0,innerHeight-el.offsetHeight);

    el.style.left=
      Math.max(0,Math.min(maxX,rect.left))+"px";
    el.style.top=
      Math.max(0,Math.min(maxY,rect.top))+"px";
  }
}

$("basicOpen").addEventListener(
  "click",()=>toggleCalculator("basic")
);

$("scienceOpen").addEventListener(
  "click",()=>toggleCalculator("science")
);

document.querySelectorAll("[data-close]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    $("calc-"+btn.dataset.close).classList.remove("visible");
  });
});

// ====================================================
// 30. КАЛЬКУЛЯТОРДЫ ЖЫЛЖЫТУ
// ====================================================

function makeDraggable(el) {
  const head=el.querySelector(".calc-head");
  let drag=null;

  head.addEventListener("pointerdown",event=>{
    if(event.target.closest("button"))return;
    if(event.pointerType==="mouse"&&event.button!==0)return;

    const rect=el.getBoundingClientRect();

    drag={
      id:event.pointerId,
      x:event.clientX,
      y:event.clientY,
      left:rect.left,
      top:rect.top
    };

    head.setPointerCapture(event.pointerId);
  });

  head.addEventListener("pointermove",event=>{
    if(!drag||drag.id!==event.pointerId)return;

    const maxX=Math.max(0,innerWidth-el.offsetWidth);
    const maxY=Math.max(0,innerHeight-el.offsetHeight);

    el.style.left=Math.max(
      0,Math.min(maxX,drag.left+event.clientX-drag.x)
    )+"px";

    el.style.top=Math.max(
      0,Math.min(maxY,drag.top+event.clientY-drag.y)
    )+"px";
  });

  head.addEventListener("pointerup",()=>drag=null);
  head.addEventListener("pointercancel",()=>drag=null);
}

// ====================================================
// 31. БАСТАПҚЫ ТЕКСЕРУЛЕР
// ====================================================

function runChecks() {
  const assert=(condition,message)=>{
    if(!condition)throw Error(message);
  };

  assert(theory.length===5,"5 теория қажет");
  assert(notes.length===10,"10 конспект қажет");

  assert(
    notes.every(n=>n.self.length===2),
    "20 өзіндік есеп қажет"
  );

  assert(levels.length===4,"4 деңгей қажет");

  assert(
    levels.every(l=>l.tasks.length===5),
    "20 деңгейлік есеп қажет"
  );

  assert(quiz.length===15,"15 ойын сұрағы қажет");
  assert(slides.length===37,"37 слайд қажет");

  levels.forEach((level,i)=>{
    level.tasks.forEach((t,j)=>{
      assert(
        t.options.length===4 &&
        Number.isInteger(t.correct) &&
        t.correct>=0 && t.correct<4,
        `${i+1}-деңгей, ${j+1}-есеп қате`
      );
    });
  });

  quiz.forEach((q,i)=>{
    assert(
      q.a.length===4 &&
      Number.isInteger(q.c) &&
      q.c>=0 && q.c<4,
      `${i+1}-ойын сұрағы қате`
    );
  });

  const formulas=[
    ...theory.flatMap(t=>[t.formula,...t.steps]),

    ...notes.flatMap(n=>[
      n.formula,...n.example,
      ...n.self.flatMap(t=>[
        t.q,...t.steps,t.answer
      ])
    ]),

    ...levels.flatMap(l=>
      l.tasks.flatMap(t=>[t.q,...t.steps])
    ),

    ...homework.flatMap(h=>h.formulas)
  ];

  assert(
    formulas.every(f=>
      typeof f==="string" &&
      !/\\text\s*\{|\\boxed/.test(f)
    ),
    "Формула ішінде мәтін бар"
  );

  assert(calculate("2^5")===32,"Дәреже қатесі");
  assert(calculate("8/4")===2,"Бөлу қатесі");
  assert(calculate("log(100)")===2,"log қатесі");
  assert(calculate("ln(e)")===1,"ln қатесі");

  assert(
    Math.abs(calculate("sin(30)")-0.5)<1e-10,
    "sin қатесі"
  );

  // Математикалық тексерулер

  const near=(a,b)=>Math.abs(a-b)<1e-10;

  assert(
    near(0.25+0.5+0.25,1),
    "Үлестірім қосындысы"
  );

  assert(
    near(0*0.25+1*0.5+2*0.25,1),
    "Математикалық күтім"
  );

  assert(
    near(0.25*(0-1)**2+0.5*(1-1)**2+
         0.25*(2-1)**2,0.5),
    "Дисперсия"
  );

  assert(
    near(0.25*(1-2.5)**2+
         0.75*(3-2.5)**2,0.75),
    "IV деңгей дисперсиясы"
  );

  console.log(
    "§25: бастапқы құрылымдық және есептеу тексерулері өтті."
  );
}

// ====================================================
// 32. САЙТТЫ ІСКЕ ҚОСУ
// ====================================================

runChecks();

createCalculator("basic");
createCalculator("science");

makeDraggable($("calc-basic"));
makeDraggable($("calc-science"));

updateTimer();
render();
