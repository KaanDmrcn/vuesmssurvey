<template>
<div >
   
    <pre>{{items}}</pre>
    <pre>{{people}}</pre>
    <pre>{{answers}}</pre>
</div>
</template>

<script>

import axios from "axios";



export default {
     data(){
        return{
            items: [],
            people: [],
            answers: [],
        }
    },
    mounted(){
        
        axios.get('http://localhost:8080/api/SmsSurveys/'+ this.$route.params.id)   
        .then(response => {
            this.items = response.data;            
        })
        .catch(e => console.log(e)),
        axios.get('http://localhost:8080/api/SmsSurveyPeople/GetId/'+ this.$route.params.id)   
        .then(response => {
            this.people = response.data;            
        })
        .catch(e => console.log(e)),
        axios.get('http://localhost:8080/api/SmsSurveyAnswers/GetId/'+ this.$route.params.id)   
        .then(response => {
            this.answers = response.data;            
        })
        .catch(e => console.log(e))
        
    },
    
    
    
}
</script>
