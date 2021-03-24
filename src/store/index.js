import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user:{
      user_data:{
        firstName: "Abhisek",
        lastName: "Das",
        img: "user-1.jpg",
        id: "@abhisek.das",
        followers: 10968
      },
      followers:[
        {
          social_network:"Facebook",
          nik_name:"@abhisek.daas",
          img: "user-2.jpg",
          followers_info:{
            total_count: 1701,
            add: 4,
            miss: 0
          }
        },
        {
          social_network:"Twitter",
          nik_name:"@wholetthedasout",
          img: "user-3.jpg",
          followers_info: {
            total_count: 1567,
            add: 0,
            miss: 3
          }
        },
        {
          social_network:"LinkedIn",
          nik_name:"@abhisekd3",
          img: "user-1.jpg",
          followers_info: {
            total_count: 2106,
            add: 39,
            miss: 0
          }
        },
        {
          social_network:"YouTube",
          nik_name:"@TheAbhisekD",
          img: "user-2.jpg",
          followers_info: {
            total_count: 3190,
            add: 22,
            miss: 0
          }
        },
        {
          social_network:"Snapchat",
          nik_name:"@abhisekd",
          img: "user-3.jpg",
          followers_info: {
            total_count: 8754,
            add: 0,
            miss: 0
          }
        },
        {
          social_network:"Google+",
          nik_name:"@+AbhisekDas",
          img: "user-4.jpg",
          followers_info: {
            total_count: 1033,
            add: 0,
            miss: 0
          }
        },
        { social_network:"Vine",
          nik_name:"@1316139228245221376",
          img: "user-5.jpg",
          followers_info: {
            total_count: 1045,
            add: 0,
            miss: 0
          }
        }
      ]
    }
  },
  mutations: {
  },
  actions: {
  },
  getters:{
    userData: state =>{
      return state.user.user_data;
    }
  },
  modules: {
  }
})
