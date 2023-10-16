const products= [
    {
        id: "First product",
        description: "Key-board",
        price: 50.89,
    },
    {
        id: "second product",
        description: "screen",
        price: 100.9,
    },
];

const getAllProducts=()=>{
    return products;
};

module.exports={
    getAllProducts
}