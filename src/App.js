import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MenuPreview from './components/MenuPreview/MenuPreview';
import itemsFromFile from "./items";
import Sidebar from './components/Sidebar/Sidebar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: itemsFromFile, selectedItems: []};
  }

  sidebarItemClick = (item) => {
    this.setState((state) => {
      const hasSelectedItem = state.selectedItems.some(selectedItem => selectedItem.id === item.id);
      if (hasSelectedItem) console.log(`Item "${item.name}" already added. Don't do anything for now...`);
      return {
        items: state.items,
        selectedItems: !hasSelectedItem ? state.selectedItems.concat(item) : state.selectedItems
      };
    });
  }

  deleteItemClick = (item) => {
    this.setState((state) => ({
      items: state.items,
      selectedItems: state.selectedItems.filter(selectedItem => selectedItem.id !== item.id)
    }));
  }

  render() {
    const items = this.state.items;
    const selectedItems = this.state.selectedItems;
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
                  onItemClick={this.sidebarItemClick} /> )}
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
                  onDeleteClick={this.deleteItemClick} /> )
              : <div>No item yet :)</div>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )};
};

export default App;