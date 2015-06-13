import React      from 'react';
import MUI        from 'material-ui';
import AppBar     from './app-bar';
import LeftNavi   from './left-navi';
import TextCard   from './text-card';
import ImageCard  from './image-card';
import ChartCard  from './chart-card';
import PetList from './pet-list'

const AppCanvas = MUI.AppCanvas;

export default React.createClass({

  getInitialState: function() {
    return {pets: []};
  },
  componentDidMount: function() {
    console.log('componentDidMount');
    var url = 'http://140.121.197.135:11116/Animal/Animal?type=1';
    var self = this;
    // $.get(url, function(result) {
    //   console.log(result);
    //   if (this.isMounted()) {
    //     this.setState({
    //       pets: result
    //     });
    //   }
    // }.bind(this));

    $.ajax({
    type: "GET",
    url: url,
    success: function(result) {
      console.log(result);
      if(self.isMounted()){
        self.setState({
          pets: result
        });
      }
      }

  });
  },
    render() {
        return (
          <AppCanvas predefinedLayout={1}>
            <AppBar onMenuIconTapped={this.toggleLeftNavi}>
            </AppBar>
            <LeftNavi ref="leftNav" />
              <PetList pets={this.state.pets}/>
          </AppCanvas>
        );
    },

    toggleLeftNavi() {
        this.refs.leftNav.toggle();
    }
});
