(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(22)},17:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(10),o=a.n(i),c=(a(17),a(8)),s=a.n(c),m=a(11),p=a(1),h=a(2),l=a(4),u=a(3),d=a(5),v=(a(6),a(7),function(e){function t(){return Object(p.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement("header",{className:"WeatherApp__header"},n.a.createElement("h1",null,"Weather App"),n.a.createElement("img",{src:"favicon.png"}))}}]),t}(r.Component)),_=function(e){function t(){return Object(p.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"WeatherApp__form"},n.a.createElement("form",{className:"WeatherApp-form",onSubmit:this.props.getWeather},n.a.createElement("div",{className:"WeatherApp-form__row"},n.a.createElement("label",null,"City:"),n.a.createElement("input",{type:"text",name:"city"})),n.a.createElement("div",{className:"WeatherApp-form__row"},n.a.createElement("label",null,"Country:"),n.a.createElement("input",{type:"text",name:"country"})),n.a.createElement("div",{className:"WeatherApp-form__row"},n.a.createElement("button",null,"Show weather"))))}}]),t}(r.Component),w=function(e){function t(){return Object(p.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"WeatherData"},this.props.error&&n.a.createElement("div",{className:"WeatherData__item WeatherData__item--error"},n.a.createElement("i",{className:"fas fa-exclamation-circle"})," ",this.props.error),n.a.createElement("div",{className:"WeatherData__col"},this.props.weather.city&&this.props.weather.country&&n.a.createElement("div",{className:"WeatherData__item WeatherData__item--location"},this.props.weather.city,", ",this.props.weather.country),this.props.weather.icon&&n.a.createElement("div",{className:"WeatherData__item WeatherData__item--icon"},n.a.createElement("img",{src:"http://openweathermap.org/img/w/".concat(this.props.weather.icon,".png")})),this.props.weather.temperature&&n.a.createElement("div",{className:"WeatherData__item WeatherData__item--temperature"},this.props.weather.temperature," \xb0C"),this.props.weather.description&&n.a.createElement("div",{className:"WeatherData__item WeatherData__item--description"},this.props.weather.description)),n.a.createElement("div",{className:"WeatherData__col WeatherData__col--details"},this.props.weather.temp_min&&n.a.createElement("div",{className:"WeatherData__item"},"Temperature(min): ",this.props.weather.temp_min," \xb0C"),this.props.weather.temp_max&&n.a.createElement("div",{className:"WeatherData__item"},"Temperature(max): ",this.props.weather.temp_max," \xb0C"),this.props.weather.pressure&&n.a.createElement("div",{className:"WeatherData__item"},"Pressure: ",this.props.weather.pressure," hpa"),this.props.weather.humidity&&n.a.createElement("div",{className:"WeatherData__item WeatherData__item--humidity"},"Humidity: ",this.props.weather.humidity," %")))}}]),t}(r.Component),y=function(e){function t(){return Object(p.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement("footer",{className:"WeatherApp__footer"},n.a.createElement("p",null,"\xa9 Aleksandra P\xf3\u0142torak"))}}]),t}(r.Component),f=(r.Component,"2b1eed97055779f4e575ab64e44e8761"),b=function(e){function t(){var e,a;Object(p.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={weather:{city:void 0,country:void 0,temperature:void 0,temp_min:void 0,temp_max:void 0,pressure:void 0,humidity:void 0,description:void 0,icon:void 0},error:void 0},a.getWeather=function(){var e=Object(m.a)(s.a.mark(function e(t){var r,n,i,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=t.target.elements.city.value,n=t.target.elements.country.value,!r||!n){e.next=13;break}return e.next=6,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(r,",").concat(n,"&appid=").concat(f,"&units=metric"));case 6:return i=e.sent,e.next=9,i.json();case 9:(o=e.sent).hasOwnProperty("cod")&&"404"===o.cod?a.setState({weather:{city:void 0,country:void 0,temperature:void 0,temp_min:void 0,temp_max:void 0,pressure:void 0,humidity:void 0,description:void 0,icon:void 0},error:"Cannot find this location. Please enter valid data."}):(console.log(o),a.setState({weather:{city:o.name,country:o.sys.country,temperature:o.main.temp,temp_min:o.main.temp_min,temp_max:o.main.temp_max,pressure:o.main.pressure,humidity:o.main.humidity,description:o.weather[0].description,icon:o.weather[0].icon},error:void 0})),e.next=14;break;case 13:a.setState({weather:{city:void 0,country:void 0,temperature:void 0,temp_min:void 0,temp_max:void 0,pressure:void 0,humidity:void 0,description:void 0,icon:void 0},error:"Please enter both values."});case 14:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"WeatherApp"},n.a.createElement(v,null),n.a.createElement("div",{className:"WeatherApp__content"},n.a.createElement(_,{getWeather:this.getWeather}),n.a.createElement(w,{weather:this.state.weather,error:this.state.error})),n.a.createElement(y,null))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},7:function(e,t,a){}},[[12,2,1]]]);
//# sourceMappingURL=main.c359f82a.chunk.js.map