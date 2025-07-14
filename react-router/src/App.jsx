import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import FeedbackForm from './pages/FeedbackForm';
import Service from './pages/Service';
import Navbar from './components/navbar/Navbar';
import { lazy, Suspense } from 'react';


const FeedbackList = lazy(() => import('./components/feedbacklist/FeedbackList'));

export default function App() {
  
  return (
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/feedbackform/new" element={<FeedbackForm/>} />
          <Route path="/feedbackform" element={<FeedbackForm/>} />
          <Route
            path="/feedbacklist" element={
              <Suspense fallback={<div style={{ padding: 40 }}>Loading feedback…</div>}>
                <FeedbackList />
              </Suspense>
            }
          />
        </Route>
    </Routes>
  );
}
