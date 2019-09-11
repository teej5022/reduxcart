class Product {
    constructor(id, name, price, description, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
    }
}

export const ProductArray = [
    new Product(
        1, "Shoe", 19.99, "This is a shoe", "http://source.unsplash.com/random"
    ),
    new Product(
        2, "Tshirt", 9.99, "This is a tshirt", "http://source.unsplash.com/random"
    ),
    new Product(
        3, "Pants", 29.99, "This is pants", "http://source.unsplash.com/random"
    ),
]