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
                        <img src={pet.ImageName} height="100%" alt="boohoo" className="img-responsive"/>
                        <p>類型:{pet.Type}</p>
                        <p>性別:{pet.Sex}</p>
                        <p>註解:{pet.Note}</p>
                        <p>種類:{pet.Variety}</p>
                        <p>原因:{pet.Reason}</p>
                      </Paper>
                    );
                })
            }
          </div>
        );
  }

});

module.exports = PetList;
