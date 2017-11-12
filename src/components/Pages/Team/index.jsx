import React, {Component} from 'react';

import PageLayout from 'components/PageLayout';
import PageNav from 'components/PageNav';
import ContentLayout from 'components/ContentLayout';
import ContentBlock from 'components/ContentBlock';

import BlockPerson from 'components/ContentBlock/BlockPerson';

class Team extends Component {
  render() {
    const team = [
      {
        link: 'prilutskiy',
        name: 'Сергей Прилуцкий',
        photo: require('./i/prilutskiy.jpg'),
        position: 'Co-founder, Software Engineer',
        text: (
          <ul>
            <li>Начал программировать в&nbsp;начальной школе, работал системным администратором много лет</li>
            <li>Занимался реверс-инжинирингом и&nbsp;безопасностью&nbsp;ПО, исследовал программные защиты и&nbsp;антивирусные движки</li>
            <li>Закончил МИФИ и&nbsp;преподавал там курсы &laquo;Базы данных&raquo; и&nbsp;&laquo;Информационная безопасность&raquo;, вел исследовательские проекты посвящённые криптографическим методам защиты</li>
            <li>В&nbsp;течение многих лет работал в&nbsp;Mail.Ru ведущим разработчиком на&nbsp;многих проектах, последние годы в&nbsp;команде Антиспама</li>
            <li>Имел дело с&nbsp;системами, начиная от&nbsp;небольших высоконагруженных микросервисов и&nbsp;сайтов и&nbsp;заканчивая большими кластерами для распредеённых вычислений</li>
            <li>Преподаватель и&nbsp;автор курса по&nbsp;информационной безопасности для проектов &laquo;Технопарк&raquo; (Бауманка) и&nbsp;&laquo;Техноатом&raquo; (МИФИ)</li>
            <li>Активный участник сообщества блокчейн-разработчиков</li>
          </ul>
        )
      },
      {
        link: 'vasilchikov',
        name: 'Юрий Васильчиков',
        photo: require('./i/vasilchikov.jpg'),
        position: 'Co-founder, Manager, Developer',
        text: (
          <ul>
            <li>В&nbsp;8&nbsp;классе написал клон Тетриса на&nbsp;Бейсике :)</li>
            <li>Начал разрабатывать сайты в&nbsp;2000 году на&nbsp;языке Perl. В&nbsp;стеке: PHP, JS/Node/React</li>
            <li>В&nbsp;юношестве год отработал программистом в&nbsp;студии Лебедева</li>
            <li>В&nbsp;2005 году стал сооснователем веб-студии Eggo.ru, где на&nbsp;протяжении 6&nbsp;лет работал техническим директором</li>
            <li>Руководил веб-студией Eggo.ru на&nbsp;протяжении 3&nbsp;лет</li>
            <li>Консультировал и&nbsp;разрабатывал решения для более чем 150 малых и&nbsp;средних компаний</li>
          </ul>
        )
      },
      {
        link: 'makeev',
        name: 'Алексей Макеев',
        photo: require('./i/makeev.jpg'),
        position: 'Co-founder, Software Engineer',
        text: (
          <ul>
            <li>Закончил МГТУ им. Н.&nbsp;Э.&nbsp;Баумана, кафедра &laquo;Компьютерные комплексы, системы и&nbsp;сети&raquo;, диплом о&nbsp;распределенных вычислениях</li>
            <li>Опыт программирования 17&nbsp;лет (Assembler, C/C++, Java, PHP, Perl, Python, JS)</li>
            <li>Опыт разработки Big Data решений на&nbsp;Hadoop-кластере промышленного масштаба</li>
            <li>Работал тимлидом в&nbsp;проекте интернет-поисковика Поиск@mail.ru</li>
            <li>Работал системным архитектором в&nbsp;фирме&nbsp;1С, отдел разработки платформы</li>
            <li>В&nbsp;сфере интересов: Big Data, распределенные вычисления, информационная безопасность, финтех, инвестиции</li>
          </ul>
        )
      },
      {
        link: 'karbachinsky',
        name: 'Игорь Карбачинский',
        photo: require('./i/karbachinsky.jpg'),
        position: 'Software Engineer',
        text: (
          <ul>
            <li>Закончил МИЭМ, кафедра &laquo;Кибернетика&raquo;, диплом об&nbsp;алгоритмах ранжирования в&nbsp;поисковых системах</li>
            <li>Опыт программирования 12&nbsp;лет (C/C++, Java, PHP, Perl, Python, JS)</li>
            <li>На&nbsp;протяжении многих лет руководил отделом в&nbsp;интернет-поисковике Поиск@mail.ru</li>
            <li>Работал на&nbsp;позиции Data Science Architect в&nbsp;проектах Lang.ai и&nbsp;Sentisis.com</li>
            <li>Опыт создания промышленных&nbsp;IT решений в&nbsp;облаках Google и&nbsp;Amazon</li>
            <li>В&nbsp;сфере интересов: Анализ данных, Big Data, Теория игр, Речевые технологи</li>
          </ul>
        )
      },
      {
        link: 'yakovlev',
        name: 'Андрей Яковлев',
        photo: require('./i/yakovlev.jpg'),
        position: 'Software Engineer',
        text: (
          <ul>
            <li>Закончил Мех-Мат СГУ по&nbsp;специальности &laquo;приклладная математика и&nbsp;информатика&raquo;</li>
            <li>Опыт программирования 7&nbsp;лет (Python, JS, Bash)</li>
            <li>Начинал свой путь в&nbsp;компании Mirantis инженером по&nbsp;тесированию, а&nbsp;затем DevOps инженером</li>
            <li>Работал DevOps-инженером в&nbsp;интернет-поисковике Поиск@mail.ru</li>
            <li>Последние годы&nbsp;&mdash; разработчик авто-тестов в&nbsp;компании Kaspersky Lab</li>
            <li>Интересуестся стартапами и&nbsp;инвестициями, мечтает о&nbsp;единороге :)</li>
          </ul>
        )
      },
    ];

    const pageNav = team.map((el, i) => {
      const {link, name} = el;
      return {link, name};
    });

    return (
      <PageLayout>
        <ContentLayout contentRight={<PageNav links={pageNav} />}>
          {team.map((el) => (
            <ContentBlock id={el.link} key={el.link}>
              <BlockPerson person={el} />
            </ContentBlock>
          ))}
        </ContentLayout>
      </PageLayout>
    );
  }
}

export default Team;
