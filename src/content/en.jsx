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

  footer: {
    contacts: 'Contacts',
    careers: 'Careers'
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
};
