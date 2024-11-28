import React, { useRef, useMemo } from "react";
import styles from './PhotoCarousel.module.scss';
import { Carousel, Button } from "antd";
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import ItemImage1 from "@assets/img/ad-image1.png";
import ItemImage2 from "@assets/img/ad-image2.png";
import ItemImage3 from "@assets/img/ad-image3.png";
import ItemImage4 from "@assets/img/market.png";

type PhotoCarouselProps = {
    images?: string[];
};

const PhotoCarousel = React.memo(({ images }: PhotoCarouselProps) => {
    const carouselRef = useRef(null);
    const onChange = (current: number) => {
        console.log('Current slide:', current);
    };

    const imagesDefault = [
        ItemImage1,
        ItemImage2,
        ItemImage3,
        ItemImage4
    ];

    const imagesToDisplay = useMemo(() => images ? images : imagesDefault, [images]);

    if (imagesToDisplay.length <= 1) {
        return (
            <div className={styles.singleProtoWrapper}>
                <img
                    src={imagesToDisplay[0]}
                    alt="thumbnail"
                    width={114}
                    height={66}
                    className={styles.singleProto}
                />
            </div>
        );
    }

    const prevArrow = (
        <Button icon={<CaretLeftOutlined style={{ color: 'white', fontSize: '25px' }} />} />
    );
    const nextArrow = (
        <Button icon={<CaretRightOutlined style={{ color: 'white', fontSize: '25px' }} />} />
    );

    return (
        <Carousel
            ref={carouselRef}
            afterChange={onChange}
            dots={false}
            arrows
            prevArrow={prevArrow}
            nextArrow={nextArrow}
            slidesToShow={3}
            swipeToSlide
            infinite={false}
            className={styles.photoCarousel}
        >
            {imagesToDisplay.map((image, index) => (
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
});

export default PhotoCarousel;