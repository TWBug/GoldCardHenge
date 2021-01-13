import Vue from 'vue';
import Vuex from 'vuex';

import data from './data.json';
var index = 0;
for (index = 0; index < data.question.length; index++) {
    data.question[index].selected = false;
}

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        initialized: false,
        vertical_position: 0,
        tree_list: [],
        tree_active: -1,
        qualifications: data.qualification,
        questions: data.question,
    },
    mutations: {
        TOGGLE_SELECTED(state, key) {
            state.questions[key].selected = !state.questions[key].selected;
        },
        SET_VERTICAL_POSITION(state, value) {
            state.vertical_position = parseInt(value);
        },
        SET_SELECTED(state, options) {
            state.questions[options.key].selected = options.selected;
        },
        ADD_TREELIST(state, tree_id) {
            if (state.tree_list.indexOf(tree_id) !== -1) {
                return;
            }
            state.tree_list.push(tree_id);
        },
        REMOVE_TREELIST(state, tree_id) {
            const position = state.tree_list.indexOf(tree_id);
            if (position === -1) {
                return;
            }
            state.tree_list.splice(position, 1);
        },
        SORT_TREELIST(state) {
            state.tree_list.sort(function(a, b) {
                return a - b;
            });
        },
        SET_TREE(state, id) {
            state.tree_active = parseInt(id);
        },
        RESET(state) {
            state.tree_list = [];
            state.tree_active = -1;
            for (let index = 0; index < state.questions.length; index++) {
                state.questions[index].selected = false;
            }
        },
        QUALIFICATION_DETAILS(state, options) {
            state.questions[options.key].selected = options.value;
        },
    },
    actions: {
        toggleActive({ commit, state }, id) {
            const key = state.questions.findIndex(item => item.id === id);
            const selected = !state.questions[key].selected;
            commit('SET_SELECTED', { key: key, selected: selected });
            if (selected) {
                commit('ADD_TREELIST', state.questions[key].tree_id.toString());
            } else {
                commit('REMOVE_TREELIST', state.questions[key].tree_id.toString());
            }
            commit('SORT_TREELIST');
        },
        toggleQualification({ commit, state }, id) {
            console.info('asdasd', id);
            const key = state.qualifications.findIndex(item => item.id === id);
            const details = !state.qualifications[key].details;
            commit('QUALIFICATION_DETAILS', { key: key, value: details });
        },
        setTree({ commit, state }, id = -1) {
            if (id === -1) {
                commit('SET_TREE', -1);
                return;
            }
            const position = state.tree_list.indexOf(id);
            if (position === -1) {
                return false;
            }
            commit('SET_TREE', position);
        },
    },
    getters: {
        getHome: state => {
            return state.questions.filter(item => item.tree_order === 0);
        },
        getByTree: state => id => {
            return state.questions.filter(item => {
                if (item.tree_order === 0) {
                    return false;
                }
                return item.tree_id === id;
            });
        },
        isTreeValid: state => id => {
            // console.info('id', typeof id);
            // for (let index = 0; index < state.tree_list.length; index++) {
            //     console.info('index', typeof state.tree_list[index]);

            // }
            return state.tree_list.indexOf(id) === -1 ? false : true;
        },
        hasSelected: state => {
            const selected = state.questions.filter(item => item.selected === true).length;
            if (selected < 1) {
                return false;
            }
            return true;
        },
        getNextTree: state => {
            if (state.tree_list.length === 0) {
                return 0;
            }
            if (state.tree_active === -1) {
                return state.tree_list[0];
            }
            if (state.tree_list.length === state.tree_active + 1) {
                return -1;
            }
            return state.tree_list[state.tree_active + 1];
        },
        getQuestion: state => id => {
            return state.questions.find(item => item.id === id);
        },
        getQualifications: state => {
            var identifiers = [];
            for (let index = 0; index < state.questions.length; index++) {
                if (state.questions[index].selected) {
                    identifiers = identifiers.concat(state.questions[index].qualifications);
                }
            }
            var result = [];
            for (let index = 0; index < state.qualifications.length; index++) {
                const identifier =
                    state.qualifications[index].ministry +
                    '-' +
                    state.qualifications[index].regulation_no;
                if (identifiers.indexOf(identifier) !== -1) {
                    const qualification = state.qualifications[index];
                    qualification.questions = [];
                    for (let counter = 0; counter < state.questions.length; counter++) {
                        if (state.questions[counter].qualifications.indexOf(identifier) !== -1) {
                            qualification.questions.push(state.questions[counter].id);
                        }
                    }
                    result.push(qualification);
                }
            }
            result.sort(function(a, b) {
                return b.weight - a.weight;
            });
            return result;
        },
    },
});
