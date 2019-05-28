/* eslint-disable no-param-reassign */
import Vue from "vue";
import Vuex from "vuex";

import sourceData from "../data.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...sourceData,
    authId: "rpbB8C6ifrYmNDufMERWfQUoa202"
  },

  getters: {
    authUser({ users, authId }) {
      return users[authId];
    }
  },

  actions: {
    createPost({ commit, state }, post) {
      const postId = `newpost ${Math.random()}`;
      post[".key"] = postId;
      post.userId = state.authId;
      post.publishedAt = Math.floor(Date.now() / 1000);
      commit("setPost", { post, postId });
      commit("appendPostToThread", { threadId: post.threadId, postId });
      commit("appendPostToUser", { userId: post.userId, postId });
    },

    updateUser({ commit }, user) {
      commit("setUser", { userId: user[".key"], user });
    }
  },

  mutations: {
    setPost(state, { post, postId }) {
      Vue.set(state.posts, postId, post);
    },

    setUser(state, { user, userId }) {
      Vue.set(state.users, userId, user);
    },

    appendPostToThread(state, { threadId, postId }) {
      Vue.set(state.threads[threadId].posts, postId, postId);
    },

    appendPostToUser(state, { userId, postId }) {
      Vue.set(state.users[userId].posts, postId, postId);
    }
  }
});
