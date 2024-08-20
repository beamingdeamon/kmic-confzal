<template>
    <div class="wrapper">
        <Card class="card">
            <template #title>
                <div class="title-wrapper">
                    <h2>КАК ЭТО РАБОТАЕТ?</h2>
                    <h1>Часто задаваемые вопросы</h1>
                </div>
            </template>
            <template #content>
                <div class="content-wrapper">
                    <div class="content-item">
                        <h1>Как узнать занят ли конференц-зал?</h1>
                        <h2>Для получения информации о доступности конференц-зала, нужно перейти в пункт меню «Поиск конференц-зала». При переходе на данную странницу вы получаете информацию о занятости на текущий день. Для получения информации об иной дате, необходимо выбрать нужную дату и выбрать конференц-зал, затем нажать кнопку "Найти".</h2>
                    </div>
                    <div class="content-item">
                        <h1>Как забронировать?</h1>
                        <h2>Нужно перейти в пункт меню «Забронировать», пользователя переводит на страницу бронирования, которая представляет собой поля для заполнения данных о самом пользователе, а также теме, дате и времени встречи, в поле «Мастер код» пользователь вводит произвольный код, который возможно будет необходим для отмены забронированной встречи. Функция отмены встречи предусмотрена в виде кнопки «Отменить» в интерактивной таблице на странице «Поиск конференц-зала».</h2>
                    </div>
                    <div class="content-item">
                        <h1>Как сформировать отчет?</h1>
                        <h2>Нужно перейти в пункт меню «Отчеты», пользователя переводит на страницу формирования отчетов, где нужно заполнить форму. Данный отчет может сформировать только администратор.</h2>
                    </div>
                    <div class="content-item">
                        <h1>Забыл мастер-код, не могу отменить встречу. Что делать?</h1>
                        <h2>Требуется обратиться к Ассистенту Председателя Правления для отмены забронированной встречи.</h2>
                    </div>
                </div>

            </template>
        </Card>
    </div>
</template>

<script>
import Card from 'primevue/card';

export default{
    components:{
        Card
    },
    mounted(){
      let authed = localStorage.getItem('is_auth')
      console.log(authed)
      if(authed == null || authed == undefined){
          window.location.replace("/login")
      }
  }
}
</script>

<style lang="sass" scoped>
.wrapper
    width: 100vw
    display: flex
    justify-content: center
    .card
        margin-top: 2vh
        width: 80vw
        .title-wrapper
            display: flex
            align-items: center
            flex-direction: column
            h2
                margin-top: 2vh
            h1
                margin-top: 0
        .content-wrapper
            width: 100%
            height: 50vh
            display: grid
            grid-template-columns: auto auto
            grid-gap: 40px
            .content-item
                h1
                    font-size: 1.5rem
                h2
                    font-size: 1.2rem
</style>