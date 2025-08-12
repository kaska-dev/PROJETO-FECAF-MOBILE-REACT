import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  styleInput: {
    height: 52,
    width: "90%",
    borderWidth: 1,
    borderColor: "#aaaaaaff",
    borderRadius: 8,
    paddingLeft: 12,
  },
  
  titleInput: {
    textAlign: 'left',
    width: '90%',
    marginBottom: 5,
    marginTop: 10,
    fontWeight: 600
  },

  styleGroup: {
  borderWidth: 1,
  borderRadius: 20,
  borderColor: "#aaaaaaff",
  width: "87%",
  height: 340,
  backgroundColor: "white",
  justifyContent: "center",
  alignItems: "center",
  position: 'absolute',
  top: 280, // Ajuste conforme necessário para a sobreposição
  zIndex: 9999, // Garante que fique acima
  },

  styleTitle: {
    color: "white",
    fontSize: 30,
    fontWeight: 600, 
  },

  styleParagraf: {
    color: "white",
    fontSize: 15,
    marginTop: 10,
  },
  
  divUp: {
    height: 400,
    backgroundColor: '#2667E8',
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  errorLine: {
    color: 'red',
    width: '90%',
  },
  iconError: {
    margin: 10,
    color: 'red',
    fontSize: 15
  }
});

