document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-product-image');

    thumbnails.forEach( thumbnail => {
        thumbnail.addEventListener('click', function() {

            thumbnails.forEach(t => t.classList.remove('active'));

            this.classList.add('active');

            const newImageSrc = this.getAttribute('data-image')
            mainImage.src = newImageSrc;
        });
    });
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            colorOptions.forEach(o => o.classList.remove('active'));

            this.classList.add('active');

            const selectedColor = this.getAttribute('data-color');
            console.log('Selected color:', selectedColor)
        });
    });
    const minusBtn = document.querySelector('.quantity-btn.minus');
    const plusBtn = document.querySelector('.quantity-btn.plus');
    const quantityInput = document.querySelector('.quantity-input');

    minusBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if(currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });
    plusBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if(currentValue < 10) {
            quantityInput.value = currentValue + 1;
        }
    });
    quantityInput.addEventListener('change', function() {
        let value = parseInt(this.value);
        if(isNaN(value)) {
            this.value = 1;
        } else if(value < 1) {
            this.value = 1;
        } else if(value > 10) {
            this.value = 10;
        }
    });

    //Add to cart functionality
    const addToCartBtn = document.querySelector('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    const notification = document.querySelector('.notification');

    addToCartBtn.addEventListener('click', function() {
        const productName = document.querySelector('.product-details h1').textContent;
        const quantity = parseInt(quantityInput.value);
        const price = parseFloat(document.querySelector('.current-price').textContent.replace('$', ''));
        const color = document.querySelector('.color-option.active').getAttribute('data-color');

        const cartItem = {
            name: productName,
            quantity: quantity,
            price: price,
            color: color,
            total: (quantity * price).toFixed(2)
        }

        console.log('Added to cart', cartItem);

        let currentCount = parseInt(cartCount.textContent);
        cartCount.textContent = currentCount + quantity;

        notification.classList.add('show');

        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);

    });

    const buyNowBtn = document.querySelector('.buy-now');

    buyNowBtn.addEventListener('click', function() {
        alert('This would redirect to checkout in a real application');
    })

    const cartIcon = document.querySelector('.cart-icon');

    cartIcon.addEventListener('click', function() {
        alert('This would open a cart modal or redirect to cart page');
    });

});