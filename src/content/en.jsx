import React from 'react';

export default {

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
    program: 'Program Sample',
    requirements: 'Requirements',
    advantages: 'It would be a plus to have',
    conditions: 'Conditions',
    contactUs: 'Contact us',
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
    header: 'Blockchain Development On-Demand',
    description: 'Mixbytes is a team of blockchain talent. We help companies implement cutting-edged blockchain-based solutions thereby reducing the costs of hiring and in-house software development.',
    stack: 'Stack:',
    stackText: 'С/C++, Java, JS/TS, Python, Solidity, WebAssembly, Rust',
    blockchains: 'Blockchains:',
    blockchainsText: 'Bitcoin, Ethereum, EOS (Bitshares, Steem), Substrate (Polkadot)',
    facts: 'Facts:',
    factsTexts: [
      '> $50,000,000 collected with our well developed and finely audited smart contracts', 
      '> 11,500 expertise hours shipped',
      '> 300,000 lines of code written an audited',
      '> 100 GitHub repositories'
    ],
  },

  main: {
    navigation: {
      services: 'Services',
      feedback: 'Feedback',
    },

    services: 'Services',
    servicesItems: [
      {
        name: 'Smart Contract Development',
        text: 'Developing token contracts, prototypes (proof-of-concept) and smart contract systems for Ethereum based projects. Automating the launch of smart contracts in blockchain.',
        icon: 'icon-sc-dev.png'
      },
      {
        name: 'Decentralized Solutions Development and Consulting',
        text: 'Development of decentralized software for any purposes: cryptographic protocols, consensus algorithms, client software, blockchain infrastructure management. Software research, development of prototypes, audit of launched solutions.',
        icon: 'icon-decent-solutions.png'
      },
      {
        name: 'Smartz',
        text: 'Smart contract wizard and management console to configure, deploy and manage the most common type of contracts without needing sophisticated programming skills powered by a friendly UI.',
        icon: 'icon-smartz.png',
        button: {
          text: 'Try Smartz',
          link: 'https://smartz.io'
        }
      },
      {
        name: 'Smart Contract Audit',
        text: 'Audit of smart contracts, checking for vulnerabilities, logical errors, requirement compliance and unit-tests.',
        icon: 'icon-sc-audit.png'
      },
      {
        name: 'ICO Solutions',
        list: [
          'Ethereum smart contracts set for ICO: ERC20 token, crowdsale contracts, ether vault.',
          'Secure and reliable payment gateways for BTC, LTC, BCH and other BTC-like currencies.',
          'UI for participating, monitoring tokens and ICO statistics. Embeddable into any website, with customizable design, Google Ecommerce support, KYC provider integration functions.',
          'Administrator interface for ICO campaign management.',
        ],  
        icon: 'icon-ico-solutions.png'
      },
    ],
    
    cases: 'Cases',
    casesItems: [
      {
        logo: 'logo-poa.png',
        name: 'POA Network',
        description: 'Ethereum-based platform that offers an open-source framework for smart contracts',
        job: 'Smart contracts and consensus algorithm audit',
      },
      {
        logo: 'logo-storiqa.png',
        name: 'Storiqa',
        description: '# 1 Crypto marketplace',
        job: 'ICO smart contracts development',
      },
      {
        logo: 'logo-kickico.png',
        name: 'Kickico',
        description: 'Fundraising platform powered by blockchain',
        job: 'ICO smart contract audit',
      },
      {
        logo: 'logo-world-wifi.png',
        name: 'World WiFi',
        description: 'Blockchain platform for WiFi distribution',
        job: 'ICO smart contract audit',
      },
      {
        logo: 'logo-boomstarter.png',
        name: 'Boomstarter\u200B.Network',
        description: 'Global Cryptofunding Platform',
        job: 'Turn-key solution for ICO campaign',
      },
      {
        logo: 'logo-sp8de.png',
        name: 'Sp8de',
        description: 'Blockchain-based platform for unbiased public randomness.',
        job: 'Secure random beacon generation prototype development and research',
      },
      {
        logo: 'logo-raison.png',
        name: 'Raison',
        description: 'AI platform for investment',
        job: 'Consulting on blockchain wallet implementation',
      }
    ],

    wprocess: 'Working Process',
    wprocessSteps: [
      'Collect initial requirements.',
      'Consulting and Analytics: clarifying stack and delivery time.',
      'Estimating and preparing detailed proposal with timeframe and budget. Arranging the terms and agreement.',
      'Solution Design: architecture development and task decomposition.',
      'Building within 1 week sprints: Scrum, everyday 15 min stand-ups, coding and documentation.',
      'Release preparation and testing.',
      'Internal audit: security audit for vulnerabilities.',
      'Delivery: deployment into blockchain.',
    ],

    founders: 'Founders',

    openSource: 'We are for open source',
  },

  meetUs: {
    anchor: 'Meet us',
    title: <span>We&nbsp;will be&nbsp;glad to&nbsp;meet you</span>,
    description: <span>We&nbsp;develop smart contracts, conduct their audits, advise organizations, and talk about this in&nbsp;our courses and lectures.</span>,
    linkText: 'Get to know us better',
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
      title: <h2>Intensive courses, lectures and master classes on blockchain technology</h2>,
      description: <p>We have already conducted dozens of educational events: starting from small meetups and ending with two-day intensities. At our events, you will get a fundamental understanding of the technical and legal basis of blockchain technologies, cryptography theory, consensus types, and mining. You will finally understand how and why it all works!</p>,
      comment: <p>If you want to order a course, write a request to <a href="mailto:hello@mixbytes.io">hello@mixbytes.io</a>.</p>,
    },
    info: {
      blockchain: {
        name: 'Blockchain',
        content: <p><strong>Blockchain&nbsp;&mdash;</strong> is&nbsp;a&nbsp;digital register of&nbsp;transactions, contracts and other information. This is&nbsp;a&nbsp;method of&nbsp;storage and cryptographic protection of&nbsp;data from the forgery. It&nbsp;was described in&nbsp;1991.</p>,
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
      businessmen: ' businessmen',
      investors: ' investors',
      lawyers: ' lawyers',
      managers: ' managers',
      programmers: ' programmers',
    },
    description: {
      intro: <span>The blokchain technologies appeared in&nbsp;our lives and, it&nbsp;seems, they&rsquo;re going to&nbsp;completely change&nbsp;it. Bitcoin and ICO are on&nbsp;everyone&rsquo;s lips, people invest money in&nbsp;that without even knowing what it&nbsp;is&nbsp;all about. Unfortunately, most of&nbsp;the available information is&nbsp;either too technical and incomprehensible documentation for programmers, or&nbsp;too advertising and provocative, aimed at&nbsp;the attracting investments to&nbsp;some ICO.</span>,
      courceGoal: <span>We&nbsp;support the popularization of&nbsp;blockchain-technologies, transparency and accessibility of&nbsp;information, as&nbsp;well as&nbsp;the safety of&nbsp;financial transactions. During the course, you will receive a&nbsp;foundation of&nbsp;knowledge that will allow you to&nbsp;be&nbsp;confident in&nbsp;the news and advertising flow. You can also learn how to&nbsp;make wise decisions about using blockchain-technologies in&nbsp;your life, career and business.</span>,
    },
    advices: {
      first: <span>If&nbsp;you are a&nbsp;skeptic, come and ask the most difficult questions to&nbsp;the speakers. Most likely, you will believe in&nbsp;the power of&nbsp;blockchain-technologies more after that.</span>,
      second: <span>If&nbsp;the blockchain and ICO have already turned your head&nbsp;&mdash; please come too, we&nbsp;will try to&nbsp;cool you down a&nbsp;little bit.</span>,
      promise: <span>We&nbsp;promise that there will be&nbsp;any advertising and appeal to&nbsp;invest your money.</span>,
    },
    program: {
      dayOne: {
        name: 'Day\u00A01. Cryptography, blockchain, Bitcoin: tearing off the covers',
        blocks: {
          first: {
            name: 'First block',
            desc: <p><strong>Introduction to&nbsp;cryptography</strong><br />Symmetric cryptosystems. The internal arrangement of&nbsp;symmetric ciphers. Data Integrity and Checksums. Authentication schemes and storage of&nbsp;passwords. Algorithms of&nbsp;how programs of&nbsp;the information protection work. Asymmetric cryptosystems. Electronic signature scheme. Attacks such as&nbsp;man-in-the-middle and a&nbsp;certificate system. TOR and mixed networks. Coin flipping protocol.</p>,
          },
          second: {
            name: 'Second block',
            desc: <p><strong>Blockсhain</strong><br />Definitions of&nbsp;blockchain. Blocks, mechanisms of&nbsp;block adhesion and chain integrity. Highlights of&nbsp;the Bitcoin algorithm. The complexity requirements and the mining algorithm&rsquo;s scheme of&nbsp;operation. The concept of&nbsp;consensus and a&nbsp;detailed consideration of&nbsp;the Proof Of&nbsp;Work consensus. Double spend attacks and&nbsp;51%, the strategies of&nbsp;mining pools, the stability of&nbsp;the network.</p>,
          },
          break: {
            desc: <p>1 hour 15 minutes Break</p>,
          },
          third: {
            name: 'Third block',
            desc: <p>The task of&nbsp;Byzantine generals and other types of&nbsp;consensus. &laquo;Proof of&nbsp;stake&raquo; and &laquo;delegated proof of&nbsp;stake&raquo;. The Graphene engine and the projects that were based on&nbsp;it. Examples of&nbsp;complex internal project economics, decentralization issues. &laquo;Proof of&nbsp;storage&raquo;, &laquo;proof of&nbsp;compute&raquo;, &laquo;Proof of&nbsp;everything&raquo;. Examples of&nbsp;the using smart contracts and the work scheme of&nbsp;the Ethereum network.</p>,
          },
          fourth: {
            name: 'Fourth block',
            desc: <p><strong>Blockchain and business.</strong><br />Payments in&nbsp;cryptocurrencies. Cryptocurrencies and wallets. Priority of&nbsp;transaction, commission and gas. Centralized vs&nbsp;decentralized solutions. Issue of&nbsp;tokens, standard ERC20. Anatomy of&nbsp;crowdsale smart contract for ICO&nbsp;/ ITO. Audit of&nbsp;smart contracts security, examples of&nbsp;vulnerabilities. Designing mistakes and quality of&nbsp;crowdsale economic models.</p>,
          },
        },
      },
      dayTwo: {
        name: 'Day\u00A02. ICO Technologies and Global Law Practice',
        blocks: {
          fifth: {
            name: 'Fifth block',
            desc: <p>Blockchain as&nbsp;a&nbsp;marketing &laquo;whistle&raquo; and blockchain as&nbsp;a&nbsp;breakthrough. When do&nbsp;you need blockchain and what can&nbsp;BT technologies bring to&nbsp;the project? Types and peculiarities of&nbsp;crypto-tokens. &laquo;I&nbsp;want ICO&raquo;&nbsp;&mdash; the order of&nbsp;actions. Investor&rsquo;s private office&nbsp;&mdash; what do&nbsp;you need to&nbsp;know. The issues of&nbsp;accepting BTC and other cryptocurrencies in&nbsp;the framework of&nbsp;the ICO. Overview of&nbsp;ICO-platforms.</p>,
          },
          sixth: {
            name: 'Sixth block',
            desc: <p><strong>Blockchain and the law.</strong> <br />Legal aspects of&nbsp;ITO&nbsp;/ ICO. Experience in&nbsp;regulating professional participants of&nbsp;market in&nbsp;the US, Japan, Switzerland, Germany, the Isle of&nbsp;Man, the&nbsp;UK and more than other 10&nbsp;countries. Extraterritorial validity of&nbsp;legislation. Why should you be&nbsp;afraid of&nbsp;the legislation of&nbsp;the USA, Japan, Switzerland, etc. even if&nbsp;you are not registered in&nbsp;these countries?</p>,
          },
          break: {
            desc: <p>1 hour 15 minutes Break</p>,
          },
          seventh: {
            name: 'Seventh block',
            desc: <p>How to&nbsp;identify the residents of&nbsp;the countries of&nbsp;the project? How to&nbsp;reduce the risks of&nbsp;violating the laws of&nbsp;third countries? How to&nbsp;organize the business process in&nbsp;order not to&nbsp;fall under the requirements of&nbsp;countries for obtaining permits and licenses? How to&nbsp;implement the requirements for customer identification and organize the internal due diligence?</p>,
          },
          eigth: {
            name: 'Eight block',
            desc: <p>What tax consequences of&nbsp;the crypto exchange activity in&nbsp;the US, EU&nbsp;and other countries? Experience in&nbsp;the organization of&nbsp;existing crypto exchanges and other professional participants: Coinbase, BTCC, Payment21, etc. The possibility of&nbsp;organizing crypto-exchanges in&nbsp;Russia: the existing regulation, risks and recommendations.</p>,
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
            <li>Started programming in&nbsp;the elementary school, worked as&nbsp;a&nbsp;system administrator for many years</li>
            <li>Was engaged in&nbsp;reverse engineering and software security, researched software protection and antivirus engines</li>
            <li>Graduated from the Moscow Engineering and Physics Institute and was a&nbsp;lector of&nbsp;such courses as&nbsp;&laquo;Databases&raquo; and &laquo;Information Security&raquo;, conducted research projects on&nbsp;security cryptographic methods</li>
            <li>For many years worked at&nbsp;Mail.Ru as&nbsp;a&nbsp;leading developer on&nbsp;many projects, the last years in&nbsp;the team of&nbsp;Antispam</li>
            <li>Worked with systems, ranging from small highly loaded micro services and sites to&nbsp;the large clusters for distributed computing</li>
            <li>The teacher and author of&nbsp;the course on&nbsp;information security for the &laquo;Technopark&raquo; (Baumanka) and &laquo;Technoatom&raquo; (MEPhI) projects</li>
            <li>Active member of&nbsp;the blockchain developers community</li>
          </ul>,
      },
      lawyersTeam: {
        header: 'Team of lawyers',
        position: 'Moderations of \u00ABBlockchain and Law\u00BB part',
        levashenko: {
          name: 'Antonina Levashenko',
          desc: <p>International Lawyer. Expert of&nbsp;the Center for Strategic Development. Senior Researcher of&nbsp;the Russian Foreign Trade Academy of&nbsp;the Ministry for the Economic Development of&nbsp;the Russian Federation. Head of&nbsp;the Competence and Analysis Center of&nbsp;The Russian Academy of&nbsp;National Economy and Public Service under the President of&nbsp;the Russian Federation.</p>,
        },
        ermohin: {
          name: 'Ivan Ermohin',
          desc: <p>International Lawyer. Researcher of&nbsp;the Ministry of&nbsp;Economic Development of&nbsp;the Russian Federation. Expert of&nbsp;the Center for Competencies and Analysis Center of&nbsp;The Russian Academy of&nbsp;National Economy and Public Service under the President of&nbsp;the Russian Federation.</p>,
        },
        lebedeva: {
          name: 'Sofya Lebedeva',
          desc: <p>Specialist in&nbsp;the field of&nbsp;International Economics. Researcher of&nbsp;the Center for Competencies and Analysis Center of&nbsp;The Russian Academy of&nbsp;National Economy and Public Service under the President of&nbsp;the Russian Federation.</p>,
        },
        girich: {
          name: 'Maria Girich',
          desc: <p>International Lawyer. Researcher of&nbsp;the club &laquo;Russia&nbsp;&mdash; OECD&raquo; of&nbsp;the Ministry of&nbsp;Economic Development of&nbsp;the Russian Federation.</p>,
        },
        koval: {
          name: 'Alexandra Koval',
          desc: <p>International Lawyer, director of&nbsp;the club &laquo;Russia&nbsp;&mdash; OECD&raquo; of&nbsp;the Ministry of&nbsp;Economic Development of&nbsp;the Russian Federation.</p>,
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

  team: [
    {
      name: 'Sergey Prilutsky',
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
    title: 'Vacancy',
    blockchainDev: {
      name: 'Senior Blockchain developer',
      desc: <span>In&nbsp;our MixBytes team we&nbsp;invite an&nbsp;experienced developer who will deal with: smart contracts development (ICO, crypto-prototypes such as&nbsp;DAO), smart contracts audit, development of&nbsp;own solutions (for example, mixbytes-solidity library) and active RnD&nbsp;at the forefront of&nbsp;technological progress. Experience in&nbsp;blockchain is&nbsp;not required, as&nbsp;we&nbsp;can grow blockchain developers out of&nbsp;clever seniors.</span>,
      requirements: [
        <span>Confident knowledge of&nbsp;algorithms, data structures, graphs, finite-state machines</span>,
        <span>Confident knowledge of&nbsp;cryptography, understanding of&nbsp;cryptographic protocols</span>,
        <span>Knowledge of&nbsp;network programming</span>,
        <span>Experience in&nbsp;different programming languages</span>,
        <span>Development experience 4+&nbsp;years</span>,
      ],
      advantages: [
        <span>Experience in Solidity</span>,
        <span>Knowledge of&nbsp;*nix, experience in&nbsp;console programming</span>,
        <span>Experience in&nbsp;the development high-loaded fault-tolerant systems</span>,
        <span>Knowledge of&nbsp;JS, Node.js, python, Java, C++</span>,
        <span>Basic sense of consensus algorithms</span>,
        <span>Experience in low-level programming</span>,
      ],
      conditions: [
        <span>High salary</span>,
        <span>Possibility of&nbsp;working remotely</span>,
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
};
