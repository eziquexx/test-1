//import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MessageId from './components/MessageId'
import Test from './components/Test'

function App() {
  
//  useEffect(() => {
//	axios.get('/api/test')
//	.then((res) => {
//		setHello(res.data);
//	})
//  }, []);


  
  return (
	<BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/messages/:id" element={<MessageId />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
