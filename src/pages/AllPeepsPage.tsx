import React from 'react';

class AllPeepsPage extends React.Component {
  state = {
    allPeeps: []
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:4000/peeps');
    const peepsData = await response.json();

    console.log('peepsData ==>', peepsData);

    this.setState({ allPeeps: peepsData });
  }

  renderPeeps() {
    return this.state.allPeeps.map((peep: any) => {
      return (
        <div key={peep.id}>
          <h3>{peep.firstName} {peep.lastName}</h3>

          <img 
            className="peep-index-img" 
            src={peep.imageUrl} 
            alt={peep.firstName} 
          />
        </div>
      )
    });
  }

  render() {
    return (
      <div>
        <h2>All Peeps</h2>
        {this.renderPeeps()}
      </div>
    )
  }
}

export default AllPeepsPage;