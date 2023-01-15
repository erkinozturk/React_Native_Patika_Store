import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    productCardContainer: {
        backgroundColor: "white",
        borderRadius: 10,
        flex: 1,
        margin: 5,
        alignItems: "center",
    },
    productCardContainerInner: {
        padding: 10
    },
    productImage: {
        width: 150,
        height: 150,
        resizeMode: "contain",
        marginTop: 10,
    },
    productTitle: {
        fontWeight: "bold",
        fontSize: 18,
    },
    productPrice: {
        margin: 3,
    },
    productStock: {
        margin: 3,
        color: "red",
        fontWeight: "bold",
    }
});