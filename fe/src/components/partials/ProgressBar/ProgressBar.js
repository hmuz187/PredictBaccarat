import './style.scss'

const ProgressBar = () => {
    return (
        <div className='progressBar'>
            <div className="loader">
                <svg className="circular">
                    <circle className="path" cx="50" cy="50" r="20" fill="none"></circle>
                </svg>
            </div>
        </div>
    )
}

export default ProgressBar