import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import images from '../data/carousel/carouselImage'

const Carousel = () => {
  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        sliderBoxHeight={200}
        dotColor="#13274F"
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{
            borderRadius:6,
            width:'94%',
            objectFit:'contain'
            
            

        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
