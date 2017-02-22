<template>
  <div id="news-sources">
    <h1>Different news, at one place..</h1>
    <hr>    
    <div class="media" v-for="source in sources">
      <div class="media-left">      
          <router-link :to="'news/'+source.id">
              <img class="media-object src-logo" v-bind:src="source.urlsToLogos.small" alt="...">
          </router-link>
      </div>
      <div class="media-body">
          <h4 class="media-heading">
            <router-link :to="'news/'+source.id">{{source.name}} </router-link>
            <span class="label label-warning category">{{ source.category}}</span>
          </h4>
          <label>Language : {{source.language}}</label><br>
          <label>Country : {{source.country}}</label><br>
          {{source.description}}
      </div> 
      <hr>    
    </div> 
  </div>
</template>

<script>

export default {
  name: 'sources',

  data(){
    return{
      sources:[]
    }
  },

  methods:{
    getSources: function(){
      this.$http.get("https://newsapi.org/v1/sources?language=en")
        .then(function(res){
          this.sources = res.body.sources;
            console.log(res.body.sources);
        })
    }
  },

  created:function(){
    this.getSources();
  }

}
</script>

<style>
  .src-logo{
    margin-right: 20px;    
    padding: 20px;
    background-color: whitesmoke;
    border-radius: 5px;

  }

  .category{
    font-size: 12px;
    font-weight: 100;
  }
</style>
