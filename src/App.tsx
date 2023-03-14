import {BrowserRouter,Routes,Route} from 'react-router-dom'

import MultiStepForm from "./routes/MultiStepForm"
import SingleStepForm from "./routes/SingleStepForm"


const App=()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/multi' element={<MultiStepForm/>} />
      <Route path='/' element={<SingleStepForm/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App