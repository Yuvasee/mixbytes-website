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
        name: 'Блокчейн разработчик',
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
    ];

    const pageNav = jobs.map((el, i) => {
      const {link, name} = el;
      return {link, name};
    });

    return (
      <PageLayout>
        <ContentLayout contentRight={<PageNav links={pageNav} />}>
          <ContentBlock>
            <h2>Вакансии</h2>
            {jobs.map((el) => (
                <BlockJob job={el} />
            ))}
          </ContentBlock>
        </ContentLayout>
      </PageLayout>
    );
  }
}

export default Job;
