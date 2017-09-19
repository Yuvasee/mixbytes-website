import React, {Component} from 'react';

import Navbar from 'components/Navbar';
import ContainerBlock from 'components/ContainerBlock';
import ContainerSeparator from 'components/ContainerSeparator';
import ContentBubble from 'components/ContentBubble';
import Person from 'components/Person';
import Sergey from 'components/Person/Sergey';
import Alexey from 'components/Person/Alexey';
import Footer from 'components/Footer';
import EmailForm from 'components/EmailForm';

import './styles.css';

class PageMain extends Component {
  render() {
    const navLinks = [
      {link: 'company', name: 'Компания'},
      {link: 'edu', name: 'Обучение'},
      {link: 'solutions', name: 'Решения'},
      {link: 'consult', name: 'Консалтинг'},
      {link: 'team', name: 'Команда'},
      {link: 'feedback', name: 'Связаться'}
    ];

    return (
      <div>
        <Navbar links={navLinks} />

        <ContainerBlock type="dark">
          <ContentBubble id="company">
            <p><strong>Блокчейн-лаборатория MixBytes</strong> создана в&nbsp;2017&nbsp;году. Наши цели:</p>
            <ul>
              <li>Популяризация и&nbsp;развитие блокчейн-технологий;</li>
              <li>Безопасность в&nbsp;сфере криптовалют и&nbsp;смарт-контрактов.</li>
            </ul>
            <p>Мы&nbsp;проводим образовательные курсы и лекции, готовим к&nbsp;открытию школу блокчейн-разработчиков, консультируем организации, разрабатываем смарт-контракты и&nbsp;проводим их&nbsp;аудит.</p>
            <p>Собираем для публикации собственную библиотеку проверенных смарт-контрактов и&nbsp;разрабатываем новый сервис для исследования блокчейнов Bitcoin и&nbsp;Ethereum.</p>
          </ContentBubble>

          <ContentBubble id="edu">
            <h1 className="display-4">Обучение</h1>

            <h2>Вечерние лекции</h2>
            <p>Уже <b>с&nbsp;28&nbsp;сентября</b> по&nbsp;четвергам мы&nbsp;рассказываем о&nbsp;блокчейн-технологиях и&nbsp;нашей практике.</p>
            <div className="emph">
              <h3>
                &laquo;Анатомия ICO на&nbsp;Ethereum&raquo;&nbsp;&mdash; 28&nbsp;сентября
              </h3>
              <p>На&nbsp;лекции мы&nbsp;подробно разберем технические аспекты запуска crowdsale на&nbsp;самой популярной платформе&nbsp;&mdash; Ethereum, расскажем о&nbsp;своём реальном коммерческом опыте разработки, аудита и&nbsp;запуска смарт-контрактов.</p>
              <p>Подача материала рассчитана на&nbsp;бизнес, но&nbsp;разработчикам тоже будет интересно.</p>
              <h3>Темы</h3>
              <ul>
                <li>Техпроект: как сформулировать задачу для разработчиков Solidity?</li>
                <li>Хорошие практики разработки кода: модульность, покрытие тестами и&nbsp;прочее.</li>
                <li>Crowdsale-контракт, его основные функци и&nbsp;безопасность.</li>
                <li>Состояния crowdsale-контракта на&nbsp;различных этапах ICO.</li>
                <li>Fallback-сценарии на&nbsp;случай, когда все пошло не&nbsp;так.</li>
                <li>Реализация сбора в&nbsp;нескольких валютах.</li>
                <li>Аудит безопасности смарт-контракта: какие основные угрозы надо учитывать.</li>
                <li>Зачем нужено &laquo;баг баунти&raquo; и&nbsp;как его проводить?</li>
                <li>Деплой смарт-контрактов в&nbsp;Mainnet: подготовка и&nbsp;подводные камни.</li>
                <li>Верификация смарт-контрактов: что это, зачем и&nbsp;как делать.</li>
                <li>Аудит безопасности сайта crowdsale (&laquo;веб-морды&raquo;), возможные атаки и&nbsp;как им&nbsp;противостоять.</li>
              </ul>
              <h3>Участие</h3>
              <p>
                <b>До&nbsp;24&nbsp;сентября</b> <br />
                Входной билет: 2000&nbsp;₽,<br />
                VIP (первые 1-2&nbsp;ряда): 4000&nbsp;₽
              </p>
              <p>
                <b>После 24&nbsp;сентября</b> <br />
                Входной билет: 3000&nbsp;₽,<br />
                VIP (первые 1-2&nbsp;ряда): 6000&nbsp;₽
              </p>
              <a className="btn btn-success" href="https://mixbytes.timepad.ru/event/560706/#register">Зарегистрироваться на сайте Timepad.ru</a>
              <div className="card border-success mt-3" style={{fontSize: '80%'}}>
                <div className="card-body">
                  <h4 className="card-title text-success">-20% при оплате Bitcoin или Ethereum</h4>
                  <p>Cделайте перевод <a href="/helpers">по&nbsp;текущему курсу</a> за&nbsp;вычетом&nbsp;20% и&nbsp;пришлите нам ФИО участников для внесения в&nbsp;список. При&nbsp;оплате биткоинами регистрация на&nbsp;Timepad.ru не&nbsp;требуется.</p>
                  <p>
                    Bitcoin: 1QKj9niHezvenxWWw5ZDrHv6i4yujo3ZPh<br />
                    Ethereum: 0x2B1d01Ac2c87F1FD3b07F0A09eF4A42a03368458
                  </p>
                </div>
              </div>
              <p><br />Место: Москва, м. Курская, Нижний Сусальный пер., д.&nbsp;5, стр.&nbsp;1, Fibonacci Loft (АРМА)</p>
            </div>
            <p>На&nbsp;будущее планируем темы:</p>
            <ul>
              <li>Подготовка смарт-контракта ICO по&nbsp;шагам.</li>
              <li>Безопасность при использоватнии крипты.</li>
              <li>Топ-10 криптовалют и&nbsp;их&nbsp;кошельки.</li>
              <li>Разбор white paper-ов известных проектов.</li>
            </ul>
            <p>Чтобы не&nbsp;пропустить, следите за&nbsp;нами в&nbsp;<a href="https://t.me/mixbytes_pub">Telegram</a> и&nbsp;<a href="https://www.facebook.com/mixbyteslabs">Facebook</a>.</p>
            <h2>Базовый курс &laquo;Погружение в&nbsp;блокчейн&raquo;</h2>
            <p><a href="/course">Подробности о&nbsp;курсе</a>. В ближайшее время повторение курса не&nbsp;планируем.</p>

            <h2>Школа блокчейн-разработчиков</h2>
            <p>
              В&nbsp;конце года мы&nbsp;запустим полугодичный образовательный курс из 4 модулей, рассчитанный на&nbsp;программистов. Оставьте ваш e-mail, чтобы первым узнать о&nbsp;старте набора в&nbsp;школу:
            </p>
            <EmailForm buttonText="Узнать первым" successMessage="Спасибо! Как только будут новости, мы сообщим."/>

            <h2>Менторинг</h2>
            <p>Для уверенных в&nbsp;своих силах специалистов. Направим на&nbsp;нужные материалы и&nbsp;практики, поможем в&nbsp;самых трудных местах, проверим результаты. Можно приходить компанией или отделом. Прием через собеседование, <a href="mailto:hello@mixbytes.io">пишите</a>!</p>
          </ContentBubble>
        </ContainerBlock>

        <ContainerSeparator />

        <ContainerBlock type="light">
          <ContentBubble id="solutions">
            <h1 className="display-4">Решения</h1>
            <h2>Разработка смарт-контрактов</h2>
            <p>Пишем смарт-контракты на Solidity, полностью с нуля или на основе проверенных бибилиотек, например OpenZeppelin. Соблюдаем стандарт ERC20. Покрываем код unit-тестами под Truffle framework. Верифицируем контракты на Etherscan. Деплоим и мониторим. <a href="https://github.com/mixbytes/storiqa_ico">Пример контракта</a>.</p>

            <h2>Аудит смарт-контрактов</h2>
            <p>Аудируем смарт-контракты на Solidity, находим ошибки и уязвимости. <a href="https://github.com/mixbytes/audits_public/blob/master/solidity/KickICO/report.md">Пример аудита</a>.</p>

            <h2>Разработка блокчейнов</h2>
            <p>Разрабатываем решения на&nbsp;базе фреймворка Graphene. Скорее всего, сначала вам понадобятся наши консультации.</p>
          </ContentBubble>

          <ContentBubble id="consult">
            <h1 className="display-4">Консалтинг</h1>
            <h2>Формулирование бизнес-требований</h2>
            <p>Поможем найти возможные приложения блокчейн-технологий к&nbsp;вашему бизнесу и&nbsp;сформулировать экономическую модель ваших токенов.</p>

            <h2>Выбор технических решений, написание ТЗ</h2>
            <p>Подберем стек технологий для решения задачи. Порекомендуем фреймворки, библиотеки, проверенные смарт-контракты. Правильно сформулируем требования для программистов в&nbsp;техническом проекте.</p>

            <h2>Помощь в&nbsp;HR</h2>
            <p>Поможем определить требования к&nbsp;блокчейн-программистам, которых вы&nbsp;хотите взять в&nbsp;команду. Проведем технические собеседования, разметим путь для роста и&nbsp;обучения. Хорошо сочетается с&nbsp;менторингом.</p>
          </ContentBubble>
        </ContainerBlock>

        <ContainerSeparator />

        <ContainerBlock type="dark">
          <ContentBubble id="team">
            <h1 className="display-4">Команда</h1>
            <Sergey />

            <Person image={require('./img/yura.jpg')}>
              <h2>Юрий Васильчиков</h2>
              <p><strong>Co-founder, Manager, Web Developer</strong></p>
              <ul>
                <li>В&nbsp;8&nbsp;классе написал клон Тетриса на&nbsp;Бейсике :)</li>
                <li>Начал разрабатывать сайты в&nbsp;2000 году на&nbsp;языке Perl</li>
                <li>В&nbsp;юношестве год отработал программистом в&nbsp;студии Лебедева</li>
                <li>В&nbsp;2005 году стал сооснователем веб-студии Eggo.ru, где на&nbsp;протяжении 6&nbsp;лет работал техническим директором</li>
                <li>Руководил веб-студией Eggo.ru на&nbsp;протяжении 3&nbsp;лет</li>
                <li>Консультировал и&nbsp;разрабатывал решения для более чем 150 малых и&nbsp;средних компаний</li>
              </ul>
            </Person>

            <Alexey />
          </ContentBubble>
        </ContainerBlock>

        <Footer feedback={true} />

      </div>
    );
  }
}

export default PageMain;
