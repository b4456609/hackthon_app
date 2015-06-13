import React from 'react';
import MUI   from 'material-ui';

const Paper = MUI.Paper;

var PetList = React.createClass({
  render: function() {
    console.log('PetList render');

    return (
      <div className="content">
            {
                this.props.pets.map(function(pet) {
                    return (
                      <Paper zDepth={1}
                        innerClassName='text-card'>
                        <p>{pet.Sex}</p>
                      </Paper>
                    );
                })
            }
          </div>
        );
  }

});

module.exports = PetList;
