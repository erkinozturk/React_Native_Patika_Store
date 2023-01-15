import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./ProductCard.style";

const ProductCard = ({ product }) => {
    return (
        <View style={styles.productCardContainer}>
            <Image style={styles.productImage} source={{ uri: product.imgURL }} />
            <View style={styles.productCardContainerInner}>
                <Text style={styles.productTitle}>{product.title}</Text>
                <Text style={styles.productPrice}>{product.price}</Text>
                {!product.inStock && <Text style={styles.productStock}>Stokta Yok</Text>}
            </View>
        </View>
    )
}

export default ProductCard;