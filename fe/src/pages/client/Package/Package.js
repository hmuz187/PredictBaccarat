import { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'


import './style.scss'
import { ButtonNavigate } from '../../../components/client/index'
import { AuthStateContext } from '../../../context/auth'
import { getTimePackageCurrent } from '../../../apis/client'



const Package = () => {

  const { user } = useContext(AuthStateContext)

  const { _id: userId } = user


  const [aiPrediction, setAiPrediction] = useState()
  const [logicMath, setLogicMath] = useState()
  const [naturalRandom, setNaturalRandom] = useState()
  const [fixPattern, setFixPattern] = useState()

  const [aiPredictionDay, setAiPredictionDay] = useState(0)
  const [logicMathDay, setLogicMathDay] = useState(0)
  const [naturalRandomDay, setNaturalRandomDay] = useState(0)
  const [fixPatternDay, setFixPatternDay] = useState(0)

  useEffect(()=>{getTime()}, [])

  const getTime = async () => {

    const response = await getTimePackageCurrent(userId)
    // console.log(response)
    // console.log(response.listTime[0])
    if (!response || !response.listTime[0]) { return toast(`no package time available`) }

    if (response && response.listTime[0]) {

      setAiPrediction((new Date(response.listTime[0].aiPrediction)).toLocaleString())
      setLogicMath((new Date(response.listTime[0].logicMath)).toLocaleString())
      setNaturalRandom((new Date(response.listTime[0].naturalRandom)).toLocaleString())
      setFixPattern((new Date(response.listTime[0].fixPattern)).toLocaleString())

      setAiPredictionDay(Math.floor((response.listTime[0].aiPrediction-Date.now())/1000/60/60))
      setLogicMathDay(Math.floor((response.listTime[0].logicMath-Date.now())/1000/60/60))
      setNaturalRandomDay(Math.floor((response.listTime[0].naturalRandom-Date.now())/1000/60/60))
      setFixPatternDay(Math.floor((response.listTime[0].fixPattern-Date.now())/1000/60/60))

      // console.log(Math.floor((response.listTime[0].fixPattern-Date.now())/1000/60/60))

    }

  }

  return (

    <div className='clientTimeCurrent'>
      <ButtonNavigate />
        <table className='tablePackage'>
          <thead>
            <tr>
              <th>Logic Math Smart</th>
              <th>AI Model Prediction</th>
              <th>Natural Random Premium</th>
              <th>Fix Pattern Gold</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{logicMath}</td>
              <td>{aiPrediction}</td>
              <td>{naturalRandom}</td>
              <td>{fixPattern}</td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>{(logicMathDay>24)? (Math.floor(logicMathDay/24)).toString()+' days' : logicMathDay.toString()+' hours'}</td>
              <td>{(aiPredictionDay>24)? (Math.floor(aiPredictionDay/24)).toString()+' days' : aiPredictionDay.toString()+' hours'}</td>
              <td>{naturalRandomDay>24? (Math.floor(naturalRandomDay/24)).toString()+' days' : naturalRandomDay.toString()+' hours'}</td>
              <td>{fixPatternDay>24? (Math.floor(fixPatternDay/24)).toString()+' days' : fixPatternDay.toString()+' hours'}</td>
            </tr>
          </tbody>

        </table>

    </div>
  )
}

export default Package







// const options = {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
//   time: "numberic"
// };
// console.log((new Date(1727514788009)).toLocaleString({hour12: false}, options))
// console.log((new Date(1727514788009)).toLocaleString())