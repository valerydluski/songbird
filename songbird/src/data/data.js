const birdsData = [
  [
    {
      id: 1,
      name: 'Африканский лев',
      species: 'African Lion',
      description:
        'Африканский лев (Panthera leo) – хищник из рода пантер, относится к семейству кошачьих, считается самой крупной кошкой в мире. В 19-20 столетии численность этого вида резко сократилась из-за деятельности человека. Не имея прямых врагов в собственном ареале обитания, львы постоянно уничтожаются браконьерами и любителями сафари.',
      image:
        'https://seaworld.com/-/media/seaworld-dotorg/images/animal-bytes/listing-images/mammals/african_lion_357x229.ashx?version=1_201811273259',
      audio:
        'https://seaworld.com/-/media/seaworld-dotorg/audio-files/sound-library/lion_1.ashx?version=1_201811134821&la=en&hash=7232CC103347978D2ED052B973F0EE79E28CAABA',
    },
    {
      id: 2,
      name: 'Медведь',
      species: 'Ursus',
      description:
        'самый крупный хищник на земле. Это животное относится к классу млекопитающие, отряду хищные, семейству медвежьи, роду медведи. Медведь появился на планете около 6 млн. лет назад и всегда был символом мощи и силы.',
      image:
        'https://seaworld.com/-/media/seaworld-dotorg/images/landing-pages/animal-sounds/cinnamon_bear_357x229.ashx?version=1_201811282449',
      audio:
        'https://seaworld.com/-/media/seaworld-dotorg/audio-files/sound-library/bear.ashx?version=1_201811134823&la=en&hash=EF7EC380B6FB032DDEE3CEA31A01F27939E6DE63',
    },
    {
      id: 3,
      name: 'Шимпанзе',
      species: 'Pan',
      description:
        'Шимпанзе, также как и человек, имеют группы крови и индивидуальные отпечатки пальцев. Их по ним можно различать – узор никогда не повторяется. Ростом шимпанзе от человека отличаются. Самые крупные самцы не превышают 1.5 метров в высоту. Самки и того ниже – 1,3 метра. Но при этом, шимпанзе очень сильны физически и обладают хорошо развитой мускулатурой.',
      image:
        'https://seaworld.com/-/media/seaworld-dotorg/images/animal-bytes/listing-images/bgt-animals/2017_buschgardenstampabay_animals_chimps_357x229.ashx?version=1_201811131403',
      audio:
        'https://seaworld.com/-/media/seaworld-dotorg/audio-files/sound-library/chimp.ashx?version=1_201811134822&la=en&hash=0ACF1D14F6F243F811C35227997B85AFAA65A682',
    },
    {
      id: 4,
      name: 'Серый волк',
      species: 'Canis lupus',
      description:
        'Волк — это хищное млекопитающее, которое относится к отряду хищные, семейству псовые (собачьи, волчьи). Русское слово «волк» созвучно с некоторыми славянскими названиями зверя: болгары называют хищника вылк, сербы — вук, украинцы — вовк. Происхождение названия восходит к старославянскому слову «вылкъ», означавшему таскать, уволакивать.',
      image:
        'https://seaworld.com/-/media/seaworld-dotorg/images/animal-bytes/listing-images/mammals/gray_wolf_357x229.ashx?version=1_201811273249',
      audio:
        'https://seaworld.com/-/media/seaworld-dotorg/audio-files/sound-library/wolf.ashx?version=1_201811134825&la=en&hash=2F14F3CBD32747473B2E0767C84E971516DE0A4D',
    },
    {
      id: 5,
      name: 'Азиатский слон',
      species: 'Elephas maximus',
      description:
        'Азиатские слоны уступают по размерам саванным слонам, однако из размеры также внушительны. Старые самцы достигают массы 5,4 т и роста 2,5—3,5 м. Самцы несколько мельче, и весят в среднем 2,7 т. Самым мелким является подвид с Калимантана, чья масса составляет около 2 т. Длина тела азиатского слона — 5,5—6,4 м, хвоста — 1,2—1,5 м. Хвостовых позвонков 33.',
      image:
        'https://seaworld.com/-/media/seaworld-dotorg/images/landing-pages/animal-sounds/asian-elephant_357x229.ashx?version=1_201811285926',
      audio:
        'https://seaworld.com/-/media/seaworld-dotorg/audio-files/sound-library/elephant.ashx?version=1_201811134820&la=en&hash=0557BBB893EA6D3FE7D62B6C3CE0427CE7142218',
    },
    {
      id: 6,
      name: 'Белоголовый орлан',
      species: 'Haliaéetus leucocéphalus',
      description:
        'Индейцы чтят белоголового орлана, как божественную птицу, называя его посредником между людьми и Великим Духом, сотворившим Вселенную. В его честь слагают легенды и посвящают ритуалы, изображая на шлемах, столбах, щитах, одежде и посуде. Символ племени ирокезов – орлан, восседающий на сосне.',
      image:
        'https://seaworld.com/-/media/seaworld-dotorg/images/animal-bytes/listing-images/bgt-animals/2017_buschgardenstampabay_animals_baldeagle_357x229.ashx?version=1_201811131406',
      audio:
        'https://seaworld.com/-/media/seaworld-dotorg/audio-files/sound-library/bald-eagle_2.ashx?version=1_201811134822&la=en&hash=858BD7D49FB66CE64C20E9AD26F308C2840CD4DD',
    },
  ],
  [
    {
      id: 1,
      name: 'Бенга́льский тигр',
      species: 'Panthera tigris tigris',
      description:
        'Отличительной особенностью бенгальского тигра являются втяжного типа, острые и очень длинные когти, а также хорошо опушенный хвост и невероятно мощные челюсти. Кроме всего прочего, хищник имеет отлично развитый слух и зрение, поэтому такие животные способны прекрасно видеть даже в полной темноте. Длина прыжка взрослого тигра составляет 8-9 м, а скорость движения на коротких дистанциях достигает 60 км/ч. Спят взрослые бенгальские тигры примерно семнадцать часов в сутки.',
      image:
        'https://seaworld.com/-/media/seaworld-dotorg/images/animal-bytes/listing-images/mammals/bengal_tiger_357x229.ashx?version=1_201811273254',
      audio:
        'https://seaworld.com/-/media/seaworld-dotorg/audio-files/sound-library/bengal_tiger.ashx?version=1_201811134819&la=en&hash=E14722662857807E1A2997FB06D2A853777E7F93',
    },
    {
      id: 2,
      name: 'Грач',
      species: 'Corvus frugilegus',
      description:
        'Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.',
      image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3',
    },
    {
      id: 3,
      name: 'Галка',
      species: 'Coloeus monedula',
      description:
        'Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.',
      image: 'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3',
    },
    {
      id: 4,
      name: 'Певчий дрозд',
      species: 'Turdus philomelos',
      description:
        'Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.',
      image: 'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3',
    },
    {
      id: 5,
      name: 'Сорока',
      species: 'Pica pica',
      description:
        'Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.',
      image: 'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3',
    },
    {
      id: 6,
      name: 'Сойка',
      species: 'Garrulus glandarius',
      description:
        'Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.',
      image: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Зяблик',
      species: 'Fringilla coelebs',
      description:
        'В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.',
      image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3',
    },
    {
      id: 2,
      name: 'Клёст',
      species: 'Loxia curvirostra',
      description:
        'Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.',
      image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3',
    },
    {
      id: 3,
      name: 'Горлица',
      species: 'Streptopelia turtur',
      description:
        'Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.',
      image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3',
    },
    {
      id: 4,
      name: 'Дятел',
      species: 'Dendrocopos major',
      description:
        'Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.',
      image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3',
    },
    {
      id: 5,
      name: 'Удод',
      species: 'Upupa epops',
      description:
        'Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.',
      image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3',
    },
    {
      id: 6,
      name: 'Стриж',
      species: 'Apus apus',
      description:
        'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',
      image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Жаворонок',
      species: 'Alauda arvensis',
      description:
        'Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.',
      image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3',
    },
    {
      id: 2,
      name: 'Соловей',
      species: 'Luscinia luscinia',
      description:
        'Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.',
      image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3',
    },
    {
      id: 3,
      name: 'Скворец',
      species: 'Sturnus vulgaris',
      description:
        'Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.',
      image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3',
    },
    {
      id: 4,
      name: 'Иволга',
      species: 'Oriolus oriolus',
      description:
        'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.',
      image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3',
    },
    {
      id: 5,
      name: 'Свиристель',
      species: 'Bombycilla garrulus',
      description:
        'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.',
      image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3',
    },
    {
      id: 6,
      name: 'Щегол',
      species: 'Carduelis carduelis',
      description:
        'Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю',
      image: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Орёл',
      species: 'Aquila nipalensis',
      description:
        'В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров',
      image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3',
    },
    {
      id: 2,
      name: 'Коршун',
      species: 'Milvus migrans',
      description:
        'Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.',
      image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3',
    },
    {
      id: 3,
      name: 'Лунь',
      species: 'Circus cyaneus',
      description:
        'Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».',
      image: 'https://live.staticflickr.com/65535/49322743903_32f3922d9e.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3',
    },
    {
      id: 4,
      name: 'Сокол',
      species: 'Falco peregrinus',
      description:
        'Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',
      image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3',
    },
    {
      id: 5,
      name: 'Ястреб',
      species: 'Accipiter gentilis',
      description:
        'Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.',
      image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3',
    },
    {
      id: 6,
      name: 'Филин',
      species: 'Bubo bubo',
      description:
        'Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.',
      image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Альбатрос',
      species: 'Diomedea exulans',
      description:
        'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',
      image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3',
    },
    {
      id: 2,
      name: 'Олуша',
      species: 'Sula nebouxii',
      description:
        'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок',
      image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3',
    },
    {
      id: 3,
      name: 'Буревестник',
      species: 'Puffinus griseus',
      description:
        'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',
      image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3',
    },
    {
      id: 4,
      name: 'Пеликан',
      species: 'Pelecanus',
      description:
        'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',
      image: 'https://live.staticflickr.com/7885/46523771945_9496c2a191.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3',
    },
    {
      id: 5,
      name: 'Пингвин',
      species: 'Aptenodytes forsteri',
      description:
        'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',
      image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3',
    },
    {
      id: 6,
      name: 'Чайка',
      species: 'Larus argentatus',
      description:
        'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',
      image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3',
    },
  ],
];

export default birdsData;
