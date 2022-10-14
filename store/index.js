export const state = () => ({
    cart: [],
});

export const getters = {
    cart_content: (state) => state.cart
}

export const actions = {

};

export const mutations = {
    ADD_TO_CART: (state, content) => {
        state.cart.push(content);
    },
    REMOVE_FROM_CART: (state, content) => {
        state.cart.splice(content, 1);
    }
};