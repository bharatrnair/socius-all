import './Search.css';
import Icon from './../components/Assets/leftIcon.svg';
import Close from './../components/Assets/closeBar.svg';

const Search = () => {
  return (
    <div className="main-container">

        <div className="top-section">
            <div className="back-button">
                <img src={Icon} alt="" />
            </div>
            <div className="s-bar">
                <input className='search-bar' type="text" />
                
            </div>
        </div>

        <div className="heading">
            <h2>Recent</h2>
        </div>

        <div className="Bottom-section">
           
            <div className="bottom-part"> 
            <div className="dp-part"> </div>    
            <div className="name-part">
            <h4>User 1</h4>
            </div>
            <div className='close-icon'>
            <img className='close' src={Close} alt="" />
            </div>
            </div>
              
            <div className="bottom-part"> 
            <div className="dp-part"> </div>    
            <div className="name-part">
            <h4>User 2</h4>
            </div>
            <div className='close-icon'>
            <img className='close' src={Close} alt="" />
            </div>
            </div>
            
            <div className="bottom-part"> 
            <div className="dp-part"> </div>    
            <div className="name-part">
            <h4>User 3</h4>
            </div>
            <div className='close-icon'>
            <img className='close' src={Close} alt="" />
            </div>
            </div>
            
            <div className="bottom-part"> 
            <div className="dp-part"> </div>    
            <div className="name-part">
            <h4>User 4</h4>
            </div>
            <div className='close-icon'>
            <img className='close' src={Close} alt="" />
            </div>
            </div>
            
            <div className="bottom-part"> 
            <div className="dp-part"> </div>    
            <div className="name-part">
            <h4>User 5</h4>
            </div>
            <div className='close-icon'>
            <img className='close' src={Close} alt="" />
            </div>
            </div>

            <div className="bottom-part"> 
            <div className="dp-part"> </div>    
            <div className="name-part">
            <h4>User 6</h4>
            </div>
            <div className='close-icon'>
            <img className='close' src={Close} alt="" />
            </div>
            </div>

            <div className="bottom-part"> 
            <div className="dp-part"> </div>
            <div className="name-part">
            <h4>User 7</h4>
            </div>
            <div className='close-icon'>
            <img className='close' src={Close} alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Search