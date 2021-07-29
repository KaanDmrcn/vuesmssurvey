<template>
<div>    
    
  <th><sssurvey-component></sssurvey-component></th>    
  <br>
  <th><ssanswer-component></ssanswer-component></th>
  <br>


<div>
<tr v-for="(item,index) in items" :key="index">
      
      <td>{{item.id}}</td>   
      
      <br>  <br>
       <td> <button @click="release(item.smsSurveyId,item.id)" class="btn btn-warning">Release</button></td>
    </tr>
   
</div>


</div>
</template>

<script>
import axios from "axios";

export default {
     data(){
        return{
          id: this.$route.params.id ,
          items: ""
        }},

      created(){
        axios.get('http://localhost:8081/api/SmsSurveyPeople/GetId/'+this.id)
        .then(response => {
            this.items = response.data;            
        })
        .catch(e => console.log(e))
    },

    methods:{       
        release(id,smsSurveyId){
            this.$router.push({
              name:"FinalScreen",
              params:{id,smsSurveyId}
            })
        }},
        

    

    }    

</script>
