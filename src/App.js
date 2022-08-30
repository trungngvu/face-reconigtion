import './App.css';
import {Component} from 'react';
import Navigation from './Components/Navigation/Navigation'
// import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Particle from './Components/Particle Background/Paticle';

class App extends Component {
	constructor () {
		super();
		this.state= {
			input:'',
		}
	}

	onInputChange=(event) => {
		console.log(event.target.value);	
	}

	render() {
    	return (
			<div className='App'>
				<Particle style={{position: 'fixed', zIndex: 0}}/>
				<div style={{position: 'fixed', zIndex: 1, width:'100%'}}>
					<Navigation />
					{/* <Logo /> */}
					<Rank />
					<ImageLinkForm onInputChange={this.onInputChange}/>
				</div>
				{/* <Facereconigtion /> */}
			</div>
		)
  	}
}

export default App;
