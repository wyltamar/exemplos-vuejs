//prettier-ignore
var app = new Vue({
  el: '#app',
  data: {
    mensagem: 'Valor diferente para a mensagem do App!'
  },
});

//prettier-ignore
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Você carregou esta página em ' + new Date().toLocaleString()
  },
});

app2.message = 'Alteração da mensagem';

//prettier-ignore
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  },
});

//prettier-ignore
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript'},
      { text: 'Leanr Vue'},
      { text: 'Build something awesome'},
      { text: 'Vanila nunca mais!!!'}
    ]
  },
});

app4.todos.push({ text: 'Novo item' });

//prettier-ignore
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function(){
      this.message = this.message.split('').reverse().join('')
    }
  }
});
//prettier-ignore
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue.js!'
  }
});
