import { actions } from "./actions";
import { state } from "./state";
import { mutations } from "./mutations";
import { getters } from "./getters";

const homePage = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};

export default homePage;
