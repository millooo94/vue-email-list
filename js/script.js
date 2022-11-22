const app = new Vue({
    el: '.container',
    data: {
        ArrEmail: []

    },
    methods: {



    },
    created(){
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(axiosResponse => this.ArrEmail.push(axiosResponse.data.response));
        }
    }
})