import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from '../services/pokemon'
import { employeeApi } from '../services/empoyee'

// export default configureStore({
//   reducer: {
//     counter: counterReducer
//   }
// })


 const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    // [pokemonApi.reducerPath]: pokemonApi.reducer,
    [employeeApi.reducerPath]:employeeApi.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(pokemonApi.middleware),
    getDefaultMiddleware().concat(employeeApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
export default store;
