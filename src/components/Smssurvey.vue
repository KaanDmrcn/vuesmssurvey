<template>
<div class="form-group">
    <hr>
    <th>
       <form class="form-control" @submit.prevent="createPost">
           <th><h3>Survey Information</h3></th> <hr>
      <label >StartDate</label>  <input placeholder="2021-05-05" type="text" v-model="formData.startDate"><p></p>
      <label >Duration</label>   <input placeholder="50" type="text" v-model="formData.duration"><p></p>
      <label >Question</label>   <input placeholder="nasıldı?" type="text" v-model="formData.question"><p></p>
     
      <button>Create Survey</button><p></p>
    </form></th> 
    
    <th>
    <form class="form-control" @submit.prevent="createAnswer">
      <th><h3>Answer Information</h3></th> <hr>
      <label >SmsSurveyId</label>   <input placeholder="17" type="text" v-model="answers.smsSurveyId"><p></p>
      <label >Answer</label>    <input placeholder="güzel" type="text" v-model="answers.answer"><p></p>
      <button>Create Answer</button><p></p>
    </form></th>

    <th>
    <form class="form-control" @submit.prevent="createPerson">
      <th><h3>Person Information</h3></th> <hr>
      <label >SmsSurveyId</label>   <input placeholder="17" type="text" v-model="people.smsSurveyId"><p></p>
      <label >Name</label>   <input placeholder="kaan" type="text" v-model="people.name"><p></p>
      <label >PhoneNumber</label>   <input placeholder="05556667788" type="text" v-model="people.phoneNumber"><p></p>
      
      <button>Create Person</button><p></p>
    </form></th>
   
</div>
</template>

<script>

import axios from "axios";


export default {
    props:["Smssurvey"],
    data(){
        return{   
                   
            formData: {
                startDate: '',
                duration: '',
                question: '',
                insertedBy: 'kaan',
                insertedDate: '2021-05-05',
            },
            answers: {
                smsSurveyId: '',
                answer: '',
            },
            people: {
                smsSurveyId: '',
                name: '',
                phoneNumber: '',
                answer: 'temp',
            },                    
        }
    },
    methods: {
        createPost(){
            axios.post('https://localhost:44303/api/SmsSurveys', this.formData)
            .then(response => console.log(response))
            .catch(error => console.log(error))    
        },
        createAnswer(){            
            axios.post('https://localhost:44303/api/SmsSurveyAnswers', this.answers)
            .then(response => console.log(response))
            .catch(error => console.log(error))      
        },
        createPerson(){            
            axios.post('https://localhost:44303/api/SmsSurveyPeople', this.people)
            .then(response => console.log(response))
            .catch(error => console.log(error))      
        },
        
    } 
}
</script>
