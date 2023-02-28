import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function MajorCards(props) {
    const [majCard, setMajCard] = useState('')
    let { index } = usePrams()

    useEffect (() => {
       let selectedMajCard = props.data[index]
       setMajCard(selectedMajCard)
    }, [props.data, index])

    return majCard (
        <div>
            <div id="upRevContainer">
                <div id="upContainer">
                    <span>UPRIGHT</span><br></br>
                    <h3 className="resultsText"> {majCard.meaning_up} </h3>
                </div>
                <div id="revContainer">
                    <span>REVERSED</span><br></br>
                    <h3 className="resultsText"> {majCard.meaning_rev} </h3>
                </div>
            </div>
            
            <br></br>

            <div id="desriptionContainer">
                <span>DECRIPTION</span><br></br>
                <h3 className="resultsText"> {majCard.desc} </h3>
            </div>
            
            <div>
                <Link to="/MinorArcana"><button>MINOR ARCANA</button></Link>
            </div>
        </div>
    )
}


//////////////////////////////////////////////////////////////////////////////////////////////////////