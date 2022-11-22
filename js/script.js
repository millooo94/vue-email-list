const app = new Vue({
    el: '.container',
    data: {
        ArrEmail: []

    },
    methods: {
        generateAgain(){
            this.ArrEmail.splice(0, this.ArrEmail.length)
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(axiosResponse => this.ArrEmail.push(axiosResponse.data.response));
            }
        }



    },
    created(){
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(axiosResponse => this.ArrEmail.push(axiosResponse.data.response));
        }
    }
})