const reducer = (state, action) => {
    switch (action.type) {
        case 'init':
            return {
                ...state,
                ...action.payload,
            };
        case 'setKnobPosition':
            return {
                ...state,
                ...action.payload,
            };
        case 'onMouseDown':
        case 'onMouseUp':
            return {
                ...state,
                ...action.payload,
            };
        case 'setInitialKnobPosition':
            return {
                ...state,
                ...action.payload,
            };
        case 'onKeyDown':
            return {
                ...state,
                ...action.payload,
            };
        case 'onKeyUp':
            return {
                ...state,
                ...action.payload,
            };
        case 'onFocusIn':
            return {
                ...state,
                ...action.payload,
            };
        case 'onFocusOut':
            return {
                ...state,
                ...action.payload,
            };
        default:
            throw new Error();
    }
};

export default reducer;
