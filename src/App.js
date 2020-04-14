import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MenuPreview from './components/MenuPreview/MenuPreview';
import itemsFromFile from "./items";
import Sidebar from './components/Sidebar/Sidebar';

function App () {
  const [ items ] = useState(itemsFromFile);
  const [ selectedItems, setSelectedItems ] = useState([]);

  function sidebarItemClick (item) {
    const hasSelectedItem = selectedItems.some(selectedItem => selectedItem.id === item.id);
    if (hasSelectedItem) console.log(`Item "${item.name}" already added. Don't do anything for now...`);
    setSelectedItems(!hasSelectedItem ? selectedItems.concat(item) : selectedItems);
  }

  function deleteItemClick (item) {
    setSelectedItems(selectedItems.filter(selectedItem => selectedItem.id !== item.id))
  }

  return (
    <div className="wrapper">
      <Header items={selectedItems} />

      <div className="container menu-builder">
        <div className="row">
          <div className="col-4">
            <ul className="item-picker">
              {items.map((item) =>
                <Sidebar
                  key={item.id}
                  item={item}
                  onItemClick={sidebarItemClick} /> )}
            </ul>
          </div>
          <div className="col-8">
            <h2>Menu preview</h2>
            <ul className="menu-preview">
              {selectedItems.length
              ? selectedItems.map((item) =>
                <MenuPreview
                  key={item.id}
                  item={item}
                  onDeleteClick={deleteItemClick} /> )
              : <div>No item yet :)</div>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;