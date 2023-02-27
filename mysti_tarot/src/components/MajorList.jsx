import { Link, useNavigate } from 'react-router-dom'

export default function MajorList(props){

console.log(props)

    let navigate = useNavigate()
    const showMajor = (index) => {
        navigate(`${index}`)
    }

    return(
       <div>

        <h1>Hello</h1>
         {/* <div className="grid">
            {
                props.results.map((major, index) => (
                    <div key={index} className="card" onClick={() => showMajor(index)}>
                        <h3>{major.name}</h3>
                    </div>
                ))
            }
         </div>

         <div>
             <Link to="/MinorLanding"><button>MINOR ARCANA</button></Link>
         </div> */}
       </div> 
    )
}

//////////////////////////////////////////////////////////////////////////////////////////////////////