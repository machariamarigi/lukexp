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

    createThread({ commit, state, dispatch }, { forumId, title, text }) {
      const threadId = `newpost ${Math.random()}`;
      const userId = state.authId;

      const thread = {
        ".key": threadId,
        forumId,
        title,
        publishedAt: Math.floor(Date.now() / 1000),
        userId
      };

      commit("setThread", { thread, threadId });
      commit("appendThreadToForum", { forumId, threadId });
      commit("appendThreadToUser", { userId, threadId });

      dispatch("createPost", { text, threadId });
    },

    updateUser({ commit }, user) {
      commit("setUser", { userId: user[".key"], user });
    }
  },

  mutations: {
    setPost(state, { post, postId }) {
      Vue.set(state.posts, postId, post);
    },

    setThread(state, { thread, threadId }) {
      Vue.set(state.threads, threadId, thread);
    },

    setUser(state, { user, userId }) {
      Vue.set(state.users, userId, user);
    },

    appendPostToThread(state, { threadId, postId }) {
      const thread = state.threads[threadId];
      if (!thread.posts) {
        Vue.set(thread, "posts", {});
      }
      Vue.set(thread.posts, postId, postId);
    },

    appendPostToUser(state, { userId, postId }) {
      const user = state.users[userId];
      if (!user.posts) {
        Vue.set(user, "posts", {});
      }
      Vue.set(user.posts, postId, postId);
    },

    appendThreadToForum(state, { forumId, threadId }) {
      const forum = state.forums[forumId];
      if (!forum.threads) {
        Vue.set(forum, "threads", {});
      }
      Vue.set(forum.posts, threadId, threadId);
    },

    appendThreadToUser(state, { userId, threadId }) {
      const user = state.users[userId];
      if (!user.posts) {
        Vue.set(user, "threads", {});
      }
      Vue.set(user.threads, threadId, threadId);
    }
  }
});
