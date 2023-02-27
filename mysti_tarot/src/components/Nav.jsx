import { Link } from 'react-router-dom'


export default function Nav(){
    
    return(
        <div id="nav">
            <span>THIS IS THE NAVBAR</span>
            <Link to="/Learn"><button>learn</button></Link>
            <Link to="../App"><button>spreads</button></Link>
            <Link to="/About"><button>about</button></Link>
        </div>
    )
}

// HOW DO I ROUTE SOMEONE BACK TO APP? LIKE HOME - APP.JS, I DON'T HAVE A SEPARATE HOME.JSX