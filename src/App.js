// App.js
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import About from './routes/about/about.component';
import Contact from './routes/contact/contact.component';
import PhotoGallerySelector from './routes/gallery/photoGallerySelector.component';
import PhotoGalleryInstance from './routes/gallery/photoGalleryInstance.component';
import Footer from './routes/navigation/footer.component'; // Import Footer

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path="portfolio/*">
            <Route index element={<PhotoGallerySelector />} />
            <Route path=":folderName" element={<PhotoGalleryInstance />} />
          </Route>
        </Route>
      </Routes>
      <Footer /> {/* Add Footer */}
    </div>
  );
}

export default App;
