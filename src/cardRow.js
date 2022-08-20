import laptop from './images/laptop.jpg'
import whiteBag from './images/white-bag.png'

function cards(){
    return(
        <div class="cards-container">
            <div class="card">
                <div class="card-header">
                    <img src={laptop} alt="Laptop" width="250px" />
                </div>
                <div class="card-body">
                    <strong>Nome Produto</strong><br />
                    Lorem Ipsum dolor sit amet Vasco da Gama meu primeiro amigo s2 Lorem Ipsum
                </div>
                <div class="card-footer">
                    <span id="value">$ 500,00</span>
                    <a href="#" className="buy-btn"><img src={whiteBag} alt='Buy' width="20px" />BUY</a>
                </div>
            </div>
        </div>
    )
}

export default cards