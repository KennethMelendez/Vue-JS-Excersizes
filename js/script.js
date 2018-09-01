// instantiating vue
new Vue({
  // el stands for element. Allows you to display data
  el: "#view-app",
  data: {
    name: "Kenneth Melendez",
    job: "Web Developer",
    website: "https://github.com/KennethMelendez",
    websiteTag: '<a href="https://github.com/KennethMelendez">My GitHub</a>'
  },
  // Vue allows you to also create methods with parameters
  methods: {
    greet: function(time) {
      return "Good" + time + " " + this.name;
    }
  }
});

new Vue({
    el:"#view-app2",
    data:{
        age: 100
    },
    methods:{
        add:function(inc){
            this.age+=inc;
        },
        subtract:function(dec){
            this.age-=dec;
        }
    }
})

new Vue({
    el:"#todo-app",
    data:{
        todos:[{todo:'Pick up the trash'},{todo:'Eat Shake shack'}]
    }
    

})
