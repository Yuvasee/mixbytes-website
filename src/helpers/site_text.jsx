import React from 'react';

export const text = {
  'RU': {

    common: {
      themes: 'Темы',
      speakers: 'Спикеры',
      pay: 'Оплатить',
      payWithCryptocurrency: 'оплатить криптовалютой',
      careers: 'Вакансии',
      or: 'или',
      questions: 'По\u00A0всем вопросам:',
      donate: 'Поддержать нас',
      publications: 'Публикации',
      coursesCalculator: 'Калькулятор курсов',
      codeCheck: 'Проверка кода',
      ethereumBalance: 'Баланс Ethereum-кошелька',
      transactionInfo: 'Информация о транзакции',
      checkTimestamps: 'Проверить значения timestamps в коде',
      timestampsPlaceholder: 'Скопипуйте код сюда',
      program: 'Программа',
      requirements: 'Требования',
      advantages: 'Будет плюсом',
      conditions: 'Условия',
    },

    navigation: {
      services: 'Услуги',
      publications: 'Публикации',
      training: 'Обучение',
      tools: 'Инструменты',
      team: 'Команда',
      careers: 'Вакансии',
    },

    headerJumbo: {
      header: <h1>Блокчейн-решения<br />и&nbsp;смарт-контракты</h1>,
      description: 'Мы\u00A0\u2014 команда программистов. Составляем технические проекты, внедряем блокчейн-технологии, пишем смарт-контракты. Проводим корпоративное обучение и\u00A0открытые лекции.',
      stack: 'Стек: Solidity/Truffle, JS/Node, C++/Graphene, Python.',
    },

    main: {
      navigation: {
        services: 'Услуги',
        feedback: 'Обратная связь',
      },

      devAudit: {
        title: 'Разработка и аудит',
        description: 'Пишем и\u00A0проверяем смарт-контракты на\u00A0Solidity с\u00A0нуля или на\u00A0основе проверенных библиотек. Соблюдаем стандарт ERC20. Тестируем код под Truffle framework. Верифицируем контракты на\u00A0Etherscan. Находим ошибки и\u00A0уязвимости в\u00A0ваших смарт-контрактах. Разрабатываем блокчейны на\u00A0базе фреймворка Graphene. Скорее всего, сначала вам понадобятся наши консультации.',
        example: <p>Пример <a href="https://github.com/mixbytes/storiqa_ico/tree/master/contracts">контракта</a><br />и&nbsp;<a href="https://github.com/mixbytes/audits_public/blob/master/solidity/KickICO/report.md">аудита</a> на&nbsp;Гитхабе</p>,
      },

      services: {
        title: 'Услуги',
        icoTech: {
          header: 'Технологии\u00A0для\u00A0ICO',
          text:
            <div>
              <span>Смарт-контракты в Ethereum (Токен с поддержкой ERC20, Crowdsale, хранилище эфира).</span><br/><br/>
              <span>Кабинет участника, встраиваемый в любой сайт с возможностью настроить дизайн, приёмом BTC, ETH и других валют. Проведение KYC, статистика участия, общая статистика ICO и связь с Google Ecommerce.</span><br/><br/>
              <span>Административный интерфейс.</span><br/><br/>
              <span>Прием Ethereum и Bitcoin без комиссий и других валют через сoinpayments.net</span>
            </div>,
        },
        consulting: {
          header: 'Консультирование',
          text: 'Разберем технические аспекты проведения ICO, расскажем о децентрализации проектов, текенизации и токеномике. Поможем с подбором и обучения разработчиков.',
        },
        blokchain: {
          header: 'Разработка\u00A0блокчейн-систем',
          text: 'Решения для проектов, которым требуется собственный блокчейн. Высокая скорость, произвольная степень децентрализации, тонкая настройка протокола консенсуса на базе Graphene/BitShares/Steem/EOS.',
        },
        etherium: {
          header: 'Смарт-контракты\u00A0Etherium',
          text: 'Разработка контрактов токенов, прототипов (proof-of-concept) и систем смарт-контрактов для блокчейн-проектов. Аудирование смарт-контрактов, проверка ошибок, уязвимостей и автоматизация запуска смарт-контрактов в блокчейн.',
        },
        docs: {
          header: 'Разработка\u00A0документации',
          text: 'Технические документы с описанием методов решения задач в тех. терминах и технические Whitepaper с рассказом о работе технологий.',
        },
      },

      consulting: 'Консалтинг',
      businessRequirements: 'Бизнес-требования',
      businessRequirementsDescription: 'Поможем найти возможные приложения блокчейн-технологий к\u00A0вашему бизнесу и\u00A0составить экономическую модель ваших токенов.',
      hrHelp: 'Помощь в\u00A0HR',
      hrHelpDescription: 'Поможем определить требования к\u00A0блокчейн программистам, проведём технические собеседования, разметим путь для роста и\u00A0обучения.',
      technicalSolutions: 'Выбор технических решений',
      technicalSolutionsDescription: 'Подберём стек технологий для решения задачи. Порекомендуем фреймворки, библиотеки, проверенные смарт-контракты.',
      technicalDocumentation: 'Техническая документация',
      technicalDocumentationDescription: 'Правильно сформулируем требования для программистов в\u00A0техническом проекте.',

      lectures: 'Ближайшие лекции',
      lecturesItems: {
        diveIntoBlokchain: {
          title: 'Интенсив \u00ABПогружение в\u00A0блокчейн\u00BB',
          date: '9—10 декабря',
          description: '<strong>9—10 декабря</strong> за два дня вы получите фундаментальное понимание технической и\u00A0юридической базы блокчейн-технологий. Криптографический фундамент, консенсусы и\u00A0майнинг, технические тонкости\u00A0ICO, юридическая практика. Вы\u00A0наконец поймёте, как и\u00A0почему всё это работает!',
          themes: [
            'Введение в\u00A0криптографию. Симметричные криптосистемы. Внутреннее устройство симметричных шифров. Целостность данных и\u00A0контрольные суммы. Схемы аутентификации и\u00A0хранение паролей. Алгоритмы работы программ защиты информации. Ассиметричные криптосистемы. Схема электронной подписи. Атаки типа man-in-the-middle и\u00A0система сертификатов. TOR и\u00A0mixed networks. Протокол подбрасывания монеты...',
            'Блокчейн. Определения блокчейна. Блоки, механизмы сцепления блоков и\u00A0целостность цепочки. Основные моменты алгоритма Bitcoin. Требования сложности и\u00A0схема работы майнингового алгоритма. Понятие консенсуса и\u00A0подробное рассмотрение консенсуса Proof Of\u00A0Work. Атаки double spend и\u00A051%, стратегии майнинговых пулов, стабильность работы сети.',
            'Блокчейн и бизнес. Платежи в\u00A0криптовалютах. Криптовалютные биржи и\u00A0кошельки. Приоритетность транзакции, комиссии и\u00A0газ. Централизованные vs\u00A0децентрализованные решения. Выпуск токенов, стандарт ERC20. Анатомия crowdsale смарт-контракта для проведения ICO/ITO. Аудит безопасности смарт-контрактов, примеры уязвимостей. Ошибки проектирования и\u00A0качество экономических моделей crowdsale.',
            'Блокчейн и\u00A0право. Правовые аспекты ITO/ICO. Опыт регулирования профессиональных участников рынка в\u00A0США, Японии, Швейцарии, Германии, на\u00A0острове Мэн, в Великобритании и\u00A0ещё в\u00A0более чем в 10\u00A0странах мира. Экстерриториальное действие законодательства. Почему стоит опасаться законодательства США, Японии, Швейцарии и\u00A0др. даже если вы\u00A0не\u00A0зарегистрированы в\u00A0этих странах?',
            '<a href="https://mixbytes.timepad.ru/event/611938/">Подробная программа</a>'
          ],
          speakers: {
            prilutsky: {
              name: 'Сергей Прилуцкий',
              description: 'Программирует с\u00A0начальной школы, работал системным администратором много лет. Занимался реверс-инжинирингом и\u00A0безопасностью\u00A0ПО, исследовал программные защиты и\u00A0антивирусные движки. Окончил МИФИ и\u00A0преподавал там курсы \u00ABБазы данных\u00BB и\u00A0\u00ABИнформационная безопасность\u00BB, вёл исследовательские проекты, посвящённые криптографическим методам защиты. В\u00A0течение многих лет работал в\u00A0Mail.Ru ведущим разработчиком на\u00A0многих проектах, последние годы — в\u00A0команде Антиспама. Имел дело с\u00A0системами, начиная от\u00A0небольших высоконагруженных микросервисов и\u00A0сайтов и\u00A0заканчивая большими кластерами для распределённых вычислений. Преподаватель и\u00A0автор курса по\u00A0информационной безопасности для проектов \u00ABТехнопарк\u00BB (Бауманка) и\u00A0\u00ABТехноатом\u00BB (МИФИ). Активный участник сообщества блокчейн-разработчиков.',
            },
            vasilchikov: {
              name: 'Юрий Васильчиков',
              description: 'Начал разрабатывать сайты в\u00A02000 году на\u00A0языке Perl. В\u00A0стеке: PHP, JS/Node/React. В\u00A0юношестве год отработал программистом в\u00A0студии Лебедева. В\u00A02005 году стал сооснователем веб-студии Eggo.ru, где шесть лет работал техническим директором. Руководил веб-студией Eggo.ru три года. Разрабатывал решения более чем для 150 малых и\u00A0средних компаний и консультировал их. Крипто-энтузиаст, менеджер в\u00A0команде MixBytes.',
            },
          },
          prices: {
            early: {
              name: 'До 1 декабря',
            },
            late: {
              name: 'После'
            },
          },
        },
      },

      capabilities: {
        title: 'Наши возможности',
        items: {
          money: 'Приём криптовалют в\u00A0ICO в\u00A0автоматическом режиме, сразу с выдачей токенов.',
          testing: 'Автоматизируем тестирование контракта, проверяя набор из\u00A0заготовленных сценариев в\u00A0разных комбинациях.',
          security: 'Мультиподпись защитит смарт-контракт от\u00A0взлома через кражу ключей.',
          solidity: 'Solidity-инспектор автоматизирует обнаружение проблем в\u00A0коде, проверяет опасные конструкции и\u00A0особенности языка.',
          analytics: 'Аналитика криптоплатежей в\u00A0реальном времени подсчитает ether-платежи, полученные через разные каналы привлечения трафика, позволит корректировать маркетинг ICO на\u00A0ходу.',
        },
      },

      openSource: 'Мы за открытый код',
    },

    meetUs: {
      anchor: 'Команда',
      title: 'Будем знакомы',
      description: 'Мы\u00A0разрабатываем смарт-контракты, проводим их\u00A0аудит, консультируем организации и\u00A0рассказываем об\u00A0этом в\u00A0наших курсах и\u00A0лекциях.',
      linkText: 'Познакомиться ближе',
      persons: {
        prilutsky: {
          label: <p>Сергей<br />Прилуцкий</p>,
        },
        vasilchikov: {
          label: <p>Юрий<br />Васильчиков</p>,
        },
        makeev: {
          label: <p>Алексей<br />Макеев</p>,
        },
      },
    },

    splurge: {
      description_first: 'Собрали с помощью разработанных ',
      description_second: 'и проаудированных нами смарт-контрактов',
    },

    education: {
      navigation: {
        description: 'Описание',
        program: 'Программа',
        speakers: 'Ведущие',
        participation: 'Участие',
        place: 'Место',
        partners: 'Партнеры',
      },
      header: {
        title: <h2>Двухдневный интенсив<br />&laquo;Погружение в&nbsp;блокчейн&raquo;</h2>,
        description: <p><strong>За два дня</strong> вы получите фундаментальное понимание технической и&nbsp;юридической базы блокчейн-технологий. Криптографический фундамент, консенсусы и&nbsp;майнинг, технические тонкости&nbsp;ICO, юридическая практика. Вы,&nbsp;наконец, поймете как и&nbsp;почему всё это работает!</p>,
        comment: <p>Курс проводится совместно с&nbsp;компанией <a href="http://cych.io">cych.io</a> и&nbsp;приглашёнными экспертами Центра Россия-ОЭСР РАНХиГС при Президенте&nbsp;РФ.</p>,
      },
      info: {
        blockchain: {
          name: 'Блокчейн',
          content: <p><strong>Блокчейн&nbsp;&mdash;</strong> цифровой реестр транзакций, сделок, контрактов, по&nbsp;сути любой информации. Способ хранения и&nbsp;криптографической защиты данных от&nbsp;подделки. Описан в&nbsp;1991&nbsp;году.</p>,
        },
        cryptoCurrencies: {
          name: 'Криптовалюта',
          content: <p><strong>Криптовалюта&nbsp;&mdash;</strong> цифровые счётные единицы, учёт которых децентрализован. Функционирование данных систем происходит при помощи распределённой компьютерной сети. Термин закрепился после публикации Forbes статьи o&nbsp;Биткоине &laquo;Crypto currency&raquo; в&nbsp;2011&nbsp;году.</p>
        },
        smartContracts: {
          name: 'Смарт-контракт',
          content: <p><strong>Смарт-контракт&nbsp;&mdash;</strong> алгоритм, набор условий, выполнение которых влечет за&nbsp;собой некоторые события в&nbsp;реальном мире или цифровых системах. Для реализации требуется децентрализованная среда, исключающая человеческий фактор. Для передачи стоимости в&nbsp;смарт-контракте требуется криптовалюта. Идея предложена в&nbsp;1994&nbsp;году.</p>,
        },
        ico: {
          name: 'ICO',
          content: <p><strong>ICO, ITO или TGE&nbsp;&mdash;</strong> форма привлечения инвестиций или краудфайндинга в&nbsp;виде эмиссии и&nbsp;продажи инвесторам новых криптовалют. Первое ICO проведено в&nbsp;2013 году (Mastercoin).</p>,
        },
        bitcoin: {
          name: 'Биткоин',
          content: <p><strong>Биткоин&nbsp;&mdash;</strong> пиринговая платёжная система. Для функционирования и&nbsp;защиты использует криптографические методы (блокчейн). Вся информация о&nbsp;транзакциях между адресами системы доступна в&nbsp;открытом виде. Была запущена в&nbsp;2009&nbsp;году.</p>,
        },
        ethereum: {
          name: 'Ethereum',
          content: <p><strong>Ethereum&nbsp;&mdash;</strong> платформа для создания децентрализованных онлайн-сервисов на&nbsp;базе блокчейна и&nbsp;смарт-контрактов. Реализована как единая децентрализованная виртуальная машина. Запущена 30&nbsp;июля 2015&nbsp;года.</p>,
        },
      },
      asideBlock: {
        title: 'Будет полезно',
        businessmen: 'бизнесменам',
        investors: 'инвесторам',
        lawyers: 'юристам',
        managers: 'менеджерам',
        programmers: 'программистам',
      },
      description: {
        intro: 'Блокчейн-технологии ворвались в\u00A0нашу жизнь\u00A0и, похоже, собираются полностью изменить\u00A0её. Биткоин и\u00A0ICO у\u00A0всех на\u00A0устах, в\u00A0них вкладывают деньги, часто даже не\u00A0понимая о\u00A0чем идет речь. Ведь, к\u00A0сожалению, большая часть доступной информации\u00A0&mdash; либо слишком техническая и\u00A0непонятная документация для программистов, либо слишком рекламная и\u00A0провокационная, нацеленная на\u00A0привлечение инвестиций в\u00A0очередное ICO.',
        courceGoal: 'Мы\u00A0болеем за\u00A0популяризацию блокчейн-технологий, за\u00A0прозрачность и\u00A0доступность информации, за\u00A0безопасность финансовых операций. На\u00A0курсе вы\u00A0получите фундамент знаний, который позволит вам уверенно ориентироваться в\u00A0новостном и\u00A0рекламном потоке. И\u00A0принимать взвешенные решения об\u00A0использовании блокчейн-технологий в\u00A0своей жизни, карьере и\u00A0бизнесе.',
      },
      advices: {
        first: 'Если вы\u00A0скептик\u00A0&mdash; приходите и\u00A0задайте спикерам самые сложные вопросы. Cкорее всего, вы\u00A0поверите в\u00A0силу блокчейн-технологий больше, чем раньше.',
        second: 'Если блокчейн и\u00A0ICO уже вскружили вам голову\u00A0&mdash; приходите тоже, мы\u00A0постараемся немного охладить ваш пыл.',
        promise: 'Обещаем, что на\u00A0курсе не\u00A0будет никакой рекламы и\u00A0призывов куда-либо вложить деньги.',
      },
      program: {
        dayOne: {
          name: 'День 1. Криптография, блокчейн, Биткоин: срываем покровы',
          blocks: {
            first: {
              name: 'Первый блок',
              desc: <p><strong>Введение в&nbsp;криптографию</strong><br />Симметричные криптосистемы. Внутреннее устройство симметричных шифров. Целостность данных и&nbsp;контрольные суммы. Схемы аутентификации и&nbsp;хранение паролей. Алгоритмы работы программ защиты информации. Ассиметричные криптосистемы. Схема электронной подписи. Атаки типа man-in-the-middle и&nbsp;система сертификатов. TOR и&nbsp;mixed networks. Протокол подбрасывания монеты.</p>,
            },
            second: {
              name: 'Второй блок',
              desc: <p><strong>Блокчейн</strong><br />Определения блокчейна. Блоки, механизмы сцепления блоков и&nbsp;целостность цепочки. Основные моменты алгоритма Bitcoin. Требования сложности и&nbsp;схема работы майнингового алгоритма. Понятие консенсуса и&nbsp;подробное рассмотрение консенсуса Proof Of&nbsp;Work. Атаки double spend и&nbsp;51%, стратегии майнинговых пулов, стабильность работы сети.</p>,
            },
            break: {
              desc: <p>Перерыв 1 час 15 минут</p>,
            },
            third: {
              name: 'Третий блок',
              desc: <p>Задача византийских генералов и&nbsp;другие виды консенсуса. &laquo;Proof of&nbsp;stake&raquo; и&nbsp;&laquo;delegated proof of&nbsp;stake&raquo;. Движок Graphene и&nbsp;проекты на&nbsp;его основе. Примеры сложной внутренней экономики проекта, вопросы децентрализации. &laquo;Proof of&nbsp;storage&raquo;, &laquo;proof of&nbsp;compute&raquo;, &laquo;Proof of&nbsp;everything&raquo;. Примеры использования смарт-контрактов и&nbsp;схема работы сети Ethereum.</p>,
            },
            fourth: {
              name: 'Четвертый блок',
              desc: <p><strong>Блокчейн и бизнес</strong><br />Платежи в&nbsp;криптовалютах. Криптовалютные биржи и&nbsp;кошельки. Приоритетность транзакции, комиссии и&nbsp;газ. Централизованные vs&nbsp;децентрализованные решения. Выпуск токенов, стандарт ERC20. Анатомия crowdsale смарт-контракта для проведения ICO/ITO. Аудит безопасности смарт-контрактов, примеры уязвимостей. Ошибки проектирования и&nbsp;качество экономических моделей crowdsale.</p>,
            },
          },
        },
        dayTwo: {
          name: 'День\u00A02. Технологии ICO и&nbsp;мировая юридическая практика',
          blocks: {
            fifth: {
              name: 'Пятый блок',
              desc: <p>Блокчейн&nbsp;как маркетинговая &laquo;свистелка&raquo; и&nbsp;блокчейн как прорыв. Когда нужен блокчейн и&nbsp;что БЧ-технологии могут привнести в&nbsp;проект? Виды и&nbsp;особенности крипто-токенов. &laquo;Хочу ICO&raquo;&nbsp;&mdash; порядок действий. Личный кабинет инвестора&nbsp;&mdash; что надо знать. Вопросы приёма BTC и&nbsp;других криптовалют в&nbsp;рамках ICO. Обзор ICO-платформ.</p>,
            },
            sixth: {
              name: 'Шестой блок',
              desc: <p><strong>Блокчейн и&nbsp;право. Правовые аспекты ITO/ICO</strong> <br />Опыт регулирования профессиональных участников рынка в&nbsp;США, Японии, Швейцарии, Германии, на&nbsp;острове Мэн, Великобритании и&nbsp;еще в&nbsp;более чем 10&nbsp;странах мира. Экстерриториальное действие законодательства. Почему стоит опасаться законодательства США, Японии, Швейцарии и&nbsp;др. даже если вы&nbsp;не&nbsp;зарегистрированы в&nbsp;этих странах?</p>,
            },
            break: {
              desc: <p>Перерыв 1 час 15 минут</p>,
            },
            seventh: {
              name: 'Седьмой блок',
              desc: <p>Как выявлять резидентов нужных стран в&nbsp;совем проекте? Как снизить риски нарушения законодательства третьих стран? Как организовать бизнес-процесс, чтобы не&nbsp;подпасть под требования стран о&nbsp;получении разрешений и&nbsp;лицензий? Как внедрить требования по&nbsp;идентификации клиента и&nbsp;организовать внутренний дью диллидженс?</p>,
            },
            eigth: {
              name: 'Восьмой блок',
              desc: <p>Какие налоговые последствия деятельности криптобирж существуют в&nbsp;США, ЕС&nbsp;и&nbsp;др. странах? Опыт организации существующих криптобирж и&nbsp;других профессиональных участников: Coinbase, BTCC, Payment21 и&nbsp;др. Возможность организации криптобиржи в&nbsp;России: существующее регулирование, риски и&nbsp;рекомендации.</p>,
            },
          },
        },
      },
      speakers: {
        prilutsky: {
          name: 'Сергей Прилуцкий',
          position: 'Ведущий технической части (первый день)',
          description:
            <ul>
              <li>Начал программировать в&nbsp;начальной школе, работал системным администратором много лет</li>
              <li>Занимался реверс-инжинирингом и&nbsp;безопасностью&nbsp;ПО, исследовал программные защиты и&nbsp;антивирусные движки</li>
              <li>Закончил МИФИ и&nbsp;преподавал там курсы &laquo;Базы данных&raquo; и&nbsp;&laquo;Информационная безопасность&raquo;, вел исследовательские проекты посвящённые криптографическим методам защиты</li>
              <li>В&nbsp;течение многих лет работал в&nbsp;Mail.Ru ведущим разработчиком на&nbsp;многих проектах, последние годы в&nbsp;команде Антиспама</li>
              <li>Имел дело с&nbsp;системами, начиная от&nbsp;небольших высоконагруженных микросервисов и&nbsp;сайтов и&nbsp;заканчивая большими кластерами для распредеённых вычислений</li>
              <li>Преподаватель и&nbsp;автор курса по&nbsp;информационной безопасности для проектов &laquo;Технопарк&raquo; (Бауманка) и&nbsp;&laquo;Техноатом&raquo; (МИФИ)</li>
              <li>Активный участник сообщества блокчейн-разработчиков, co-founder компании MixBytes</li>
            </ul>,
        },
        lawyersTeam: {
          header: 'Команда юристов',
          position: 'Ведущие части \u00ABБлокчейн и\u00A0право\u00BB',
          levashenko: {
            name: 'Антонина Левашенко',
            desc: <p>Юрист международного права. Эксперт Центра Стратегических Разработок. Старший научный сотрудник Академии Внешней Торговли (ВАВТ) Минэкономразвития&nbsp;РФ. Руководитель Центра компетенций и&nbsp;анализа стандартов ОЭСР РАНХиГС при Президенте&nbsp;РФ.</p>,
          },
          ermohin: {
            name: 'Иван Ермохин',
            desc: <p>Юрист международного права. Научный сотрудник ВАВТ Минэкономразвития РФ. Эксперт Центра компетенций и&nbsp;анализа стандартов ОЭСР РАНХиГС при Президенте&nbsp;РФ.</p>,
          },
          lebedeva: {
            name: 'Софья Лебедева',
            desc: <p>Экономист-международник. Научный сотрудник Российского центра компетенций и&nbsp;анализа стандартов ОЭСР РАНХиГС при Президенте&nbsp;РФ.</p>,
          },
          girich: {
            name: 'Мария Гирич',
            desc: <p>Юрист международного права. Научный сотрудник Клуба Россия-ОЭСР ВАВТ Минэкономразвития&nbsp;РФ.</p>,
          },
          koval: {
            name: 'Александра Коваль',
            desc: <p>Юрист международного права, директор Клуба Россия-ОЭСР ВАВТ Минэкономразвития&nbsp;РФ.</p>,
          },
        },
      },
      conditions: {
        soon: <span>Мы&nbsp;планируем провести ближайший интенсив в&nbsp;марте 2018.<br />Следите за&nbsp;анонсами в&nbsp;Facebook и&nbsp;Telegram!</span>,
        title: 'Условия',
        early: {
          header: 'До&nbsp;1&nbsp;декабря',
          text: 'Входной билет: 6000&nbsp;₽,<br />VIP (первые 1-2&nbsp;ряда): 12000&nbsp;₽',
        },
        late: {
          header: 'С&nbsp;1&nbsp;декабря',
          text: 'Входной билет: 9000&nbsp;₽,<br />VIP (первые 1-2&nbsp;ряда): 18000&nbsp;₽',
        },
        registration: 'Зарегистрироваться на сайте Timepad.ru',
        sale: '-20% при оплате Bitcoin или Ethereum',
        saleDescription: <p>Cделайте перевод <a href="/helpers">по&nbsp;текущему курсу</a> за&nbsp;вычетом&nbsp;20% и&nbsp;пришлите нам ФИО участников для внесения в&nbsp;список. При&nbsp;оплате биткоинами регистрация на&nbsp;Timepad.ru не&nbsp;требуется.</p>,
      },
      location: {
        title: 'Место',
        place: <p><strong>Ключ Трехгорка</strong>&nbsp;&mdash; Москва ул. Рочдельская&nbsp;15, стр. 17-18, 3&nbsp;этаж (метро &laquo;улица 1905&nbsp;года&raquo; или &laquo;Баррикадная&raquo;). Схемы проезда: <a href="https://kl10.ch/wp-content/uploads/tgm-walk.pdf">своим ходом</a>, <a href="https://kl10.ch/wp-content/uploads/tgm-aut.pdf">на&nbsp;автомобиле</a>.</p>,
        support: <p>По&nbsp;всем вопросам пишите в&nbsp;наш Телеграм-чат: <a href="https://t.me/mixbytes_pub">https://t.me/mixbytes_pub</a><br />или звоните&nbsp;+7 (919) 763-31-66 (Илона).</p>,
      },
      partners: {
        title: 'Информационные партнеры',
      },
    },

    team: {
      prilutsky: {
        name: 'Сергей Прилуцкий',
        desc:
          <ul>
            <li>Начал программировать в&nbsp;начальной школе, работал системным администратором много лет</li>
            <li>Занимался реверс-инжинирингом и&nbsp;безопасностью&nbsp;ПО, исследовал программные защиты и&nbsp;антивирусные движки</li>
            <li>Закончил МИФИ и&nbsp;преподавал там курсы &laquo;Базы данных&raquo; и&nbsp;&laquo;Информационная безопасность&raquo;, вел исследовательские проекты посвящённые криптографическим методам защиты</li>
            <li>В&nbsp;течение многих лет работал в&nbsp;Mail.Ru ведущим разработчиком на&nbsp;многих проектах, последние годы в&nbsp;команде Антиспама</li>
            <li>Имел дело с&nbsp;системами, начиная от&nbsp;небольших высоконагруженных микросервисов и&nbsp;сайтов и&nbsp;заканчивая большими кластерами для распредеённых вычислений</li>
            <li>Преподаватель и&nbsp;автор курса по&nbsp;информационной безопасности для проектов &laquo;Технопарк&raquo; (Бауманка) и&nbsp;&laquo;Техноатом&raquo; (МИФИ)</li>
            <li>Активный участник сообщества блокчейн-разработчиков</li>
          </ul>,
      },
      vasilchikov: {
        name: 'Юрий Васильчиков',
        desc:
          <ul>
            <li>В&nbsp;8&nbsp;классе написал клон Тетриса на&nbsp;Бейсике :)</li>
            <li>Начал разрабатывать сайты в&nbsp;2000 году на&nbsp;языке Perl. В&nbsp;стеке: PHP, JS/Node/React</li>
            <li>В&nbsp;юношестве год отработал программистом в&nbsp;студии Лебедева</li>
            <li>В&nbsp;2005 году стал сооснователем веб-студии Eggo.ru, где на&nbsp;протяжении 6&nbsp;лет работал техническим директором</li>
            <li>Руководил веб-студией Eggo.ru на&nbsp;протяжении 3&nbsp;лет</li>
            <li>Консультировал и&nbsp;разрабатывал решения для более чем 150 малых и&nbsp;средних компаний</li>
          </ul>,
      },
      makeev: {
        name: 'Алексей Макеев',
        desc:
          <ul>
            <li>Закончил МГТУ им. Н.&nbsp;Э.&nbsp;Баумана, кафедра &laquo;Компьютерные комплексы, системы и&nbsp;сети&raquo;, диплом о&nbsp;распределенных вычислениях</li>
            <li>Опыт программирования 17&nbsp;лет (Assembler, C/C++, Java, PHP, Perl, Python, JS)</li>
            <li>Опыт разработки Big Data решений на&nbsp;Hadoop-кластере промышленного масштаба</li>
            <li>Работал тимлидом в&nbsp;проекте интернет-поисковика Поиск@mail.ru</li>
            <li>Работал системным архитектором в&nbsp;фирме&nbsp;1С, отдел разработки платформы</li>
            <li>В&nbsp;сфере интересов: Big Data, распределенные вычисления, информационная безопасность, финтех, инвестиции</li>
          </ul>,
      },
      karbachinsky: {
        name: 'Игорь Карбачинский',
        desc:
          <ul>
            <li>Закончил МИЭМ, кафедра &laquo;Кибернетика&raquo;, диплом об&nbsp;алгоритмах ранжирования в&nbsp;поисковых системах</li>
            <li>Опыт программирования 12&nbsp;лет (C/C++, Java, PHP, Perl, Python, JS)</li>
            <li>На&nbsp;протяжении многих лет руководил отделом в&nbsp;интернет-поисковике Поиск@mail.ru</li>
            <li>Работал на&nbsp;позиции Data Science Architect в&nbsp;проектах Lang.ai и&nbsp;Sentisis.com</li>
            <li>Опыт создания промышленных&nbsp;IT решений в&nbsp;облаках Google и&nbsp;Amazon</li>
            <li>В&nbsp;сфере интересов: Анализ данных, Big Data, Теория игр, Речевые технологи</li>
          </ul>,
      },
      kruglov: {
        name: 'Павел Круглов',
        desc:
          <ul>
            <li>Закончил НИЯУ МИФИ, кафедра &laquo;Информационная безопасность банковских систем&raquo;</li>
            <li>В&nbsp;школе начал программировать на&nbsp;C/C++ и&nbsp;разрабатывать сайты, <s>а&nbsp;потом ломать, хехе</s></li>
            <li>Работал на&nbsp;нескольких проектах в&nbsp;качестве эксперта по&nbsp;информационной безопасности, в&nbsp;том числе в&nbsp;ЦБ&nbsp;РФ</li>
            <li>Более 30&nbsp;личных публикаций в&nbsp;журнале Хакер, более 100&nbsp;в качестве редактора</li>
            <li>Интересы: информационная безопасность, анализ систем, инвестиции, психология</li>
          </ul>,
      },
      yakovlev: {
        name: 'Андрей Яковлев',
        desc:
          <ul>
            <li>Закончил Мех-Мат СГУ по&nbsp;специальности &laquo;прикладная математика и&nbsp;информатика&raquo;</li>
            <li>Опыт программирования 7&nbsp;лет (Python, JS, Bash)</li>
            <li>Начинал свой путь в&nbsp;компании Mirantis инженером по&nbsp;тестированию, а&nbsp;затем DevOps инженером</li>
            <li>Работал DevOps-инженером в&nbsp;интернет-поисковике Поиск@mail.ru</li>
            <li>Последние годы&nbsp;&mdash; разработчик авто-тестов в&nbsp;компании Kaspersky Lab</li>
            <li>Интересуется стартапами и&nbsp;инвестициями, мечтает о&nbsp;единороге :)</li>
          </ul>,
      },
      shubin: {
        name: 'Михаил Шубин',
        desc:
          <ul>
            <li>В школе организовал ячейку домонета с коллективным подключением к сети. Держал узел Fidonet</li>
            <li>Закончил ТУСУР, кафедра "Радиосвязь, радиовещание, телевидение"</li>
            <li>Разрабатывал цифровые измерительные приборы</li>
            <li>Занимался администрированием систем разного уровня сложности. Писал на Python, Perl, Bash</li>
            <li>Люблю разбираться в новых для себя областях, понимать "как это устроено" и "как это можно применять"</li>
            <li>Интересы: роботостроение, электроника, психология</li>
          </ul>,
      },
      galuzinskaya: {
        name: 'Илона Галузинская',
        desc:
          <ul>
            <li>Единственный человек в команде, который никогда и ничего не программировал. Усердно осваивает значение понятий форк, хэш и нода</li>
            <li>Окончила НИУ МЭИ (ТУ) по специальности далекой от энергетики — связи с общественностью</li>
            <li>С 2015 года аккаунт-менеджер в IT-сфере</li>
            <li>Решает административные вопросы и организует лекции MixBytes</li>
            <li>Среди интересов — начать разбираться в блокчейн. Ну и мода, конечно:)</li>
          </ul>,
      },
      privezentsev: {
        name: 'Константин Привезенцев',
        desc:
          <ul>
            <li>Закончил МИЭМ по специальности "Системы автоматизированного проектирования"</li>
            <li>Опыт промышленного программирования 8 лет на различных языках программирования</li>
            <li>Участвовал в разработке мобильных приложений в Paragon, BigData инфраструктуры Поиск@Mail.ru и системы обработки данных в Kaspersky Lab</li>
            <li>Интересы: базы данных, функциональное программирование, распределенные вычисления</li>
          </ul>,
      },
    },

    job: {
      title: 'Вакансии',
      blockchainDev: {
        name: 'Разработчик смарт-контрактов',
        desc: <span>Ищем опытного разработчика для работы над смарт-контрактами (Solidity) и&nbsp;не&nbsp;только. Опыт в&nbsp;blockchain не&nbsp;требуем&nbsp;&mdash; умеем растить blockchain developer&rsquo;ов из&nbsp;толковых senior&rsquo;ов.</span>,
        requirements: [
          <span>Базовые знания алгоритмов, структур данных, графов, конечных автоматов</span>,
          <span>Базовые знания по&nbsp;криптографии, понимание криптографических протоколов</span>,
          <span>Знание сетевого программирования</span>,
          <span>Опыт разработки на&nbsp;разных языках</span>,
          <span>Опыт разработки 4+&nbsp;года</span>,
        ],
        advantages: [
          <span>Знание *nix, опыт работы в&nbsp;консоли</span>,
          <span>Опыт разработки высоконагруженных отказоустойчивых систем</span>,
          <span>Знание&nbsp;js, node, python, java, C++</span>,
          <span>Представление об&nbsp;алгоритмах консенсуса</span>,
          <span>Опыт низкоуровневого программирования</span>,
        ],
        conditions: [
          <span>Высокая зарплата</span>,
          <span>Лофт на&nbsp;1905&nbsp;года</span>,
          <span>Возможна удаленная работа</span>,
        ]
      },
    },

    feedback: {
      writeToUs: 'Хотите что-то уточнить?',
      messageSent: <span>Спасибо,<br />ваше сообщение отправлено.</span>,
      emailPlaceholder: 'ваша почта',
      messagePlaceholder: 'введите ваше сообщение (мин. 80 символов)',
      send: 'Отправить',
    },
  },

  'EN': {

    common: {
      themes: 'Themes',
      speakers: 'Speakers',
      pay: 'To\u00A0pay',
      payWithCryptocurrency: 'To pay with cryptocurrency',
      careers: 'Careers',
      or: 'or',
      questions: 'For\u00A0all questions:',
      donate: 'Donate',
      publications: 'Publications',
      coursesCalculator: 'Courses calculator',
      codeCheck: 'Code checking',
      ethereumBalance: 'Ethereum-wallet balance',
      transactionInfo: 'Transaction information',
      checkTimestamps: 'Check timestamps in code',
      timestampsPlaceholder: 'Copy code here',
      program: 'Program',
      requirements: 'Requirements',
      advantages: 'It would be a plus to have',
      conditions: 'Conditions',
    },

    navigation: {
      services: 'Services',
      publications: 'Publications',
      training: 'Training',
      tools: 'Tools',
      team: 'Team',
      careers: 'Careers',
    },

    headerJumbo: {
      header: <h1>Blockchain solutions<br />and&nbsp;smart-contracts</h1>,
      description: 'We are a team of programmers. We fullfill technical projects, implement blockchain technologies, write smart contracts. We conduct corporate training and open lectures.',
      stack: 'Stack: Solidity / Truffle, JS / Node, C ++ / Graphene, Python.',
    },

    main: {
      navigation: {
        services: 'Services',
        feedback: 'Feedback',
      },

      devAudit: {
        title: 'Development and Audit',
        description: 'We write smart contracts with Solidity, completely from scratch or on the basis of proven libraries as OpenZeppelin. We comply with the ERC20 standard.We cover the code with unit-tests under the Truffle framework. We verify contracts for Etherscan. We find mistakes and vulnerabilities of your smart contracts. We develop blockchains based on the Graphene framework. Most likely, you will need our consultations.',
        example: <p><a href="https://github.com/mixbytes/storiqa_ico/tree/master/contracts">Contract</a> and&nbsp;<a href="https://github.com/mixbytes/audits_public/blob/master/solidity/KickICO/report.md">audit</a><br /> examples on&nbsp;Github</p>,
      },

      services: {
        title: 'Services',
        icoTech: {
          header: 'Technology\u00A0for\u00A0ICO',
          text:
            <div>
              <span>Smart contracts in Ethereum (ERC20-enabled token, crowdsale, ether vault).</span><br/><br/>
              <span>User account, embeddable into any website able to customize its design, accepting BTC, ETH, and other currencies. Implementing KYC procedures, participation statistics, general ICO statistics, link to Google Ecommerce.</span><br/><br/>
              <span>Admin interface</span><br/><br/>
              <span>Receiving Ethereum and Bitcoin without commission and other currencies through coinpayments.net</span>
            </div>,
        },
        consulting: {
          header: 'Consulting',
          text: 'Analyze technical aspects of conducting ICOs, tell about decentralization of projects, tokenization, tokenomics. Help with the decentralization of projects, tokenization, tokenomics.',
        },
        blokchain: {
          header: 'Blockchain\u00A0systems\u00A0development',
          text: 'Solutions for projects to require their own blockchain. High speed, arbitrary rate of decentralization. Fine-tuning the consensus protocol based on Graphene / BitShares/ Steem / EOS.',
        },
        etherium: {
          header: 'Ethereum\u00A0Smart\u00A0Contracts',
          text: 'Developing token contracts, prototypes (proof-of-concept) and smart contract systems for blockchain projects. Developing Checking smart contracts for bugs and vulnerabilities and automating the launch of smart contracts in blockchain.',
        },
        docs: {
          header: 'Developing\u00A0documentation',
          text: 'Technical documents describing in technical terms how we will approach the task and  technical white papers where we tell a wider audience how our technology works.',
        },
      },

      consulting: 'Consulting',
      businessRequirements: 'Formulation of business requirements',
      businessRequirementsDescription: 'We will help you to find possible applications of blockchain technologies to your business and formulate an economic model of your tokens.',
      hrHelp: 'Help with HR',
      hrHelpDescription: 'We will help you determine the requirements for the blockchain programmers you want to take on the team. We will conduct technical interviews, mark out the way for growth and training.',
      technicalSolutions: 'The choice of technical solutions, writing of TP',
      technicalSolutionsDescription: 'We will select a stack of technologies for solving the problem. We will recommend the frameworks, libraries, verified smart contracts.',
      technicalDocumentation: 'Technical documentation',
      technicalDocumentationDescription: 'We formulate correct requirements for programmers of the technical project.',

      lectures: 'The next lectures',
      lecturesItems: {
        diveIntoBlokchain: {
          title: 'Intensive course \u00ABDive into blokchain\u00BB',
          date: '9-10 DECEMBER',
          description: 'During the two days, <strong>December 9-10</strong>, you will receive a fundamental understanding of the technical and legal basis of blockchain technologies. Cryptographic foundation, consensus and mining, technical subtleties of ICO, legal practice. You will finally understand how and why it all works!',
          themes: [
            'Introduction to cryptography. Symmetric cryptosystems. The internal arrangement of symmetric ciphers. Data Integrity and Checksums. Authentication schemes and storage of passwords. Algorithms of how programs of the information protection work. Asymmetric cryptosystems. Electronic signature scheme. Attacks such as man-in-the-middle and a certificate system. TOR and mixed networks. Coin flipping protocol...',
            'Blockсhain. Definitions of blockchain. Blocks, mechanisms of block adhesion and chain integrity. Highlights of the Bitcoin algorithm. The complexity requirements and the mining algorithm’s scheme of operation. The concept of consensus and a detailed consideration of the Proof Of Work consensus. Double spend attacks and 51%, the strategies of mining pools, the stability of the network.',
            'Blockchain and business. Payments in cryptocurrencies. Cryptocurrencies and wallets. Priority of transaction, commission and gas. Centralized vs decentralized solutions. Issue of tokens, standard ERC20. Anatomy of crowdsale smart contract for ICO / ITO. Audit of smart contracts security, examples of vulnerabilities. Designing mistakes and quality of crowdsale economic models.',
            'Blockchain and the law. Legal aspects of ITO / ICO. Experience in regulating professional participants of market in the US, Japan, Switzerland, Germany, the Isle of Man, the UK and more than other 10 countries. Extraterritorial validity of legislation. Why should you be afraid of the legislation of the USA, Japan, Switzerland, etc. even if you are not registered in these countries?',
            '<a href="https://mixbytes.timepad.ru/event/611938/">Detailed program</a>'
          ],
          speakers: {
            prilutsky: {
              name: 'Sergey Prilutsky',
              description: 'Started programming in the elementary school, worked as a system administrator for many years. Was engaged in reverse engineering and software security, researched software protection and antivirus engines. Graduated from the Moscow Engineering and Physics Institute and was a lector of such courses as "Databases" and "Information Security", conducted research projects on security cryptographic methods. For many years worked at Mail.Ru as a leading developer on many projects, the last years in the team of Antispam. Worked with systems, ranging from small highly loaded micro services and sites to the large clusters for distributed computing. The teacher and author of the course on information security for the "Technopark" (Baumanka) and "Technoatom" (MEPhI) projects. Active member of the blockchain developers community.',
            },
            vasilchikov: {
              name: 'Yuri Vasilchikov',
              description: 'Started to develop the sites in 2000 in Perl. Worked as a programmer in the studio of Lebedev for one year. In 2005, co-founded the Eggo.ru web studio, where he worked as a technical director for 6 years. Managed the Eggo.ru web-studio for 3 years. Consulted and developed solutions for more than 150 small and medium-sized companies.',
            },
          },
          prices: {
            early: {
              name: 'Before December\u00A01',
            },
            late: {
              name: 'After December\u00A01'
            },
          },
        },
      },

      capabilities: {
        title: 'Our capabilities',
        items: {
          money: 'We accept different cryptocurrencies of the ICO in automatic mode by issuing tokens at once',
          testing: 'We automate the testing of any typical contract by checking the set of scripts that we prepared in different combinations',
          security: 'Multisig will protect any smart contract from hacking through the key theft',
          solidity: 'Solidity Inspector automates the detection of problems in solidity code, checks the dangerous structures and features of the language',
          analytics: 'Analytics of real-time crypto payments, it calculates ether-payments that were received through the different traffic channels, allows you to correct the marketing of ICO in real time',
        },
      },

      openSource: 'We are for open source',
    },

    meetUs: {
      anchor: 'Meet us',
      title: 'We will be glad to know you',
      description: 'We develop smart contracts, conduct their audits, advise organizations, and talk about this in our courses and lectures.',
      linkText: 'Getting to know us closer',
      persons: {
        prilutsky: {
          label: <p>Sergey<br />Prilutsky</p>,
        },
        vasilchikov: {
          label: <p>Yuri<br />Vasilchikov</p>,
        },
        makeev: {
          label: <p>Aleksey<br />Makeev</p>,
        },
      },
    },

    splurge: {
      description_first: 'Collected with our',
      description_second: 'developed and audited smart contracts',
    },

    education: {
      navigation: {
        description: 'Dive into Blockchain',
        program: 'Program',
        speakers: 'Speakers',
        participation: 'Participation',
        place: 'Place',
        partners: 'Partners',
      },
      header: {
        title: <h2>2-Days Intensive course<br />&laquo;Dive into&nbsp;Blockchain&raquo;</h2>,
        description: <p><strong>During the two days</strong> you will receive a fundamental understanding of the technical and legal basis of blockchain technologies. Cryptographic foundation, consensus and mining, technical subtleties of ICO, legal practice. You will finally understand how and why it all works!</p>,
        comment: <p>The course is conducted with the support of <a href="http://cych.io">cych.io</a> and invited experts from The Russian Academy of National Economy and Public Service under the President of the Russian Federation.</p>,
      },
      info: {
        blockchain: {
          name: 'Blockchain',
          content: <p><strong>Blockchain&nbsp;&mdash;</strong> is a digital register of transactions, contracts and other information. This is a method of storage and cryptographic protection of data from the forgery. It was described in 1991.</p>,
        },
        cryptoCurrencies: {
          name: 'Cryptocurrency',
          content: <p><strong>Cryptocurrency&nbsp;&mdash;</strong> цифровые счётные единицы, учёт которых децентрализован. Функционирование данных систем происходит при помощи распределённой компьютерной сети. Термин закрепился после публикации Forbes статьи o&nbsp;Биткоине &laquo;Crypto currency&raquo; в&nbsp;2011&nbsp;году.</p>
        },
        smartContracts: {
          name: 'Smart-contract',
          content: <p><strong>Smart-contract&nbsp;&mdash;</strong> алгоритм, набор условий, выполнение которых влечет за&nbsp;собой некоторые события в&nbsp;реальном мире или цифровых системах. Для реализации требуется децентрализованная среда, исключающая человеческий фактор. Для передачи стоимости в&nbsp;смарт-контракте требуется криптовалюта. Идея предложена в&nbsp;1994&nbsp;году.</p>,
        },
        ico: {
          name: 'ICO',
          content: <p><strong>ICO, ITO или TGE&nbsp;&mdash;</strong> форма привлечения инвестиций или краудфайндинга в&nbsp;виде эмиссии и&nbsp;продажи инвесторам новых криптовалют. Первое ICO проведено в&nbsp;2013 году (Mastercoin).</p>,
        },
        bitcoin: {
          name: 'Bitcoin',
          content: <p><strong>Bitcoin&nbsp;&mdash;</strong> пиринговая платёжная система. Для функционирования и&nbsp;защиты использует криптографические методы (блокчейн). Вся информация о&nbsp;транзакциях между адресами системы доступна в&nbsp;открытом виде. Была запущена в&nbsp;2009&nbsp;году.</p>,
        },
        ethereum: {
          name: 'Ethereum',
          content: <p><strong>Ethereum&nbsp;&mdash;</strong> платформа для создания децентрализованных онлайн-сервисов на&nbsp;базе блокчейна и&nbsp;смарт-контрактов. Реализована как единая децентрализованная виртуальная машина. Запущена 30&nbsp;июля 2015&nbsp;года.</p>,
        },
      },
      asideBlock: {
        title: 'Will be useful for',
        businessmen: 'businessmen',
        investors: 'investors',
        lawyers: 'lawyers',
        managers: 'managers',
        programmers: 'programmers',
      },
      description: {
        intro: "The blokchain technologies appeared in our lives and, it seems, they’re going to completely change it. Bitcoin and ICO are on everyone's lips, people invest money in that without even knowing what it is all about. Unfortunately, most of the available information is either too technical and incomprehensible documentation for programmers, or too advertising and provocative, aimed at the attracting investments to some ICO.",
        courceGoal: 'We support the popularization of blockchain-technologies, transparency and accessibility of information, as well as the safety of financial transactions. During the course, you will receive a foundation of knowledge that will allow you to be confident in the news and advertising flow. You can also learn how to make wise decisions about using blockchain-technologies in your life, career and business.',
      },
      advices: {
        first: 'If you are a skeptic, come and ask the most difficult questions to the speakers. Most likely, you will believe in the power of blockchain-technologies more after that.',
        second: 'If the blockchain and ICO have already turned your head - please come too, we will try to cool you down a little bit.',
        promise: 'We promise that there will be any advertising and appeal to invest your money.',
      },
      program: {
        dayOne: {
          name: 'Day 1. Cryptography, blockchain, Bitcoin: tearing off the covers',
          blocks: {
            first: {
              name: 'First block',
              desc: <p><strong>Introduction to&nbsp;cryptography</strong><br />Symmetric cryptosystems. The internal arrangement of symmetric ciphers. Data Integrity and Checksums. Authentication schemes and storage of passwords. Algorithms of how programs of the information protection work. Asymmetric cryptosystems. Electronic signature scheme. Attacks such as man-in-the-middle and a certificate system. TOR and mixed networks. Coin flipping protocol.</p>,
            },
            second: {
              name: 'Second block',
              desc: <p><strong>Blockсhain</strong><br />Definitions of blockchain. Blocks, mechanisms of block adhesion and chain integrity. Highlights of the Bitcoin algorithm. The complexity requirements and the mining algorithm’s scheme of operation. The concept of consensus and a detailed consideration of the Proof Of Work consensus. Double spend attacks and 51%, the strategies of mining pools, the stability of the network.</p>,
            },
            break: {
              desc: <p>1 hour 15 minutes Break</p>,
            },
            third: {
              name: 'Third block',
              desc: <p>The task of Byzantine generals and other types of consensus. "Proof of stake" and "delegated proof of stake". The Graphene engine and the projects that were based on it. Examples of complex internal project economics, decentralization issues. "Proof of storage", "proof of compute", "Proof of everything". Examples of the using smart contracts and the work scheme of the Ethereum network.</p>,
            },
            fourth: {
              name: 'Fourth block',
              desc: <p><strong>Blockchain and business.</strong><br />Payments in cryptocurrencies. Cryptocurrencies and wallets. Priority of transaction, commission and gas. Centralized vs decentralized solutions. Issue of tokens, standard ERC20. Anatomy of crowdsale smart contract for ICO / ITO. Audit of smart contracts security, examples of vulnerabilities. Designing mistakes and quality of crowdsale economic models.</p>,
            },
          },
        },
        dayTwo: {
          name: 'Day\u00A02. ICO Technologies and Global Law Practice',
          blocks: {
            fifth: {
              name: 'Fifth block',
              desc: <p>Blockchain as a marketing "whistle" and blockchain as a breakthrough. When do you need blockchain and what can BT technologies bring to the project? Types and peculiarities of crypto-tokens. "I want ICO" - the order of actions. Investor's private office - what do you need to know. The issues of accepting BTC and other cryptocurrencies in the framework of the ICO. Overview of ICO-platforms.</p>,
            },
            sixth: {
              name: 'Sixth block',
              desc: <p><strong>Blockchain and the law.</strong> <br />Legal aspects of ITO / ICO. Experience in regulating professional participants of market in the US, Japan, Switzerland, Germany, the Isle of Man, the UK and more than other 10 countries. Extraterritorial validity of legislation. Why should you be afraid of the legislation of the USA, Japan, Switzerland, etc. even if you are not registered in these countries?</p>,
            },
            break: {
              desc: <p>1 hour 15 minutes Break</p>,
            },
            seventh: {
              name: 'Seventh block',
              desc: <p>How to identify the residents of the countries of the project? How to reduce the risks of violating the laws of third countries? How to organize the business process in order not to fall under the requirements of countries for obtaining permits and licenses? How to implement the requirements for customer identification and organize the internal due diligence?</p>,
            },
            eigth: {
              name: 'Eight block',
              desc: <p>What tax consequences of the crypto exchange activity in the US, EU and other countries? Experience in the organization of existing crypto exchanges and other professional participants: Coinbase, BTCC, Payment21, etc. The possibility of organizing crypto-exchanges in Russia: the existing regulation, risks and recommendations.</p>,
            },
          },
        },
      },
      speakers: {
        prilutsky: {
          name: 'Sergey Prilutsky',
          position: 'Co-founder, Software Engineer',
          description:
            <ul>
              <li>Started programming in the elementary school, worked as a system administrator for many years</li>
              <li>Was engaged in reverse engineering and software security, researched software protection and antivirus engines</li>
              <li>Graduated from the Moscow Engineering and Physics Institute and was a lector of such courses as "Databases" and "Information Security", conducted research projects on security cryptographic methods</li>
              <li>For many years worked at Mail.Ru as a leading developer on many projects, the last years in the team of Antispam</li>
              <li>Worked with systems, ranging from small highly loaded micro services and sites to the large clusters for distributed computing</li>
              <li>The teacher and author of the course on information security for the "Technopark" (Baumanka) and "Technoatom" (MEPhI) projects</li>
              <li>Active member of the blockchain developers community</li>
            </ul>,
        },
        lawyersTeam: {
          header: 'Team of lawyers',
          position: 'Moderations of \u00ABBlockchain and Law\u00BB part',
          levashenko: {
            name: 'Antonina Levashenko',
            desc: <p>International Lawyer. Expert of the Center for Strategic Development. Senior Researcher of the Russian Foreign Trade Academy of the Ministry for the Economic Development of the Russian Federation. Head of the Competence and Analysis Center of The Russian Academy of National Economy and Public Service under the President of the Russian Federation.</p>,
          },
          ermohin: {
            name: 'Ivan Ermohin',
            desc: <p>International Lawyer. Researcher of the Ministry of Economic Development of the Russian Federation. Expert of the Center for Competencies and Analysis Center of The Russian Academy of National Economy and Public Service under the President of the Russian Federation.</p>,
          },
          lebedeva: {
            name: 'Sofya Lebedeva',
            desc: <p>Specialist in the field of International Economics. Researcher of the Center for Competencies and Analysis Center of The Russian Academy of National Economy and Public Service under the President of the Russian Federation.</p>,
          },
          girich: {
            name: 'Maria Girich',
            desc: <p>International Lawyer. Researcher of the club “Russia - OECD” of the Ministry of Economic Development of the Russian Federation.</p>,
          },
          koval: {
            name: 'Alexandra Koval',
            desc: <p>International Lawyer, director of the club “Russia - OECD” of the Ministry of Economic Development of the Russian Federation.</p>,
          },
        },
      },
      conditions: {
        soon: <span> We&nbsp;plan to&nbsp;hold the next intensive in&nbsp;March 2018. <br /> Watch out for announcements on&nbsp;Facebook and Telegram!</span>,
        title: 'Conditions',
        early: {
          header: 'Before December 1',
          text: '6000₽, VIP (1-2 rows) 12000₽',
        },
        late: {
          header: 'After December 1',
          text: '9000₽, VIP (1-2 rows) 18000₽',
        },
        registration: 'register on Timepad.ru',
        sale: '-20% when paying with Bitcoin or Ethereum',
        saleDescription: <p>Make the transfer at <a href="/helpers">the current exchange rate</a>, minus 20% and send us the full names of the participants for listing. If you pay with bitcoins, you don’t need to register on Timepad.ru.</p>,
      },
      location: {
        title: 'Location',
        place: <p><strong>Klyuch Trechgorka</strong>&nbsp;&mdash; Moscow, Rochdelskaya Street,&nbsp;15, building 17-18, 3rd&nbsp;floor (metro &laquo;1905&nbsp;Street&raquo; or &laquo;Barrikadnaya&raquo;). Directions: <a href="https://kl10.ch/wp-content/uploads/tgm-walk.pdf">by&nbsp;your&nbsp;own</a>, <a href="https://kl10.ch/wp-content/uploads/tgm-aut.pdf">by&nbsp;car</a>.</p>,
        support: <p>If you have questions, write to our Telegram-chat: <a href="https://t.me/mixbytes_pub">https://t.me/mixbytes_pub</a><br />or call&nbsp;+7 (919) 763-31-66 (Ilona).</p>,
      },
      partners: {
        title: 'Informational partners',
      },
    },

    team: {
      prilutsky: {
        name: 'Sergey Prilutsky',
        desc:
          <ul>
            <li>Started programming in the elementary school, worked as a system administrator for many years</li>
            <li>Was engaged in reverse engineering and software security, researched software protection and antivirus engines</li>
            <li>Graduated from the Moscow Engineering Physics Institute</li>
            <li>For many years worked at Mail.Ru as a leading developer on many projects, the last years in the team of Antispam</li>
            <li>Worked with systems, ranging from small highly loaded micro services and sites to the large clusters for distributed computing</li>
            <li>The teacher and author of the course on information security for the «Technopark» (BMSTU)</li>
            <li>Active member of the blockchain developers community</li>
          </ul>,
      },
      vasilchikov: {
        name: 'Yuri Vasilchikov',
        desc:
          <ul>
            <li>Wrote a clone of Tetris in BASIC</li>
            <li>Started to develop the sites in 2000 in Perl</li>
            <li>Worked as a programmer in the studio of Lebedev for one year</li>
            <li>In 2005, co-founded the Eggo.ru web studio, where he worked as a technical director for 6 years</li>
            <li>Managed the Eggo.ru web-studio for 3 years</li>
            <li>Consulted and developed solutions for more than 150 small and medium-sized companies</li>
          </ul>,
      },
      makeev: {
        name: 'Alexey Makeev',
        desc:
          <ul>
            <li>Graduated from the Bauman Moscow State Technical University (BMSTU), Faculty &laquo;Computer Complexes, Systems and Networks&raquo;</li>
            <li>Experience in programming for 17 years (Assembler, C/C ++, Java, PHP, Perl, Python, JS)</li>
            <li>Experience in Big Data solutions developing Big Data on the industrial-scale Hadoop cluster</li>
            <li>Worked as a team leader in the Internet search project Поиск@mail.ru</li>
            <li>Worked as a system architect at 1C Company</li>
            <li>Fields of interest: Big Data, distributed computing, information security, finance, investments</li>
          </ul>,
      },
      karbachinsky: {
        name: 'Igor Karbachinsky',
        desc:
          <ul>
            <li>Graduated from the Moscow Institute of Electronics and Mathematics, Cybernetics Faculty, Diploma on ranking algorithms in searching engines</li>
            <li>12 years of programming experience (C / C ++, Java, PHP, Perl, Python, JS)</li>
            <li>Headed the department in the Internet searching engine Поиск@mail.ru for many years</li>
            <li>Worked on the Data Science Architect position in such projects as Lang.ai and Sentisis.com</li>
            <li>Experienced in creating industrial IT solutions in Google and Amazon clouds</li>
            <li>Field of interests: Data analysis, Big Data, Game theory, Speech technology</li>
          </ul>,
      },
      kruglov: {
        name: 'Pavel Kruglov',
        desc:
          <ul>
            <li>Graduated from the National Research Nuclear University &laquo;Moscow Engineering Physics Institute&raquo;, Faculty of Information Security of Banking Systems</li>
            <li>Started programming on C/C ++ and developing sites while learning at school, <s>and then break them, hehe</s></li>
            <li>Worked on several projects as an information security expert, including the Central Bank of Russia</li>
            <li>Has more than 30 personal publications in the Hacker magazine, more than 100 as an editor</li>
            <li>Interests: information security, system analysis, investment, psychology</li>
          </ul>,
      },
      yakovlev: {
        name: 'Andrey Yakovlev',
        desc:
          <ul>
            <li>Graduated from Faculty of Mechanics and Mathematics of Moscow National University with a degree in applied mathematics and computer science</li>
            <li>7 years of programming experience (Python, JS, Bash)</li>
            <li>Started as a testing engineer in Mirantis company, then worked as DevOps engineer there</li>
            <li>Worked as a DevOps-engineer in the Internet searching engine Поиск@mail.ru</li>
            <li>Worked as auto-tests developer in Kaspersky Lab company</li>
            <li>Interested in startups and investments, dreams of a unicorn :)</li>
          </ul>,
      },
      shubin: {
        name: 'Mikhail Shubin',
        desc:
          <ul>
            <li>While still in school, organized a “domoneta” (home-coin) cell network with a collective connection to the Net. Maintained a FidoNet node</li>
            <li>Graduated from Tomsk State University of Control Systems and Radioelectronics, where he studied in the Department of Radio Communications, Radio Broadcasting, and Television</li>
            <li>Developed digital measuring devices</li>
            <li>Handled the administration of systems with varying levels of complexity. Wrote code in Python, Perl, and Bash</li>
            <li>Likes to learn new things to understand “how it works” and “how it can be used”</li>
            <li>Major interests: robotics, electronics, psychology</li>
          </ul>,
      },
      galuzinskaya: {
        name: 'Ilona Galuzinskaya',
        desc:
          <ul>
            <li>Ilona is the only team member who has never programmed anything. She’s working hard to master the concepts of fork, hash, and node</li>
            <li>Graduated from the Moscow Power Engineering Institute with a major in public relations, a field far removed from power engineering</li>
            <li>Since 2015, has worked as an IT Account Manager</li>
            <li>Handles administrative tasks and arranges MixBytes lectures</li>
            <li>Interests include starting to understand what blockchain is. And fashion, of course :)</li>
          </ul>,
      },
      privezentsev: {
        name: 'Konstantin Privezentsev',
        desc:
          <ul>
            <li>Graduated from the Moscow Institute of Electronics and Mathematics with a degree in CAD</li>
            <li>8 years of programming experience</li>
            <li>Worked as a developer in Paragon, BigData-infrastructure developer in Internet searching engine Poisk Mail.Ru and data processing systems in Kaspersky Lab</li>
            <li>Interests: databases, functional programming, distributed computing</li>
          </ul>,
      },
    },

    job: {
      title: 'Vacancy',
      blockchainDev: {
        name: 'Developer of smart contracts',
        desc: 'We are looking for an experienced developer to work on smart contracts (Solidity) and more. Experience in blockchain is not required, as we can grow blockchain developers out of clever seniors.',
        requirements: [
          <span>Basic knowledge of algorithms, data structures, graphs, state machines</span>,
          <span>Basic knowledge of cryptography, understanding of cryptographic protocols</span>,
          <span>Knowledge of network programming</span>,
          <span>Experience of development in multiple programming languages</span>,
          <span>4+ years of development experience</span>,
        ],
        advantages: [
          <span>Knowledge of *nix, experience in console programming</span>,
          <span>Experience in the development of high-load fault-tolerant systems</span>,
          <span>Knowledge of js, node, python, java, C++</span>,
          <span>Basic sense of consensus algorithms</span>,
          <span>Experience in low-level programming</span>,
        ],
        conditions: [
          <span>High salary</span>,
          <span>Loft office near the Ulitsa 1905 Goda metro station</span>,
          <span>Possibility of working remotely</span>,
        ]
      },
    },

    feedback: {
      writeToUs: 'Do you want to refine smth?',
      messageSent: <span>Thanks!<br />Your message has been sent.</span>,
      emailPlaceholder: 'your email',
      messagePlaceholder: 'enter your message (min. 80 characters)',
      send: 'Send',
    },
  },
};
