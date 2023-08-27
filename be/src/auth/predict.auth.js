const { predictLogicMath, wrongRightPredictLogicMathResult } = require('../algorithm/logicMath')
const { predictAI, wrongRightPredictAIResult } = require('../algorithm/AIprediction')
const { predictNaturalRandom, wrongRightPredictNaturalRandomResult } = require('../algorithm/naturalRandom')
const { predictFixPattern, wrongRightPredictFixPattern } = require('../algorithm/fixPattern')

const predictResult = ({ string, reservationTime }) => {

    const {logicMath, aiPrediction, naturalRandom, fixPattern} = reservationTime

    const result = {
        logicMathString: 'not register',
        AIpredictionString: 'not register',
        naturalRandomString: 'not register',
        fixPatternString: 'not register',
        logicMathNext: '',
        AIpredictionNext: '',
        naturalRandomNext: '',
        fixPatternNext: '',

    }

    if (logicMath.total>0 && logicMath.expire>Date.now()) {
        result.logicMathString = wrongRightPredictLogicMathResult(string)
        result.logicMathNext = predictLogicMath(string)
    }
    if (aiPrediction.total>0 && aiPrediction.expire>Date.now()) {
        result.AIpredictionString = wrongRightPredictAIResult(string)
        result.AIpredictionNext = predictAI(string)

    }
    if (naturalRandom.total>0 && naturalRandom.expire>Date.now()) {
        result.naturalRandomString = wrongRightPredictNaturalRandomResult(string)
        result.naturalRandomNext = predictNaturalRandom(string)
    }
    if (fixPattern.total>0 && fixPattern.expire>Date.now()) {
        result.fixPatternString = wrongRightPredictFixPattern(string)
        result.fixPatternNext = predictFixPattern(string)
    }

    return result

}

module.exports = {
    predictResult
}