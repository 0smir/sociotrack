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
          id: 21213,
          nik_name:"@abhisek.daas",
          img: "user-2.jpg",
          social_network:{
            title:"Facebook",
            logo:"Facebook-color.svg",
            followers_info:{
              total_count: 1701,
              followers: "followers",
              followers_updates:{
                add: 4,
                loss: 0
              }
            }
          }
        },
        {
          id: 21212,
          nik_name:"@wholetthedasout",
          img: "user-3.jpg",
          social_network:{
            title:"Twitter",
            logo:"Twitter-color.svg",
            followers_info: {
              total_count: 1567,
              followers: "followers",
              followers_updates: {
                add: 0,
                loss: 3
              }
            }
          }
        },
        {
          id: 212187,
          nik_name:"@wholetthedasout",
          img: "user-4.jpg",
          social_network:{
            title:"Instagram",
            logo:"Instagram-color.svg",
            followers_info: {
              followers: "followers",
              total_count: 1139,
              followers_updates: {
                add: 11,
                loss: 0
              }
            }
          }
        },
        {
          id: 21211,
          nik_name:"@abhisekd3",
          img: "user-1.jpg",
          social_network:{
            title:"LinkedIn",
            logo:"LinkedIn-color.svg",
            followers_info: {
              total_count: 2106,
              followers: "followers",
              followers_updates: {
                add: 39,
                loss: 0
              }
            }
          }
        },
        {
          id: 21210,
          nik_name:"@TheAbhisekD",
          img: "user-2.jpg",
          social_network:{
            title:"YouTube",
            logo:"Youtube-color.svg",
            followers_info: {
              total_count: 3190,
              followers:"Subscribers",
              followers_updates: {
                add: 22,
                loss: 0
              }
            }
          }
        },
        {
          id: 21219,
          nik_name:"@abhisekd",
          img: "user-3.jpg",
          social_network:{
            title:"Snapchat",
            logo:"Snapchat.png",
            followers_info: {
              total_count: 8754,
              followers: "Snap Score",
              followers_updates: null
            }
          }
        },
        {
          id: 21218,
          nik_name:"@+AbhisekDas",
          img: "user-4.jpg",
          social_network:{
            title:"Google+",
            logo:"GooglePlus-color.svg",
            followers_info: {
              total_count: 1033,
              followers: "followers",
              followers_updates: null
            }
          }
        },
        {
          id: 21217,
          nik_name:"@1316139228245221376",
          img: "user-5.jpg",
          social_network:{
            title:"Vine",
            logo:"Vine-color.svg",
            followers_info: {
              total_count: 1045,
              followers:"Loops",
              followers_updates: null
            }
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
