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

    devAudit: {
      title: 'Development and Audit',
      description: 'We write smart contracts with Solidity, completely from scratch or on the basis of proven libraries as OpenZeppelin. We comply with the ERC20 standard.We cover the code with unit-tests under the Truffle framework. We verify contracts for Etherscan. We find mistakes and vulnerabilities of your smart contracts. We develop blockchains based on the Graphene framework. Most likely, you will need our consultations.',
      example: <p><a href="https://github.com/mixbytes/storiqa_ico/tree/master/contracts">Contract</a> and&nbsp;<a href="https://github.com/mixbytes/audits_public/blob/master/solidity/KickICO/report.md">audit</a><br /> examples on&nbsp;Github</p>,
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
        name: 'Boomstarter.Network',
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

  team: {
    prilutsky: {
      name: 'Sergey Prilutsky',
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
    vasilchikov: {
      name: 'Yuri Vasilchikov',
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
    makeev: {
      name: 'Alexey Makeev',
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
    karbachinsky: {
      name: 'Igor Karbachinsky',
      desc:
        <ul>
          <li>Graduated from the Moscow Institute of&nbsp;Electronics and Mathematics, Cybernetics Faculty, Diploma on&nbsp;ranking algorithms in&nbsp;searching engines</li>
          <li>12&nbsp;years of&nbsp;programming experience (C&nbsp;/ C++, Java, PHP, Perl, Python, JS)</li>
          <li>Headed the department in&nbsp;the Internet searching engine Поиск@mail.ru for many years</li>
          <li>Worked on&nbsp;the Data Science Architect position in&nbsp;such projects as&nbsp;Lang.ai and Sentisis.com</li>
          <li>Experienced in&nbsp;creating industrial&nbsp;IT solutions in&nbsp;Google and Amazon clouds</li>
          <li>Field of&nbsp;interests: Data analysis, Big Data, Game theory, Speech technology</li>
        </ul>,
    },
    kruglov: {
      name: 'Pavel Kruglov',
      desc:
        <ul>
          <li>Graduated from the National Research Nuclear University &laquo;Moscow Engineering Physics Institute&raquo;, Faculty of&nbsp;Information Security of&nbsp;Banking Systems</li>
          <li>Started programming on&nbsp;C/C++ and developing sites while learning at&nbsp;school, <s>and then break them, hehe</s></li>
          <li>Worked on&nbsp;several projects as&nbsp;an&nbsp;information security expert, including the Central Bank of&nbsp;Russia</li>
          <li>Has more than 30&nbsp;personal publications in&nbsp;the Hacker magazine, more than 100&nbsp;as an&nbsp;editor</li>
          <li>Interests: information security, system analysis, investment, psychology</li>
        </ul>,
    },
    yakovlev: {
      name: 'Andrey Yakovlev',
      desc:
        <ul>
          <li>Graduated from Faculty of&nbsp;Mechanics and Mathematics of&nbsp;Moscow National University with a&nbsp;degree in&nbsp;applied mathematics and computer science</li>
          <li>7&nbsp;years of&nbsp;programming experience (Python, JS, Bash)</li>
          <li>Started as&nbsp;a&nbsp;testing engineer in&nbsp;Mirantis company, then worked as&nbsp;DevOps engineer there</li>
          <li>Worked as&nbsp;a&nbsp;DevOps-engineer in&nbsp;the Internet searching engine Поиск@mail.ru</li>
          <li>Worked as&nbsp;auto-tests developer in&nbsp;Kaspersky Lab company</li>
          <li>Interested in&nbsp;startups and investments, dreams of&nbsp;a&nbsp;unicorn :)</li>
        </ul>,
    },
    shubin: {
      name: 'Mikhail Shubin',
      desc:
        <ul>
          <li>While still in&nbsp;school, organized a&nbsp;&laquo;domoneta&raquo; (home-coin) cell network with a&nbsp;collective connection to&nbsp;the Net. Maintained a&nbsp;FidoNet node</li>
          <li>Graduated from Tomsk State University of&nbsp;Control Systems and Radioelectronics, where he&nbsp;studied in&nbsp;the Department of&nbsp;Radio Communications, Radio Broadcasting, and Television</li>
          <li>Developed digital measuring devices</li>
          <li>Handled the administration of&nbsp;systems with varying levels of&nbsp;complexity. Wrote code in&nbsp;Python, Perl, and Bash</li>
          <li>Likes to&nbsp;learn new things to&nbsp;understand &laquo;how it&nbsp;works&raquo; and &laquo;how it&nbsp;can be&nbsp;used&raquo;</li>
          <li>Major interests: robotics, electronics, psychology</li>
        </ul>,
    },
    galuzinskaya: {
      name: 'Ilona Galuzinskaya',
      desc:
        <ul>
          <li>Ilona is&nbsp;the only team member who has never programmed anything. She&rsquo;s working hard to&nbsp;master the concepts of&nbsp;fork, hash, and node</li>
          <li>Graduated from the Moscow Power Engineering Institute with a&nbsp;major in&nbsp;public relations, a&nbsp;field far removed from power engineering</li>
          <li>Since 2015, has worked as&nbsp;an&nbsp;IT&nbsp;Account Manager</li>
          <li>Handles administrative tasks and arranges MixBytes lectures</li>
          <li>Interests include starting to&nbsp;understand what blockchain&nbsp;is. And fashion, of&nbsp;course :)</li>
        </ul>,
    },
    privezentsev: {
      name: 'Konstantin Privezentsev',
      desc:
        <ul>
          <li>Graduated from the Moscow Institute of&nbsp;Electronics and Mathematics with a&nbsp;degree in&nbsp;CAD</li>
          <li>8&nbsp;years of&nbsp;programming experience</li>
          <li>Worked as&nbsp;a&nbsp;developer in&nbsp;Paragon, BigData-infrastructure developer in&nbsp;Internet searching engine Poisk Mail.Ru and data processing systems in&nbsp;Kaspersky Lab</li>
          <li>Interests: databases, functional programming, distributed computing</li>
        </ul>,
    },
    ievlev: {
      name: 'Algys Ievlev',
      desc:
        <ul>
          <li>BMSTU senior student, participated in&nbsp;the &laquo;Technopark&raquo; project</li>
          <li>Intern developer in&nbsp;Mail.Ru Group, messenger&rsquo;s team</li>
          <li>Started C/C++ programming in&nbsp;the 8th school grade, practiced in&nbsp;competitive programming</li>
          <li>Participated in&nbsp;the final of&nbsp;the All-Russia Programming Competition. Has a&nbsp;diploma of&nbsp;the 3d&nbsp;degree</li>
          <li>Developed prototypes using Steem and EOS platforms</li>
        </ul>,
    },
    polyakov: {
      name: 'Maxim Polyakov',
      desc:
        <ul>
          <li>Created his first (harmless) computer virus in&nbsp;20-th century</li>
          <li>Has 15&nbsp;years experience in&nbsp;Linux system administration (he&nbsp;knows who Patrick Volkerding&nbsp;is)</li>
          <li>Worked as&nbsp;Perl back-end developer in&nbsp;Mail.Ru Group (2013-2018)</li>
          <li>More than 20&nbsp;years experience in&nbsp;programming using different languages: Assembly, C/C++, Javascript, Perl, Lua, Golang, Solidity (also Basic, PHP and&nbsp;Python, but he does not like to talk about it)</li>
          <li>Interests: smart contract development, highload, distributed decentralized systems, software security, internet anonymity</li>
        </ul>,
    },
  },

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
