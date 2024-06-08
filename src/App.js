import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Login from './components/Login';
import styles from './App.module.css';

function App() {
  const [page, setPage] = useState('login');
  const [loggedIn, setLoggedIn] = useState(false);

  const text1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget elit at eros rutrum vehicula in et neque. Nam dui orci, posuere non mauris in, vestibulum interdum arcu. Vivamus ullamcorper sem dolor, nec porttitor sem pellentesque eu. Vivamus mollis sit amet justo sit amet consequat. Duis varius convallis orci, ac suscipit sem faucibus ac. Nulla pharetra elit magna, id sodales neque ultrices eu. Donec a pellentesque erat, in congue est. Sed dictum consequat dui, viverra sollicitudin nibh placerat a. Maecenas elit augue, volutpat sit amet dui non, luctus euismod dui. Vestibulum ac nibh pharetra, faucibus nisi eget, rhoncus metus. Vivamus magna augue, sodales a blandit in, commodo in lectus. Donec in odio laoreet, posuere ligula sit amet, ornare nisi. In placerat, velit semper rhoncus sollicitudin, urna ipsum luctus lacus, ac sodales enim augue eu sem.";
  const text2 = "Nunc vel elementum ligula. Maecenas mollis sodales mi, ac efficitur nulla finibus at. Nam vel arcu efficitur sem laoreet efficitur at cursus libero. Curabitur ullamcorper arcu libero, placerat accumsan dolor tempus sit amet. Pellentesque hendrerit, tortor ut ornare blandit, nisi mi egestas libero, nec pellentesque mi turpis pulvinar libero. Ut sollicitudin augue erat, vel pulvinar velit rutrum in. In bibendum efficitur purus. In vitae tincidunt purus. Mauris congue id quam nec porttitor. Duis est mi, sagittis non eros a, faucibus sagittis urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec dignissim non ipsum id tincidunt. Ut bibendum libero pellentesque dolor laoreet, et egestas eros sagittis.";
  const text3 = "Vestibulum quis volutpat justo. Mauris volutpat urna at lorem aliquam consequat. Integer id bibendum enim. Nunc tortor dui, fermentum non dui at, lobortis suscipit ex. Proin sodales pretium eros ac elementum. Nulla neque lacus, placerat eget tortor sed, efficitur tristique libero. Aliquam euismod euismod nibh, ut tempus turpis hendrerit sed. Pellentesque aliquet elementum egestas. Maecenas ultrices luctus enim et volutpat. Aliquam efficitur est nec tortor viverra pharetra. Sed feugiat faucibus ante, non vulputate quam posuere sed. Vestibulum egestas purus pretium, maximus massa a, pellentesque massa. Morbi pretium luctus efficitur. Integer cursus, neque ac blandit consequat, tellus sapien pulvinar enim, vitae molestie sem ipsum eu dui. Curabitur porta lectus ex.";

  const validUsers = [
    { username: 'nico', password: 'marcelino' },
    { username: 'jimin', password: 'bangtan' },
    { username: 'john', password: 'doe' },
  ];

  const handleLogin = (username, password) => {
    console.log("nico jimin")
    const isValidUser = validUsers.some(
      (user) => user.username === username && user.password === password
    );
    if (isValidUser) {
      setLoggedIn(true);
      setPage('home');
    } else {
      alert('Incorrect username or password');
    }
  };

  let content;
  if (!loggedIn) {
    content = <Login onLogin={handleLogin} />;
  } else {
    if (page === 'home') {
      content = <Content title="Hello World!" text={text1} />;
    } else if (page === 'about') {
      content = <Content title="About Us" text={text2} />;
    } else if (page === 'contact') {
      content = <Content title="Contact Us" text={text3} />;
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Simple React SPA</h1>
      {loggedIn && <Header setPage={setPage} currentPage={page} />}
      <div className={styles.content}>
        {content}
      </div>
    </div>
  );
}

export default App;
