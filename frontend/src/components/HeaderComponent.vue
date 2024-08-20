<template>
    <div class="wrapper">
        <Card class="field-set">
            <template #content>
                <div class="content-wrapper">
                    <div class="left-block">
                        <img src="../assets/kmic-logo.jpeg" alt="" class="logo" @click="goToMain()">
                        <img src="../assets/kmlife-logo.png" alt="" class="logo" @click="goToMain()">
                        <div class="devider"></div>
                        <a href="/" class="link">Поиск конференц-зала</a>
                        <a href="/book" class="link">Забронировать</a>
                        <a href="/report" class="link">Отчеты</a>
                        <a href="/faq" class="link">FAQ</a>
                    </div>
                    <div class="right-block">
                        <span class="today">Сегодня: {{ new Date().toLocaleDateString() }}</span>
                        <span class="logout" @click="logout()">Выйти из системы</span>
                    </div>
                </div>
            </template>
        </Card>
    </div>
  </template>
  
  <script>
  import Card from 'primevue/card';
  export default {
    name: 'HomeView',
    data() {
        return {
            password : ""
        }
    },
    components:{
        Card
    },
    methods:{
        logout(){
            localStorage.removeItem("is_auth")
            window.location.replace('/login')
        },
        goToMain(){
            window.location.replace('/')
        }
    }
  }
  </script>
  
<style lang="sass" scoped>
// *
//     border: 1px solid red
.wrapper    
    width: 100vw
    height: 14vh
    margin: 0
    display: flex
    align-items: center
    justify-content: center
    .field-set
        width: 80vw
        height: 12vh
        display: flex
        justify-content: center !important
        .content-wrapper
            display: flex
            align-items: center
            flex-direction: row
            .left-block
                width: 70%
                display: flex
                align-items: center
                flex-direction: row
                .logo
                    width: 150px
                    margin-left: 1vw
                    cursor: pointer
                .link
                    margin-left: 2vw
                    text-decoration: none
                    color: black
                    padding-top: 1vh
                    padding-bottom: 1vh
                .link:hover
                    border-bottom: 1px solid gray
                .link:active
                    color: black
                .devider
                    margin-left: 1vw
                    height: 4vh
                    border-left: 1px solid gray
            .right-block
                margin-left: 10%
                width: 20%
                display: flex
                align-items: center
                flex-direction: row
                .logout
                    color: red
                    cursor: pointer
                    margin-left: 1vw

</style>
  