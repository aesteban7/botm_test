import { StyleSheet } from 'react-native';

// creates styles for varying text/containers/buttons/inputs on screens etc.
export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006400',
    alignContent:'center'
  },
  giantText: {
    fontSize: 38,
    lineHeight: 30,
    color: '#006400',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 1,
    paddingTop: 0,
  },
  normalText: {
    fontSize: 16,
    color: '#000000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 9,
    margin: 12,
    width: 200,
    backgroundColor: 'white',
  },
  input2: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 9,
    margin: 12,
    width: 100,
    backgroundColor: 'white',
    maxWidth:200
    
  },
  button: { 
    backgroundColor: '#446128',
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 12,
    color: 'white',
    fontSize: 19,
    color: 'white',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
    textDecorationColor: 'green',
    height: 48,
    width: 260,
  },

  boldtext: {
    fontweight: 'bold',
  },
  border: {
    borderRadius: 5,
    borderColor: 'green',
    borderWidth: 10,
  },
  content: {
    //padding: 150,
    paddingTop: 0,
    alignContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  content2: {
    paddingTop: 40,
    paddingBottom: 0,
    alignContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  scrollView: {
    // height: '20%',
    width: '80%',
    margin: 20,
    alignSelf: 'center',
    paddingTop: 0,
    alignContent: 'center',
    alignContent: 'center',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop:300,
    paddingTop:10,
    margintop:120,
    alignContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  contentContainer2: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:10,
    margintop:300,
    alignContent: 'center',
    alignSelf: 'center',
  },
  contentContainer3: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop:300,
    paddingTop:10,
    margintop:120,
    maxWidth: '95%',
    flexWrap: 'wrap',
    marginLeft: 30,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
  greyText: {
    fontSize: 16,
    color: 'grey',
  },
  boldText: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  },
  icon: {
    position: 'absolute',
    right: 5,
    color:'white',
  }
});