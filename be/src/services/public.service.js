'use strict'


const {wrongRightPredictLogicMathResult} = require('../algorithm/logicMath')
const {wrongRightPredictAIResult} = require('../algorithm/AIprediction')
const {wrongRightPredictNaturalRandomResult} = require('../algorithm/naturalRandom')
const {wrongRightPredictFixPattern} = require('../algorithm/fixPattern')


class PublicService {

    static tableResultString = ({string}) => {
        return {
        logicMath: wrongRightPredictLogicMathResult(string),
        AIprediction: wrongRightPredictAIResult(string),
        naturalRandom: wrongRightPredictNaturalRandomResult(string),
        fixPattern: wrongRightPredictFixPattern(string),
        }
    }
}

module.exports = PublicService














// const {wrongRightPredictResult, maxWrongPredictResult, predict} = require('../algorithm/algorithm')

// class PublicService {

//     static tableResultString = ({string}) => {
//         return {
//         resultString: wrongRightPredictResult(string),
//         reportList: maxWrongPredictResult(string)
//         }
//     }
// }

// module.exports = PublicService