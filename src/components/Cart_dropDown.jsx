import React from 'react'

const Cart_dropDown = () => {
    return (
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle my_cart_toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Cart
            </button>
            <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
    )
}

export default Cart_dropDown
