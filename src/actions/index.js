export const sortproducts =(val) =>{

    return {
        type : "Sort_Products",
        payload : val
    }
}
export const getProducts =() =>{

    return {
        type : "Get_Products"
    }
}
export const wishListproducts =() =>{

    return {
        type : "WhishList_Products"
    }
}

export const addToWishList =() =>{

    return {
        type : "Add_ToWishList"
    }
}
export const getBagProducts =() =>{

    return {
        type : "GetBag_Products"
    }
}
export const addBagProducts =() =>{

    return {
        type : "AddBag_Products"
    }
}
export const searchByName =() =>{

    return {
        type : "SearchBy_Name"
    }
}
export const searchByCategory =() =>{

    return {
        type : "SearchBy_Category"
    }
}
export const AddCategory =() =>{

    return {
        type : "Add_Category"
    }
}