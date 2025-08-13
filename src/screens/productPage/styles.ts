import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: 150,
    height: 200,
    backgroundColor: "#fff",
    margin: 30
  },

tabsRow: { 
  flexDirection: 'row',
  borderBottomWidth: 1,
  borderBottomColor: '#E5E7EB' 
},
tab: { 
  flex: 1,
  alignItems: 'center',
  paddingVertical: 12 
  },
tabActive: {
  borderBottomWidth: 3,
  borderBottomColor: '#6b4343ff' 
},
tabLabel: { 
  fontSize: 16, 
  fontWeight: '700' 
},
columnWrap: { 
  justifyContent: 'space-between' 
},
cell: { 
   alignItems: 'center'
},

list: {
    padding: 16,
    gap: 12,
  
}})