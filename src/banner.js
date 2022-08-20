import cyber from './images/cyber.png'

function banner(){
    return(
        <div className="img-container">
            <img src={cyber} alt="Cyber Monday" width='720px' />
        </div>
    )
}

export default banner