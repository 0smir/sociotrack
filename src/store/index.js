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
        id: 2121399,
        nik_name: "@abhisek.das",
        followers: 10968
      },
      followers:[
        {
          social_network:{
            title:"Facebook",
          logo:"Facebook-color.svg"
          },
          id: 21213,
          nik_name:"@abhisek.daas",
          img: "user-2.jpg",
          followers_info:{
            total_count: 1701,
            add: 4,
            miss: 0
          }
        },
        {
          social_network:{
            title:"Twitter",
          logo:"Twitter-color.svg"
          },
          id: 21212,
          nik_name:"@wholetthedasout",
          img: "user-3.jpg",
          followers_info: {
            total_count: 1567,
            add: 0,
            miss: 3
          }
        },
        {
          social_network:{
            title:"Instagram",
          logo:"Instagram-color.svg"
          },
          id: 212187,
          nik_name:"@wholetthedasout",
          img: "user-4.jpg",
          followers_info: {
            total_count: 1139,
            add: 11,
            miss: 0
          }
        },
        {
          social_network:{
            title:"LinkedIn",
          logo:"LinkedIn-color.svg"
          },
          id: 21211,
          nik_name:"@abhisekd3",
          img: "user-1.jpg",
          followers_info: {
            total_count: 2106,
            add: 39,
            miss: 0
          }
        },
        {
          social_network:{
            title:"YouTube",
          logo:"Youtube-color.svg"
          },
          id: 21210,
          nik_name:"@TheAbhisekD",
          img: "user-2.jpg",
          followers_info: {
            total_count: 3190,
            add: 22,
            miss: 0
          }
        },
        {
          social_network:{
            title:"Snapchat",
          logo:"Snapchat.png"
          },
          id: 21219,
          nik_name:"@abhisekd",
          img: "user-3.jpg",
          followers_info: {
            total_count: 8754,
            add: 0,
            miss: 0
          }
        },
        {
          social_network:{
            title:"Google+",
          logo:"GooglePlus-color.svg"
          },
          id: 21218,
          nik_name:"@+AbhisekDas",
          img: "user-4.jpg",
          followers_info: {
            total_count: 1033,
            add: 0,
            miss: 0
          }
        },
        { social_network:{
          title:"Vine",
          logo:"Vine-color.svg"
          },
          id: 21217,
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
    },
    userFollowers: state =>{
      return state.user.followers;
    }
  },
  modules: {
  }
})
