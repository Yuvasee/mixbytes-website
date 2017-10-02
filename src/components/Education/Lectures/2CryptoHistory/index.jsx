import React, {Component} from 'react';

import Kruglov from 'components/Person/Kruglov';
import Fibonacci from 'components/Education/Places/Fibonacci';

class _2CryptoHistory extends Component {
  render() {
    return (
      <div className="emph">
        <h3>
          Ближайшая лекция: 12&nbsp;октября<br />
          &laquo;История рынка криптовалют от&nbsp;создания Биткоина до&nbsp;наших дней&raquo;
        </h3>
        <p>На&nbsp;этот раз мы&nbsp;решили отдохнуть от&nbsp;тяжелых глубоко техничеких тем и&nbsp;сделать более легкую для восприятия, но&nbsp;не&nbsp;менее интересную лекцию-обзор рынка криптовалют.</p>
        <p>На&nbsp;лекции программист и&nbsp;IT-публицист Павел Круглов подробно расскажет о&nbsp;топ-10 самых капитализированных криптовалют по&nbsp;данным coinmarketcap.com, а&nbsp;также проведет обзор самых популярных бирж и&nbsp;кошельков.</p>
        <p>Завершит лекцию Сергей Прилуцкий с&nbsp;инструкцией по&nbsp;базовой безопасности при управлении средствами с&nbsp;личного компьютера.</p>

        <h3>Темы</h3>
        <p>1. Обзор топ-10 криптовалют:<br />
        Bitcoin, Bitcoin Cash, Litecoin, Ethereum, Ripple, Dash, NEM, IOTA, NEO, Monero</p>
        <ul>
        <li>Предпосылки и&nbsp;история создания.</li>
        <li>Обзор White Paper, принципы работы.</li>
        <li>Технические особенности алгоритмов.</li>
        <li>Сферы применения, перспективы.</li>
        <li>Сильные и&nbsp;слабые стороны, сравнительный анализ.</li>
        </ul>
        <p>2. Обзор популярных криптовалютных кошельков, плюсы и&nbsp;минусы каждого из&nbsp;них.</p>
        <p>3. Обзор криптовалютных бирж, механизм их&nbsp;работы.</p>
        <p>4. Основы безопасной работы с&nbsp;криптовалютами для каждого</p>

        <h3>Спикеры</h3>
        <p>Павел Круглов</p>
        <ul>
          <li>Выпускник МИФИ, факультет Информационной Безопасности, кафедра безопасности банковских систем.</li>
          <li>Участвовал в&nbsp;разработке системы безопасности для Банка России.</li>
          <li>Почетный автор и&nbsp;редактор журнала &laquo;Хакер&raquo; (более 100 статей для журнала).</li>
          <li>Вдохновитель сообщества пишущих разработчиков Mail.Ru Group (более 800 публикаций на&nbsp;Habrahabr, Medium и&nbsp;в&nbsp;других блогах).</li>
          <li>Заядлый сторонник open-source и&nbsp;Linux.</li>
        </ul>
        <p>и&nbsp;<a href="./#sergey">Сергей Прилуцкий</a>.</p>

        <h3>Участие</h3>
        <p>
          <b>До&nbsp;9&nbsp;октября</b> <br />
          Входной билет: 2000&nbsp;₽,<br />
          VIP (первые 1-2&nbsp;ряда): 4000&nbsp;₽
        </p>
        <p>
          <b>С 9&nbsp;октября</b> <br />
          Входной билет: 3000&nbsp;₽,<br />
          VIP (первые 1-2&nbsp;ряда): 6000&nbsp;₽
        </p>
        <a className="btn btn-success" href="https://mixbytes.timepad.ru/event/573975/#register">Зарегистрироваться на сайте Timepad.ru</a>
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

        <h3>Место</h3>
        <Fibonacci />

        <p>По&nbsp;всем вопросам пишите в&nbsp;наш Телеграм-чат: <a href="https://t.me/mixbytes_pub">https://t.me/mixbytes_pub</a><br />
        или звоните&nbsp;+7 (919) 763-31-66 (Илона).</p>
      </div>
    );
  }
}

export default _2CryptoHistory;
