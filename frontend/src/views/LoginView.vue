<template>
    <div class="wrapper">
        <Fieldset legend="Введите ключ" class="field-set">
            <form action="">
                <InputText v-model="password" type="password" size="large" placeholder="Введите ключ" class="input"/>
                <Button label="Войти" type="button" class="button" @click="login()" />
            </form>
        </Fieldset>
    </div>
  </template>
  
  <script>
 import Fieldset from 'primevue/fieldset';
 import InputText from 'primevue/inputtext';
 import Button from 'primevue/button';
import axios from 'axios'

const API_URL = process.env.VUE_APP_API_URL

  export default {
    name: 'HomeView',
    data() {
        return {
            password : ""
        }
    },
    components:{
        Fieldset,
        InputText,
        Button
    },
    methods:{
        login(){

            axios
                .post(`${API_URL}/login/`,{
                    master_password : this.password 
                })
                .then((response)=>{
                    if(response.status === 200){
                        window.localStorage.setItem("is_auth", true)
                        window.location.replace('/')
                    }else{
                        alert('Не правильный пароль')
                    }
                }).catch(function (error) {
                    if (error.response) {
                        alert('Ошибка')
                    }
                });

        }
    }
  }
  </script>
  
<style lang="sass" scoped>
.wrapper    
    width: 100vw
    height: 100vh
    display: flex
    align-items: center
    justify-content: center
    .field-set
        width: 30vw
        height: 10vh
        .input
            width: 70%
        .button
            width: 15%
            margin-left: 5%
</style>
  