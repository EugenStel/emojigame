import { DIFFICULTY_LEVELS } from "./difficulty"


export const MOVIES = [
    {
        title: 'Властелин Колец',
        emoji: ['&#128081;', '&#127755;', '&#128141;', '&#129501;', '&#129497;' ],
        difficulty: DIFFICULTY_LEVELS.easy,
        answers: ['Властелин Колец', 'Властелин Кольца'],
        points_per_answer: 2,
        hints: {
            year: 2001,
            actors: ['Элайджа Вуд', 'Шон Астин', 'Иэн МакКеллен', 'Вигго Мортенсен', 'Орландо Блум', 'Джон Рис-Дэвис']
        },
        id: 1
    },
]

export const MOVIES_FOR_GAME = [
    {
        title: 'Властелин Колец',
        emoji: ['&#128081;', '&#127755;', '&#128141;', '&#129501;', '&#129497;' ],
        difficulty: DIFFICULTY_LEVELS.easy,
        answers: ['Властелин Колец', 'Властелин Кольца'],
        points_per_answer: 2,
        hints: {
            year: 2001,
            actors: ['Элайджа Вуд', 'Шон Астин', 'Иэн МакКеллен', 'Вигго Мортенсен', 'Орландо Блум', 'Джон Рис-Дэвис']
        },
        id: 1
    },
    {
        title: '1 + 1',
        emoji: ['&#128116;', '&#129469;', '&#129309;', '&#128996;', '&#128104;'],
        difficulty: DIFFICULTY_LEVELS.medium,
        answers: ['1 + 1', '1+1', '1 +1', '1+ 1'],
        points_per_answer: 4,
        hints: {
            year: 2011,
            actors: ['Франсуа Клюзе', 'Омар Си']
        },
        id: 2
    },
    {
        title: '5 элемент',
        emoji: ['&#128293;','&#127754;','&#127757;','&#127788;','&#128105;'],
        difficulty: DIFFICULTY_LEVELS.easy,
        answers: ['5 элемент', '5элемент', '5 элемент ', 'пятый элемент'],
        points_per_answer: 2,
        hints: {
            year: 1997,
            actors: ['Брюс Уиллис','Мила Йовович','Гэри Олдмен', 'Крис Такер']
        },
        id: 3
    },
    {
        title: 'Гарри Поттер',
        emoji: ['&#129497;','&#128302;','&#128102;'],
        difficulty: DIFFICULTY_LEVELS.easy,
        answers: ['Гарри Поттер'],
        points_per_answer: 2,
        hints: {
            year: 2001,
            actors: ['Дэниел Рэдклифф','Эмма Уотсон','Руперт Грин']
        },
        id: 4
    },
    {
        title: 'Бегущий в лабиринте',
        emoji: ['&#127939;','&#129513;','&#129514;','&#8265;'],
        difficulty: DIFFICULTY_LEVELS.hard,
        answers: ['Бегущий в лабиринте', 'Бегущий влабиринте', 'Бегущийв лабиринте'],
        points_per_answer: 6,
        hints: {
            year: 2014,
            actors: ['Дилан О Брайен','Томас Сэнгстер','Кая Скоделарио', 'Уилл Поултер']
        },
        id: 5
    },
    {
        title: 'Бэтмен',
        emoji: ['&#128176;','&#129333;','&#127747;','&#129415;'],
        difficulty: DIFFICULTY_LEVELS.easy,
        answers: ['Бэтмен','Бэтмэн','Бетмен','Бетмэн'],
        points_per_answer: 2,
        hints: {
            year: 2022,
            actors: ['Роберт Паттисон','Зои Кравиц','Пол Дано']
        },
        id: 6
    },
    {
        title: 'Время',
        emoji: ['&#8986;','&#127922;'],
        difficulty: DIFFICULTY_LEVELS.medium,
        answers: ['Время'],
        points_per_answer: 4,
        hints: {
            year: 2011,
            actors: ['Джастин Тимберлейк','Аманда Сайфред','Киллиан Мёрфи', 'Оливия Уайлд']
        },
        id: 7
    },
    {
        title: 'Вспомнить всё',
        emoji: ['&#9794;','&#128581;','&#129504;','&#129300;'],
        difficulty: DIFFICULTY_LEVELS.medium,
        answers: ['Вспомнить всё','Вспомнить все'],
        points_per_answer: 4,
        hints: {
            year: 1990,
            actors: ['Арнольд Шварценеггер','Шэрон Стоун','Майкл Айронсайд','Рэйчел Тикотин','Дин Норрис']
        },
        id: 8
    },
    {
        title: 'Гладиатор',
        emoji: ['&#127829;','&#9876;'],
        difficulty: DIFFICULTY_LEVELS.medium,
        answers: ['Гладиатор'],
        points_per_answer: 4,
        hints: {
            year: 2000,
            actors: ['Рассел Кроу','Хоакин Феникс','Джимми Хонсу']
        },
        id: 9
    },
    {
        title: 'Голодные игры',
        emoji: ['&#127835;','&#127922;'],
        difficulty: DIFFICULTY_LEVELS.medium,
        answers: ['Голодные игры'],
        points_per_answer: 4,
        hints: {
            year: 2012,
            actors: ['Вуди Харрельсон','Ленни Кравич','Дженифер Лоуренс', 'Лиам Хемсворт', 'Стнли Туччи']
        },
        id: 10
    },
    {
        title: 'Джуманджи',
        emoji: ['&#129333;','&#128102;','&#128094;','&#127922;','&#128018;'],
        difficulty: DIFFICULTY_LEVELS.medium,
        answers: ['Джуманджи', 'Джуманжи'],
        points_per_answer: 4,
        hints: {
            year: 1995,
            actors: ['Робин Уильямс','Кристен Данст','Бонни Хант']
        },
        id: 11
    },
    {
        title: 'Доспехи бога',
        emoji: ['&#128737;','&#128591;'],
        difficulty: DIFFICULTY_LEVELS.easy,
        answers: ['Доспехи бога'],
        points_per_answer: 2,
        hints: {
            year: 1986,
            actors: ['Джеки Чан','Лола Форнер']
        },
        id: 12
    },
    {
        title: 'Железный человек',
        emoji: ['&#129464;','&#128187;','&#129470;','&#129471;','&#129302;'],
        difficulty: DIFFICULTY_LEVELS.hard,
        answers: ['Железный человек'],
        points_per_answer: 6,
        hints: {
            year: 2008,
            actors: ['Роберт Дауни младший','Джон Фавро','гвинет Пэлтроу','Терренс Ховард',]
        },
        id: 13
    },
    {
        title: 'Законопослушный гражданин',
        emoji: ['&#128104;','&#128546;','&#9878;'],
        difficulty: DIFFICULTY_LEVELS.hard,
        answers: ['Законопослушный гражданин'],
        points_per_answer: 6,
        hints: {
            year: 2009,
            actors: ['Джерард Батлер','Джейми Фокс','Лесли Бибб',]
        },
        id: 14
    },
    {
        title: 'Интерстеллар',
        emoji: ['&#128104;','&#128103;','&#128640;','&#127756;','&#8987;','&#128105;','&#8986;'],
        difficulty: DIFFICULTY_LEVELS.hard,
        answers: ['Интерстеллар'],
        points_per_answer: 6,
        hints: {
            year: 2014,
            actors: ['Мэтью Макконахи','Джесика Честейн','Энн Хэтэуэй','Мэтт Деймон']
        },
        id: 15
    },
    {
        title: 'Крепкий орешек',
        emoji: ['&#128170;','&#129372;'],
        difficulty: DIFFICULTY_LEVELS.easy,
        answers: ['Крепкий орешек'],
        points_per_answer: 2,
        hints: {
            year: 1988,
            actors: ['Брюс Уиллис','Алан Рикман']
        },
        id: 16
    },
    {
        title: 'Люди в черном',
        emoji: ['&#129333;','&#129333;','&#128125;'],
        difficulty: DIFFICULTY_LEVELS.easy,
        answers: ['Люди в черном'],
        points_per_answer: 2,
        hints: {
            year: 1997,
            actors: ['Томми Ли Джонс', 'Уилл Смит']
        },
        id: 17
    },
    {
        title: 'Матрица',
        emoji: ['&#128421;','&#128295;','&#128269;','&#128997;','&#129001;','&#128998;','&#129333;','&#128374;'],
        difficulty: DIFFICULTY_LEVELS.medium,
        answers: ['Матрица'],
        points_per_answer: 4,
        hints: {
            year: 1999,
            actors: ['Киану Ривз','Лоренс Фишберн','Керри-Энн Мосс']
        },
        id: 18
    },
    {
        title: 'Меч короля Артура',
        emoji: ['&#128481;','&#128081;','&#127984;'],
        difficulty: DIFFICULTY_LEVELS.hard,
        answers: ['Меч короля Артура'],
        points_per_answer: 6,
        hints: {
            year: 2017,
            actors: ['Чарли Ханнэм','Астрид Бержес-Фрисби','Джимон Хонсу','Джуд Лоу']
        },
        id: 19
    },
    {
        title: 'Молчание ягнят',
        emoji: ['&#128566;','&#128015;'],
        difficulty: DIFFICULTY_LEVELS.easy,
        answers: ['Молчание ягнят'],
        points_per_answer: 2,
        hints: {
            year: 1990,
            actors: ['Энтони Хопкинс','Джоди Фостер']
        },
        id: 20
    },
    {
        title: 'Назад в будущее',
        emoji: ['&#128281;', '&#128300;','&#129404;'],
        difficulty: DIFFICULTY_LEVELS.easy,
        answers: ['Назад в будущее'],
        points_per_answer: 2,
        hints: {
            year: 1985,
            actors: ['Майкл Джей Фокс','Кристофер Ллойд']
        },
        id: 21
    },
    {
        title: 'Голодный кролик атакует',
        emoji: ["&#10060;"," &#127835;"," &#128007;","&#9876;"],
        difficulty: DIFFICULTY_LEVELS.hard,
        answers: ['Голодный кролик атакует'],
        points_per_answer: 6,
        hints: {
            year: 2011,
            actors: ['Николас Кейдж','Дженьюэри Джонс','Гай Пирс','Хэролд Перрино','Дженнифер Карпентер','Ксандер Беркли']
        },
        id: 22
    },
    {
        title: 'Загадочная история Бенджамина Баттона',
        emoji: ['&#128116;','&#128104;','&#128102;', '&#128128;'],
        difficulty: DIFFICULTY_LEVELS.hard,
        answers: ['Загадочная история Бенджамина Баттона'],
        points_per_answer: 6,
        hints: {
            year: 2008,
            actors: ['Брэд Питт','Кейт Бланшетт']
        },
        id: 23
    },
    {
        title: 'Адвокат дьявола',
        emoji: ['&#129333;','&#9878;','&#128520;'],
        difficulty: DIFFICULTY_LEVELS.hard,
        answers: ['Адвокат дьявола'],
        points_per_answer: 6,
        hints: {
            year: 1997,
            actors: ['Киану Ривз','Аль Пачино','Шарлиз Терон']
        },
        id: 24
    },
    {
        title: 'Шаг вперед',
        emoji: ['&#128131;','&#128378;','&#127942;'],
        difficulty: DIFFICULTY_LEVELS.easy,
        answers: ['Шаг вперед'],
        points_per_answer: 2,
        hints: {
            year: 2006,
            actors: ['Ченнинг Татум','Дженна Дуан','Дэмейн Рэдклифф','Ди’Шон Вашингтон','Марио']
        },
        id: 25
    },
    {
        title: 'Дело храбрых',
        emoji: ['&#128658;','&#128104;','&#128293;','&#128128;'],
        difficulty: DIFFICULTY_LEVELS.medium,
        answers: ['Дело храбрых'],
        points_per_answer: 4,
        hints: {
            year: 2017,
            actors: ['Джош Бролин','Майлз Теллер','Джефф Бриджес']
        },
        id: 26
    },
    {
        title: 'Тайна 7 сестер',
        emoji: ['&#129323;','&#55;','&#129489;'],
        difficulty: DIFFICULTY_LEVELS.easy,
        answers: ['Тайна 7 сестер', 'Тайна семи сестер'],
        points_per_answer: 2,
        hints: {
            year: 2017,
            actors: ['Нуми Рапас','Гленн Клоуз','Уиллем Дефо']
        },
        id: 27
    },
    {
        title: 'Шпионский мост',
        emoji: ['&#128373;','&#127753;'],
        difficulty: DIFFICULTY_LEVELS.easy,
        answers: ['Шпионский мост'],
        points_per_answer: 2,
        hints: {
            year: 2015,
            actors: ['Том Хэнкс','Марк Райлэнс','Эми Райан','Алан Алда']
        },
        id: 28
    },
    {
        title: 'Тор',
        emoji: ['&#9889;','&#128104;','&#128296;'],
        difficulty: DIFFICULTY_LEVELS.easy,
        answers: ['Тор'],
        points_per_answer: 2,
        hints: {
            year: 2011,
            actors: ['Крис Хемсворт','Натали Портман','Том Хиддлстон','Энтони Хопкинс']
        },
        id: 29
    },
    {
        title: 'Чудо на гудзоне',
        emoji: ['&#9992;','&#11015;','&#127754;'],
        difficulty: DIFFICULTY_LEVELS.medium,
        answers: ['Чудо на гудзоне'],
        points_per_answer: 4,
        hints: {
            year: 2016,
            actors: ['Том Хэнкс','Аарон Экхарт','Валери Махаффей']
        },
        id: 30
    },
    {
        title: 'Крик',
        emoji: ['&#127917;','&#128561;','&#128481;','&#9760;'],
        difficulty: DIFFICULTY_LEVELS.easy,
        answers: ['Крик'],
        points_per_answer: 2,
        hints: {
            year: 1996,
            actors: ['Нив Кэмпбелл','Дэвид Аркетт','Кортни Кокс','Дрю Бэрримор']
        },
        id: 31
    },
    {
        title: 'Ночь в музее',
        emoji: ['&#127761;','&#127894;','&#77824;','&#128294;'],
        difficulty: DIFFICULTY_LEVELS.medium,
        answers: ['Ночь в музее'],
        points_per_answer: 4,
        hints: {
            year: 2006,
            actors: ['Бен Стиллер','Джейк Черри','Карла Гуджино','Робин Уильямс']
        },
        id: 32
    },
    {
        title: 'Охотники за привидениями',
        emoji: ['&#128663;','&#128123;'],
        difficulty: DIFFICULTY_LEVELS.hard,
        answers: ['Охотники за привидениями'],
        points_per_answer: 6,
        hints: {
            year: 1984,
            actors: ['Билл Мюррей','Дэн Эйкройд','Сигурни Уивер','Харольд Рэмис']
        },
        id: 33
    },
    {
        title: 'Парк Юрского периода',
        emoji: ['&#127966;','&#129430;'],
        difficulty: DIFFICULTY_LEVELS.medium,
        answers: ['Парк Юрского периода'],
        points_per_answer: 4,
        hints: {
            year: 1993,
            actors: ['Сэм Нилл','Лора Дерн','Джефф Голдблюм','Ричард Аттенборо']
        },
        id: 34
    },
    {
        title: 'Пираты карибского моря',
        emoji: ['&#9760;','&#129436;','&#127754;','&#127965;','&#9096;'],
        difficulty: DIFFICULTY_LEVELS.hard,
        answers: ['Пираты карибского моря'],
        points_per_answer: 6,
        hints: {
            year: 2003,
            actors: ['Джонни Депп','Орландо Блум','Кира Найтли']
        },
        id: 35
    },
    {
        title: 'Волк с уолл стрит',
        emoji: ['&#128058;','&#128200;','&#128181;'],
        difficulty: DIFFICULTY_LEVELS.easy,
        answers: ['Волк с уолл стрит'],
        points_per_answer: 2,
        hints: {
            year: 2013,
            actors: ['Леонардо ДиКаприо','Джона Хилл','Марго Робби','Кайл Чандлер']
        },
        id: 36
    },
    {
        title: 'Астерикс и Обеликс',
        emoji: ['&#129514;','&#128170;'],
        difficulty: DIFFICULTY_LEVELS.easy,
        answers: ['Астерикс и Обеликс'],
        points_per_answer: 2,
        hints: {
            year: 1999,
            actors: ['Кристиан Клавье','Жерар Депардье']
        },
        id: 37
    },
    {
        title: 'Американский пирог',
        emoji: ['&#11036;','&#127963;','&#129383;'],
        difficulty: DIFFICULTY_LEVELS.easy,
        answers: ['Американский пирог'],
        points_per_answer: 2,
        hints: {
            year: 1999,
            actors: ['Джейсон Биггз','Крис Клейн','Томас Иэн Николас','Эдди Кэй Томас']
        },
        id: 38
    },
    {
        title: 'Горбатая гора',
        emoji: ['&#129333;','&#129333;','&#10084;','&#9968;'],
        difficulty: DIFFICULTY_LEVELS.easy,
        answers: ['Горбатая гора'],
        points_per_answer: 2,
        hints: {
            year: 2005,
            actors: ['Хит Леджер','Джейк Джилленхол','Энн Хэтэуэй']
        },
        id: 39
    },
    {
        title: 'Черепашки ниндзя',
        emoji: ['&#128034;','&#128000;','&#127829;'],
        difficulty: DIFFICULTY_LEVELS.easy,
        answers: ['Черепашки ниндзя'],
        points_per_answer: 2,
        hints: {
            year: 2007,
            actors: ['Крис Эванс','Сара Мишель Геллар','Мако','Кевин Смит']
        },
        id: 40
    },
    {
        title: 'Дьявол носит прада',
        emoji: ['&#128520;','&#128087;','&#128096;'],
        difficulty: DIFFICULTY_LEVELS.easy,
        answers: ['Дьявол носит прада'],
        points_per_answer: 2,
        hints: {
            year: 2006,
            actors: ['Мэрил Стрип','Энн Хэтэуэй','Эмили Блант','Стэнли Туччи']
        },
        id: 41
    },
    {
        title: 'Зеленая миля',
        emoji: ['&#35;','&#128104;','&#128546;'],
        difficulty: DIFFICULTY_LEVELS.medium,
        answers: ['Зеленая миля'],
        points_per_answer: 4,
        hints: {
            year: 1999,
            actors: ['Том Хэнкс','Дэвид Морс','Бонни Хант','Майкл Кларк Дункан']
        },
        id: 42
    },
    {
        title: 'Поворот не туда',
        emoji: ['&#8624;','&#128711;'],
        difficulty: DIFFICULTY_LEVELS.medium,
        answers: ['Поворот не туда'],
        points_per_answer: 4,
        hints: {
            year: 2003,
            actors: ['Десмонд Хэррингтон','Элиза Душку','Эммануэль Шрики','Джереми Систо']
        },
        id: 43
    },
    {
        title: 'Последний самурай',
        emoji: ['&#127834;','&#128088;','&#128481;','&#127386;','&#129512;','&#128163;'],
        difficulty: DIFFICULTY_LEVELS.hard,
        answers: ['Последний самурай'],
        points_per_answer: 6,
        hints: {
            year: 2003,
            actors: ['Кэн Ватанабэ','Том Круз']
        },
        id: 44
    },
    {
        title: 'Птичий короб',
        emoji: ['&#128230;','&#129436;','&#128581;','&#128065;'],
        difficulty: DIFFICULTY_LEVELS.medium,
        answers: ['Птичий короб'],
        points_per_answer: 4,
        hints: {
            year: 2018,
            actors: ['Сандра Буллок','Треванте Роудс','Джон Малкович']
        },
        id: 45
    },
    {
        title: 'Робин Гуд',
        emoji: ['&#128081;','&#127993;'],
        difficulty: DIFFICULTY_LEVELS.medium,
        answers: ['Робин Гуд'],
        points_per_answer: 4,
        hints: {
            year: 2010,
            actors: ['Рассел Кроу','Кейт Бланшетт','Марк Стронг']
        },
        id: 46
    },
    {
        title: 'Скала',
        emoji: ['&#128116;','&#129309;','&#128660;','&#9763;','&#129343;'],
        difficulty: DIFFICULTY_LEVELS.medium,
        answers: ['Скала'],
        points_per_answer: 4,
        hints: {
            year: 1996,
            actors: ['Шон Коннери','Николас Кейдж','Эд Харрис','Джон Спенсер','Дэвид Морс']
        },
        id: 47
    },
    {
        title: 'Стражи галактики',
        emoji: ['&#128130;','&#127756;','&#129437;','&#127795;'],
        difficulty: DIFFICULTY_LEVELS.easy,
        answers: ['Стражи галактики'],
        points_per_answer: 2,
        hints: {
            year: 2014,
            actors: ['Крис Пратт','Зои Салдана','Дэйв Батиста','Брэдли Купер','Вин Дизель']
        },
        id: 48
    },
    {
        title: 'Сумерки',
        emoji: ['&#129499;','&#128152;','&#127761;','&#128058;'],
        difficulty: DIFFICULTY_LEVELS.medium,
        answers: ['Сумерки'],
        points_per_answer: 4,
        hints: {
            year: 2008,
            actors: ['Кристен Стюарт','Роберт Паттинсон','Билли Бёрк','Эшли Грин']
        },
        id: 49
    },
    {
        title: 'Такси',
        emoji: ['&#128661;','&#129366;'],
        difficulty: DIFFICULTY_LEVELS.easy,
        answers: ['Такси'],
        points_per_answer: 2,
        hints: {
            year: 1998,
            actors: ['Сами Насери','Фредерик Дифенталь','Марион Котийяр','Эмма Виклунд']
        },
        id: 50
    },
    {
        title: 'Терминал',
        emoji: ['&#128748;','&#128509;','&#128104;','&#8594;','&#128116;'],
        difficulty: DIFFICULTY_LEVELS.medium,
        answers: ['Терминал'],
        points_per_answer: 4,
        hints: {
            year: 2004,
            actors: ['Том Хэнкс','Кэтрин Зета-Джонс','Стэнли Туччи']
        },
        id: 51
    },
    {
        title: 'Титаник',
        emoji: ['&#128107;','&#128152;','&#128674;'],
        difficulty: DIFFICULTY_LEVELS.easy,
        answers: ['Титаник'],
        points_per_answer: 2,
        hints: {
            year: 1997,
            actors: ['Леонардо ДиКаприо','Кейт Уинслет']
        },
        id: 52
    },
    {
        title: 'Эффект бабочки',
        emoji: ['&#128348;','&#129419;','&#128355;'],
        difficulty: DIFFICULTY_LEVELS.hard,
        answers: ['Эффект бабочки'],
        points_per_answer: 6,
        hints: {
            year: 2003,
            actors: ['Эштон Кутчер','Эми Смарт','Элден Хенсон','Уильям Ли Скотт']
        },
        id: 53
    },
    {
        title: 'Шерлок Холмс',
        emoji: ['&#128373;','&#129504;','&#127931;'],
        difficulty: DIFFICULTY_LEVELS.hard,
        answers: ['Шерлок Холмс'],
        points_per_answer: 6,
        hints: {
            year: 2009,
            actors: ['Роберт Дауни мл.','Джуд Лоу']
        },
        id: 54
    },
    {
        title: 'Человек-паук',
        emoji: ['&#129464;','&#128375;'],
        difficulty: DIFFICULTY_LEVELS.easy,
        answers: ['Человек-паук', 'Человек паук'],
        points_per_answer: 2,
        hints: {
            year: 2002,
            actors: ['Тоби Магуайр','Уиллем Дефо','Кирстен Данст']
        },
        id: 55
    },
    {
        title: 'Форсаж',
        emoji: ['&#127950;','&#128110;','&#127937;','&#128106;'],
        difficulty: DIFFICULTY_LEVELS.easy,
        answers: ['Форсаж'],
        points_per_answer: 2,
        hints: {
            year: 2001,
            actors: ['Пол Уокер','Вин Дизель','Мишель Родригес','Джордана Брюстер']
        },
        id: 56
    },
    {
        title: 'Форест Гамп',
        emoji: ['&#127894;','&#127939;'],
        difficulty: DIFFICULTY_LEVELS.hard,
        answers: ['Форест Гамп'],
        points_per_answer: 6,
        hints: {
            year: 1994,
            actors: ['Том Хэнкс','Робин Райт','Салли Филд']
        },
        id: 57
    },
]