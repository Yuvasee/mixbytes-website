import React, {Component} from 'react';

import Navbar from 'components/Navbar';
import ContainerBlock from 'components/ContainerBlock';
import ContainerSeparator from 'components/ContainerSeparator';
import ContentBubble from 'components/ContentBubble';
import Person from 'components/Person';
import Sergey from 'components/Person/Sergey';
import Alexey from 'components/Person/Alexey';
import Footer from 'components/Footer';
import Education from './Education';

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
            <Education />
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
