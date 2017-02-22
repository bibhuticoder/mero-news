// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'
import vueResource from 'vue-resource'
import Sources from './components/sources'
import News from './components/news'


Vue.use(vueResource);
Vue.use(vueRouter);

const router = new vueRouter({
	mode:'history',
	base : __dirname,
	routes:[
		{
			path: '/',
			component: Sources
		},

		{
			path: '/news/:src',
			component: News
		}
	]
})

/* eslint-disable no-new */
new Vue({ 
  router,   
  template: `
  <div id="app">
	    <nav class="navbar navbar-inverse" style="border-radius:0">
		    <div class="container-fluid">    
			    <div class="navbar-header">
			      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span class="sr-only">Toggle navigation</span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			      </button>
			      <a class="navbar-brand" href="#">meroNews</a>
			    </div>    
			    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> 
			      <ul class="nav navbar-nav navbar-right">
			        <li><router-link to="/">All Sources</router-link></li>       
			      </ul>
			    </div>
		    </div>
	    </nav> 
	    <div class="container">
  			<router-view></router-view>
  		</div>
  	</div>
  `,
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}).$mount("#app")
