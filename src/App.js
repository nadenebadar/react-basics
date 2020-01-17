import React from 'react';
import './App.css';
import Card from './components/Card';

function App() { 

  return (
    <div className='App'>
      <div className="container">
          <Card 
          imageUrl = "https://source.unsplash.com/collection/582860/660x440"
          title = "Lorem ipsum dolor sit amet"
          copy = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus augue diam, id ullamcorper est rhoncus vitae. Donec diam sem, hendrerit id volutpat vitae, semper id leo</p>'
          link = 'google.com'
          linkLabel = 'Read More'
          >
          </Card>
      </div>
    </div>
  );
}

export default App;
