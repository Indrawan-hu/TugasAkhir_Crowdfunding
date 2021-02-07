import Vue from "vue";
import Vuex from "vuex";
import transaction from "./store/transaction.js";
import alert from "./store/alert.js";
import auth from './store/auth.js';
import dialog from "./store/dialog.js";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        transaction,
        alert,
        auth,
        dialog
    }
});
