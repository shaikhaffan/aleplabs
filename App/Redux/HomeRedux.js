import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  homeRequest: ['data'],
  homeSuccess: ['payload'],
  homeFailure: null,
  deleteBlog : ['data'],
  deleteSuccess :['deletePayload'],
  addBlog : ['data'],
  addBlogSuccess :['addBlogPayload'],
  editBlog : ['data'],
  editBlogSuccess :['editBlogPayload']
})

export const HomeTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  deletePayload : null,
  addBlogPayload:null,
  editBlogPayload : null,
  error: null
})

/* ------------- Selectors ------------- */

export const HomeSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  
  state.merge({ fetching: true, data, payload: null })


// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })


  // request the data from an api
export const deleteBlog = (state, { data }) =>
  
state.merge({ fetching: true, data, deletePayload: null })

// successful api lookup
export const deleteSuccess = (state, action) => {
  const { deletePayload } = action
  return state.merge({ fetching: false, error: null,deletePayload })
}

  // request the data from an api
  export const addBlog = (state, { data }) =>
  
  state.merge({ fetching: true, data, addBlogPayload: null })
  
  // successful api lookup
  export const addBlogSuccess = (state, action) => {
    console.log(action);
    const { addBlogPayload } = action
    return state.merge({ fetching: false, error: null,addBlogPayload })
  }

   // request the data from an api
   export const editBlog = (state, { data }) =>{
   return state.merge({ fetching: true, data, editBlogPayload: null })
   }
   
   // successful api lookup
   export const editBlogSuccess = (state, action) => {
     const { editBlogPayload } = action
     return state.merge({ fetching: false, error: null,editBlogPayload })
   }
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.HOME_REQUEST]: request,
  [Types.HOME_SUCCESS]: success,
  [Types.HOME_FAILURE]: failure,
  [Types.DELETE_BLOG]: deleteBlog,
  [Types.DELETE_SUCCESS]: deleteSuccess,
  [Types.ADD_BLOG]:addBlog,
  [Types.ADD_BLOG_SUCCESS]: addBlogSuccess,
  [Types.EDIT_BLOG]:editBlog,
  [Types.EDIT_BLOG_SUCCESS]: editBlogSuccess
})
