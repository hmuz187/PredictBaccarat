import React, { useState } from 'react'
import './style.scss'


const TableShow = () => {

    const arrayTable = [
        ['1-1', '2-1', '3-1', '4-1', '5-1', '6-1', '7-1', '8-1', '9-1', '10-1', '11-1', '12-1', '13-1', '14-1'],
        ['1-2', '2-2', '3-2', '4-2', '5-2', '6-2', '7-2', '8-2', '9-2', '10-2', '11-2', '12-2', '13-2', '14-2'],
        ['1-3', '2-3', '3-3', '4-3', '5-3', '6-3', '7-3', '8-3', '9-3', '10-3', '11-3', '12-3', '13-3', '14-3'],
        ['1-4', '2-4', '3-4', '4-4', '5-4', '6-4', '7-4', '8-4', '9-4', '10-4', '11-4', '12-4', '13-4', '14-4'],
        ['1-5', '2-5', '3-5', '4-5', '5-5', '6-5', '7-5', '8-5', '9-5', '10-5', '11-5', '12-5', '13-5', '14-5'],
        ['1-6', '2-6', '3-6', '4-6', '5-6', '6-6', '7-6', '8-6', '9-6', '10-6', '11-6', '12-6', '13-6', '14-6'],
    ]

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
        document.getElementById(str).innerHTML += "<span style='background-color:var(--blue-color);'>P</span>";
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
        document.getElementById(str).innerHTML += "<span style='background-color:var(--red-color);'>B</span>"
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
        document.getElementById(str).innerHTML += "<span style='background-color:var(--green-color);'>T</span>"
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


    return (
        <div className='tableShow'>

            <div className='formGroup'>
                <div className='inputButton' onKeyDown={(e) => {
                    if (e.key === 'p' || e.key === 'P') { buttonClickP() }
                    else if (e.key === 'b' || e.key === 'B') { buttonClickB() }
                    else if (e.key === 't' || e.key === 'T') { buttonClickT() }
                    else if (e.key === 'd' || e.key === 'D') { buttonClickDelete() }
                    return
                }}>
                    <button id='buttonP' onClick={buttonClickP} className='button_input'>P</button>
                    <button id='buttonB' onClick={buttonClickB} className='button_input'>B</button>
                    <button id='buttonT' onClick={buttonClickT} className='button_input'>T</button>
                    <button id='buttonDelete' onClick={buttonClickDelete} className='button_input'>Del</button>
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

            
        </div>
    )
}

export default TableShow

