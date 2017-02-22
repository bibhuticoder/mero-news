<template>
  <div id="news-sources">
    <h1>{{source}}</h1>
    <hr>        
    
    <div class="media" v-for="news in newsArray">
      <div class="media-left"> 
          <img class="media-object news-logo" v-bind:src="news.urlToImage" alt="..." height="200" width="200">
      </div>
      <div class="media-body">        
          <a v-bind:href="news.url" class="lead" target="_blank">{{news.title}} </a>           
          <br>
          <label>Author : {{news.author}}</label><br>
          <label>Published at : {{news.publishedAt}}</label><br>
          {{news.description}}
      </div> 
      <hr>     
    </div> 
  </div>
</template>

<script>


export default {
  name: 'news',
  data(){
    return{
      newsArray:[],
      source: 'loading...'
    }
  },

  methods:{
    getNews:function(){
      this.$http.get("https://newsapi.org/v1/articles?source=" + this.$route.params.src + "&apiKey=b54146845fcd4dab9485d9f16028acd7")
        .then(function(res){            
            this.newsArray = res.body.articles;
            this.source = res.body.source;
        })
    }
  },

  created:function(){
    this.getNews();
  }
}
</script>

<style>

.news-logo{
    margin-right: 20px;    
    padding: 5px;
    background-color: whitesmoke;
    border-radius: 5px;

  }

  .category{
    font-size: 12px;
    font-weight: 100;
  }

</style>
