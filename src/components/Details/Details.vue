<template>
<div > 
    
    <br>  <form class="form-control">
    <h3>Survey Detail</h3>
    <surveydetail-component></surveydetail-component> </form><br>
    


    <th><form class="form-control">
    <h3>Survey Answers</h3>
    <answerdetail-component></answerdetail-component></form></th>
    
   
    
    
     <th><form class="form-control">
    <h3>Survey People</h3>
    <peopledetail-component></peopledetail-component></form></th>

<th>
    <form class="form-control" @submit.prevent="createAnswer">
      <th><h3>Answer Information</h3></th> <hr>
         <input value="smsSurveyId" placeholder="17" type="hidden" v-model="answers.smsSurveyId"><p></p>
      <label >Answer</label>    <input placeholder="güzel" type="text" v-model="answers.answer"><p></p>
      <button>Create Answer</button><p></p>
    </form></th>
</div>
</template>

<script>
import axios from "axios";

export default {
     data(){
        return{
            answers: {
                smsSurveyId: this.$route.params.id,
                answer: '',
            },
        }
    },
    methods: {
        createAnswer(){            
            axios.post('http://localhost:8080/api/SmsSurveyAnswers', this.answers)
            .then(response => console.log(response))
            .catch(error => console.log(error))      
        },
        refresh(){ 
            location.reload()             
                  
        },
    }    
}
</script>
