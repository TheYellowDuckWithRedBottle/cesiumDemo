import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'cesium/Widgets/widgets.css'
import 'font-awesome/css/font-awesome.css'

const Vue=createApp(App)

Vue.directive('drag', {
    inserted: function (el) {
     el.onmousedown=function(ev){
         console.log('---')
      var disX=ev.clientX-el.offsetLeft;
      var disY=ev.clientY-el.offsetTop;
      document.onmousemove=function(ev){
       var l=ev.clientX-disX;
       var t=ev.clientY-disY;
       el.style.left=l+'px';
       el.style.top=t+'px';
      };
      document.onmouseup=function(){
       document.onmousemove=null;
       document.onmouseup=null;
    
      };
     };
    }
    
   })
Vue.use(store).use(router).mount('#app')
