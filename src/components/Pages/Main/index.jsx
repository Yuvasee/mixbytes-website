import React, {Component} from 'react';

import Header from 'components/Header';
import ContentLayout from 'components/ContentLayout';
import ContentBlock from 'components/ContentBlock';
import BlockWithIcon from 'components/ContentBlock/BlockWithIcon';
import BlockTwoColumns from 'components/ContentBlock/BlockTwoColumns';
import BlockEvent from 'components/ContentBlock/BlockEvent';

import './styles.css';

class Main extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <ContentLayout>
          <ContentBlock>
            <h2>Разработка и аудит</h2>
            <BlockWithIcon
              icon={require('./i/github-logo.png')}
              iconText={<p>Пример <a href="https://github.com/mixbytes/storiqa_ico/tree/master/contracts">контракта</a> и&nbsp;<a href="https://github.com/mixbytes/audits_public/blob/master/solidity/KickICO/report.md">аудита</a> на&nbsp;Гитхабе</p>}
            >
              <p>Пишем и&nbsp;проверяем смарт-контракты на&nbsp;Solidity с&nbsp;нуля или на&nbsp;основе проверенных бибилиотек. Соблюдаем стандарт ERC20. Тестируем код под Truffle framework. Верифицируем контракты на&nbsp;Etherscan. Находим ошибки и&nbsp;уязвимости в&nbsp;вашем смарт-контракте. Разрабатываем блокчейны на&nbsp;базе фреймворка Graphene. Скорее всего, сначала вампонадобятся наши консультации.</p>
            </BlockWithIcon>
          </ContentBlock>
          <ContentBlock>
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
          <ContentBlock>
            <h2>Ежемесячный курс</h2>
            <BlockEvent
              date="9-10 декабря"
              header="Интенсив &laquo;Погружение в&nbsp;блокчейн&nbsp;2&raquo;"
              desc="На&nbsp;лекции мы&nbsp;подробно разберем технические аспекты запуска Сrowdsale на&nbsp;самой популярной платформе&nbsp;&mdash; Ethereum, расскажем о&nbsp;своём реальном коммерческом опыте разработки, аудита и&nbsp;запуска смарт-контрактов. Подача материала рассчитана на&nbsp;бизнес, но&nbsp;разработчикам тоже будет интересно."
              themes={[
                "Обзор 10&nbsp;криптовалют: Bitcoin, NEO,Bitcoin Cash, Litecoin, Dash, Ethereum, Ripple, NEM, IOTA, Monero.",
                "Обзор популярных криптовалютных кошельков, плюсы и&nbsp;минусы каждого из&nbsp;них.",
                "Обзор криптовалютных бирж и&nbsp;механизм их&nbsp;работы.",
                "Основы безопасной работы с&nbsp;криптовалютами для каждого.",
                "Сферы применения, перспективы."
              ]}
              speakers={[
                {
                  name: "Павел Круглов",
                  desc: <p>Выпускник МИФИ, факультет Информа-ционной Безопасности, кафедра безопасности банковских систем. Участвовал в&nbsp;разработке системы безопасности для Банка России. Почетный автор и&nbsp;редактор журнала &laquo;Хакер&raquo; (более 100 статей для журнала). Вдохновитель сообщества пишущих разработчиков Mail.Ru Group (более 800 публикаций на&nbsp;Habrahabr, Medium и&nbsp;в&nbsp;других блогах). Заядлый сторонник open-source и&nbsp;Linux.</p>,
                  img: "kruglov"
                },
                {
                  name: "Сергей Прилуцкий",
                  desc: <p>Начал программировать в&nbsp;начальной школе, работал системным администратором много лет. Занимался реверс-инжинирингом и&nbsp;безопасностью&nbsp;ПО, исследовал программные защиты и&nbsp;антивирусные движки. Закончил МИФИ и&nbsp;преподавал там курсы &laquo;Базы данных&raquo; и&nbsp;&laquo;Информационная безопасность&raquo;, вел исследовательские проекты посвящённые криптографическим методам защиты. В&nbsp;течение многих лет работал в&nbsp;Mail.Ru ведущим разработчиком на&nbsp;многих проектах, последние годы в&nbsp;команде Антиспама. Имел дело с&nbsp;системами, начиная от&nbsp;небольших высоконагруженных микросервисов и&nbsp;сайтов и&nbsp;заканчивая большими кластерами для распредеённых вычислений. Преподаватель и&nbsp;автор курса по&nbsp;информационной безопасности для проектов &laquo;Технопарк&raquo; (Бауманка) и&nbsp;&laquo;Техноатом&raquo; (МИФИ). Активный участник сообщества блокчейн-разработчиков.</p>,
                  img: "prilutskiy"
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
                      price: "10000&#8381;"
                    }
                  ]
                },
                {
                  period: "После",
                  types: [
                    {
                      price: "10000&#8381;"
                    },
                    {
                      name: "VIP",
                      price: "16000&#8381;"
                    }
                  ]
                },
              ]}
            />
          </ContentBlock>
        </ContentLayout>
      </div>
    );
  }
}

export default Main;
