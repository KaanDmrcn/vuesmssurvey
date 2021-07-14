<template>

<div>
    <nav style="background-color: #e3f2fd;" class="navbar navbar-expand-lg navbar-light bg-light " >
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <router-link to="/Smssurvey">
           <li class="nav-item">
             
               <a class="nav-link active" aria-current="page" href="#">SmsSurvey</a>    
            
        </li></router-link>
        <router-link to="/Survey">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page">Survey</a>
        </li></router-link> <router-link to="/People">
        <li class="nav-item">
          <a class="nav-link active">People</a>
        </li></router-link>
        
        <li class="nav-item"><router-link to="/Answer">
          <a class="nav-link active">Answer</a></router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>







</template>






<script>
export default { 
 
}
</script>
