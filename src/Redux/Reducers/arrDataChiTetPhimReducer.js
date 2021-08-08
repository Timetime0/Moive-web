import { GET_DATA_CHITIETPHIM } from "../Types/DataPhimType";

const initialState = {
  chiTietPhim: {},
};

export const arrDataChiTetPhimReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_CHITIETPHIM: {
      return { ...state, chiTietPhim: action.data };
    }

    default: {
      return state;
    }
  }
};
