import C from '../../constants/records';
const initialState={
    records:{},
}

export default (state, action) => {
    switch(action.type)
    {
    case C.RECORDS_SUBMIT_DATA:
    return {
        ...state,
        records:action.records,
    }
    case C.RECORDS_RECIEVE_DATA:
    return {
        ...state,
        records:action.records,
    }
     default:
      return state || initialState;
    }

}