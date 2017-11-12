import React, {Component} from 'react';

import PageLayout from 'components/PageLayout';
import PageNav from 'components/PageNav';
import ContentLayout from 'components/ContentLayout';
import ContentBlock from 'components/ContentBlock';

import BlockEmphasis from 'components/ContentBlock/BlockEmphasis';
import BlockInfoTabs from 'components/ContentBlock/BlockInfoTabs';
import BlockWithAside from 'components/ContentBlock/BlockWithAside';
import BlockThreeColumns from 'components/ContentBlock/BlockThreeColumns';

class Education extends Component {
  render() {
    const pageNav = [
      {link: 'blockchain-dive', name: 'Разработка и аудит'},
    ];

    return (
      <PageLayout>
        <ContentLayout contentRight={<PageNav links={pageNav} />}>
          <ContentBlock id="blockchain-dive">
            <h2>Погружение в блокчейн</h2>
            <BlockEmphasis>
              <p>Даем фундаментальное понимание технической и&nbsp;юридической базы блокчейн-технологий за&nbsp;2&nbsp;полных дня. От&nbsp;технических основ до&nbsp;юридической практики. Вы,&nbsp;наконец, поймете как и&nbsp;почему всё это работает!</p>
              <p>Курс проводится совместно с&nbsp;компанией <a href="http://cych.io">cych.io</a> и&nbsp;приглашёнными экспертами Центра Россия-ОЭСР РАНХиГС при Президенте&nbsp;РФ.</p>
            </BlockEmphasis>
            <BlockInfoTabs tabs={[
              {
                id: 'blockchain',
                name: 'Блокчейн',
                content: <p><b>Блокчейн&nbsp;&mdash;</b> цифровой реестр транзакций, сделок, контрактов, по&nbsp;сути любой информации. Способ хранения и&nbsp;криптографической защиты данных от&nbsp;подделки. Описан в&nbsp;1991&nbsp;году.</p>
              },
              {
                id: 'cryptoCurrencies',
                name: 'Криптовалюта',
                content: <p><b>Криптовалюта&nbsp;&mdash;</b> цифровые счётные единицы, учёт которых децентрализован. Функционирование данных систем происходит при помощи распределённой компьютерной сети. Термин закрепился после публикации Forbes статьи o&nbsp;Биткоине &laquo;Crypto currency&raquo; в&nbsp;2011&nbsp;году.</p>
              },
              {
                id: 'smartContracts',
                name: 'Смарт-контракт',
                content: <p><b>Смарт-контракт&nbsp;&mdash;</b> алгоритм, набор условий, выполнение которых влечет за&nbsp;собой некоторые события в&nbsp;реальном мире или цифровых системах. Для реализации требуется децентрализованная среда, исключающая человеческий фактор. Для передачи стоимости в&nbsp;смарт-контракте требуется криптовалюта. Идея предложена в&nbsp;1994&nbsp;году.</p>
              },
              {
                id: 'ico',
                name: 'ICO',
                content: <p><b>ICO, ITO или TGE&nbsp;&mdash;</b> форма привлечения инвестиций или краудфайндинга в&nbsp;виде эмиссии и&nbsp;продажи инвесторам новых криптовалют. Первое ICO проведено в&nbsp;2013 году (Mastercoin).</p>
              },{
                id: 'bitcoin',
                name: 'Биткоин',
                content: <p><b>Биткоин&nbsp;&mdash;</b> пиринговая платёжная система. Для функционирования и&nbsp;защиты использует криптографические методы (блокчейн). Вся информация о&nbsp;транзакциях между адресами системы доступна в&nbsp;открытом виде. Была запущена в&nbsp;2009&nbsp;году.</p>
              },
              {
                id: 'ethereum',
                name: 'Ethereum',
                content: <p><b>Ethereum&nbsp;&mdash;</b> платформа для создания децентрализованных онлайн-сервисов на&nbsp;базе блокчейна и&nbsp;смарт-контрактов. Реализована как единая децентрализованная виртуальная машина. Запущена 30&nbsp;июля 2015&nbsp;года.</p>
              }
            ]} />
            <BlockWithAside aside={
              <p>
                <b className="d-block mb-2">Будет полезно</b>
                >бизнесменам<br />
                >инвесторам<br />
                >юристам<br />
                >менеджерам<br />
                >программистам
              </p>
            }>
              <p>Блокчейн-технологии ворвались в&nbsp;нашу жизнь&nbsp;и, похоже, собираются полностью изменить&nbsp;её. Биткоин и&nbsp;ICO у&nbsp;всех на&nbsp;устах, в&nbsp;них вкладывают деньги, часто даже не&nbsp;понимая о&nbsp;чем идет речь. Ведь, к&nbsp;сожалению, большая часть доступной информации&nbsp;&mdash; либо слишком техническая и&nbsp;непонятная документация для программистов, либо слишком рекламная и&nbsp;провокационная, нацеленная на&nbsp;привлечение инвестиций в&nbsp;очередное ICO.</p>
              <p>Мы&nbsp;болеем за&nbsp;популяризацию блокчейн-технологий, за&nbsp;прозрачность и&nbsp;доступность информации, за&nbsp;безопасность финансовых операций. На&nbsp;курсе вы&nbsp;получите фундамент знаний, который позволит вам уверенно ориентироваться в&nbsp;новостном и&nbsp;рекламном потоке. И&nbsp;принимать взвешенные решения об&nbsp;использовании блокчейн-технологий в&nbsp;своей жизни, карьере и&nbsp;бизнесе.</p>
            </BlockWithAside>
            <BlockThreeColumns content={[
              {
                text: <p>Если вы&nbsp;скептик&nbsp;&mdash; приходите и&nbsp;задайте спикерам самые сложные вопросы. Cкорее всего, вы&nbsp;поверите в&nbsp;силу блокчейн-технологий больше, чем раньше.</p>,
                icon: <b style={{color: '#FF5932'}}>1</b>
              },
              {
                text: <p>Если блокчейн и&nbsp;ICO уже вскружили вам голову&nbsp;&mdash; приходите тоже, мы&nbsp;постараемся немного охладить ваш пыл.</p>,
                icon: <b style={{color: '#481F80'}}>2</b>
              },
              {
                text: <p>Обещаем, что на&nbsp;курсе не&nbsp;будет никакой рекламы и&nbsp;призывов куда-либо вложить деньги.</p>,
                icon: <img style={{marginBottom: '10px'}} src={require('./i/littlefinger.png')} />
              },

            ]} />
          </ContentBlock>
        </ContentLayout>
      </PageLayout>
    );
  }
}

export default Education;
