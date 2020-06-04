import React from 'react';

export default function ProductItem(props){
  const  {product}=props;

    return (
        <div>
            <div className="card" style={{width: '13rem;'}}>
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body ">
                    <h5 className="card-title" style={{textAlign: "center"}}>{product.name}</h5>
                    <p className="card-text" style={{textAlign: "center"}}>${product.price}</p>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <a href={"/products/" + product.id} className="btn Product-btn d-block" >Add to chart</a>
                </div>
            </div> 
        </div>
    
    )
}