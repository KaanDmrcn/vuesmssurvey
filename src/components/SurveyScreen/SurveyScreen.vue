<template>
<div>    
    
  <th><sssurvey-component></sssurvey-component></th>    
  <br>
  <th><ssanswer-component></ssanswer-component></th>
  <br>
  <th><sspeople-component></sspeople-component></th>
  


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
        axios.get("http://localhost:8080/api/SmsSurveyPeople/"+this.id)
        .then(response => {
            this.items = response.data;            
        })
        .catch(e => console.log(e))
    },

    }    

</script>
