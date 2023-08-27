import React, { useState } from 'react'
import './TableBoard.scss'
import { postTableResultString } from '../../../apis/public'


const TableBoard = () => {

    const arrayTable = [
        ['1-1', '2-1', '3-1', '4-1', '5-1', '6-1', '7-1', '8-1', '9-1', '10-1'],
        ['1-2', '2-2', '3-2', '4-2', '5-2', '6-2', '7-2', '8-2', '9-2', '10-2'],
        ['1-3', '2-3', '3-3', '4-3', '5-3', '6-3', '7-3', '8-3', '9-3', '10-3'],
        ['1-4', '2-4', '3-4', '4-4', '5-4', '6-4', '7-4', '8-4', '9-4', '10-4'],
        ['1-5', '2-5', '3-5', '4-5', '5-5', '6-5', '7-5', '8-5', '9-5', '10-5'],
        ['1-6', '2-6', '3-6', '4-6', '5-6', '6-6', '7-6', '8-6', '9-6', '10-6'],
    ]

    const [isActiveReport, setIsActiveReport] = useState(false)
    const [dataSend, setDataSend] = useState('')
    const [countRow, setCountRow] = useState(1)
    var t_r, t_c, str = ''

    const buttonClickP = () => {
        if (countRow < 7) { t_r = countRow; t_c = 1; }
        if (countRow < 13 && countRow > 6) { t_r = countRow - 6; t_c = 2; }
        if (countRow < 19 && countRow > 12) { t_r = countRow - 12; t_c = 3; }
        if (countRow < 25 && countRow > 18) { t_r = countRow - 18; t_c = 4; }
        if (countRow < 31 && countRow > 24) { t_r = countRow - 24; t_c = 5; }
        if (countRow < 37 && countRow > 30) { t_r = countRow - 30; t_c = 6; }
        if (countRow < 43 && countRow > 36) { t_r = countRow - 36; t_c = 7; }
        if (countRow < 49 && countRow > 42) { t_r = countRow - 42; t_c = 8; }
        if (countRow < 55 && countRow > 48) { t_r = countRow - 48; t_c = 9; }
        if (countRow < 61 && countRow > 54) { t_r = countRow - 54; t_c = 10; }
        if (countRow < 67 && countRow > 60) { t_r = countRow - 60; t_c = 11; }
        if (countRow < 73 && countRow > 66) { t_r = countRow - 66; t_c = 12; }
        if (countRow < 79 && countRow > 66) { t_r = countRow - 72; t_c = 13; }

        str = t_c.toString() + "-" + t_r.toString();
        document.getElementById(str).innerHTML += "<span style='font-weight:bold;color:blue;'>P</span>";
        setDataSend(dataSend + "P")
        setCountRow(countRow + 1)

    }

    function buttonClickB() {
        if (countRow < 7) { t_r = countRow; t_c = 1; }
        if (countRow < 13 && countRow > 6) { t_r = countRow - 6; t_c = 2; }
        if (countRow < 19 && countRow > 12) { t_r = countRow - 12; t_c = 3; }
        if (countRow < 25 && countRow > 18) { t_r = countRow - 18; t_c = 4; }
        if (countRow < 31 && countRow > 24) { t_r = countRow - 24; t_c = 5; }
        if (countRow < 37 && countRow > 30) { t_r = countRow - 30; t_c = 6; }
        if (countRow < 43 && countRow > 36) { t_r = countRow - 36; t_c = 7; }
        if (countRow < 49 && countRow > 42) { t_r = countRow - 42; t_c = 8; }
        if (countRow < 55 && countRow > 48) { t_r = countRow - 48; t_c = 9; }
        if (countRow < 61 && countRow > 54) { t_r = countRow - 54; t_c = 10; }
        if (countRow < 67 && countRow > 60) { t_r = countRow - 60; t_c = 11; }
        if (countRow < 73 && countRow > 66) { t_r = countRow - 66; t_c = 12; }
        if (countRow < 79 && countRow > 66) { t_r = countRow - 72; t_c = 13; }

        str = t_c.toString() + "-" + t_r.toString();
        document.getElementById(str).innerHTML += "<span style='font-weight:bold;color:red;'>B</span>"
        setDataSend(dataSend + "B")
        setCountRow(countRow + 1)
    }

    function buttonClickT() {
        if (countRow < 7) { t_r = countRow; t_c = 1; }
        if (countRow < 13 && countRow > 6) { t_r = countRow - 6; t_c = 2; }
        if (countRow < 19 && countRow > 12) { t_r = countRow - 12; t_c = 3; }
        if (countRow < 25 && countRow > 18) { t_r = countRow - 18; t_c = 4; }
        if (countRow < 31 && countRow > 24) { t_r = countRow - 24; t_c = 5; }
        if (countRow < 37 && countRow > 30) { t_r = countRow - 30; t_c = 6; }
        if (countRow < 43 && countRow > 36) { t_r = countRow - 36; t_c = 7; }
        if (countRow < 49 && countRow > 42) { t_r = countRow - 42; t_c = 8; }
        if (countRow < 55 && countRow > 48) { t_r = countRow - 48; t_c = 9; }
        if (countRow < 61 && countRow > 54) { t_r = countRow - 54; t_c = 10; }
        if (countRow < 67 && countRow > 60) { t_r = countRow - 60; t_c = 11; }
        if (countRow < 73 && countRow > 66) { t_r = countRow - 66; t_c = 12; }
        if (countRow < 79 && countRow > 66) { t_r = countRow - 72; t_c = 13; }

        str = t_c.toString() + "-" + t_r.toString()
        document.getElementById(str).innerHTML += "<span style='font-weight:bold;color:green;'>T</span>"
        setDataSend(dataSend + "T")
        setCountRow(countRow + 1)
    }

    function buttonClickDelete() {
        if (countRow === 1) return
        var count_row = countRow - 1;
        if (count_row < 7) { t_r = count_row; t_c = 1; }
        if (count_row < 13 && count_row > 6) { t_r = count_row - 6; t_c = 2; }
        if (count_row < 19 && count_row > 12) { t_r = count_row - 12; t_c = 3; }
        if (count_row < 25 && count_row > 18) { t_r = count_row - 18; t_c = 4; }
        if (count_row < 31 && count_row > 24) { t_r = count_row - 24; t_c = 5; }
        if (count_row < 37 && count_row > 30) { t_r = count_row - 30; t_c = 6; }
        if (count_row < 43 && count_row > 36) { t_r = count_row - 36; t_c = 7; }
        if (count_row < 49 && count_row > 42) { t_r = count_row - 42; t_c = 8; }
        if (count_row < 55 && count_row > 48) { t_r = count_row - 48; t_c = 9; }
        if (count_row < 61 && count_row > 54) { t_r = count_row - 54; t_c = 10; }
        if (count_row < 67 && count_row > 60) { t_r = count_row - 60; t_c = 11; }
        if (count_row < 73 && count_row > 66) { t_r = count_row - 66; t_c = 12; }
        if (count_row < 79 && count_row > 66) { t_r = count_row - 72; t_c = 13; }


        str = t_c.toString() + "-" + t_r.toString()
        document.getElementById(str).innerHTML = "  ";

        setDataSend(dataSend.slice(0, dataSend.length - 1))
        setCountRow(count_row)
    }

    const [resultString, setResultString] = useState('')
    const [maxWrong, setMaxWrong] = useState()
    const [totalRight, setTotalRight] = useState()
    // const [maxRight, setMaxRight] = useState()
    // const [totalWrong, setTotalWrong] = useState()




    const handleGetResult = async (e) => {
        e.preventDefault();

        var item = dataSend
        item = item.toString();
        item = item.toUpperCase();
        item = item.replace(/T/g, '');

        var item_bit = item.replace(/B/g, '0').replace(/P/g, '1');
        const result = await postTableResultString({ string: item_bit })


        setResultString(result.data.data.resultString)
        setMaxWrong(result.data.data.reportList.maxWrong)
        setTotalRight(result.data.data.reportList.totalRight)

        // setMaxRight(result.data.data.reportList.maxRight)
        // setTotalWrong(result.data.data.reportList.totalWrong)

        if (result.status === 200) { setIsActiveReport(!isActiveReport) }
    }



    return (
        <div className='TableBoardPublic'>

            <div className='formGroup'>
                <div className='inputButton'>
                    <button id='buttonP' onClick={buttonClickP} className='button_input'>P</button>
                    <button id='buttonB' onClick={buttonClickB} className='button_input'>B</button>
                    <button id='buttonT' onClick={buttonClickT} className='button_input'>T</button>
                    <button id='buttonDelete' onClick={buttonClickDelete} className='button_input'>Delete</button>
                </div>
            </div>

            <div className='containerTable'>
                <table>
                    <tbody>
                        {
                            arrayTable.map((row, index) => {
                                return (
                                    <tr key={index}>
                                        {row.map((column, index) => {
                                            return (
                                                <td key={index}
                                                    id={column}
                                                >
                                                    {str}
                                                </td>
                                            )
                                        })}
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>

            </div>

            <div className='getResult'>
                <button type='submit' onClick={handleGetResult}>
                    Get Prediction
                    <b id="predictResult"></b>
                </button>
            </div>

            <div className='reportResult' style={{ display: isActiveReport ? 'flex' : 'none' }}>
                <h2>{resultString}</h2>

                <table>
                    <tbody>
                        <tr>
                            <td>Max Wrong</td>
                            <td>Total Right</td>
                        </tr>
                        <tr>
                            <td>{maxWrong}</td>
                            <td>{totalRight}</td>
                        </tr>
                    </tbody>
                </table>


            </div>

        </div>
    )
}

export default TableBoard










/* <table>
    <tbody>
        <tr>
            <td>Max Wrong</td>
            <td>Max Right</td>
            <td>Total Wrong</td>
            <td>Total Right</td>
        </tr>
        <tr>
            <td>{maxWrong}</td>
            <td>{maxRight}</td>
            <td>{totalWrong}</td>
            <td>{totalRight}</td>
        </tr>
    </tbody>
</table> */

/* <p>Max Wrong :: {maxWrong}</p>
<p>Total Right :: {totalRight}</p> */

// const arrayRows = ['1', '2', '3', '4', '5', '6']
// const arrayColums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

/* <table>
                    <tr>
                        <td id='t1-1'>t1-1</td>
                        <td id='t2-1'>t2-1</td>
                        <td id='t3-1'>t3-1</td>
                        <td id='t4-1'>t4-1</td>
                        <td id='t5-1'>t5-1</td>
                        <td id='t6-1'>t6-1</td>
                        <td id='t7-1'>t7-1</td>
                        <td id='t8-1'>t8-1</td>
                        <td id='t9-1'>t9-1</td>
                        <td id='t10-1'>t10-1</td>
                    </tr>                    
                    <tr>
                        <td id='t1-2'>t1-2</td>
                        <td id='t2-2'>t2-2</td>
                        <td id='t3-2'>t3-2</td>
                        <td id='t4-2'>t4-2</td>
                        <td id='t5-2'>t5-2</td>
                        <td id='t6-2'>t6-2</td>
                        <td id='t7-2'>t7-2</td>
                        <td id='t8-2'>t8-2</td>
                        <td id='t9-2'>t9-2</td>
                        <td id='t10-2'>t10-2</td>
                    </tr>
                    <tr>
                        <td id='t1-3'>t1-3</td>
                        <td id='t2-3'>t2-3</td>
                        <td id='t3-3'>t3-3</td>
                        <td id='t4-3'>t4-3</td>
                        <td id='t5-3'>t5-3</td>
                        <td id='t6-3'>t6-3</td>
                        <td id='t7-3'>t7-3</td>
                        <td id='t8-3'>t8-3</td>
                        <td id='t9-3'>t9-3</td>
                        <td id='t10-3'>t10-3</td>
                    </tr>
                    <tr>
                        <td id='t1-4'>t1-4</td>
                        <td id='t2-4'>t2-4</td>
                        <td id='t3-4'>t3-4</td>
                        <td id='t4-4'>t4-4</td>
                        <td id='t5-4'>t5-4</td>
                        <td id='t6-4'>t6-4</td>
                        <td id='t7-4'>t7-4</td>
                        <td id='t8-4'>t8-4</td>
                        <td id='t9-4'>t9-4</td>
                        <td id='t10-4'>t10-4</td>
                    </tr>
                    <tr>
                        <td id='t1-5'>t1-5</td>
                        <td id='t2-5'>t2-5</td>
                        <td id='t3-5'>t3-5</td>
                        <td id='t4-5'>t4-5</td>
                        <td id='t5-5'>t5-5</td>
                        <td id='t6-5'>t6-5</td>
                        <td id='t7-5'>t7-5</td>
                        <td id='t8-5'>t8-5</td>
                        <td id='t9-5'>t9-5</td>
                        <td id='t10-5'>t10-5</td>
                    </tr>
                    <tr>
                        <td id='t1-6'>t1-6</td>
                        <td id='t2-6'>t2-6</td>
                        <td id='t3-6'>t3-6</td>
                        <td id='t4-6'>t4-6</td>
                        <td id='t5-6'>t5-6</td>
                        <td id='t6-6'>t6-6</td>
                        <td id='t7-6'>t7-6</td>
                        <td id='t8-6'>t8-6</td>
                        <td id='t9-6'>t9-6</td>
                        <td id='t10-6'>t10-6</td>
                    </tr>
                </table> */

/* <table>
                    {
                        arrayRows.map((row, index) => {
                            return (
                                <tr key={index}>
                                    {arrayColums.map((colum, index) => {
                                        return (
                                            <td key={index}
                                                id={`t${row}-${colum}`}
                                            >
                                                {`t${row}-${colum}`}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })
                    }
                </table> */