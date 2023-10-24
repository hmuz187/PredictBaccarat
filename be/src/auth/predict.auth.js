const { predictLogicMath, wrongRightPredictLogicMathResult } = require('../algorithm/logicMath')
const { predictAI, wrongRightPredictAIResult } = require('../algorithm/AIprediction')
const { predictNaturalRandom, wrongRightPredictNaturalRandomResult } = require('../algorithm/naturalRandom')
const { predictFixPattern, wrongRightPredictFixPattern } = require('../algorithm/fixPattern')

const predictResult = ({ string, holderTime }) => {

    // console.log(holderTime)


    const { logicMath, aiPrediction, naturalRandom, fixPattern } = holderTime


    const result = {
        logicMathString: 'not register or expire',
        AIpredictionString: 'not register or expire',
        naturalRandomString: 'not register or expire',
        fixPatternString: 'not register or expire',
        logicMathNext: '',
        AIpredictionNext: '',
        naturalRandomNext: '',
        fixPatternNext: '',

    }

    if (logicMath > Date.now()) {
        result.logicMathString = wrongRightPredictLogicMathResult(string)
        result.logicMathNext = predictLogicMath(string)
    }
    if (aiPrediction > Date.now()) {
        result.AIpredictionString = wrongRightPredictAIResult(string)
        result.AIpredictionNext = predictAI(string)

    }
    if (naturalRandom > Date.now()) {
        result.naturalRandomString = wrongRightPredictNaturalRandomResult(string)
        result.naturalRandomNext = predictNaturalRandom(string)
    }
    if (fixPattern > Date.now()) {
        result.fixPatternString = wrongRightPredictFixPattern(string)
        result.fixPatternNext = predictFixPattern(string)
    }

    return result

}

module.exports = {
    predictResult
}