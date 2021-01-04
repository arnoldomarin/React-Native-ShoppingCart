import React, {useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon, Header, Button } from 'react-native-elements'


function Products({addToCart, navigateTo, cart, getCartTotal}) {

    // List of products 
  const [products] = useState ([
    {
      name: 'Adidas Futurecraft 4D',
      cost: 300.00,
      image: require("./Images/futurecraft.jpg")
    },
    {
      name: 'Adidas ZNE Hoodie',
      cost: 140.00,
      image: require("./Images/adidaszne.jpg")
    },
  ]);

    return (
        <>
        <Header
            backgroundColor={"#89AEB2"}
            placement="left"
            centerComponent={{ text: 'Products', style: { color: '#fff', fontSize: 50} }}
            rightComponent=
            {      
            <Button
            buttonStyle={{
              backgroundColor: "#89AEB2", 
            }}
                onPress={() => navigateTo('cart')}
                icon={
                    <Icon
                    raised
                    name="shopping-cart"
                    size={20}
                    color='black'
                    />
                }
                title={<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>{getCartTotal()}</Text>}
            />
            }
        />
        <View>
        {products.map((product, index) =>(
          <View 
            key={index} 
            style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 30}}>
            <Image source={product.image} style={{ width: 300, height: 250, alignSelf: 'center'}}></Image>
            <Text style={{backgroundColor: "#89AEB2", color: 'white', width: 300, textAlign: 'center', fontWeight: 'bold', fontSize: 20,}}>{product.name}</Text>
            <Text style={{backgroundColor: "#89AEB2", color: 'white', width: 300, textAlign: 'center', fontWeight: 'bold', fontSize: 20,}}>${product.cost}</Text>
            <Button 
            raised
            buttonStyle={{
              backgroundColor: "#89AEB2",
              width:300
            }}
            onPress={() => addToCart(product)}
            title="Add to cart"
            icon={
                <Icon
                name="add-circle"
                size={40}
                color='white'
                />
            }
            iconRight
            />
          </View>
        ))}
        </View>
      </>
    )
}



export default Products