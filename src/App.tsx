import { RouterProvider } from 'react-router-dom'
import { MainRoute } from './router/MainRoute'
import { store } from './global/store'
import {Provider} from "react-redux"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const client = new QueryClient()

const App = () => {
  return (
    <div>
      <QueryClientProvider client={client}>
      <Provider store={store}>
        <RouterProvider router={MainRoute}/>
      </Provider>
      </QueryClientProvider>
    </div>
  )
}

export default App