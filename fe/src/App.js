
import Browser from "./routes/Browser"
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <div>
      <Browser />

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
