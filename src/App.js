import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import styles from './App.module.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const articles = [
    {
      id: '1',
      title: 'Home',
      body: 'Welcome to the home page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget elit at eros rutrum vehicula in et neque. Nam dui orci, posuere non mauris in, vestibulum interdum arcu. Vivamus ullamcorper sem dolor, nec porttitor sem pellentesque eu. Vivamus mollis sit amet justo sit amet consequat. Duis varius convallis orci, ac suscipit sem faucibus ac. Nulla pharetra elit magna, id sodales neque ultrices eu. Donec a pellentesque erat, in congue est. Sed dictum consequat dui, viverra sollicitudin nibh placerat a. Maecenas elit augue, volutpat sit amet dui non, luctus euismod dui. Vestibulum ac nibh pharetra, faucibus nisi eget, rhoncus metus. Vivamus magna augue, sodales a blandit in, commodo in lectus. Donec in odio laoreet, posuere ligula sit amet, ornare nisi. In placerat, velit semper rhoncus sollicitudin, urna ipsum luctus lacus, ac sodales enim augue eu sem.'
    },
    {
      id: '2',
      title: 'About Us',
      body: 'This is the about us page. Nunc vel elementum ligula. Maecenas mollis sodales mi, ac efficitur nulla finibus at. Nam vel arcu efficitur sem laoreet efficitur at cursus libero. Curabitur ullamcorper arcu libero, placerat accumsan dolor tempus sit amet. Pellentesque hendrerit, tortor ut ornare blandit, nisi mi egestas libero, nec pellentesque mi turpis pulvinar libero. Ut sollicitudin augue erat, vel pulvinar velit rutrum in. In bibendum efficitur purus. In vitae tincidunt purus. Mauris congue id quam nec porttitor. Duis est mi, sagittis non eros a, faucibus sagittis urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec dignissim non ipsum id tincidunt. Ut bibendum libero pellentesque dolor laoreet, et egestas eros sagittis.'
    },
    {
      id: '3',
      title: 'Contact Us',
      body: 'This is the contact page. Vestibulum quis volutpat justo. Mauris volutpat urna at lorem aliquam consequat. Integer id bibendum enim. Nunc tortor dui, fermentum non dui at, lobortis suscipit ex. Proin sodales pretium eros ac elementum. Nulla neque lacus, placerat eget tortor sed, efficitur tristique libero. Aliquam euismod euismod nibh, ut tempus turpis hendrerit sed. Pellentesque aliquet elementum egestas. Maecenas ultrices luctus enim et volutpat. Aliquam efficitur est nec tortor viverra pharetra. Sed feugiat faucibus ante, non vulputate quam posuere sed. Vestibulum egestas purus pretium, maximus massa a, pellentesque massa. Morbi pretium luctus efficitur. Integer cursus, neque ac blandit consequat, tellus sapien pulvinar enim, vitae molestie sem ipsum eu dui. Curabitur porta lectus ex.'
    }
  ];

  return (
    <Router>
      <div className={styles.container}>
        <h1 className={styles.title}>Simple React SPA</h1>
        {loggedIn && <Header />}
        <div className={styles.content}>
          <Routes>
            <Route
              path="/home"
              element={loggedIn ? <Home title={articles[0].title} body={articles[0].body} /> : <Navigate to="/" />}
            />
            <Route
              path="/about"
              element={loggedIn ? <About title={articles[1].title} body={articles[1].body} /> : <Navigate to="/" />}
            />
            <Route
              path="/contact"
              element={loggedIn ? <Contact title={articles[2].title} body={articles[2].body} /> : <Navigate to="/" />}
            />
            <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
