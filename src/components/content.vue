<script setup></script>

<template>
  <div class="flex__wrapp">
    <div class="content__wrapp">
      <div class="content__left">
        <div class="content__title"><h1>Преимущества онлайн-сервиса ТутЭвакуатор.Ру</h1></div>
        <div class="content__text">
          ТутЭвакуатор.Ру – это удобный сервис для тех, кому нужно недорого и быстро перевезти авто
          с техническими неисправностями или же с повреждениями, полученными при ДТП в Москве.
        </div>
        <b class="content__subtext">Воспользовавшись ​ТутЭвакуатор.Ру, вы сможете:</b>
        <div class="content__col__info">
          <div class="content__col">
            <img src="/src/assets/img/Done.png" alt="done" />
            <p>
              получить постоянный доступ к базе надежных перевозчиков Москвы — сервис работает
              всегда, вне зависимости от воскресных/праздничных дней
            </p>
          </div>
          <div class="content__col">
            <img src="/src/assets/img/Done.png" alt="done" />
            <p>заказать эвакуатор круглосуточно — 24/7</p>
          </div>
          <div class="content__col">
            <img src="/src/assets/img/Done.png" alt="done" />
            <p>
              выбрать самое экономически выгодное предложение — цены на эвакуационные услуги
              рыночные, разница может быть ощутимой
            </p>
          </div>
          <div class="content__col">
            <img src="/src/assets/img/Done.png" alt="done" />
            <p>договориться с транспортной компанией напрямую — без посредников и комиссионных</p>
          </div>
          <div class="content__col">
            <img src="/src/assets/img/Done.png" alt="done" />
            <p>осуществить эвакуацию авто недорого — без скрытых платежей, неучтенных расходов</p>
          </div>
          <div class="content__col">
            <img src="/src/assets/img/Done.png" alt="done" />
            <p>
              вызвать эвакуатор в срочном порядке — охвачена Московская область, стоянки спецтехники
              базируются во многих районах Москвы, подача выполняется оперативно
            </p>
          </div>
        </div>
      </div>
      <div class="content__righ">
        <img src="/src/assets/img/Man.png" alt="man" />
      </div>
    </div>
    <div class="content__info__block">
      <div class="content__info">
        <b>Как оплатить заказ на эвакуатор</b>
        <p>
          Услуги по эвакуации вы оплачиваете непосредственно исполнителю – транспортной компании,
          взявшейся за перевозку вашего ТС. Оплата производится по завершении эвакуации, после
          выгрузки авто в конечной точке в Москве.
        </p>
        <p>
          Формы оплаты стандартные для Москвы: наличный/безналичный расчет или банковский перевод.
          Эварус не взимает комиссионные с клиентов за пользование сервисом.
        </p>
      </div>
      <div class="content__info">
        <b>Как оплатить заказ на эвакуатор</b>
        <p>
          При оформлении заказа перевозчик сообщит вам расчетное время прибытия эвакуатора в точку
          погрузки авто. Как правило, в Москве это происходит в течение 10-15 мин., но зависит от
          загруженности дорог Москвы и погодных условий. Перевозчик, принявший заказ, будет
          информировать вас о наличии дорожных пробок и возможной задержке подачи эвакуатора.
          Автопарки наших партнеров находятся во многих районах Москвы, поэтому мы рекомендуем вам
          выбрать ближайший эвакуатор, чтобы ускорить процесс транспортировки авто.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content__wrapp {
  display: flex;
  align-items: center;
  column-gap: 34px;
}
.flex__wrapp {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding-top: 100px;
  padding: 100px var(--containers) 0 var(--containers);
  height: 1570px;
}
.content__title {
  margin-bottom: 48px;
  width: 850px;
}
.content__text {
  width: 804px;
  font-size: 26px;
}
.content__subtext {
  font-size: 26px;
}
.content__col__info {
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  margin-top: 32px;
  margin-bottom: 100px;
}
.content__col {
  width: 733px;
  display: flex;
  align-items: start;
  font-size: 26px;
  column-gap: 30px;
}
.content__info__block {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 32px;
}
.content__info {
  border-radius: 20px;
  background: rgb(255, 245, 204);
  font-size: 26px;
  height: 593px;
  width: 684px;
  padding: 48px;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
}
@media(max-width: 1624px){
  .content__righ img{
    width: 500px;
  }
}
@media(max-width: 1453px){
  .content__righ{
    display: none;
  }
  .content__info{
    font-size: 20px;
  }
.content__wrapp{
  align-items: center;
  justify-content: center;
}
}
@media(max-width: 1028px){
  .content__info{
    font-size: 17px;
  }
}
@media(max-width: 968px){
  .content__title{
    font-size: 13px;
    width: 100%;
  }
  .content__text, .content__subtext,.content__col{
    font-size: 20px;
    width: 100%;
  }
  .flex__wrapp{
    height: 1345px;
  }
}
@media(max-width: 968px){
  .flex__wrapp{
    height: 100%;
    padding-bottom: 50px;
  }
  .content__info__block{
    flex-direction: column;
    row-gap: 50px;
  }
  .content__info{
    width: auto;
    height: auto;
    font-size: 20px;
  }
}
</style>
