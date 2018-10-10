import React, { Component } from 'react';
import BuilderHome from '../components/BuilderHome';
import Name from '../components/Name';
import Races from '../components/Races';
import Vocations from '../components/Vocations';
import Weapons from '../components/Weapons';
import CharacterCard from '../components/CharacterCard';
import { setName, setRace } from '../actions';

class Builder extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.changeName = this.changeName.bind(this)
    this.changeRace = this.changeRace.bind(this)
    this.changeVocation = this.changeVocation.bind(this)
    this.changeWeapon = this.changeWeapon.bind(this)
    this.state = {
      page: 1,
      currentName: '',
      currentRace: 'n/a',
      currentVocation: 'n/a',
      currentWeapon: 'n/a'
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  changeName(e) {
    this.setState({ currentName: e.target.value})
  }

  changeRace(e) {
      this.setState({ currentRace: e.target.value})
  }

  changeVocation(e) {
      this.setState({ currentVocation: e.target.value})
  }

  changeWeapon(e) {
      this.setState({ currentWeapon: e.target.value})
  }


  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;

    return (<div>
        {page === 1 && <BuilderHome onSubmit={this.nextPage}/>}

        {page === 2 && <Name currentName={this.state.currentName} changeName={this.changeName} previousPage={this.previousPage} onSubmit={this.nextPage}/>}

        {page === 3 && <Races currentRace={this.state.currentRace} changeRace={this.changeRace} previousPage={this.previousPage} onSubmit={this.nextPage}/>}

        {page === 4 && <Vocations currentVocation={this.state.currentVocation} changeVocation={this.changeVocation} previousPage={this.previousPage} onSubmit={this.nextPage}/>}

        {page === 5 && <Weapons currentWeapon={this.state.currentWeapon} changeWeapon={this.changeWeapon} previousPage={this.previousPage} onSubmit={this.nextPage}/>}

        {page === 6 && <CharacterCard currentName={this.state.currentName} currentRace={this.state.currentRace} currentVocation={this.state.currentVocation} currentWeapon={this.state.currentWeapon} changeWeapon={this.changeWeapon} previousPage={this.previousPage} onSubmit={onSubmit}/>}
      </div>
    )
  }
}


export default Builder;