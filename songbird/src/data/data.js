import { LINK_FOR_AUDIO, LINK_FOR_IMG } from '../config';

const birdsData = [
  [
    {
      id: 1,
      name: 'Theory of a Deadman',
      species: 'Out Of My Head',
      description:
        'Theory (ex – Theory of a Deadman) — мультиплатиновая рок-группа из Ванкувера, Канада, основанная в 2001 году, один из ключевых проектов лейбла Roadrunner Records. Все альбомы группы получили платиновый статус в Канаде.',
      image: `${LINK_FOR_IMG}01_01.jpg`,
      audio: `${LINK_FOR_AUDIO}Theory%20Of%20A%20Deadman%20-%20Out%20Of%20My%20Head.mp3`,
    },
    {
      id: 2,
      name: '10 Years',
      species: 'Dead in the Water',
      description:
        '10 Years — американская альтернативная группа из города Ноксвилл, штат Теннесси, сформированная в 1999 году.',
      image: `${LINK_FOR_IMG}01_02.jpg`,
      audio: `${LINK_FOR_AUDIO}10%20Years%20-%20Dead%20In%20The%20Water.mp3`,
    },
    {
      id: 3,
      name: 'Evanescence',
      species: 'Bring Me To Life',
      description:
        'Evanescence — американская рок-группа, основанная в 1995 году вокалисткой Эми Ли и гитаристом Беном Муди. Среди критиков нет единства во мнениях относительно того, как классифицировать музыку Evanescence: как рок или как метал.',
      image: `${LINK_FOR_IMG}01_03.jpg`,
      audio: `${LINK_FOR_AUDIO}19%20-%20Bring%20Me%20To%20Life.mp3`,
    },
    {
      id: 4,
      name: 'Bullet for My Valentine',
      species: 'The Last Fight',
      description:
        'Bullet For My Valentine — британская металкор-группа. Была сформирована в 1998 году в городе Бридженд под названием Jeff Killed John. 2003 год стал годом больших перемен касаемо названия, стиля и состава. В результате, название было сменено на нынешнее.',
      image: `${LINK_FOR_IMG}01_04.jpg`,
      audio: `${LINK_FOR_AUDIO}Bullet%20For%20My%20Valentine%20-%20The%20Last%20Fight.mp3`,
    },
    {
      id: 5,
      name: 'Puddle of Mudd',
      species: 'Elephas maximus',
      description:
        'Puddle of Mudd — американская рок-группа, сформированная в Канзас-Сити, штат Миссури в 1991 году. Группа выпустила 2 независимых и 5 мэйджорных студийных альбомов, последний из которых, «Welcome To Galvania», вышел в сентябре 2019 года.',
      image: `${LINK_FOR_IMG}01_05.jpg`,
      audio: `${LINK_FOR_AUDIO}Puddle_of_Mudd-Keep_It_Together.mp3`,
    },
    {
      id: 6,
      name: 'Green Day',
      species: 'Boulevard Of Broken Dreams',
      description:
        'Green Day — американская панк-рок группа, основанная в 1986 году. Состоит из трёх участников: Билли Джо Армстронга (вокал, гитара), Майка Дёрнта (бас гитара, бэк-вокал) и Тре Кула (ударные).В 2011 году трио было признано лучшей панк-группой в истории музыки по результатам опроса, проведённого журналом Rolling Stone. В 2015 году Green Day были включены в «Зал славы рок-н-ролла».',
      image: `${LINK_FOR_IMG}01_06.jpg`,
      audio: `${LINK_FOR_AUDIO}Green%20Day%20-%20Boulevard%20Of%20Broken%20Dreams.mp3`,
    },
  ],
  [
    {
      id: 1,
      name: 'Imagine Dragons',
      species: 'Radioactive',
      description:
        '«Imagine Dragons» — американская инди-рок-группа, образованная в 2008 году в городе Лас-Вегас, США. Стали известны после выпуска дебютного студийного альбома Night Visions в сентябре 2012 года. Американский журнал Billboard назвал их самыми яркими новыми звёздами 2013 года и самой большой группой 2017 года, а журнал Rolling Stone назвал их сингл «Radioactive» самым большим рок-хитом года.',
      image: `${LINK_FOR_IMG}02_01.jpg`,
      audio: `${LINK_FOR_AUDIO}Imagine%20Dragons%20-%20Radioactive%20(Acoustic).mp3`,
    },
    {
      id: 2,
      name: 'Linkin Park',
      species: 'In The End',
      description:
        'Linkin Park — американская рок-группа, основанная в 1996 году под названием Xero и исполняющая музыку преимущественно в стилях альтернативный метал, ню-метал и рэп-метал, альтернативный рок, электроник-рок, поп и поп-рок. Существуя с 2000 года под названием Linkin Park, группа была шесть раз номинирована и два раза удостоилась награды «Грэмми»',
      image: `${LINK_FOR_IMG}02_02.jpg`,
      audio: `${LINK_FOR_AUDIO}Linkin%20Park%20-%20In%20the%20End.mp3`,
    },
    {
      id: 3,
      name: 'Black Veil Brides',
      species: 'DAYS ARE NUMBERED',
      description:
        'Black Veil Brides — американская метал-группа из Огайо, основанная в 2006 году. Отличительной чертой группы является необычный сценический образ, вдохновленный Kiss, Mötley Crüe и другими глэм-метал-артистами 1980-х годов.',
      image: `${LINK_FOR_IMG}02_03.jpg`,
      audio: `${LINK_FOR_AUDIO}`,
    },
    {
      id: 4,
      name: 'Metallica',
      species: 'Nothing Else Matters',
      description:
        'Metallica — американская метал-группа, образованная в 1981 году, в Лос-Анджелесе. Metallica оказала большое влияние на развитие метала и входит в «большую четвёрку трэш-метала». Альбомы Metallica были проданы в общей сложности в количестве более 110 миллионов экземпляров по всему миру, что делает её одним из самых коммерчески успешных металлических коллективов.',
      image: `${LINK_FOR_IMG}02_04.jpg`,
      audio: `${LINK_FOR_AUDIO}Metallica%20-%20Nothing%20else%20matter.mp3`,
    },
    {
      id: 5,
      name: 'Muse',
      species: 'Starlight',
      description:
        'Muse — британская рок-группа, образованная в 1994 году в городе Тинмут (графство Девон). Всего Muse выпустили восемь студийных альбомов и два концертных альбома, продажи которых превысили 20 млн, а также стали обладателями наград MTV Europe Music Awards, Q Awards, NME Awards, Brit Awards, Kerrang! Awards, Grammy и других наград, в основном полученных за концертные выступления.',
      image: `${LINK_FOR_IMG}02_05.jpg`,
      audio: `${LINK_FOR_AUDIO}Muse-Starlight.mp3`,
    },
    {
      id: 6,
      name: 'My Chemical Romance',
      species: 'Famous Last Words',
      description:
        'My Chemical Romance — американская рок-группа, основанная в конце 2001 года в Ньюарке, Нью-Джерси. Различные критики относили My Chemical Romance к альтернативному року, эмо (что члены группы отрицают) и другим жанрам. В частности, под характеристики этого стиля подходят первые два альбома группы.',
      image: `${LINK_FOR_IMG}02_06.jpg`,
      audio: `${LINK_FOR_AUDIO}My%20Chemical%20Romance%20-%20Famous%20Last%20Words.mp3`,
    },
  ],
  [
    {
      id: 1,
      name: 'J:Морс',
      species: 'Ледоколы',
      description:
        'J:Морс — белорусская рок-группа, основанная в 1999 году в Минске Владимиром Пугачем и Артёмом Ледовским. Дискография группы насчитывает 8 студийных альбомов, 2 концертных альбома, 2 сингла и несколько сборников.',
      image: `${LINK_FOR_IMG}03_01.jpg`,
      audio: `${LINK_FOR_AUDIO}J-Mors%20-%20Ледоколы.mp3`,
    },
    {
      id: 2,
      name: 'Louna',
      species: 'Штурмуя Небеса',
      description:
        'Louna — российская рок-группа с женским вокалом. Название образовано от творческого псевдонима вокалистки Лу. Коллектив создан в сентябре 2008 года участниками московской альтернативной группы «Tracktor Bowling» Лусинэ Геворкян с Виталием Демиденко.',
      image: `${LINK_FOR_IMG}03_02.jpg`,
      audio: `${LINK_FOR_AUDIO}Louna%20-%20Штурмуя%20небеса.mp3`,
    },
    {
      id: 3,
      name: 'Lumen',
      species: 'Одной крови',
      description: 'Lumen — российская рок-группа из Уфы, основанная в 1998 году.',
      image: `${LINK_FOR_IMG}03_03.jpg`,
      audio: `${LINK_FOR_AUDIO}Lumen%20-%20Одной%20Крови.mp3`,
    },
    {
      id: 4,
      name: 'Дана Соколова',
      species: 'Львиное Сердце',
      description:
        'Дана Соколова — латвийская и российская рок-певица, поэтесса и музыкант, участница лэйбла Black Star, победительница шоу "Молодая кровь" на СТС',
      image: `${LINK_FOR_IMG}03_04.jpg`,
      audio: `${LINK_FOR_AUDIO}Дана%20Соколова%20-%20Львиное%20сердце.mp3`,
    },
    {
      id: 5,
      name: 'Океан Ельзи',
      species: 'Без бою',
      description:
        'Океан Ельзи — украинская рок-группа. Создана 12 октября 1994 года во Львове. Лидером и вокалистом группы является Святослав Вакарчук.',
      image: `${LINK_FOR_IMG}03_05.jpg`,
      audio: `${LINK_FOR_AUDIO}Океан%20Эльзы%20-%20Я%20не%20сдамся%20без%20бою.mp3`,
    },
    {
      id: 6,
      name: 'Сплин',
      species: 'Выхода нет',
      description:
        'Сплин— российская рок-группа из Санкт-Петербурга. Бессменный лидер — Александр Васильев. Датой рождения группы считается 27 мая 1994 года. Название группы возникло благодаря строкам стихотворения русского поэта Серебряного века Саши Чёрного.',
      image: `${LINK_FOR_IMG}03_06.jpg`,
      audio: `${LINK_FOR_AUDIO}Сплин%20-%20Выхода%20нет.mp3`,
    },
  ],
  [
    {
      id: 1,
      name: 'Nickelback',
      species: 'Photograph',
      description:
        'Nickelback — канадская альтернативная рок-группа, основанная в 1995 году в городе Ханна (англ.). Название группы образовано от англ. Here’s your nickel back. — «Вот ваша сдача». Группа попала в список лучших артистов первого десятилетия XXI века, по мнению Billboard, где заняла первое место среди рок-групп.',
      image: `${LINK_FOR_IMG}04_01.jpg`,
      audio: `${LINK_FOR_AUDIO}Nickelback%20-%20Photograph.mp3`,
    },
    {
      id: 2,
      name: 'Nirvana',
      species: 'Sappy',
      description:
        'Nirvana — американская рок-группа, созданная вокалистом и гитаристом Куртом Кобейном и басистом Кристом Новоселичем в Абердине, штат Вашингтон, в 1987 году. Недолгая, но яркая история группы прервалась в связи со смертью Курта Кобейна 5 апреля 1994 года, но в последующие годы известность команды лишь росла.',
      image: `${LINK_FOR_IMG}04_02.jpg`,
      audio: `${LINK_FOR_AUDIO}Nirvana%20-%20Sappy.mp3`,
    },
    {
      id: 3,
      name: 'Papa Roach',
      species: '',
      description:
        'Papa Roach — американская рок-группа из города Вакавилль, штат Калифорния, образованная в 1993 году. Обрела мировую известность благодаря своему второму альбому Infest (2000). Альбомы группы разошлись общим тиражом более 20 миллионов экземпляров.',
      image: `${LINK_FOR_IMG}04_03.jpg`,
      audio: `${LINK_FOR_AUDIO}Papa_Roach-Scars.mp3`,
    },
    {
      id: 4,
      name: 'Queen',
      species: 'The Show Must Go On',
      description:
        'Queen — британская рок-группа, добившаяся широчайшей известности в середине 1970-х годов, и одна из наиболее успешных групп в истории рок-музыки. Средства массовой информации называют группу «культовой» и пишут, что она и по сей день имеет сотни миллионов поклонников. ',
      image: `${LINK_FOR_IMG}04_04.jpg`,
      audio: `${LINK_FOR_AUDIO}Queen%20-%20The%20Show%20Must%20Go%20On.mp3`,
    },
    {
      id: 5,
      name: 'Rise Against',
      species: 'Give It All',
      description:
        'Rise Against — американская панк-рок-группа, основанная в декабре 1999 года в Чикаго, штат Иллинойс. Различные песни группы Rise Against были тем или иным образом использованы в различных телешоу, спортивных передачах, видео и компьютерных играх.',
      image: `${LINK_FOR_IMG}04_05.jpg`,
      audio: `${LINK_FOR_AUDIO}Rise%20Against%20-%20Give%20it%20All.mp3`,
    },
    {
      id: 6,
      name: 'Scorpions',
      species: 'The Game of Life',
      description:
        'Scorpions — немецкая англоязычная рок-группа, созданная в 1965 в Ганновере. Для стиля группы характерны как классический хард-рок, так и лирические гитарные баллады.Scorpions являются самой популярной рок-группой Германии и одной из самых известных в мире, продав более 100 миллионов копий своих альбомов.',
      image: `${LINK_FOR_IMG}04_06.jpg`,
      audio: `${LINK_FOR_AUDIO}Scorpions%20-%20The%20Game%20Of%20Life.mp3`,
    },
  ],
  [
    {
      id: 1,
      name: 'Simple Plan',
      species: 'Take My Hand',
      description:
        'Simple Plan — канадская рок-группа, образовавшаяся в Монреале в конце 1999 года. Релизы Simple Plan занимали места в хит-парадах по всему миру. Всего коллектив продал около четырёх миллионов копий своих альбомов в США и Канаде и свыше 7,5 миллионов по всему миру.',
      image: `${LINK_FOR_IMG}05_01.jpg`,
      audio: `${LINK_FOR_AUDIO}Simple%20Plan%20-%20Take%20My%20Hand.mp3`,
    },
    {
      id: 2,
      name: 'Skillet',
      species: 'Awake and Alive',
      description:
        'Skillet — американская христианская рок-группа из города Мемфис, штат Теннесси, основанная в 1996 году. На данный момент группой выпущено десять студийных альбомов, четыре EP и два концертных альбома.',
      image: `${LINK_FOR_IMG}05_02.jpg`,
      audio: `${LINK_FOR_AUDIO}Skillet-Awake_And_Alive.mp3`,
    },
    {
      id: 3,
      name: 'Slipknot',
      species: 'Dead Memories',
      description:
        'Slipknot — американская ню-метал-группа, образованная в сентябре 1995 года в Айове, США. Альбомы группы получили статус платиновых, всего продано более 30 млн копий по всему миру из которых 6 миллионов в США.',
      image: `${LINK_FOR_IMG}05_03.jpg`,
      audio: `${LINK_FOR_AUDIO}Slipknot%20-%20Dead%20Memories.mp3`,
    },
    {
      id: 4,
      name: 'System of a Down',
      species: 'Metro',
      description:
        'System of a Down — армяно-американская рок-группа, образованная в 1992 году в Лос-Анджелесе Сержем Танкяном и Дароном Малакяном под названием Soil, а в 1995 принявшая нынешнее название. В период с 1998 по 2005 год группа выпустила пять студийных альбомов, каждый из которых стал платиновым.',
      image: `${LINK_FOR_IMG}05_04.jpg`,
      audio: `${LINK_FOR_AUDIO}System%20of%20a%20Down%20-%20Metro.mp3`,
    },
    {
      id: 5,
      name: 'The Fray',
      species: 'Say When',
      description:
        'The Fray — американская христианская рок-группа, основанная в 2002-м году в Денвере (штат Колорадо, США). Группа получила широкую известность в 2005-м году после выпуска дебютного альбома «How To Save A Life», который был дважды признан платиновым ассоциаций RIAA.',
      image: `${LINK_FOR_IMG}05_05.jpg`,
      audio: `${LINK_FOR_AUDIO}The%20Fray%20-%20Say%20When.mp3`,
    },
    {
      id: 6,
      name: 'The Letter Black',
      species: 'Break Out',
      description:
        'The Letter Black, ранее известная как Breaking the Silence — музыкальная группа из США, играющая христианский рок. Группа даёт более 150 концертов в год.',
      image: `${LINK_FOR_IMG}05_06.jpg`,
      audio: `${LINK_FOR_AUDIO}The%20Letter%20Black%20-%20Break%20Out.mp3`,
    },
  ],
  [
    {
      id: 1,
      name: 'The Offspring',
      species: 'You are Gonna Go Far, Kid',
      description:
        'The Offspring — американская калифорнийская панк-рок-группа, основанная в 1984 году. Копии альбомов The Offspring проданы количеством в 40 миллионов по всему миру, и считается одной из самых продаваемых панк-рок групп за всё время.',
      image: `${LINK_FOR_IMG}06_01.jpg`,
      audio: `${LINK_FOR_AUDIO}The%20Offspring%20-%20You're%20Gonna%20Go%20Far%2C%20Kid.mp3`,
    },
    {
      id: 2,
      name: 'The Pretty Reckless',
      species: 'Goin Down',
      description:
        'The Pretty Reckless — рок-группа из Нью-Йорка, возглавляемая Тейлор Момсен. Дебютный альбом группы, Light Me Up, был издан 30 августа 2010 года. Первый сингл «Make Me Wanna Die» вышел 13 мая 2010 года и занял первое место в UK Rock Chart.',
      image: `${LINK_FOR_IMG}06_02.jpg`,
      audio: `${LINK_FOR_AUDIO}The%20Pretty%20Reckless%20-%20Goin%20Down.mp3`,
    },
    {
      id: 3,
      name: 'The Rasmus',
      species: 'Night after night',
      description:
        'The Rasmus — финская рок-группа, сформированная в 1994 году в Хельсинки, когда члены группы ещё учились в школе. The Rasmus — одна из самых успешных финских групп: по всему миру продано более 4 миллиона копий альбомов, они получили 8 «золотых» и 5 «платиновых» наград.',
      image: `${LINK_FOR_IMG}06_03.jpg`,
      audio: `${LINK_FOR_AUDIO}The%20Rasmus%20-%20Night%20After%20Night%20(Out%20Of%20The%20Shadows).mp3`,
    },
    {
      id: 4,
      name: 'Three Days Grace',
      species: 'Over and Over',
      description:
        'Three Days Grace — канадская рок-группа, исполняющая альтернативный метал и постгранж. Была сформирована под названием Groundswell в Норвуде, Онтарио, Канада в 1992 году.',
      image: `${LINK_FOR_IMG}06_04.jpg`,
      audio: `${LINK_FOR_AUDIO}Three%20Days%20Grace%20-%20Over%20And%20Over%20♥.mp3`,
    },
    {
      id: 5,
      name: 'Zebrahead',
      species: 'Just the Tip',
      description:
        'Zebrahead — американская рок-группа из округа Ориндж, Калифорния, совмещающая в своём творчестве такие стили как поп-панк, панк-рок и рэп-рок. Группа была сформирована в 1996 году.',
      image: `${LINK_FOR_IMG}06_05.jpg`,
      audio: `${LINK_FOR_AUDIO}Zebrahead-Just_The_Tip(vmusice.net).mp3`,
    },
    {
      id: 6,
      name: 'Sum 41',
      species: 'Reason to Believe',
      description:
        'Sum 41 — канадская панк-рок-группа из города Эйджакс, Онтарио[14]. Была образована в 1996 году. Sum 41 известны своими продолжительными турне, которые нередко длятся более года и включают более 300 концертов.',
      image: `${LINK_FOR_IMG}06_06.jpg`,
      audio: `${LINK_FOR_AUDIO}sum_41_-_reason_to_believe(zaycev.net).mp3`,
    },
  ],
];

export default birdsData;
