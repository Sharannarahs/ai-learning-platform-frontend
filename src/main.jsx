import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './context/AppContext.jsx'
import ChatProvider from './context/ChatContext.jsx'
import AdminProvider from './context/AdminContext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <ChatProvider>
        <AdminProvider>
          <App />
        </AdminProvider>
        </ChatProvider>  
    </AppContextProvider>
  </BrowserRouter>,
      
      
)
