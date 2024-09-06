<script setup></script>

<template>
  <div class="how__to__know__wrapp">
    <div class="how__to__know__title">
      <h1>Что нужно знать, чтобы заказать эвакуатор в Москве</h1>
    </div>
    <div class="how__to__know__column">
      <div class="how__to__know__col">
        <div class="how__to__know__col__img"><img src="/src/assets/img/colImg.png" alt="" /></div>
        <div class="how__to__know__col__text">
          <p>
            Заказы на вызов эвакуатора в Москве перевозчики-партнеры “Тут Эвакуатор” принимают
            круглосуточно. Когда бы вы не позвонили, эвакуатор найдется всегда. Размещая заказ на
            эвакуатор, ознакомьтесь с информацией о транспортной компании, проконсультируйтесь с ее
            специалистами и выберите оптимальный вариант перевозки своего ТС.
          </p>
        </div>
      </div>

      <div class="how__to__know__col">
        <div class="how__to__know__col__img"><img src="/src/assets/img/colImg2.png" alt="" /></div>
        <div class="how__to__know__col__text">
          <p>
            Примите во внимание, что одни и те же виды эвакуаторов рассчитаны на транспортировку
            авто разных классов. Вопрос заключается лишь в том, какой тип эвакуатор будет выгоднее
            задействовать в вашем случае. Следуя рекомендациям перевозчика, вы сможете недорого
            эвакуировать авто как в Москве, так и в области.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.how__to__know__wrapp {
  padding: 100px var(--containers);
  background-color: #fff5cc;
}

.how__to__know__title {
    margin-bottom: 48px;
}
.how__to__know__column {
    display: flex;
    column-gap: 40px;
}
.how__to__know__col {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 680px;
    font-size: 26px;
}
@media(max-width: 1033px){
  .how__to__know__column{
    flex-direction: column;
    align-items: center;
    row-gap: 50px;
  }
  .how__to__know__col{
    width: 350px;
    font-size: 20px;
  }
  .how__to__know__col__img img{
    width: 250px;
  }
  .how__to__know__title{
    font-size: 14px;
  }
  .how__to__know__col__text{
    font-size: 13px;
  }
}
</style>
