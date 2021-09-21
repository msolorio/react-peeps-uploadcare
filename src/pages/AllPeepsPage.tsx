import React from 'react';

class AllPeepsPage extends React.Component {
  state = {
    allPeeps: [],
  }

  async componentDidMount() {
    this.getPeepData();
  }
  
  async getPeepData() {
    try {
      const response = await fetch('http://localhost:4000/peeps');
      const peepsData = await response.json();
  
      this.setState({ allPeeps: peepsData });
      
    } catch (err) {
      console.error(err);
    }
  }

  handleDeleteClick = async (peepId: number) => {
    try {
      await fetch(`http://localhost:4000/peeps/${peepId}`, {
        method: 'DELETE'
      })
      this.getPeepData();

    } catch (err) {
      console.error(err);
    }
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

          <input 
            type="submit" 
            value="Delete" 
            onClick={() => this.handleDeleteClick(peep.id)}
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