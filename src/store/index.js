import Vue from 'vue';
import Vuex from 'vuex';

import sourceData from '../data.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...sourceData,
    authId: 'rpbB8C6ifrYmNDufMERWfQUoa202'
  },

  getters: {
    authUser({ users, authId }) {
      return users[authId];
    }
  },

  actions: {
    createPost({ commit }, post) {
      const postId = `newpost ${Math.random()}`;
      // eslint-disable-next-line no-param-reassign
      post['.key'] = postId
      commit('setPost', { post, postId });
      commit('appendPostToThread', { threadId: post.threadId, postId });
      commit('appendPostToUser', { userId: post.userId, postId });
    }
  },

  mutations: {
    setPost(state, { post, postId }) {
      Vue.set(state.posts, postId, post);
    },

    appendPostToThread(state, { threadId, postId }) {
      Vue.set(state.threads[threadId].posts, postId, postId);
    },

    appendPostToUser(state, { userId, postId }) {
      Vue.set(state.users[userId].posts, postId, postId);
    }
  }
});
