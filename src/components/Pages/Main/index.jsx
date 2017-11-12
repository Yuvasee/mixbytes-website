import React, {Component} from 'react';

import PageLayout from 'components/PageLayout';
import PageNav from 'components/PageNav';
import ContentLayout from 'components/ContentLayout';
import ContentBlock from 'components/ContentBlock';

import HeaderJumbo from 'components/HeaderJumbo';
import BlockWithIcon from 'components/ContentBlock/BlockWithIcon';
import BlockTwoColumns from 'components/ContentBlock/BlockTwoColumns';
import BlockEvent from 'components/ContentBlock/BlockEvent';
import Splurge from 'components/Splurge';
import Capabilities from 'components/Capabilities';
import MeetUs from 'components/MeetUs';

class Main extends Component {
  render() {
    const pageNav = [
      {link: 'dev-audit', name: 'Разработка и аудит'},
      {link: 'consulting', name: 'Консалтинг'},
      {link: 'lectures', name: 'Ближайшие лекции'},
      {link: 'splurge', name: '>&#8201;25&#8201;000&#8201;000&#8201;$'},
      {link: 'capabilities', name: 'Наши возможности'},
      {link: 'meet-us', name: 'Будем знакомы'},
    ];

    return (
      <PageLayout>
        <HeaderJumbo />
        <ContentLayout contentRight={<PageNav links={pageNav} />}>
          <ContentBlock id="dev-audit">
            <h2>Разработка и аудит</h2>
            <BlockWithIcon
              icon={require('./i/github-logo.png')}
              iconText={<p>Пример <a href="https://github.com/mixbytes/storiqa_ico/tree/master/contracts">контракта</a><br />и&nbsp;<a href="https://github.com/mixbytes/audits_public/blob/master/solidity/KickICO/report.md">аудита</a> на&nbsp;Гитхабе</p>}
            >
              <p>Пишем и&nbsp;проверяем смарт-контракты на&nbsp;Solidity с&nbsp;нуля или на&nbsp;основе проверенных бибилиотек. Соблюдаем стандарт ERC20. Тестируем код под Truffle framework. Верифицируем контракты на&nbsp;Etherscan. Находим ошибки и&nbsp;уязвимости в&nbsp;вашем смарт-контракте. Разрабатываем блокчейны на&nbsp;базе фреймворка Graphene. Скорее всего, сначала вампонадобятся наши консультации.</p>
            </BlockWithIcon>
          </ContentBlock>
          <ContentBlock id="consulting">
            <h2>Консалтинг</h2>
            <BlockTwoColumns
              content={[
                {
                  header: "Бизнес-требования",
                  text: "Поможем найти возможные приложения блокчейн-технологий к&nbsp;вашему бизнесу и&nbsp;составить экономическую модель ваших токенов."
                },
                {
                  header: "Помощь в&nbsp;HR",
                  text: "Поможем определить требования к&nbsp;блокчейн программистам, проведем технические собеседования, разметим путь для роста и&nbsp;обучения."
                },
                {
                  header: "Выбор тех решений",
                  text: "Подберем стек технологий для решения задачи. Порекомендуем фреймворки, библиотеки, проверенные смарт-контракты."
                },
                {
                  header: "Составим техзадание",
                  text: "Правильно сформулируем требования для программистов в&nbsp;техническом проекте."
                }
              ]}
            />
          </ContentBlock>
          <ContentBlock id="lectures">
            <h2>Ближайшие лекции</h2>
            <BlockEvent
              date="9-10 декабря"
              header="Интенсив &laquo;Погружение в&nbsp;блокчейн&raquo;"
              desc="<strong>9-10 декабря</strong> за два дня вы получите фундаментальное понимание технической и&nbsp;юридической базы блокчейн-технологий. Криптографический фундамент, консенсусы и&nbsp;майнинг, технические тонкости&nbsp;ICO, юридическая практика. Вы,&nbsp;наконец, поймете как и&nbsp;почему всё это работает!"
              themes={[
                "Введение в&nbsp;криптографию. Симметричные криптосистемы. Внутреннее устройство симметричных шифров. Целостность данных и&nbsp;контрольные суммы. Схемы аутентификации и&nbsp;хранение паролей. Алгоритмы работы программ защиты информации. Ассиметричные криптосистемы. Схема электронной подписи. Атаки типа man-in-the-middle и&nbsp;система сертификатов. TOR и&nbsp;mixed networks. Протокол подбрасывания монеты...",
                "Блокчейн. Определения блокчейна. Блоки, механизмы сцепления блоков и&nbsp;целостность цепочки. Основные моменты алгоритма Bitcoin. Требования сложности и&nbsp;схема работы майнингового алгоритма. Понятие консенсуса и&nbsp;подробное рассмотрение консенсуса Proof Of&nbsp;Work. Атаки double spend и&nbsp;51%, стратегии майнинговых пулов, стабильность работы сети.",
                "Блокчейн и бизнес. Платежи в&nbsp;криптовалютах. Криптовалютные биржи и&nbsp;кошельки. Приоритетность транзакции, комиссии и&nbsp;газ. Централизованные vs&nbsp;децентрализованные решения. Выпуск токенов, стандарт ERC20. Анатомия crowdsale смарт-контракта для проведения ICO/ITO. Аудит безопасности смарт-контрактов, примеры уязвимостей. Ошибки проектирования и&nbsp;качество экономических моделей crowdsale.",
                "Блокчейн и&nbsp;право. Правовые аспекты ITO/ICO. Опыт регулирования профессиональных участников рынка в&nbsp;США, Японии, Швейцарии, Германии, на&nbsp;острове Мэн, Великобритании и&nbsp;еще в&nbsp;более чем 10&nbsp;странах мира. Экстерриториальное действие законодательства. Почему стоит опасаться законодательства США, Японии, Швейцарии и&nbsp;др. даже если вы&nbsp;не&nbsp;зарегистрированы в&nbsp;этих странах?",
                '<a href="http://localhost:3000/education#program">Подробная программа</a>'
              ]}
              speakers={[
                {
                  name: "Сергей Прилуцкий",
                  desc: <p>Начал программировать в&nbsp;начальной школе, работал системным администратором много лет. Занимался реверс-инжинирингом и&nbsp;безопасностью&nbsp;ПО, исследовал программные защиты и&nbsp;антивирусные движки. Закончил МИФИ и&nbsp;преподавал там курсы &laquo;Базы данных&raquo; и&nbsp;&laquo;Информационная безопасность&raquo;, вел исследовательские проекты посвящённые криптографическим методам защиты. В&nbsp;течение многих лет работал в&nbsp;Mail.Ru ведущим разработчиком на&nbsp;многих проектах, последние годы в&nbsp;команде Антиспама. Имел дело с&nbsp;системами, начиная от&nbsp;небольших высоконагруженных микросервисов и&nbsp;сайтов и&nbsp;заканчивая большими кластерами для распредеённых вычислений. Преподаватель и&nbsp;автор курса по&nbsp;информационной безопасности для проектов &laquo;Технопарк&raquo; (Бауманка) и&nbsp;&laquo;Техноатом&raquo; (МИФИ). Активный участник сообщества блокчейн-разработчиков.</p>,
                  img: "prilutskiy"
                },
                {
                  name: "Юрий Васильчиков",
                  desc: <p>Начал разрабатывать сайты в&nbsp;2000 году на&nbsp;языке Perl. В&nbsp;стеке: PHP, JS/Node/React. В&nbsp;юношестве год отработал программистом в&nbsp;студии Лебедева. В&nbsp;2005 году стал сооснователем веб-студии Eggo.ru, где на&nbsp;протяжении 6&nbsp;лет работал техническим директором. Руководил веб-студией Eggo.ru на&nbsp;протяжении 3&nbsp;лет. Консультировал и&nbsp;разрабатывал решения для более чем 150 малых и&nbsp;средних компаний. Крипто-энтузиаст, менеджер в&nbsp;команде MixBytes.</p>,
                  img: "vasilchikov"
                }
              ]}
              prices={[
                {
                  period: "До 1 декабря",
                  types: [
                    {
                      price: "6000&#8381;"
                    },
                    {
                      name: "VIP",
                      price: "12000&#8381;"
                    }
                  ]
                },
                {
                  period: "После",
                  types: [
                    {
                      price: "9000&#8381;"
                    },
                    {
                      name: "VIP",
                      price: "18000&#8381;"
                    }
                  ]
                },
              ]}
            />
          </ContentBlock>
          <Splurge />
          <Capabilities
            header="Наши возможности"
            elements={[
              {
                icon: require('./i/icon-dollar.svg'),
                text: 'Прием криптовалют в&nbsp;ICO в&nbsp;автоматическом режиме, сразу выдавая токены.'
              },
              {
                icon: require('./i/icon-html-brackets.svg'),
                text: 'Автоматизируем тестирование контракта, проверяя набор из&nbsp;заготовленных сценариев в&nbsp;разных комбинациях.'
              },
              {
                icon: require('./i/icon-lock.svg'),
                text: 'Мультиподпись защитит смарт-контракт от&nbsp;взлома, через кражу ключей.'
              },
              {
                icon: require('./i/icon-lens.svg'),
                text: 'Solidity-инспектор автоматизирует обнаружение проблем в&nbsp;коде, проверяет опасные конструкции и&nbsp;особенности языка.'
              },
              {
                icon: require('./i/icon-eye.svg'),
                text: 'Аналитика крипто-платежей в&nbsp;реальном времени подсчитает ether-платежи, полученные через разные каналы привлечения трафика, позволит корректировать маркетинг ICO на&nbsp;ходу.'
              },
            ]}
          />
          <MeetUs />
        </ContentLayout>
      </PageLayout>
    );
  }
}

export default Main;
