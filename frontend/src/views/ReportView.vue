<template>
    <div class="wrapper">
        <Card class="card">
            <template #title>
                <h3 class="title">Формирования отчета за период</h3>
            </template>
            <template #content>

                <div class="content-wrapper">
                    <div class="inputs-wrapper">
                        <div class="input-item">
                            <h2>Дата начала</h2>
                            <DatePicker v-model="start_date" showIcon fluid iconDisplay="input" dateFormat="dd.mm.yy" class="date-picker"/>
                        </div>
                        <div class="input-item">
                            <h2>Дата Оконччания (Включительно)</h2>
                            <DatePicker v-model="start_date" showIcon fluid iconDisplay="input" dateFormat="dd.mm.yy" class="date-picker"/>
                        </div>
                        <div class="input-item">
                            <h2>Kонференц-зал</h2>
                            <DatePicker v-model="start_date" showIcon fluid iconDisplay="input" dateFormat="dd.mm.yy" class="date-picker"/>
                        </div>
                        <div class="input-item">
                            <h2>Мастер-код Администратора</h2>
                            <DatePicker v-model="start_date" showIcon fluid iconDisplay="input" dateFormat="dd.mm.yy" class="date-picker"/>
                        </div>
                    </div>
                    <Button label="Сформировать" type="button" class="button" />
                </div>

            </template>
        </Card>
    </div>
</template>

<script>
import Card from 'primevue/card';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';

export default{
    components:{
        Card,
        Button,
        DatePicker
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
        .title
            text-align: center
        .content-wrapper
            width: 100%
            display: flex
            align-items: center
            flex-direction: column
            .inputs-wrapper
                height: 30vh
                width: 100%
                display: grid
                grid-template-columns: auto auto
                grid-gap: 40px
                .input-item
                    h2
                        margin-top: 0
            .button
                padding-left: 2vw
                padding-right: 2vw
                font-size: 1.4rem
</style>