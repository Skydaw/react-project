import PropTypes from 'prop-types'


const Header = ({title}) => {
    return (
        <>
            <h2>{title}</h2>
        </>
    )
}
// Header.defaultProps = {
//     title:'Welcome Home'
// }
Header.propTypes={
    // check si c'est un string et oblige de l'avoir
    title:PropTypes.string.isRequired
}


export default Header
