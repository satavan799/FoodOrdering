import { StyleSheet,View,Text,Image } from 'react-native';
import Colors from '../../constants/Colors';
import { product } from '../../types';
export const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png';
type ProductListItemProps = {
    product: Product;
};
const ProductListItem= ({product}:ProductListItemProps) => {
  return (
    <View style={styles.container}>
      <Image 
      source={{ uri: product.image || defaultPizzaImage }}
      style={styles.image}
      resizeMode='contain'
      />

      <Text style={styles.title}>{product.name1}</Text>
      <Text style={styles.price}>${product.price}</Text>


    </View>
  );
}
export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    padding: 10,
    borderRadius:20,
    flex:1,
    maxWidth:'50%'
  },
  image: {
    width: '100%',
    aspectRatio: 1,
   
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight:'bold'
  },
  price:{
    color: Colors.light.tint,
    fontWeight:'bold',
  }
});
