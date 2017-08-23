import React, {Component} from 'react';

import Navbar from 'components/Navbar';
import ContainerBlock from 'components/ContainerBlock';
import ContainerSeparator from 'components/ContainerSeparator';
import ContentBubble from 'components/ContentBubble';
import Person from 'components/Person';
import Sergey from 'components/Person/Sergey';
import Footer from 'components/Footer';
import EmailForm from 'components/EmailForm';

import './styles.css';

class PageMain extends Component {
  render() {
    const navLinks = [
      {link: 'company', name: 'Компания'},
      {link: 'edu', name: 'Обучение'},
      {link: 'consult', name: 'Консалтинг'},
      {link: 'dev', name: 'Разработка'},
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
            <p>Мы&nbsp;проводим <a href="/course">курс &laquo;Погружение в&nbsp;блокчейн&raquo;</a>, менторим специалистов, консультируем организации и&nbsp;разрабатываем для них решения. Готовим к&nbsp;открытию школу блокчейн-разработчиков.</p>
            <p>Собираем для публикации собственную библиотеку проверенных смарт-контрактов и&nbsp;разрабатываем новый сервис для исследования блокчейнов Bitcoin и&nbsp;Ethereum.</p>
          </ContentBubble>

          <ContentBubble id="edu">
            <h1 className="display-4">Обучение</h1>

            <h2>Уикенд-курс &laquo;Погружение в&nbsp;блокчейн&raquo;</h2>
            <p>Ближайший уикенд-курс пройдет <strong>9&nbsp;и&nbsp;10&nbsp;сентября.</strong></p>
            <ul>
              <li><a href="/course">Подробности о&nbsp;курсе</a></li>
              <li><a href="#">Сразу записаться</a></li>
            </ul>

            <h2>Школа блокчейн-разработчиков</h2>
            <p>
              В&nbsp;конце года мы&nbsp;запустим большой модульный курс, рассчитанный на&nbsp;программистов. Оставьте ваш e-mail, чтобы первым узнать о&nbsp;старте набора в&nbsp;школу:
            </p>
            <EmailForm buttonText="Узнать первым" />

            <h2>Менторинг</h2>
            <p>Для уверенных в&nbsp;своих силах специалистов. Направим на&nbsp;нужные материалы и&nbsp;практики, поможем в&nbsp;самых трудных местах, проверим результаты. Индивидуальный подход, прием через собеседование. Можно приходить компанией или отделом.</p>
          </ContentBubble>
        </ContainerBlock>

        <ContainerSeparator />

        <ContainerBlock type="light">
          <ContentBubble id="consult">
            <h1 className="display-4">Консалтинг</h1>

            <h2>Формулирование бизнес-требований</h2>
            <p>Ваши знания о&nbsp;блокчейн-технологиях обрывочны, но&nbsp;вы&nbsp;уверены, что эта сфера открывает вам новые возможности, которые нельзя упускать? Вы&nbsp;можете начать с&nbsp;нашего <a href="/course">публичного курса</a> или обратиться к&nbsp;нам за&nbsp;консультацией.</p>

            <h2>Выбор технических решений, написание ТЗ</h2>
            <p>Подберем оптимальный стек технологий для решения вашей задачи. Порекомендуем фреймворки, библиотеки, проверенные смарт-контракты. Правильно сформулируем требования для программистов.</p>

            <h2>Помощь в&nbsp;HR</h2>
            <p>Поможем сформулировать требования к&nbsp;блокчейн-программистам, которых вы&nbsp;хотите взять в&nbsp;команду. Проведем технические собеседования, разметим путь для роста и&nbsp;обучения. Хорошо сочетается с&nbsp;менторингом.</p>
          </ContentBubble>

          <ContentBubble id="dev">
            <h1 className="display-4">Разработка решений</h1>
            <p>Разрабатываем решения на&nbsp;базе фреймворка Graphene и&nbsp;смарт-контрактов на&nbsp;Solidity. Скорее всего, сначала вам понадобятся наши консультации.</p>
          </ContentBubble>
        </ContainerBlock>

        <ContainerSeparator />

        <ContainerBlock type="dark">
          <ContentBubble id="team">
            <h1 className="display-4">Команда</h1>
            <Sergey />

            <Person image={require('./img/yura.jpg')}>
              <h2>Юрий Васильчиков</h2>
              <p><strong>Co-founder, Manager, Software Developer</strong></p>
              <ul>
                <li>В&nbsp;8&nbsp;классе написал клон Тетриса на&nbsp;Бейсике :)</li>
                <li>Начал разрабатывать сайты в&nbsp;2000 году на&nbsp;языке Perl</li>
                <li>В&nbsp;юношестве год отработал программистом в&nbsp;студии Лебедева</li>
                <li>В&nbsp;2005 году стал сооснователем веб-студии Eggo.ru, где на&nbsp;протяжении 6&nbsp;лет работал техническим директором</li>
                <li>Руководил веб-студией Eggo.ru на&nbsp;протяжении 3&nbsp;лет</li>
                <li>Имеет обширный опыт консультирования и разработки решений в&nbsp;сфере интернет-маркетинга и&nbsp;SEO</li>
              </ul>
            </Person>
          </ContentBubble>
        </ContainerBlock>

        <Footer feedback={true} />

      </div>
    );
  }
}

export default PageMain;
