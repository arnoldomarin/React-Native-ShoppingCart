import React from 'react'
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Icon, Header, Button, Input } from 'react-native-elements'

function Cart({cart, removeFromCart, navigateTo, getTotalSum, setQuantity}) {


    return (
        <>
        <Header
            backgroundColor={"#89AEB2"}
            leftComponent={<Text style={{backgroundColor: "#89AEB2", color: 'white', width: 100, fontWeight: 'bold', fontSize: 20,}}>Total cost: ${getTotalSum()}</Text>}
            centerComponent={{ text: 'Cart', style: { color: '#fff', fontSize: 50} }}
            rightComponent=
            {      
            <Button
            buttonStyle={{
                backgroundColor: "#89AEB2", 
              }}
                onPress={() => navigateTo('products')}
                icon={
                    <Icon
                    raised
                    name="home"
                    size={20}
                    color='black'
                    />
                }
            />
            }
        />
        <View>
            {cart.map((product, index) =>(
            <View 
                key={index} 
                style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 30}}>
                    <Image source={product.image} style={{ width: 300, height: 250, alignSelf: 'center'}}></Image>
                    <Text style={{backgroundColor: "#89AEB2", color: 'white', width: 300, textAlign: 'center', fontWeight: 'bold', fontSize: 20,}}>{product.name}</Text>
                    <Text style={{backgroundColor: "#89AEB2", color: 'white', width: 300, textAlign: 'center', fontWeight: 'bold', fontSize: 20,}}>${product.cost}</Text>
                    <Text style={{backgroundColor: "#89AEB2", color: 'white', width: 300, textAlign: 'center', fontWeight: 'bold', fontSize: 20,}}>Quantity: {product.quantity}</Text>
                    <TextInput
                    style={{backgroundColor: "#89AEB2", color: 'white', width: 300, textAlign: 'center', fontWeight: 'bold', fontSize: 20,}}
                     onSubmitEditing={(e)=> setQuantity(product, parseInt(e.target.value))} keyboardType = 'number-pad' placeholder="Enter desired quantity"></TextInput>
                    <Button 
                        raised
                        buttonStyle={{
                        backgroundColor: "#89AEB2",
                        width:300
                        }}                    
                        onPress={() => removeFromCart(product)}
                        title="Remove"
                        icon={
                            <Icon
                            name="delete"
                            size={30}
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

export default Cart