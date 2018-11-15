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

  footer: {
    contacts: 'Контакты',
    careers: 'Карьера'
  },

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
};
