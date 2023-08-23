import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
      <DragDropContext>
        <App />
      </DragDropContext>
    </BrowserRouter>
);

