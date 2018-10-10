return(
    <form className="builder-screen" onSubmit={(e) => {
        e.preventDefault(); this.props.dispatch(createCharacterAction(e))
    }}>
        <Panel className="builder">
            <div className="name-block">
                <h3>Character Name</h3>
                <Name onInput={e => this.props.dispatch(setName(e.target.value))} />
            </div>
            <div className="building-block">
                <h3>Character Race</h3>
                <Races onClick={e => this.props.dispatch(setRace(e.target.value))} />
            </div>
            <div className="building-block">
                <h3>Character Vocation</h3>
                <Vocations onClick={e => this.props.dispatch(setVocation(e.target.value))} />
            </div>
            <div className="building-block">
                <h3>Character Weapon</h3>
                <Weapons onClick={e => this.props.dispatch(setWeapon(e.target.value))} />
            </div>
        </Panel>
        <Button type="submit" className="submit">Submit</Button>
    </form>
)
}

}

const mapStateToProps = (state) => ({
    characters: state.characters,
    currentName: state.currentName,
    currentRace: state.currentRace,
    currentVocation: state.currentVocation,
    currentWeapon: state.currentWeapon
});

export default connect(mapStateToProps)(Builder);



else if (props.currentRace === 'Human') {
    return (
        <form onSubmit={handleSubmit}>
            <div className="buttons">
                <div className="choices">
                    <input type="radio" className="choice" value="Human" onChange={e => props.onChange(e)}>Human</input>
                    <input type="radio" className="choice" value="Elf" onChange={e => props.onChange(e)}>Elf</input>
                    <input type="radio" className="choice" value="Orc" onChange={e => props.onChange(e)}>Orc</input>
                </div>
                <div className="example">
                    <img alt="Human Sprite" height='100px' width='60px' src="https://piskel-imgstore-b.appspot.com/img/af01f8ae-c108-11e8-8aa3-7f95efae01d1.gif" />
                    <p className="currentChoice">Current Choice: {props.currentRace}</p>
                </div>
            </div>
        </form>)
} else if (props.currentRace === 'Elf') {
    return (
        <form onSubmit={handleSubmit}>
            <div className="buttons">
                <div className="choices">
                    <input type="radio" className="choice" value="Human" onChange={e => props.onChange(e)}>Human</input>
                    <input type="radio" className="choice" value="Elf" onChange={e => props.onChange(e)}>Elf</input>
                    <input type="radio" className="choice" value="Orc" onChange={e => props.onChange(e)}>Orc</input>
                </div>
                <div className="example">
                    <img alt="Elf Sprite" height='100px' width='60px' src="https://piskel-imgstore-b.appspot.com/img/7ce6f8a1-c10a-11e8-b7e5-7f95efae01d1.gif" />
                    <p className="currentChoice">Current Choice: {props.currentRace}</p>
                </div>
            </div>
        </form>
    )
} else if (props.currentRace === 'Orc') {
    return (
        <form onSubmit={handleSubmit}>

            <div className="buttons">
                <div className="choices">
                    <input type="radio" className="choice" value="Human" onChange={e => props.onChange(e)}>Human</input>
                    <input type="radio" className="choice" value="Elf" onChange={e => props.onChange(e)}>Elf</input>
                    <input type="radio" className="choice" value="Orc" onChange={e => props.onChange(e)}>Orc</input>
                </div>
                <div className="example">
                    <img alt="Orc Sprite" height='100px' width='60px' src="https://piskel-imgstore-b.appspot.com/img/57d86eeb-c10f-11e8-8f43-51ae3a6406a9.gif" />
                    <p className="currentChoice">Current Choice: {props.currentRace}</p>
                </div>
            </div>
        </form>
    )
}
}