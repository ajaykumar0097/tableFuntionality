import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import Middle from './Middle';
import Last from './Last';
import Final from './Final';


function Application() {
  return (
    <div>
      <Header />
      <MainContent />
      {/* <Footer /> */}
      <Middle/>
      <Last/>
      <Final/>
    </div>
  );
}

export default Application;
