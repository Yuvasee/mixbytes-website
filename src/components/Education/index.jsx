import React, {Component} from 'react';

import EmailForm from 'components/EmailForm';
import CryptoHistory from './Lectures/2CryptoHistory';

class Education extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4">Обучение</h1>
        <h2>Вечерние лекции</h2>
        <p>Пару раз в&nbsp;месяц по&nbsp;четвергам мы&nbsp;рассказываем о&nbsp;блокчейн-технологиях и&nbsp;нашей практике.</p>
        <p>Чтобы не пропустить новую лекцию, следите за&nbsp;нами в&nbsp;<a href="https://t.me/mixbytes_pub">Telegram</a> и&nbsp;<a href="https://www.facebook.com/mixbyteslabs">Facebook</a>.</p>
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
