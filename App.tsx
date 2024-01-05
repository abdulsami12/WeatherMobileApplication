import axios from "axios";
import { useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/dist/Ionicons';
function App() {

  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update the time every second

    return () => {
      clearInterval(interval);
    };
  }, []);




  const formattedDay: string[] = currentDate.toLocaleDateString('en-US', { weekday: 'long' }).split(',');

  // axios({
  //   method: 'get',
  //   url: 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=cddb792ae2c29f173f1d06e0bb7d9a2f&q=karachi',
  //   responseType: 'stream'
  // })
  //   .then(function (response) {
  //     console.log(response.data)
  //   });
  return (

    <>

      <ImageBackground
        source={{ uri: 'https://avatars.mds.yandex.net/i?id=4168c772c2233cfe967ed11c8db482f88a3e2e8d-8497055-images-thumbs&n=13' }} // Provide the image path
        resizeMode="cover"
        style={{ flex: 1, }}
      >
        <View style={{ justifyContent: 'center', flexDirection: 'row', position: 'absolute', top: 10, left: 0, right: 0 }}>

          <View style={{ borderStyle: "solid", borderWidth: 2, borderColor: '#281151', flexDirection: 'row', width: '80%', borderRadius: 30, paddingLeft: 25, backgroundColor: '#2b2156' }}>
            <View style={{ width: '85%' }}>

              <TextInput placeholder="Search" />
            </View>
            <View style={{ width: '15%', justifyContent: 'center' }}>
              <Icon name="search" size={20} color="white" />
            </View>
          </View>
        </View>




        <View style={{ position: 'absolute', left: 10, top: '20%', width: 150, height: 200 }}>
          <View style={[styles.bgsett,{  height: 200,borderRadius:25 }]}>

            <View style={{ justifyContent: 'center', flexDirection: "row",marginTop:10 }}>
              <Image
                source={require('./Image/Sun.png')} // Provide the image path
                style={{ width: 60, height: 80 }}
              />
            </View>
            <View>
              <Text style={{ color: 'white', textAlign: 'center', fontSize: 10 }}>
                Karachi
              </Text>
              <Text style={{ color: 'white', textAlign: 'center', fontSize: 29, fontWeight: 'bold' }}>
                25{'\u00B0'}C
              </Text>


              <Text style={{ color: 'white', textAlign: 'center', marginTop: 5, fontSize: 11 }}>{formattedDay[0]}
              </Text>
              <Text style={{ color: 'white', textAlign: 'center', fontSize: 11, marginLeft: -5 }}>{formattedDay[1]}
              </Text>


            </View>
          </View>
        </View>









        <View style={{position:'absolute' , bottom:'5%', left:0,right:0 ,justifyContent: 'center', flexDirection: 'row'}}>
          <View style={{borderStyle:'solid',borderWidth:2 , borderColor:'black' , width:'80%', height:80}}>

<View style={{flexDirection:'row',justifyContent:'space-evenly'}}>

<View  >
<Text style={{fontSize:24}}>
  78%
</Text>
<Text>
 Humidity
</Text>
</View>

<View>

<Text>
11km
</Text>
<Text>
  Visibility
</Text>
</View>


<View>
<Text>1120</Text>
<Text>
Wind pressure
</Text>
</View>
</View>
          </View>

        </View>
      </ImageBackground>
    </>
  )
}

const styles = StyleSheet.create({
bgsett:{
  backgroundColor: 'rgba(255, 255, 255, 0.2)'
}
})



export default App

