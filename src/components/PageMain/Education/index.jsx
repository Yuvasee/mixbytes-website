import React, {Component} from 'react';

import EmailForm from 'components/EmailForm';

class Education extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4">Обучение</h1>
        <h2>Вечерние лекции</h2>
        <p>Уже <b>с&nbsp;28&nbsp;сентября</b> по&nbsp;четвергам мы&nbsp;рассказываем о&nbsp;блокчейн-технологиях и&nbsp;нашей практике.</p>
        <div className="emph">
          <h3>
            &laquo;Анатомия ICO на&nbsp;Ethereum&raquo;&nbsp;&mdash; 28&nbsp;сентября
          </h3>
          <p>На&nbsp;лекции мы&nbsp;подробно разберем технические аспекты запуска crowdsale на&nbsp;самой популярной платформе&nbsp;&mdash; Ethereum, расскажем о&nbsp;своём реальном коммерческом опыте разработки, аудита и&nbsp;запуска смарт-контрактов.</p>
          <p>Подача материала рассчитана на&nbsp;бизнес, но&nbsp;разработчикам тоже будет интересно.</p>
          <p>
            Спикеры: <a href="./#sergey">Сергей Прилуцкий</a>, <a href="./#alexey">Алексей Макеев</a>.
          </p>
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
          <h3>Специальный гость</h3>
          <p>Влад Замфир (Vlad Zamfir)&nbsp;&mdash; один из&nbsp;ведущих разработчиков Ethereum и&nbsp;протокола Casper (Proof of&nbsp;Stake), о&nbsp;котором он&nbsp;и&nbsp;расскажет.</p>
          <p>Мероприятие проводится совместно с&nbsp;Ethereum Moscow.</p>

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
          <p><br />Место: Москва, м. Курская, Нижний Сусальный пер., д.&nbsp;5, стр.&nbsp;1, Fibonacci Loft (АРМА)</p>
          <p>Из&nbsp;метро выход в&nbsp;город к&nbsp;театру Гоголя, на&nbsp;Нижний Сусальный переулок и&nbsp;улицу Казакова. После выхода из&nbsp;тоннеля пройти прямо примерно 100&nbsp;метров, мимо шлагбаума (въезд на&nbsp;территорию завода Арма). Справа будет дверь под вывеской &laquo;Торговый ряд&raquo;, по&nbsp;лестнице на&nbsp;второй этаж.</p>
          <p><img alt="" src="https://ucare.timepad.ru/06790587-da1f-4451-9879-039817dddcbd/-/format/jpeg/-/quality/lighter/" /></p>
          <p>По&nbsp;всем вопросам пишите в&nbsp;наш Телеграм-чат: <a href="https://t.me/mixbytes_pub">https://t.me/mixbytes_pub</a><br />
          или звоните&nbsp;+7 (919) 763-31-66 (Илона).</p>
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
      </div>
    );
  }
}

export default Education;
