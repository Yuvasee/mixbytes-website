import React from 'react';

export default {

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
    timestampsPlaceholder: 'Скопируйте код сюда',
    program: 'Пример программы интенсива',
    requirements: 'Требования',
    advantages: 'Будет плюсом',
    conditions: 'Условия',
    contactUs: 'Свяжитесь с нами'
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
    header: 'Блокчейн разработка на заказ',
    description: 'Mixbytes — команда блокчейн программистов. Мы помогаем компаниям внедрять передовые решения на основе блокчейн технологии, сокращая их затраты на подбор и обучение внутренней команды разработки.',
    stack: 'Стек технологий:',
    stackText: 'С/C++, Java, JS/TS, Python, Solidity, WebAssembly, Rust',
    blockchains: 'Блокчейны:',
    blockchainsText: 'Bitcoin, Ethereum, EOS (Bitshares, Steem), Substrate (Polkadot)',
    facts: 'Факты:',
    factsTexts: [
      '> $50,000,000 собрано с помощью разработанных и проаудированных нами смарт-контрактов', 
      '> 11,500 трудочасов программистов отгружено',
      '> 300,000 строк кода написано и проаудировано',
      '> 100 GitHub репозиториев',
    ],
  },

  main: {
    navigation: {
      services: 'Услуги',
      feedback: 'Обратная связь',
    },

    services: 'Услуги',
    servicesItems: [
      {
        name: 'Разработка смарт-контрактов',
        text: 'Разработка контрактов токенов, прототипов (proof-of-concept) и систем смарт-контрактов для блокчейн-проектов на Ethereum. Автоматизация запуска смарт-контрактов в блокчейн.',
        icon: 'icon-sc-dev.png'
      },
      {
        name: 'Консалтинг и разработка децентрализованных систем',
        text: 'Разработка децентрализованного ПО под различные задачи: криптографические протоколы, алгоритмы консенсуса, клиентский софт, системы управления блокчейн инфраструктурой. Исследование ПО, разработка пилотных прототипов и аудит уже запущенных проектов.',
        icon: 'icon-decent-solutions.png'
      },
      {
        name: 'Smartz',
        text: 'Система управления смарт-контрактами. Позволяет создавать и администрировать наиболее распространенные виды смарт-контрактов. Платформа имеет дружественный интерфейс и не требует специальных навыков программирования.',
        icon: 'icon-smartz.png',
        button: {
          text: 'Попробуйте Smartz',
          link: 'https://smartz.io'
        }
      },
      {
        name: 'Аудит смарт-контрактов',
        text: 'Проверка смарт-контрактов на наличие уязвимостей, логических ошибок, соответствие техническим требованиям. Код контракта просматривается вручную, при необходимости пишутся unit-тесты.',
        icon: 'icon-sc-audit.png'
      },
      {
        name: 'Решения для ICO',
        list: [
          'Ethereum смарт-контракты: токен ERC20, сrowdsale, хранилище эфира.',
          'Прием Ethereum и Bitcoin без комиссий и других валют через сoinpayments.net',
          'Личный кабинет участника, встраиваемый в любой сайт с возможностью настроить дизайн. Функции приёма BTC, ETH и других валют, проведения KYC, статистика участия, общая статистика ICO и связь с Google E-commerce.',
          'Административный интерфейс для управления ICO кампанией',
        ],  
        icon: 'icon-ico-solutions.png'
      },
    ],

    cases: 'Примеры',
    casesItems: [
      {
        logo: 'logo-poa.png',
        name: 'POA Network',
        description: 'Платформа на основе Ethereum, предлагающая открытый фреймворк для смарт-контрактов',
        job: 'Аудит смарт-контрактов и алгоритма консенсуса',
      },
      {
        logo: 'logo-storiqa.png',
        name: 'Storiqa',
        description: '# 1 Крипто маркетплейс',
        job: 'Разработка смарт-контрактов для ICO',
      },
      {
        logo: 'logo-kickico.png',
        name: 'Kickico',
        description: 'Фандрайзинговая платформа на основе блокчейн',
        job: 'Аудит смарт-контракта ICO',
      },
      {
        logo: 'logo-world-wifi.png',
        name: 'World WiFi',
        description: 'Блокчейн платформа для дистрибуции WiFi',
        job: 'Аудит смарт-контракта ICO',
      },
      {
        logo: 'logo-boomstarter.png',
        name: 'Boomstarter\u200B.Network',
        description: 'Глобальная криптофандинговая платформа',
        job: 'Разработка технического решения для ICO кампании «под ключ»',
      },
      {
        logo: 'logo-sp8de.png',
        name: 'Sp8de',
        description: 'Блокчейн платформа для сферы гемблинга',
        job: 'Исследования и разработка прототипа системы непредвзятой генерации случайных чисел',
      },
      {
        logo: 'logo-raison.png',
        name: 'Raison',
        description: 'AI инвестиционная платформа',
        job: 'Консультация по внедрению блокчейн кошелька',
      }
    ],

    wprocess: 'Процесс работы',
    wprocessSteps: [
      'Сбор первоначальных требований.',
      'Консультация и анализ: определения технологического стека и сроков выполнения.',
      'Оценка проекта и подготовка сметы. Заключение договора.',
      'Разработка техпроекта: архитектура приложения и декомпозиция задач.',
      'Разработка по Scrum в рамках недельных спринтов, подготовка сопроводительной документации.',
      'Тестирование и подготовка к релизу.',
      'Внутренний аудит на наличие уязвимостей.',
      'Деплой продукта в блокчейн сеть.',
    ],

    founders: 'Основатели',

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
      //participation: 'Участие',
      place: 'Место',
      partners: 'Партнеры',
    },
    header: {
      title: <h2>Интенсивы, лекции и мастер-классы по блокчейн-технологиям</h2>,
      description: <p>За время своего существования мы провели десятки образовательных мероприятий: начиная с небольших митапов и заканчивая двухдневными интенсивами. На наших мероприятиях вы получите фундаментальное понимание технической и&nbsp;юридической базы блокчейн-технологий, криптографического фундамента, консенсусов и&nbsp;майнинга. Вы,&nbsp;наконец, поймете как и&nbsp;почему всё это работает!</p>,
      comment: <p>Если вы хотите заказать у нас обучение, напишите запрос на почту <a href="mailto:hello@mixbytes.io">hello@mixbytes.io</a>.</p>,
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
      businessmen: ' бизнесменам',
      investors: ' инвесторам',
      lawyers: ' юристам',
      managers: ' менеджерам',
      programmers: ' программистам',
    },
    description: {
      intro: 'Блокчейн-технологии ворвались в\u00A0нашу жизнь\u00A0и, похоже, собираются полностью изменить\u00A0её. Биткоин и\u00A0ICO у\u00A0всех на\u00A0устах, в\u00A0них вкладывают деньги, часто даже не\u00A0понимая о\u00A0чем идет речь. Ведь, к\u00A0сожалению, большая часть доступной информации\u00A0 либо слишком техническая и\u00A0непонятная документация для программистов, либо слишком рекламная и\u00A0провокационная, нацеленная на\u00A0привлечение инвестиций в\u00A0очередное ICO.',
      courceGoal: 'Мы\u00A0болеем за\u00A0популяризацию блокчейн-технологий, за\u00A0прозрачность и\u00A0доступность информации, за\u00A0безопасность финансовых операций. На\u00A0курсе вы\u00A0получите фундамент знаний, который позволит вам уверенно ориентироваться в\u00A0новостном и\u00A0рекламном потоке. И\u00A0принимать взвешенные решения об\u00A0использовании блокчейн-технологий в\u00A0своей жизни, карьере и\u00A0бизнесе.',
    },
    advices: {
      first: 'Если вы\u00A0скептик — приходите и\u00A0задайте спикерам самые сложные вопросы. Cкорее всего, вы\u00A0поверите в\u00A0силу блокчейн-технологий больше, чем раньше.',
      second: 'Если блокчейн и\u00A0ICO уже вскружили вам голову — приходите тоже, мы\u00A0постараемся немного охладить ваш пыл.',
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

  team: [
    {
      name: 'Сергей Прилуцкий',
      position: 'Chief researcher',
      photo: 'prilutskiy.jpg',
      linkedin: 'https://www.linkedin.com/in/sergey-prilutskiy-2a619951/',
      desc:
        <ul>
          <li>Started programming in&nbsp;the elementary school, worked as&nbsp;a&nbsp;system administrator for many years</li>
          <li>Was engaged in&nbsp;reverse engineering and software security, researched software protection and antivirus engines</li>
          <li>Graduated from the Moscow Engineering Physics Institute</li>
          <li>For many years worked at&nbsp;Mail.Ru as&nbsp;a&nbsp;leading developer on&nbsp;many projects, the last years in&nbsp;the team of&nbsp;Antispam</li>
          <li>Worked with systems, ranging from small highly loaded micro services and sites to&nbsp;the large clusters for distributed computing</li>
          <li>The teacher and author of&nbsp;the course on&nbsp;information security for the &laquo;Technopark&raquo; (BMSTU)</li>
          <li>Active member of&nbsp;the blockchain developers community</li>
        </ul>,
    },
    {
      name: 'Yuri Vasilchikov',
      photo: 'vasilchikov.jpg',
      position: 'CEO',
      linkedin: 'https://www.linkedin.com/in/yuriy-vasilchikov/',
      desc:
        <ul>
          <li>Wrote a&nbsp;clone of&nbsp;Tetris in&nbsp;BASIC</li>
          <li>Started to&nbsp;develop the sites in&nbsp;2000 in&nbsp;Perl</li>
          <li>Worked as&nbsp;a&nbsp;programmer in&nbsp;the studio of&nbsp;Lebedev for one year</li>
          <li>In&nbsp;2005, co-founded the Eggo.ru web studio, where he&nbsp;worked as&nbsp;a&nbsp;technical director for 6&nbsp;years</li>
          <li>Managed the Eggo.ru web-studio for 3&nbsp;years</li>
          <li>Consulted and developed solutions for more than 150 small and medium-sized companies</li>
        </ul>,
    },
    {
      name: 'Alexey Makeev',
      photo: 'makeev.jpg',
      position: 'CTO',
      linkedin: 'https://www.linkedin.com/in/aleksey-makeyev-98471884/',
      desc:
        <ul>
          <li>Graduated from the Bauman Moscow State Technical University (BMSTU), Faculty &laquo;Computer Complexes, Systems and Networks&raquo;</li>
          <li>Experience in&nbsp;programming for 17&nbsp;years (Assembler, C/C++, Java, PHP, Perl, Python, JS)</li>
          <li>Experience in&nbsp;Big Data solutions developing Big Data on&nbsp;the industrial-scale Hadoop cluster</li>
          <li>Worked as&nbsp;a&nbsp;team leader in&nbsp;the Internet search project Поиск@mail.ru</li>
          <li>Worked as&nbsp;a&nbsp;system architect at&nbsp;1C&nbsp;Company</li>
          <li>Fields of&nbsp;interest: Big Data, distributed computing, information security, finance, investments</li>
        </ul>,
    },
    {
      name: 'Vadim Buyanov',
      photo: 'buyanov.jpg',
      position: 'Chief business developer',
      linkedin: 'https://www.linkedin.com/in/vadim-buyanov/',
    }
  ],

  job: {
    title: 'Вакансии',
    blockchainDev: {
      name: 'Senior Blockchain developer',
      desc: <span>В&nbsp;нашу команду MixBytes (https://mixbytes.io/) приглашаем опытного разработчика, который будет заниматься: разработкой смарт-контрактов (ICO, прототипов крипто-механизмов, например DAO-подобных), аудитом смарт-контрактов на&nbsp;предмет багов и&nbsp;уязвимостей, разработкой собственных решений (например библиотеки mixbytes-solidity) и&nbsp;активнейшем RnD&nbsp;на острие технологического прогресса. Опыт blockchain не&nbsp;требуем, умеем растить blockchain developer&rsquo;ов из&nbsp;толковых senior&rsquo;ов.</span>,
      requirements: [
        <span>Уверенные знания алгоритмов, структур данных, графов, конечных автоматов</span>,
        <span>Уверенные знания по&nbsp;криптографии, понимание криптографических протоколов</span>,
        <span>Знание сетевого программирования</span>,
        <span>Опыт разработки на&nbsp;разных языках</span>,
        <span>Опыт разработки 4+&nbsp;года</span>,
      ],
      advantages: [
        <span>Опыт разработки на Solidity</span>,
        <span>Знание *nix, опыт работы в&nbsp;консоли</span>,
        <span>Опыт разработки высоконагруженных отказоустойчивых систем</span>,
        <span>Знание&nbsp;js, node, python, java, C++</span>,
        <span>Представление об&nbsp;алгоритмах консенсуса</span>,
        <span>Опыт низкоуровневого программирования</span>,
      ],
      conditions: [
        <span>Высокая зарплата</span>,
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
};
