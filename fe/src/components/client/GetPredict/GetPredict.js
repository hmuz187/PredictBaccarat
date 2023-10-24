import React, { useState } from 'react'
import './style.scss'
import { postGetPredictResult } from '../../../apis/client'


const GetPredict = ({dataSend}) => {

    const [resultStringLogicMath, setResultStringLogicMath] = useState('')
    const [resultStringAI, setResultStringAI] = useState('')
    const [resultStringNaturalRandom, setResultStringNaturalRandom] = useState('')
    const [resultStringFixPattern, setResultStringFixPattern] = useState('')

    const [resultLogicMath, setResultLogicMath] = useState('')
    const [resultAI, setResultAI] = useState('')
    const [resultNaturalRandom, setResultNaturalRandom] = useState('')
    const [resultFixPattern, setResultFixPattern] = useState('')



    const handleAlgorithm = async (e) => {
        e.preventDefault();

        var item = dataSend
        item = item.toString();
        item = item.toUpperCase();
        item = item.replace(/T/g, '');

        var item_bit = item.replace(/B/g, '0').replace(/P/g, '1');
        const result = await postGetPredictResult({ string: item_bit, userId: 'naturalRandom' })

        //console.log(result.data.data)

        setResultStringLogicMath(result.data.data.logicMath ? result.data.data.logicMath : 'Need buy')
        setResultStringAI(result.data.data.AIprediction ? result.data.data.AIprediction : 'Need buy')
        setResultStringNaturalRandom(result.data.data.naturalRandom ? result.data.data.naturalRandom : 'Need buy')
        setResultStringFixPattern(result.data.data.fixPattern ? result.data.data.fixPattern : 'Need buy')

        setResultLogicMath(result.data.data.logicMathNext ? result.data.data.logicMathNext : '')
        setResultAI(result.data.data.AIpredictionNext ? result.data.data.AIpredictionNext : '')
        setResultNaturalRandom(result.data.data.naturalRandomNext ? result.data.data.naturalRandomNext : '')
        setResultFixPattern(result.data.data.fixPatternNext ? result.data.data.fixPatternNext : '')

        if (result.status === 200) { setIsActiveReport(!isActiveReport) }
    }

    const [isActiveReport, setIsActiveReport] = useState(false)


    return (
        <div className='getPredict'>


            <div className='getAlgorithmResult'>
                <button type='submit' onClick={handleAlgorithm}>
                    Prediction Result
                </button>
            </div>

            <div className='getResult'>
                <div className='logicMath'>
                    <p className='getResultBTag'>Logic Math Result</p>
                    <div className='bTag'>
                        Next:: {resultLogicMath}
                    </div>
                    <div className='bTag'>
                        {resultStringLogicMath}
                    </div>
                </div>

                <div className='AI'>
                    <p className='getResultBTag'>AI Result</p>
                    <div className='bTag'>
                        Next:: {resultAI}
                    </div>
                    <div className='bTag'>
                        {resultStringAI}
                    </div>
                </div>

                <div className='naturalRandom'>
                    <p className='getResultBTag'>Natural random Result</p>
                    <div className='bTag'>
                        Next:: {resultNaturalRandom}
                    </div>
                    <div className='bTag'>
                        {resultStringNaturalRandom}
                    </div>
                </div>

                <div className='fixPattern'>
                    <p className='getResultBTag'>Fix pattern Result</p>
                    <div className='bTag'>
                        Next:: {resultFixPattern}
                    </div>
                    <div className='bTag'>
                        {resultStringFixPattern}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetPredict
