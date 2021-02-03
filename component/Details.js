import React from 'react';
import {Text,View,StyleSheet, SafeAreaView,TouchableOpacity,Image,FlatList, Alert} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';


export default Details =({route,navigation})=>{
    const {item} = route.params;
    const renderIngredientsItem = ({item}) =>{
        return(
            <View style={[styles.ingredientsItemWrapper,{marginLeft:item.id === '1' ? 15 : 0}]}>
                <Image source={item.image} style={styles.ingredientsImage}/>
            </View>
        )
    }
    return(
        <View style={styles.container}>
            {/* Header */}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={()=> navigation.goBack()}>
                        <View style={styles.headerLeft}>
                            <Feather name="chevron-left" size={12} color={colors.textDark}/>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.headerRight}>
                        <MaterialCommunityIcons name="star" size={12} color={colors.white}/>
                    </View>
                </View>
            </SafeAreaView>
            {/* Title */}
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
            {/* Price */}
            <View style={styles.priceWrapper}>
                <Text style={styles.priceText}>${item.price}</Text>
            </View>
            {/* Price Info */}
            <View style={styles.infoWrapper}>
                <View style={styles.infoLeftWrapper}>
                    <View style={styles.infoItemWrapper}>
                        <Text style={styles.infoItemTitle}>Size</Text>
                        <Text style={styles.infoItemText}>{item.sizeName}{item.sizeNumber}"</Text>
                    </View>

                    <View style={styles.infoItemWrapper}>
                        <Text style={styles.infoItemTitle}>Curst</Text>
                        <Text style={styles.infoItemText}>{item.crust}</Text>
                    </View>

                    <View style={styles.infoItemWrapper}>
                        <Text style={styles.infoItemTitle}>Delivery in</Text>
                        <Text style={styles.infoItemText}>{item.deliveryTime}min</Text>
                    </View>
                </View>
                <View>
                    <Image source={item.image} style={styles.itemImage}/>
                </View>
            </View>
            {/* Ingredients */}
            <View style={styles.ingredientsWrapper}>
                <Text style={styles.ingredientsTitle}>Ingredients</Text>
                <View style={styles.ingredientsListWrapper}>
                    <FlatList
                        data={item.ingredients} 
                        renderItem={renderIngredientsItem}
                        keyExtractor={item =>item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
            {/* place an order */}
            <TouchableOpacity onPress={()=>alert('Your order has been placed')}>
                <View style={styles.orderWrapper}>
                    <Text style={styles.orderText}>
                        Place an order
                    </Text>
                    <Feather name='chevron-right' size={18} color={colors.black}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    headerWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
        paddingTop:10
    },
    headerLeft:{
        borderColor:colors.textLight,
        borderWidth:2,
        padding:12,
        borderRadius:10 
    },
    headerRight:{
        backgroundColor:colors.primary,
        padding:12,
        borderRadius:10,
        borderColor:colors.primary,
        borderWidth:2,
    },
    titleWrapper:{
        paddingHorizontal:20,
        marginTop:5
    },
    title:{
        fontFamily:'Montserrat-Bold',
        fontSize:32,
        color:colors.textDark,
        width:'60%'
    },
    priceWrapper:{
        marginTop:5,
        paddingHorizontal:20
    },
    priceText:{
        color:colors.price,
        fontFamily:'Montserrat-Bold',
        fontSize:30,
    },
    infoWrapper:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    infoLeftWrapper:{
        paddingLeft:20,

    },
    infoItemWrapper:{
        marginBottom:15
    },
    infoItemTitle:{
        fontFamily:'Montserrat-Medium',
        fontSize:14,
        color:colors.textLight
    },
    infoItemText:{
        fontFamily:'Montserrat-Bold',
        fontSize:16,
        color:colors.textDark
    },
    itemImage:{
        resizeMode:'contain',
        marginLeft:35
    },
    ingredientsWrapper:{
        marginTop:10
    },
    ingredientsTitle:{
        paddingHorizontal:20,
        fontFamily:'Montserrat-Bold',
        fontSize:16,
        color:colors.textDark
    },
    ingredientsListWrapper:{
        paddingVertical:20
    },
    ingredientsItemWrapper:{
        backgroundColor:colors.white,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:10,
        marginRight:15,
        borderRadius:15,
        shadowColor:colors.black,
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity: 0.05,
        shadowRadius:10,
        elevation:2
    },
    ingredientsImage:{
        resizeMode:'contain'
    },
    orderWrapper:{
        marginTop:5,
        marginHorizontal:20,
        backgroundColor: colors.primary,
        borderRadius:50,
        paddingVertical:15,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    orderText:{
        fontFamily:'Montserrat-Bold',
        fontSize:14,
        marginRight:10
    }
})