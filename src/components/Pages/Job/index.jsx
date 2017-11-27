import React, {Component} from 'react';

import PageLayout from 'components/PageLayout';
import PageNav from 'components/PageNav';
import ContentLayout from 'components/ContentLayout';
import ContentBlock from 'components/ContentBlock';

import BlockJob from 'components/ContentBlock/BlockJob';

class Job extends Component {
  render() {
    const jobs = [
      {
        link: 'blockchain-dev',
        name: 'Разработчик смарт-контрактов',
        description: <span>Ищем опытного разработчика для работы над смарт-контрактами (Solidity) и&nbsp;не&nbsp;только. Опыт в&nbsp;blockchain не&nbsp;требуем&nbsp;&mdash; умеем растить blockchain developer&rsquo;ов из&nbsp;толковых senior&rsquo;ов.</span>,
        requirements: [
          <span>Базовые знания алгоритмов, структур данных, графов, конечных автоматов</span>,
          <span>Базовые знания по&nbsp;криптографии, понимание криптографических протоколов</span>,
          <span>Знание сетевого программирования</span>,
          <span>Опыт разработки на&nbsp;разных языках</span>,
          <span>Опыт разработки 4+&nbsp;года</span>,
        ],
        advantages: [
          <span>Знание *nix, опыт работы в&nbsp;консоли</span>,
          <span>Опыт разработки высоконагруженных отказоустойчивых систем</span>,
          <span>Знание&nbsp;js, node, python, java, C++</span>,
          <span>Представление об&nbsp;алгоритмах консенсуса</span>,
          <span>Опыт низкоуровневого программирования</span>,
        ],
        conditions: [
          <span>Высокая зарплата</span>,
          <span>Лофт на&nbsp;1905&nbsp;года</span>,
          <span>Возможна удаленная работа</span>,
        ]
      },
      {
        link: 'backend-dev',
        name: 'Разработчик backend',
        description: <span>Опыт в&nbsp;blockchain не&nbsp;требуем&nbsp;&mdash; умеем растить blockchain developer&rsquo;ов из&nbsp;толковых senior&rsquo;ов.</span>,
        requirements: [
          <span>Знания алгоритмов, структур данных, графов</span>,
          <span>Знание сетевого программирования</span>,
          <span>Опыт разработки высоконагруженных надежных масштабируемых сервисов</span>,
          <span>Опыт разработки на python/java</span>,
          <span>Опыт разработки 4+ года</span>,
          <span>Понимание и опыт работы с NoSQL-решениями</span>,
          <span>Знание *nix, опыт работы в консоли</span>,
        ],
        advantages: [
          <span>Базовые знания по&nbsp;криптографии, понимание криптографических протоколов</span>,
          <span>Знание&nbsp;js, node, python, java, C++</span>,
          <span>Знание redis/tarantool</span>,
          <span>Представление об&nbsp;алгоритмах консенсуса</span>,
          <span>Опыт низкоуровневого программирования</span>,
        ],
        conditions: [
          <span>Высокая зарплата</span>,
          <span>Лофт на&nbsp;1905&nbsp;года</span>,
          <span>Возможна удаленная работа</span>,
        ]
      },
      {
        link: 'cpp-dev',
        name: 'Разработчик C++',
        description: <span>Опыт в&nbsp;blockchain не&nbsp;требуем&nbsp;&mdash; умеем растить blockchain developer&rsquo;ов из&nbsp;толковых senior&rsquo;ов.</span>,
        requirements: [
          <span>отличное владение&nbsp;С++ и&nbsp;Boost</span>,
          <span>опыт разработки сетевых сервисов и&nbsp;распределённых систем</span>,
          <span>знание linux, bash, make, grep-sed и&nbsp;т.п.</span>,
          <span>умение и&nbsp;готовность разбираться в&nbsp;сложном, плохо документированном коде</span>,
          <span>хорошее знание алгоритмов и&nbsp;структур данных</span>,
        ],
        advantages: [
          <span>опыт разработки под движки: Graphene, Bitshares, Steem, Golos</span>,
          <span>опыт разработки любых децентрализованных сервисов</span>,
          <span>понимание основ криптографии, симметричных и&nbsp;ассиметричных криптосистем</span>,
        ],
        conditions: [
          <span>Высокая зарплата</span>,
          <span>Лофт на&nbsp;1905&nbsp;года</span>,
          <span>Возможна удаленная работа</span>,
        ]
      },
      {
        link: 'devops',
        name: 'DevOps инженер',
        description: <span>Задачи: администрирование и&nbsp;поддержка облачной инфраструктуры на&nbsp;стороне компании и&nbsp;клиентов; построение критичных к&nbsp;безопасности, надежности и&nbsp;доступности DevOps-решений; развертывание и&nbsp;администрирование сервисов, приложений, баз данных (как SQL так и&nbsp;NoSQL); предотвращение сбоев и&nbsp;решение проблем; автоматизация, контейнеризация, минимизация человеческого фактора.</span>,
        requirements: [
          <span>Опыт администрирования сервисов, чувствительных к&nbsp;надежности и&nbsp;доступности</span>,
          <span>Опыт организации и&nbsp;поддержки высокого уровня информационной безопасности</span>,
          <span>Опыт администрирования и&nbsp;настройки Linux 4+&nbsp;года</span>,
          <span>Опыт администрирования web-сервисов</span>,
          <span>Знание и&nbsp;опыт Docker, в&nbsp;т.ч. разработки Dockerfile, сервисов, стеков сервисов, опыт оркестрации</span>,
          <span>Опыт работы с&nbsp;AWS/Google Cloud</span>,
          <span>Опыт автоматизации задач на&nbsp;скриптовых языках</span>,
          <span>Понимание и&nbsp;опыт работы с&nbsp;SQL, NoSQL-решениями, CI</span>,
          <span>Знание сетевых технологий</span>,
          <span>Желание и навык изучения новых сервисов и технологий</span>,
          <span>Обучаемость, стрессоустойчивость, ответственность, внимательность</span>,
        ],
        advantages: [
          <span>Опыт администрирования платежных сервисов</span>,
          <span>Опыт cloudflare/qrator</span>,
          <span>Знание&nbsp;js, node, python, java, ruby, опыт автоматизации работы с&nbsp;пакетами соотв. языка</span>,
          <span>Опыт написания спецификаций rpm/deb пакетов</span>,
          <span>Опыт работы с&nbsp;git</span>,
        ],
        conditions: [
          <span>Высокая зарплата</span>,
          <span>Лофт на&nbsp;1905&nbsp;года</span>,
          <span>Возможна удаленная работа</span>,
        ]
      },
    ];

    const pageNav = jobs.map((el, i) => {
      const {link, name} = el;
      return {link, name};
    });

    return (
      <PageLayout>
        <ContentLayout contentRight={<PageNav links={pageNav} />}>
          {jobs.map((el, i) => (
            <ContentBlock id={el.link} key={el.link}>
              {i === 0 &&
                <h2>Вакансии</h2>
              }
              <BlockJob job={el} />
            </ContentBlock>
          ))}
        </ContentLayout>
      </PageLayout>
    );
  }
}

export default Job;
