/* eslint-disable prettier/prettier */
import React from "react";
import styles from './PhotoCarousel.module.scss'
import { Carousel } from "antd";
import ItemImage1 from "@assets/img/ad-image1.png";
import ItemImage2 from "@assets/img/ad-image2.png";
import ItemImage3 from "@assets/img/ad-image3.png";
import ItemImage4 from "@assets/img/market.png";

type PhotoCarouselProps = {
    images?:  string[]
};

const PhotoCarousel = (props:PhotoCarouselProps) => {

    const imagesDefault = [
        ItemImage1,
        ItemImage2,
        ItemImage3,
        ItemImage4

    ];
    const images = props.images ?props.images: imagesDefault

    if (images.length <= 1)
        return (
            <div className={styles.singleProtoWrapper}>
                <img
                    src={images[0]}
                    alt="thumbnail"
                    width={114}
                    height={66}
                    className={styles.singleProto}/>
            </div>
        );

    return (
        <Carousel
            slidesToShow={3}
            swipeToSlide
            infinite={false}
            className={styles.photoCarousel}>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt="thumbnail"
                    width={114}
                    height={66}
                />
            ))}
        </Carousel>
    );
};

export default PhotoCarousel;