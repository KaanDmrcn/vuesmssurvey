<template>
<div > 
    
    <br>  <form class="form-control" @submit.prevent="createPost">
    <h3>Survey Detail</h3>
    <surveydetail-component></surveydetail-component> </form><br>
    


    <th><form class="form-control" @submit.prevent="createPost">
    <h3>Survey Answers</h3>
    <answerdetail-component></answerdetail-component></form></th>
    
   
    
    
     <th><form class="form-control" @submit.prevent="createPost">
    <h3>Survey People</h3>
    <peopledetail-component></peopledetail-component></form></th>


</div>
</template>

<script>


export default {
     data(){
        return{
            
        }
    }    
}
</script>
