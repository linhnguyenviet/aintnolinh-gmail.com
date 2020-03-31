import * as types from "../constants/ActionTypes";

var initState = {
  listAllParameter: [],
  listSteelPart: [],
  listInitType: [],
  listInitMaterial: [],
  listInitSize: [],
  listInitMachined: [],
  listInitPaintType: [],
  listInitProducerSearch: [],
  listSteelShapeOrder: [],
  listSteelSheetOrder: [],
  listBoltOrder: [],
  listOtherOrder: [],
  listSteelShapeOrderPost: [],
  listSteelSheetOrderPost: [],
  listBoltOrderPost: [],
  listOtherOrderPost: [],
  isLoading: null,
  error: null,
  success: null
};

var orderReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_ALL_PARAMETER:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_ALL_PARAMETER_SUCCESS:
      const data_all_parameter = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listAllParameter: data_all_parameter.data,
        error: null,
        success: data_all_parameter.messages.message
      };
    case types.GET_ALL_PARAMETER_FAIL:
      return {
        ...state,
        isLoading: false,
        listAllParameter: [],
        error: action.payload.error
      };
    case types.GET_STEEL_PART:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_STEEL_PART_SUCCESS:
      const data_steel_part = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listSteelPart: data_steel_part.data,
        error: null,
        success: data_steel_part.messages.message
      };
    case types.GET_STEEL_PART_FAIL:
      return {
        ...state,
        isLoading: false,
        listSteelPart: [],
        error: action.payload.error
      };
    case types.GET_INIT_TYPE:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_INIT_TYPE_SUCCESS:
      const data_init_type = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listInitType: data_init_type.data,
        error: null,
        success: data_init_type.messages.message
      };
    case types.GET_INIT_TYPE_FAIL:
      return {
        ...state,
        isLoading: false,
        listInitType: [],
        error: action.payload.error
      };
    case types.GET_INIT_MATERIAL:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_INIT_MATERIAL_SUCCESS:
      const data_init_material = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listInitMaterial: data_init_material.data,
        error: null,
        success: data_init_material.messages.message
      };
    case types.GET_INIT_MATERIAL_FAIL:
      return {
        ...state,
        isLoading: false,
        listInitMaterial: [],
        error: action.payload.error
      };
    case types.GET_INIT_SIZE:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_INIT_SIZE_SUCCESS:
      const data_init_size = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listInitSize: data_init_size.data,
        error: null,
        success: data_init_size.messages.message
      };
    case types.GET_INIT_SIZE_FAIL:
      return {
        ...state,
        isLoading: false,
        listInitSize: [],
        error: action.payload.error
      };
    case types.GET_INIT_MACHINED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_INIT_MACHINED_SUCCESS:
      const data_init_machined = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listInitMachined: data_init_machined.data,
        error: null,
        success: data_init_machined.messages.message
      };
    case types.GET_INIT_MACHINED_FAIL:
      return {
        ...state,
        isLoading: false,
        listInitMachined: [],
        error: action.payload.error
      };
    case types.GET_INIT_PAINT_TYPE:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_INIT_PAINT_TYPE_SUCCESS:
      const data_init_paint_type = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listInitPaintType: data_init_paint_type.data,
        error: null,
        success: data_init_paint_type.messages.message
      };
    case types.GET_INIT_PAINT_TYPE_FAIL:
      return {
        ...state,
        isLoading: false,
        listInitPaintType: [],
        error: action.payload.error
      };
    case types.GET_INIT_PRODUCER_SEARCH:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_INIT_PRODUCER_SEARCH_SUCCESS:
      const data_init_producer_search = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listInitProducerSearch: data_init_producer_search.data,
        error: null,
        success: data_init_producer_search.messages.message
      };
    case types.GET_INIT_PRODUCER_SEARCH_FAIL:
      return {
        ...state,
        isLoading: false,
        listInitProducerSearch: [],
        error: action.payload.error
      };
    case types.GET_LIST_ORDER_STEEL_SHAPE:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_LIST_ORDER_STEEL_SHAPE_SUCCESS:
      const data_list_steel_shape = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listSteelShapeOrder: data_list_steel_shape.data,
        error: null,
        success: data_list_steel_shape.messages.message
      };
    case types.GET_LIST_ORDER_STEEL_SHAPE_FAIL:
      return {
        ...state,
        isLoading: false,
        listSteelShapeOrder: [],
        error: action.payload.error
      };
    case types.POST_ORDER_STEEL_SHAPE:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.POST_ORDER_STEEL_SHAPE_SUCCESS:
      const data_post_order_steel_shape = action.payload.data;
      const listSteelShapeOrderPost = [...state.listSteelShapeOrderPost];
      listSteelShapeOrderPost.push(data_post_order_steel_shape.data);
      return {
        ...state,
        isLoading: false,
        listSteelShapeOrderPost: listSteelShapeOrderPost,
        error: null,
      };
    case types.POST_ORDER_STEEL_SHAPE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case types.POST_ORDER_STEEL_SHEET:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.POST_ORDER_STEEL_SHEET_SUCCESS:
      const data_post_order_steel_sheet = action.payload.data;
      const listSteelSheetOrderPost = [...state.listSteelSheetOrderPost];
      listSteelSheetOrderPost.push(data_post_order_steel_sheet.data);
      return {
        ...state,
        isLoading: false,
        listSteelSheetOrderPost: listSteelSheetOrderPost,
        error: null,
      };
    case types.POST_ORDER_STEEL_SHEET_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case types.DEL_LIST_ORDER_STEEL_SHEET:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.DEL_LIST_ORDER_STEEL_SHEET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null
      };
    case types.DEL_LIST_ORDER_STEEL_SHEET_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case types.FIND_LIST_ORDER_STEEL_SHAPE:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.FIND_LIST_ORDER_STEEL_SHAPE_SUCCESS:
      const data_find_list_steel_shape = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listSteelShapeOrder: data_find_list_steel_shape.data,
        error: null,
        success: data_find_list_steel_shape.messages.message
      };
    case types.FIND_LIST_ORDER_STEEL_SHAPE_FAIL:
      return {
        ...state,
        isLoading: false,
        listSteelShapeOrder: [],
        error: action.payload.error
      };
    case types.DEL_LIST_ORDER_STEEL_SHAPE:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.DEL_LIST_ORDER_STEEL_SHAPE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null
      };
    case types.DEL_LIST_ORDER_STEEL_SHAPE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case types.GET_LIST_ORDER_STEEL_SHEET:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_LIST_ORDER_STEEL_SHEET_SUCCESS:
      const data_list_steel_sheet = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listSteelSheetOrder: data_list_steel_sheet.data,
        error: null,
        success: data_list_steel_sheet.messages.message
      };
    case types.GET_LIST_ORDER_STEEL_SHEET_FAIL:
      return {
        ...state,
        isLoading: false,
        listSteelSheetOrder: [],
        error: action.payload.error
      };
    case types.FIND_LIST_ORDER_STEEL_SHEET:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.FIND_LIST_ORDER_STEEL_SHEET_SUCCESS:
      const data_find_list_steel_sheet = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listSteelSheetOrder: data_find_list_steel_sheet.data,
        error: null,
        success: data_find_list_steel_sheet.messages.message
      };
    case types.FIND_LIST_ORDER_STEEL_SHEET_FAIL:
      return {
        ...state,
        isLoading: false,
        listSteelSheetOrder: [],
        error: action.payload.error
      };
    case types.GET_LIST_ORDER_BOLT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_LIST_ORDER_BOLT_SUCCESS:
      const data_list_bolt = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listBoltOrder: data_list_bolt.data,
        error: null,
        success: data_list_bolt.messages.message
      };
    case types.GET_LIST_ORDER_BOLT_FAIL:
      return {
        ...state,
        isLoading: false,
        listBoltOrder: [],
        error: action.payload.error
      };
    case types.POST_ORDER_BOLT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.POST_ORDER_BOLT_SUCCESS:
      const data_post_order_bolt = action.payload.data;
      const listBoltOrderPost = [...state.listBoltOrderPost];
      listBoltOrderPost.push(data_post_order_bolt.data);
      return {
        ...state,
        isLoading: false,
        listBoltOrderPost: listBoltOrderPost,
        error: null,
      };
    case types.POST_ORDER_BOLT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case types.DEL_LIST_ORDER_BOLT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.DEL_LIST_ORDER_BOLT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null
      };
    case types.DEL_LIST_ORDER_BOLT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case types.FIND_LIST_ORDER_BOLT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.FIND_LIST_ORDER_BOLT_SUCCESS:
      const data_find_list_bolt = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listBoltOrder: data_find_list_bolt.data,
        error: null,
        success: data_find_list_bolt.messages.message
      };
    case types.FIND_LIST_ORDER_BOLT_FAIL:
      return {
        ...state,
        isLoading: false,
        listBoltOrder: [],
        error: action.payload.error
      };
    case types.GET_LIST_ORDER_OTHER:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_LIST_ORDER_OTHER_SUCCESS:
      const data_list_other = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listOtherOrder: data_list_other.data,
        error: null,
        success: data_list_other.messages.message
      };
    case types.GET_LIST_ORDER_OTHER_FAIL:
      return {
        ...state,
        isLoading: false,
        listOtherOrder: [],
        error: action.payload.error
      };
    case types.POST_ORDER_OTHER:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.POST_ORDER_OTHER_SUCCESS:
      const data_post_order_other = action.payload.data;
      const listOtherOrderPost = [...state.listOtherOrderPost];
      listOtherOrderPost.push(data_post_order_other.data);
      return {
        ...state,
        isLoading: false,
        listOtherOrderPost: listOtherOrderPost,
        error: null,
      };
    case types.POST_ORDER_OTHER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case types.DEL_LIST_ORDER_OTHER:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.DEL_LIST_ORDER_OTHER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null
      };
    case types.DEL_LIST_ORDER_OTHER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case types.FIND_LIST_ORDER_OTHER:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.FIND_LIST_ORDER_OTHER_SUCCESS:
      const data_find_list_other = action.payload.data;
      return {
        ...state,
        isLoading: false,
        listOtherOrder: data_find_list_other.data,
        error: null,
        success: data_find_list_other.messages.message
      };
    case types.FIND_LIST_ORDER_OTHER_FAIL:
      return {
        ...state,
        isLoading: false,
        listOtherOrder: [],
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default orderReducer;
