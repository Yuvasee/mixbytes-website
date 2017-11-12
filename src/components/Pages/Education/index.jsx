import React, {Component} from 'react';

import PageLayout from 'components/PageLayout';
import PageNav from 'components/PageNav';
import ContentLayout from 'components/ContentLayout';
import ContentBlock from 'components/ContentBlock';

import BlockEmphasis from 'components/ContentBlock/BlockEmphasis';
import BlockInfoTabs from 'components/ContentBlock/BlockInfoTabs';
import BlockWithAside from 'components/ContentBlock/BlockWithAside';
import BlockThreeColumns from 'components/ContentBlock/BlockThreeColumns';
import BlockProgram from 'components/ContentBlock/BlockProgram';
import BlockPerson from 'components/ContentBlock/BlockPerson';
import BlockPersonList from 'components/ContentBlock/BlockPersonList';
import BlockLogos from 'components/ContentBlock/BlockLogos';

class Education extends Component {
  render() {
    const pageNav = [
      {link: 'blockchain-dive', name: 'Описание'},
      {link: 'program', name: 'Программа'},
      {link: 'speakers', name: 'Ведущие'},
    ];

    return (
      <PageLayout>
        <ContentLayout contentRight={<PageNav links={pageNav} />}>
          <ContentBlock id="blockchain-dive">
            <h2>Погружение в блокчейн</h2>
            <BlockEmphasis>
              <p>Даем фундаментальное понимание технической и&nbsp;юридической базы блокчейн-технологий за&nbsp;2&nbsp;полных дня. От&nbsp;технических основ до&nbsp;юридической практики. Вы,&nbsp;наконец, поймете как и&nbsp;почему всё это работает!</p>
              <p>Курс проводится совместно с&nbsp;компанией <a href="http://cych.io">cych.io</a> и&nbsp;приглашёнными экспертами Центра Россия-ОЭСР РАНХиГС при Президенте&nbsp;РФ.</p>
            </BlockEmphasis>
          </ContentBlock>
          <ContentBlock id="description">
            <BlockInfoTabs tabs={[
              {
                id: 'blockchain',
                name: 'Блокчейн',
                content: <p><b>Блокчейн&nbsp;&mdash;</b> цифровой реестр транзакций, сделок, контрактов, по&nbsp;сути любой информации. Способ хранения и&nbsp;криптографической защиты данных от&nbsp;подделки. Описан в&nbsp;1991&nbsp;году.</p>
              },
              {
                id: 'cryptoCurrencies',
                name: 'Криптовалюта',
                content: <p><b>Криптовалюта&nbsp;&mdash;</b> цифровые счётные единицы, учёт которых децентрализован. Функционирование данных систем происходит при помощи распределённой компьютерной сети. Термин закрепился после публикации Forbes статьи o&nbsp;Биткоине &laquo;Crypto currency&raquo; в&nbsp;2011&nbsp;году.</p>
              },
              {
                id: 'smartContracts',
                name: 'Смарт-контракт',
                content: <p><b>Смарт-контракт&nbsp;&mdash;</b> алгоритм, набор условий, выполнение которых влечет за&nbsp;собой некоторые события в&nbsp;реальном мире или цифровых системах. Для реализации требуется децентрализованная среда, исключающая человеческий фактор. Для передачи стоимости в&nbsp;смарт-контракте требуется криптовалюта. Идея предложена в&nbsp;1994&nbsp;году.</p>
              },
              {
                id: 'ico',
                name: 'ICO',
                content: <p><b>ICO, ITO или TGE&nbsp;&mdash;</b> форма привлечения инвестиций или краудфайндинга в&nbsp;виде эмиссии и&nbsp;продажи инвесторам новых криптовалют. Первое ICO проведено в&nbsp;2013 году (Mastercoin).</p>
              },{
                id: 'bitcoin',
                name: 'Биткоин',
                content: <p><b>Биткоин&nbsp;&mdash;</b> пиринговая платёжная система. Для функционирования и&nbsp;защиты использует криптографические методы (блокчейн). Вся информация о&nbsp;транзакциях между адресами системы доступна в&nbsp;открытом виде. Была запущена в&nbsp;2009&nbsp;году.</p>
              },
              {
                id: 'ethereum',
                name: 'Ethereum',
                content: <p><b>Ethereum&nbsp;&mdash;</b> платформа для создания децентрализованных онлайн-сервисов на&nbsp;базе блокчейна и&nbsp;смарт-контрактов. Реализована как единая децентрализованная виртуальная машина. Запущена 30&nbsp;июля 2015&nbsp;года.</p>
              }
            ]} />
            <BlockWithAside aside={
              <p>
                <b className="d-block mb-2">Будет полезно</b>
                >бизнесменам<br />
                >инвесторам<br />
                >юристам<br />
                >менеджерам<br />
                >программистам
              </p>
            }>
              <p>Блокчейн-технологии ворвались в&nbsp;нашу жизнь&nbsp;и, похоже, собираются полностью изменить&nbsp;её. Биткоин и&nbsp;ICO у&nbsp;всех на&nbsp;устах, в&nbsp;них вкладывают деньги, часто даже не&nbsp;понимая о&nbsp;чем идет речь. Ведь, к&nbsp;сожалению, большая часть доступной информации&nbsp;&mdash; либо слишком техническая и&nbsp;непонятная документация для программистов, либо слишком рекламная и&nbsp;провокационная, нацеленная на&nbsp;привлечение инвестиций в&nbsp;очередное ICO.</p>
              <p>Мы&nbsp;болеем за&nbsp;популяризацию блокчейн-технологий, за&nbsp;прозрачность и&nbsp;доступность информации, за&nbsp;безопасность финансовых операций. На&nbsp;курсе вы&nbsp;получите фундамент знаний, который позволит вам уверенно ориентироваться в&nbsp;новостном и&nbsp;рекламном потоке. И&nbsp;принимать взвешенные решения об&nbsp;использовании блокчейн-технологий в&nbsp;своей жизни, карьере и&nbsp;бизнесе.</p>
            </BlockWithAside>
            <BlockThreeColumns content={[
              {
                text: <p>Если вы&nbsp;скептик&nbsp;&mdash; приходите и&nbsp;задайте спикерам самые сложные вопросы. Cкорее всего, вы&nbsp;поверите в&nbsp;силу блокчейн-технологий больше, чем раньше.</p>,
                icon: <b style={{color: '#FF5932'}}>1</b>
              },
              {
                text: <p>Если блокчейн и&nbsp;ICO уже вскружили вам голову&nbsp;&mdash; приходите тоже, мы&nbsp;постараемся немного охладить ваш пыл.</p>,
                icon: <b style={{color: '#481F80'}}>2</b>
              },
              {
                text: <p>Обещаем, что на&nbsp;курсе не&nbsp;будет никакой рекламы и&nbsp;призывов куда-либо вложить деньги.</p>,
                icon: <img style={{marginBottom: '10px'}} src={require('./i/littlefinger.png')} />
              },

            ]} />
          </ContentBlock>
          <ContentBlock id="program">
            <BlockProgram program={[
              {
                dayName: 'День 1. Криптография, блокчейн, Биткоин: срываем покровы',
                blocks: [
                  {
                    type: 'lecture',
                    name: 'Первый блок',
                    time: '10:00-11:30',
                    desc: <p><b>Введение в&nbsp;криптографию</b><br />Симметричные криптосистемы. Внутреннее устройство симметричных шифров. Целостность данных и&nbsp;контрольные суммы. Схемы аутентификации и&nbsp;хранение паролей. Алгоритмы работы программ защиты информации.</p>
                  },
                  {
                    type: 'lecture',
                    name: 'Второй блок',
                    time: '11:45-13:15',
                    desc: <p>Ассиметричные криптосистемы. Схема электронной подписи. Атаки типа man-in-the-middle и&nbsp;система сертификатов. TOR и&nbsp;mixed networks. Протокол подбрасывания монеты.</p>
                  },
                  {
                    type: 'break',
                    desc: <p>Перерыв 1 час 15 минут</p>
                  },
                  {
                    type: 'lecture',
                    name: 'Третий блок',
                    time: '14:30-16:00',
                    desc: <p><b>Блокчейн</b><br />Определения блокчейна. Блоки, механизмы сцепления блоков и&nbsp;целостность цепочки. Основные моменты алгоритма Bitcoin. Требования сложности и&nbsp;схема работы майнингового алгоритма. Понятие консенсуса и&nbsp;подробное рассмотрение консенсуса Proof Of&nbsp;Work. Атаки double spend и&nbsp;51%, стратегии майнинговых пулов, стабильность работы сети.</p>
                  },
                  {
                    type: 'lecture',
                    name: 'Четвертый блок',
                    time: '16:15-17:45',
                    desc: <p>Задача византийских генералов и&nbsp;другие виды консенсуса. &laquo;Proof of&nbsp;stake&raquo; и&nbsp;&laquo;delegated proof of&nbsp;stake&raquo;. Движок Graphene и&nbsp;проекты на&nbsp;его основе. Примеры сложной внутренней экономики проекта, вопросы децентрализации. &laquo;Proof of&nbsp;storage&raquo;, &laquo;proof of&nbsp;compute&raquo;, &laquo;Proof of&nbsp;everything&raquo;. Примеры использования смарт-контрактов и&nbsp;схема работы сети Ethereum.</p>
                  }
                ]
              },
              {
                dayName: 'День&nbsp;2. Технологии ICO и&nbsp;мировая юридическая практика',
                blocks: [
                  {
                    type: 'lecture',
                    name: 'Пятый блок',
                    time: '10:00-11:30',
                    desc: <p><b>Блокчейн и бизнес</b><br />Платежи в&nbsp;криптовалютах. Криптовалютные биржи и&nbsp;кошельки. Приоритетность транзакции, комиссии и&nbsp;газ. Централизованные vs&nbsp;децентрализованные решения.</p>
                  },
                  {
                    type: 'lecture',
                    name: 'Шестой блок',
                    time: '11:45-13:15',
                    desc: <p>Выпуск токенов, стандарт ERC20. Анатомия crowdsale смарт-контракта для проведения ICO/ITO. Аудит безопасности смарт-контрактов, примеры уязвимостей. Ошибки проектирования и&nbsp;качество экономических моделей crowdsale.</p>
                  },
                  {
                    type: 'break',
                    desc: <p>Перерыв 1 час 15 минут</p>
                  },
                  {
                    type: 'lecture',
                    name: 'Седьмой блок',
                    time: '14:30-16:00',
                    desc: <p><b>Блокчейн и&nbsp;право. Правовые аспекты ITO/ICO</b><br />Международный опыт регулирования криптовалют и&nbsp;токенов. Анализ позиций международных организаций и&nbsp;стран. Классификация криптовалюты и&nbsp;токена как объектов права в&nbsp;РФ. Выбор договоров для передачи токена и&nbsp;получения криптовалюты. Риски гражданской, административной, уголовной ответственности.</p>
                  },
                  {
                    type: 'lecture',
                    name: 'Восьмой блок',
                    time: '16:15-17:45',
                    desc: <p>Вопросы налогов, способы снижения налоговых рисков. Вывод криптовалюты в&nbsp;фиатные средства. Вопросы ПОД/ФТ, валютного и&nbsp;налогового законодательства. Позиции банков по&nbsp;получению фиатных средств от&nbsp;продажи криптовалюты. Позиции крупнейших в&nbsp;мире криптобирж по&nbsp;возможности перевода средств в&nbsp;Россию.</p>
                  }
                ]
              }
            ]} />
          </ContentBlock>
          <ContentBlock id="speakers">
            <BlockPerson person={{
              link: 'prilutskiy',
              name: 'Сергей Прилуцкий',
              photo: require('components/Pages/Team/i/prilutskiy.jpg'),
              position: 'Ведущий технической части (первый день)',
              text: (
                <ul>
                  <li>Начал программировать в&nbsp;начальной школе, работал системным администратором много лет</li>
                  <li>Занимался реверс-инжинирингом и&nbsp;безопасностью&nbsp;ПО, исследовал программные защиты и&nbsp;антивирусные движки</li>
                  <li>Закончил МИФИ и&nbsp;преподавал там курсы &laquo;Базы данных&raquo; и&nbsp;&laquo;Информационная безопасность&raquo;, вел исследовательские проекты посвящённые криптографическим методам защиты</li>
                  <li>В&nbsp;течение многих лет работал в&nbsp;Mail.Ru ведущим разработчиком на&nbsp;многих проектах, последние годы в&nbsp;команде Антиспама</li>
                  <li>Имел дело с&nbsp;системами, начиная от&nbsp;небольших высоконагруженных микросервисов и&nbsp;сайтов и&nbsp;заканчивая большими кластерами для распредеённых вычислений</li>
                  <li>Преподаватель и&nbsp;автор курса по&nbsp;информационной безопасности для проектов &laquo;Технопарк&raquo; (Бауманка) и&nbsp;&laquo;Техноатом&raquo; (МИФИ)</li>
                  <li>Активный участник сообщества блокчейн-разработчиков, co-founder компании MixBytes</li>
                </ul>
              )
            }} />
            <BlockPersonList
              header="Команда юристов"
              position="Ведущие части &laquo;Блокчейн и&nbsp;право&raquo;"
              persons={[
              {
                name: 'Антонина Левашенко',
                photo: require('./i/levashenko.jpg'),
                desc: <p>Юрист международного права. Эксперт Центра Стратегических Разработок. Старший научный сотрудник Академии Внешней Торговли (ВАВТ) Минэкономразвития&nbsp;РФ. Руководитель Центра компетенций и&nbsp;анализа стандартов ОЭСР РАНХиГС при Президенте&nbsp;РФ.</p>
              },
              {
                name: 'Иван Ермохин',
                photo: require('./i/ermohin.jpg'),
                desc: <p>Юрист международного права. Научный сотрудник ВАВТ Минэкономразвития РФ. Эксперт Центра компетенций и&nbsp;анализа стандартов ОЭСР РАНХиГС при Президенте&nbsp;РФ.</p>
              },
              {
                name: 'Софья Лебедева',
                photo: require('./i/lebedeva.jpg'),
                desc: <p>Экономист-международник. Научный сотрудник Российского центра компетенций и&nbsp;анализа стандартов ОЭСР РАНХиГС при Президенте&nbsp;РФ.</p>
              },
              {
                name: 'Мария Гирич',
                photo: require('./i/girich.jpg'),
                desc: <p>Юрист международного права. Научный сотрудник Клуба Россия-ОЭСР ВАВТ Минэкономразвития&nbsp;РФ.</p>
              },
              {
                name: 'Александра Коваль',
                photo: require('./i/koval.jpg'),
                desc: <p>Юрист международного права, директор Клуба Россия-ОЭСР ВАВТ Минэкономразвития&nbsp;РФ.</p>
              },
            ]} />
          </ContentBlock>
          <ContentBlock>
            <BlockLogos header="Информационные партнеры" logos={[
              {
                src: require('./i/allcoinshome-logo.png'),
                link: 'https://allcoinshome.com/',
                alt: 'AllCoinsHome'
              },
              {
                src: require('./i/more-logo.png'),
                link: 'http://cryptomore.io/',
                alt: 'CryptoMore'
              },
              {
                src: require('./i/freed-logo.png'),
                link: 'https://freedman.club/',
                alt: 'freedman club'
              },
            ]} />
          </ContentBlock>
        </ContentLayout>
      </PageLayout>
    );
  }
}

export default Education;
