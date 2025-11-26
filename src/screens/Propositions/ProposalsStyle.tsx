import { StyleSheet } from "react-native";
import { TEXT_STANDARD } from "../../utils/utilitaires";

const ProposalsStyle = StyleSheet.create({
    container: {
        // height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    marginBottom20:{
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop:40,
    },
    title: {
        fontSize: TEXT_STANDARD.large,
        fontWeight: "bold",
    }
});

export default ProposalsStyle;