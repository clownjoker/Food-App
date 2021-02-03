import * as React from 'react';
import {Text, View,StyleSheet, Image,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors';
import { FlatList } from 'react-native-gesture-handler';



export default Home = ({navigation}) =>{
    const renderItemCategories =(({item})=>{
        return(
            <View style={[styles.categoriesItemWrapper,{
                backgroundColor:item.selected ? colors.primary:colors.white
                // marginRight:item.id == 1 ? 10 :0
            }]}>
                <Image source={item.image} style={styles.categoriesItemImage}/>
                <Text style={styles.categoriesItemTitle}>{item.title}</Text>
                <View style={[styles.categoriesSelectWrapper,{
                    backgroundColor:item.selected ? colors.white: colors.secondary
                }]}>
                    <Feather 
                        name="chevron-right" 
                        size={10} 
                        style={styles.categoriySelectIcon}
                        color={item.selected ? colors.black : colors.white}
                    />
                </View>
            </View>
        )
    })
    return(
        <View style={styles.container}>
            <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>
                {/* header */}
                <SafeAreaView>
                    <View style={styles.headerWrapper}>
                        <Image source={require('../assets/images/profile.png')} style={styles.profileImage}/>
                        <Feather name='menu' size={24} color={colors.textDark}/>
                    </View>
                </SafeAreaView>
                {/* Title */}
                <View style={styles.titlesWrapper}>
                    <Text style={styles.titlesSubTitle}>Food</Text>
                    <Text style={styles.titlesTitle}>Delivery</Text>
                </View>
                {/* Search */}
                <View style={styles.searchWrapper}>
                    <Feather name='search' size={20} color={colors.textDark}/>
                    <View style={styles.search}>
                        <Text style={styles.searchText}>Search</Text>
                    </View>
                </View>
                {/* categories */}
                <View style={styles.categoriesWrapper}>
                    <Text style={styles.categoriesTitle}>categories</Text>
                    <View style={styles.categoriesListWrapper}>
                        <FlatList
                            data={categoriesData} 
                            renderItem={renderItemCategories}
                            keyExtractor={item =>item.id}
                            horizontal={true}
                        />
                    </View>
                </View>
                {/* Popular */}
                <View style={styles.popularWrapper}>
                    <Text style={styles.popularTitle}>Popular</Text>
                    {popularData.map(item =>(
                        <TouchableOpacity key={item.id} onPress={()=>navigation.navigate('details',{item:item})}>
                            <View 
                                
                                style={[styles.popularCardWrapper,{
                                marginTop: item.id == 1 ? 7 : 15
                            }]}>
                                <View>
                                    <View>
                                        <View>
                                            <View style={styles.popularTopWrapper}>
                                                <MaterialCommunityIcons name="crown" size={12} color={colors.primary} />
                                                <Text style={styles.popularTopText}>top of the week</Text>
                                            </View>
                                        </View>
                                        <View style={styles.popularTitlesWrapper}>
                                            <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                                            <Text style={styles.popularTitlesWeight}>Weight {item.weight}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.popularCardBottom}>
                                        <View style={styles.addPizzaBottom}>
                                            <Feather name="plus" size={10} color={colors.textDark}/>
                                        </View>
                                        <View style={styles.ratingWrapper}>
                                            <MaterialCommunityIcons name="star" size={12} color={colors.textDark} />
                                            <Text style={styles.ratting}>{item.rating}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.popularCardRight}>
                                    <Image source={item.image} style={styles.popularCardImage}/>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
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
        paddingHorizontal:20,
        paddingTop:10,
        alignItems:'center'
    },
    profileImage:{
        width:40,
        height:40,
        borderRadius:40
    },
    titlesWrapper:{
        marginTop:10,
        paddingHorizontal:20
    },
    titlesSubTitle:{
        fontFamily:'Montserrat-Regular',
        fontSize:16,
        color:colors.textDark
    },
    titlesTitle:{
        fontFamily:'Montserrat-Bold',
        fontSize:32,
        color:colors.textDark
    },
    searchWrapper:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        marginTop:8
    },
    search:{
        flex:1,
        marginLeft:10,
        borderBottomColor:colors.textLight,
        borderBottomWidth:2
    },
    searchText:{
        fontFamily:'Montserrat-SemiBold',
        fontSize:14,
        marginBottom:5,
        color:colors.textLight
    },
    categoriesWrapper:{
        marginTop:10
    },
    categoriesTitle:{
        fontFamily:'Montserrat-SemiBold',
        fontSize:16,
        paddingHorizontal:20
    },
    categoriesListWrapper:{
        paddingTop:10,
        paddingBottom:10
    },
    categoriesItemWrapper:{
        backgroundColor:'#F5CA48',
        marginLeft:20,
        borderRadius:20,
        shadowColor:colors.black,
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity: 0.05,
        shadowRadius:10,
        elevation:1
    },
    categoriesItemImage:{
        width:60,
        height:60,
        marginTop:15,
        alignSelf:'center',
        marginHorizontal:20
    },
    categoriesItemTitle:{
        textAlign:'center',
        fontFamily:'Montserrat-Medium',
        fontSize:14,
        marginTop:8
    },
    categoriesSelectWrapper:{
        alignSelf:'center',
        justifyContent:'center',
        marginTop:10,
        width:26,
        height:26,
        borderRadius:26,
        marginBottom:20
    },
    categoriySelectIcon:{
        alignSelf:'center'
    },
    popularWrapper:{
        paddingHorizontal:20,
    },
    popularTitle:{
        fontFamily:'Montserrat-Bold',
        fontSize:16,
    },
    popularCardWrapper:{
        backgroundColor:colors.white,
        borderRadius:25,
        paddingTop:20,
        paddingLeft:20,
        flexDirection:'row',
        overflow:'hidden',
        shadowColor:colors.black,
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity: 0.05,
        shadowRadius:10,
        elevation:1
    },
    popularTopWrapper:{
        flexDirection:'row',
        alignItems:'center'
    },
    popularTopText:{
        marginLeft:5,
        fontFamily:'Montserrat-SemiBold',
        fontSize:14,
    },
    popularTitlesWrapper:{
        marginTop:10,

    },
    popularTitlesTitle:{
        fontFamily:'Montserrat-SemiBold',
        fontSize:14,
        color:colors.textDark
    },
    popularTitlesWeight:{
        fontFamily:'Montserrat-Medium',
        fontSize:12,
        color:colors.textLight,
        marginTop:4
    },
    popularCardBottom:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
        marginLeft:-20
    },
    addPizzaBottom:{
        backgroundColor:colors.primary,
        paddingHorizontal:30,
        paddingVertical:19,
        borderTopRightRadius:25,
        borderBottomLeftRadius:25
    },
    ratingWrapper:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:20
    },
    ratting:{
        fontFamily:'Montserrat-SemiBold',
        fontSize:12,
        color:colors.textDark,
        marginLeft:3
    },
    popularCardRight:{
        marginLeft:15
    },
    popularCardImage:{
        width:180,
        height:125,
        resizeMode:'contain'
    },
})