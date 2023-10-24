import './style.scss'
import { Link, useNavigate } from 'react-router-dom'


import icons from '../../../utils/icon/reactIcon'
import { link } from '../../../routes/link'

const ButtonNavigate = () => {
    const navigate = useNavigate()
    const { BiArrowBack, RiHomeLine, BiSolidDashboard } = icons
    return (
        <div className='buttonNavigate'>
            <Link onClick={() => navigate(-1)} alt='home'><BiArrowBack size={24} aria-placeholder='back'/></Link>
            <Link to={link.CLIENT_DASHBOARD}><BiSolidDashboard size={24} aria-placeholder='dashboard'/></Link>
            <Link to={link.HOME} alt='home'><RiHomeLine size={24} aria-placeholder='home'/></Link>
        </div>
    )
}
export default ButtonNavigate