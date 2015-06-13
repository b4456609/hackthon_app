import React from 'react';
import MUI   from 'material-ui';

const RaisedButton = MUI.RaisedButton;
const LeftNav      = MUI.LeftNav;
const MenuItem     = MUI.MenuItem;

const menuItems = [
  { type: MenuItem.Types.SUBHEADER, text: '標題1' },
  { route: 'item1', text: 'item1' },
  { route: 'menu2', text: 'item2' },
  { type: MenuItem.Types.SUBHEADER, text: '標題2' },
  { route: 'menu3', text: 'item3' },
  { route: 'menu4', text: 'item4' },
  { type: MenuItem.Types.SUBHEADER, text: '標題3' },
  { route: 'menu5', text: 'item5' },
  { type: MenuItem.Types.SUBHEADER, text: '標題4' },
  { route: 'menu6', text: 'item3' },
  { route: 'menu7', text: 'item4' },
  { type: MenuItem.Types.SUBHEADER, text: '標題5' },
  { route: 'menu8', text: 'item3' },
  { route: 'menu9', text: 'item4' },
];

export default React.createClass({
    render() {
        return (
          <LeftNav
            ref="leftNav"
            docked={false}
            isInitiallyOpen={false}
            menuItems={menuItems}
            onChange={this.onChangeHandler}
            />
        );
    },
    toggle : function() {
      this.refs.leftNav.toggle();
    },
    onChangeHandler: function(e, selectedIndex, menuItem){
      console.log(e);
      console.log(selectedIndex);
      console.log(menuItem);

    }
});
