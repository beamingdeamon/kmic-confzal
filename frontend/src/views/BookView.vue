<template>
    <div class="wrapper">
        <Card class="card">
            <template #title>
                <h3 class="title">Бронирование конференц-зала</h3>
            </template>
            <template #content>
                <div class="content-wrapper">
                    <div class="inputs-wrapper">
                        <div class="input-block">
                            <div class="input-item">
                                <h2>Тема встречи <span>*</span></h2>
                                <InputText id="topic" v-model="value"  class="input"/>
                            </div>
                        </div>
                        <div class="input-block">
                            <div class="input-item">
                                <h2>Выберите Конференц-зал <span>*</span></h2>
                                <Select v-model="selected_room" :options="rooms" optionLabel="name" placeholder="Выберите Конференц-зал" class="input" />
                            </div>
                            <div class="input-item">
                                <h2>Место Работы <span>*</span></h2>
                                <Select v-model="selected_work_place" :options="work_places" optionLabel="name" placeholder="Место Работы" class="input" />
                            </div>
                        </div>
                        <div class="input-block">
                            <div class="input-item">
                                <h2>Выберите дату <span>*</span></h2>
                                <DatePicker v-model="filter_date" showIcon fluid iconDisplay="input" dateFormat="dd.mm.yy" class="input"/>
                            </div>
                            <div class="input-item">
                                <h2>Время от (Время Начала) <span>*</span></h2>
                                <DatePicker id="datepicker-timeonly" v-model="time" timeOnly fluid  class="input"/>
                            </div>
                            <div class="input-item">
                                <h2>Время до (Время Оконччания) <span>*</span></h2>
                                <DatePicker id="datepicker-timeonly" v-model="time" timeOnly fluid class="input"/>
                            </div>
                        </div>
                        <div class="input-block">
                            <div class="input-item">
                                <h2>ФИО <span>*</span></h2>
                                <InputText id="topic" v-model="value" class="input"/>
                            </div>
                            <div class="input-item">
                                <h2>Внутренний номер <span>*</span></h2>
                                <InputText id="topic" v-model="value" class="input"/>
                            </div>
                            <div class="input-item">
                                <h2>Мастер-код <span>*</span></h2>
                                <InputText id="topic" v-model="value" class="input"/>
                            </div>
                            
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
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';


export default{
    data() {
        return {
            selected_room : {},
            selected_work_place : {},
            rooms: [
            {
              id : 0,
              name : "Конфзал 1 (3 этаж)",
              value : 0
            },{
              id : 1,
              name : "Конфзал 2 (4 этаж)",
              value : 1
            }
          ],
          work_places: [
            {
              id : 0,
              name : "СК Казахмыс",
              value : 0
            },{
              id : 1,
              name : "KM Life",
              value : 1
            }
          ],
          
        }
    },
    components:{
        Card,
        Button,
        DatePicker,
        InputText,
        Select
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
                height: 45vh
                width: 100%
                .input-block
                    display: flex
                    flex-direction: row
                    .input-item
                        width: 100%
                        .input
                            width: 95%
                        h2
                            font-size: 1.2rem
                            span
                                color: red
            .button
                padding-left: 2vw
                padding-right: 2vw
                font-size: 1.4rem
</style>