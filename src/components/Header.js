import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title, onAdd, showAdd}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Done' : 'Add Task'} onClick={onAdd} />
    </header>  
  )
}

//when no property is passed to the component 
Header.defaultProps = {
    title:'Task Tracker'
}

//The type of the proporty is limited to string
Header.propTypes = {title:PropTypes.string}

export default Header;