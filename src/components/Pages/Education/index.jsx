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
import BlockTwoColumns from 'components/ContentBlock/BlockTwoColumns';
import BlockLogos from 'components/ContentBlock/BlockLogos';

class Education extends Component {
  render() {
    const pageNav = [
      {link: 'blockchain-dive', name: 'Описание'},
      {link: 'program', name: 'Программа'},
      {link: 'speakers', name: 'Ведущие'},
      {link: 'participation', name: 'Участие'},
      {link: 'place', name: 'Место'},
      {link: 'partners', name: 'Партнеры'},
    ];

    return (
      <PageLayout>
        <ContentLayout contentRight={<PageNav links={pageNav} />}>
          <ContentBlock id="blockchain-dive">
            <h2>Двухдневный интенсив<br />&laquo;Погружение в&nbsp;блокчейн&raquo;</h2>
            <BlockEmphasis>
              <p><strong>9-10 декабря</strong> за два дня вы получите фундаментальное понимание технической и&nbsp;юридической базы блокчейн-технологий. Криптографический фундамент, консенсусы и&nbsp;майнинг, технические тонкости&nbsp;ICO, юридическая практика. Вы,&nbsp;наконец, поймете как и&nbsp;почему всё это работает!</p>
              <p>Курс проводится совместно с&nbsp;компанией <a href="http://cych.io">cych.io</a> и&nbsp;приглашёнными экспертами Центра Россия-ОЭСР РАНХиГС при Президенте&nbsp;РФ.</p>
            </BlockEmphasis>
          </ContentBlock>
          <ContentBlock id="description">
            <BlockInfoTabs tabs={[
              {
                id: 'blockchain',
                name: 'Блокчейн',
                content: <p><strong>Блокчейн&nbsp;&mdash;</strong> цифровой реестр транзакций, сделок, контрактов, по&nbsp;сути любой информации. Способ хранения и&nbsp;криптографической защиты данных от&nbsp;подделки. Описан в&nbsp;1991&nbsp;году.</p>
              },
              {
                id: 'cryptoCurrencies',
                name: 'Криптовалюта',
                content: <p><strong>Криптовалюта&nbsp;&mdash;</strong> цифровые счётные единицы, учёт которых децентрализован. Функционирование данных систем происходит при помощи распределённой компьютерной сети. Термин закрепился после публикации Forbes статьи o&nbsp;Биткоине &laquo;Crypto currency&raquo; в&nbsp;2011&nbsp;году.</p>
              },
              {
                id: 'smartContracts',
                name: 'Смарт-контракт',
                content: <p><strong>Смарт-контракт&nbsp;&mdash;</strong> алгоритм, набор условий, выполнение которых влечет за&nbsp;собой некоторые события в&nbsp;реальном мире или цифровых системах. Для реализации требуется децентрализованная среда, исключающая человеческий фактор. Для передачи стоимости в&nbsp;смарт-контракте требуется криптовалюта. Идея предложена в&nbsp;1994&nbsp;году.</p>
              },
              {
                id: 'ico',
                name: 'ICO',
                content: <p><strong>ICO, ITO или TGE&nbsp;&mdash;</strong> форма привлечения инвестиций или краудфайндинга в&nbsp;виде эмиссии и&nbsp;продажи инвесторам новых криптовалют. Первое ICO проведено в&nbsp;2013 году (Mastercoin).</p>
              },{
                id: 'bitcoin',
                name: 'Биткоин',
                content: <p><strong>Биткоин&nbsp;&mdash;</strong> пиринговая платёжная система. Для функционирования и&nbsp;защиты использует криптографические методы (блокчейн). Вся информация о&nbsp;транзакциях между адресами системы доступна в&nbsp;открытом виде. Была запущена в&nbsp;2009&nbsp;году.</p>
              },
              {
                id: 'ethereum',
                name: 'Ethereum',
                content: <p><strong>Ethereum&nbsp;&mdash;</strong> платформа для создания децентрализованных онлайн-сервисов на&nbsp;базе блокчейна и&nbsp;смарт-контрактов. Реализована как единая децентрализованная виртуальная машина. Запущена 30&nbsp;июля 2015&nbsp;года.</p>
              }
            ]} />
            <BlockWithAside aside={
              <p>
                <strong className="d-block mb-2">Будет полезно</strong>
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
                icon: <strong style={{color: '#FF5932'}}>1</strong>
              },
              {
                text: <p>Если блокчейн и&nbsp;ICO уже вскружили вам голову&nbsp;&mdash; приходите тоже, мы&nbsp;постараемся немного охладить ваш пыл.</p>,
                icon: <strong style={{color: '#481F80'}}>2</strong>
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
                    desc: <p><strong>Введение в&nbsp;криптографию</strong><br />Симметричные криптосистемы. Внутреннее устройство симметричных шифров. Целостность данных и&nbsp;контрольные суммы. Схемы аутентификации и&nbsp;хранение паролей. Алгоритмы работы программ защиты информации. Ассиметричные криптосистемы. Схема электронной подписи. Атаки типа man-in-the-middle и&nbsp;система сертификатов. TOR и&nbsp;mixed networks. Протокол подбрасывания монеты.</p>
                  },
                  {
                    type: 'lecture',
                    name: 'Второй блок',
                    time: '11:45-13:15',
                    desc: <p><strong>Блокчейн</strong><br />Определения блокчейна. Блоки, механизмы сцепления блоков и&nbsp;целостность цепочки. Основные моменты алгоритма Bitcoin. Требования сложности и&nbsp;схема работы майнингового алгоритма. Понятие консенсуса и&nbsp;подробное рассмотрение консенсуса Proof Of&nbsp;Work. Атаки double spend и&nbsp;51%, стратегии майнинговых пулов, стабильность работы сети.</p>
                  },
                  {
                    type: 'break',
                    desc: <p>Перерыв 1 час 15 минут</p>
                  },
                  {
                    type: 'lecture',
                    name: 'Третий блок',
                    time: '14:30-16:00',
                    desc: <p>Задача византийских генералов и&nbsp;другие виды консенсуса. &laquo;Proof of&nbsp;stake&raquo; и&nbsp;&laquo;delegated proof of&nbsp;stake&raquo;. Движок Graphene и&nbsp;проекты на&nbsp;его основе. Примеры сложной внутренней экономики проекта, вопросы децентрализации. &laquo;Proof of&nbsp;storage&raquo;, &laquo;proof of&nbsp;compute&raquo;, &laquo;Proof of&nbsp;everything&raquo;. Примеры использования смарт-контрактов и&nbsp;схема работы сети Ethereum.</p>
                  },
                  {
                    type: 'lecture',
                    name: 'Четвертый блок',
                    time: '16:15-17:45',
                    desc: <p><strong>Блокчейн и бизнес</strong><br />Платежи в&nbsp;криптовалютах. Криптовалютные биржи и&nbsp;кошельки. Приоритетность транзакции, комиссии и&nbsp;газ. Централизованные vs&nbsp;децентрализованные решения. Выпуск токенов, стандарт ERC20. Анатомия crowdsale смарт-контракта для проведения ICO/ITO. Аудит безопасности смарт-контрактов, примеры уязвимостей. Ошибки проектирования и&nbsp;качество экономических моделей crowdsale.</p>
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
                    desc: <p>Блокчейн&nbsp;как маркетинговая &laquo;свистелка&raquo; и&nbsp;блокчейн как прорыв. Когда нужен блокчейн и&nbsp;что БЧ-технологии могут привнести в&nbsp;проект? Виды и&nbsp;особенности крипто-токенов. &laquo;Хочу ICO&raquo;&nbsp;&mdash; порядок действий. Личный кабинет инвестора&nbsp;&mdash; что надо знать. Вопросы приёма BTC и&nbsp;других криптовалют в&nbsp;рамках ICO. Обзор ICO-платформ.</p>
                  },
                  {
                    type: 'lecture',
                    name: 'Шестой блок',
                    time: '11:45-13:15',
                    desc: <p><strong>Блокчейн и&nbsp;право. Правовые аспекты ITO/ICO</strong> <br />Опыт регулирования профессиональных участников рынка в&nbsp;США, Японии, Швейцарии, Германии, на&nbsp;острове Мэн, Великобритании и&nbsp;еще в&nbsp;более чем 10&nbsp;странах мира. Экстерриториальное действие законодательства. Почему стоит опасаться законодательства США, Японии, Швейцарии и&nbsp;др. даже если вы&nbsp;не&nbsp;зарегистрированы в&nbsp;этих странах?</p>
                  },
                  {
                    type: 'break',
                    desc: <p>Перерыв 1 час 15 минут</p>
                  },
                  {
                    type: 'lecture',
                    name: 'Седьмой блок',
                    time: '14:30-16:00',
                    desc: <p>Как выявлять резидентов нужных стран в&nbsp;совем проекте? Как снизить риски нарушения законодательства третьих стран? Как организовать бизнес-процесс, чтобы не&nbsp;подпасть под требования стран о&nbsp;получении разрешений и&nbsp;лицензий? Как внедрить требования по&nbsp;идентификации клиента и&nbsp;организовать внутренний дью диллидженс?</p>
                  },
                  {
                    type: 'lecture',
                    name: 'Восьмой блок',
                    time: '16:15-17:45',
                    desc: <p>Какие налоговые последствия деятельности криптобирж существуют в&nbsp;США, ЕС&nbsp;и&nbsp;др. странах? Опыт организации существующих криптобирж и&nbsp;других профессиональных участников: Coinbase, BTCC, Payment21 и&nbsp;др. Возможность организации криптобиржи в&nbsp;России: существующее регулирование, риски и&nbsp;рекомендации.</p>
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
          <ContentBlock id="participation">
            <h2>Условия</h2>
            <div className="white-block">
              <BlockTwoColumns content={[
                {
                  header: 'До&nbsp;1&nbsp;декабря',
                  text: 'Входной билет: 6000&nbsp;₽,<br />VIP (первые 1-2&nbsp;ряда): 12000&nbsp;₽'
                },
                {
                  header: 'С&nbsp;1&nbsp;декабря',
                  text: 'Входной билет: 9000&nbsp;₽,<br />VIP (первые 1-2&nbsp;ряда): 18000&nbsp;₽'
                }
              ]} />
              <div className="mt-3 text-center"><a className="link-button" href="https://mixbytes.timepad.ru/event/611938/#register">Зарегистрироваться на сайте Timepad.ru</a></div>
              <div className="card border-success mt-4" style={{fontSize: '80%'}}>
                <div className="card-body">
                  <h4 className="card-title text-success">-20% при оплате Bitcoin или Ethereum</h4>
                  <p>Cделайте перевод <a href="/helpers">по&nbsp;текущему курсу</a> за&nbsp;вычетом&nbsp;20% и&nbsp;пришлите нам ФИО участников для внесения в&nbsp;список. При&nbsp;оплате биткоинами регистрация на&nbsp;Timepad.ru не&nbsp;требуется.</p>
                  <p>
                    Bitcoin: 1QKj9niHezvenxWWw5ZDrHv6i4yujo3ZPh<br />
                    Ethereum: 0x2B1d01Ac2c87F1FD3b07F0A09eF4A42a03368458
                  </p>
                </div>
              </div>
            </div>
          </ContentBlock>
          <ContentBlock id="place">
            <h2>Место</h2>
            <p><img src={require('./i/kluch.jpg')} /></p>
            <p><strong>Ключ Трехгорка</strong>&nbsp;&mdash; Москва ул. Рочдельская&nbsp;15, стр. 17-18, 3&nbsp;этаж (метро &laquo;улица 1905&nbsp;года&raquo; или &laquo;Баррикадная&raquo;). Схемы проезда: <a href="https://kl10.ch/wp-content/uploads/tgm-walk.pdf">своим ходом</a>, <a href="https://kl10.ch/wp-content/uploads/tgm-aut.pdf">на&nbsp;автомобиле</a>.</p>
            <p>По&nbsp;всем вопросам пишите в&nbsp;наш Телеграм-чат: <a href="https://t.me/mixbytes_pub">https://t.me/mixbytes_pub</a><br />
            или звоните&nbsp;+7 (919) 763-31-66 (Илона).</p>
          </ContentBlock>
          <ContentBlock id="partners">
            <BlockLogos header="Информационные партнеры" logos={[
              {
                src: require('./i/forklog-logo.svg'),
                link: 'https://forklog.com/',
                alt: 'Forklog'
              },
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
              {
                src: require('./i/logo-inv-fut.jpg'),
                link: 'https://investfuture.ru/',
                alt: 'Invest Future'
              },
              {
                src: require('./i/logo-anycoin.jpg'),
                link: 'https://anycoin.news/',
                alt: 'Anycoin.News'
              },
            ]} />
          </ContentBlock>
        </ContentLayout>
      </PageLayout>
    );
  }
}

export default Education;
