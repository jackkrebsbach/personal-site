import { useEffect, useRef, useState } from "react";
import styles from "./ImageComparator.module.scss";
import cn from "classnames";

let isMouseDown = false;

interface Props {
  topImage: string;
  bottomImage: string;
  vertical?: boolean;
  width: number;
  height: number;
  shadow?: boolean;
}

export const ImageComparator = ({
  topImage,
  bottomImage,
  vertical = false,
  width,
  height,
  shadow = false,
}: Props) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const sliderRef = useRef() as React.MutableRefObject<any>;

  useEffect(() => {
    // To force update of the component when the page is resized
    const resizeListener = () => {
      setSliderPosition((val) => val + 1);
    };
    window.addEventListener("resize", resizeListener);
    return () => window.removeEventListener("resize", resizeListener);
  }, []);

  useEffect(() => {
    if (sliderRef && sliderRef.current) {
      setSliderPosition(
        sliderRef && sliderRef.current ? sliderRef.current.clientHeight / 2 : 0
      );
    }
  }, [sliderRef]);

  return (
    <div
      ref={sliderRef}
      className={cn(styles.image__comparator, {
        [styles.shadow]: shadow,
      })}
      style={{ width, height }}
      onMouseLeave={() => {
        isMouseDown = false;
      }}
      onMouseMove={(e) => {
        e.preventDefault();
        if (isMouseDown) {
          const mousePos = vertical ? e.pageY : e.pageX;
          const offset = vertical
            ? sliderRef.current?.offsetTop
            : sliderRef.current?.offsetLeft;
          const maxValue = vertical
            ? sliderRef.current?.clientHeight
            : sliderRef.current?.clientWidth;
          const pos = Math.max(Math.min(mousePos - offset, maxValue), 0);
          setSliderPosition(pos);
        }
      }}
    >
      {sliderRef && sliderRef.current && (
        <>
          <div
            className={cn(styles.bottom__image, {
              [styles.horizontal]: !vertical,
            })}
            style={{
              backgroundImage: `url(${bottomImage})`,
              backgroundSize: vertical
                ? `auto ${sliderRef.current?.clientHeight}px`
                : `${sliderRef.current?.clientWidth}px auto`,
            }}
          ></div>
          <div
            className={cn(styles.top__image, {
              [styles.horizontal]: !vertical,
            })}
            style={{
              backgroundImage: `url(${topImage})`,
              height: vertical ? `${sliderPosition}px` : "100%",
              width: !vertical ? `${sliderPosition}px` : "100%",
              backgroundSize: vertical
                ? `auto ${sliderRef.current.clientHeight}px`
                : `${sliderRef.current.clientWidth}px auto`,
            }}
          ></div>
          <div
            className={cn(styles.slider, {
              [styles.horizontal]: !vertical,
            })}
            style={{
              top: vertical ? `${sliderPosition}px` : 0,
              left: !vertical ? `${sliderPosition}px` : 0,
            }}
          >
            <div className={styles.slider__bar}></div>
            <div className={styles.slider__icon__wrapper}>
              <div
                onMouseEnter={() => {
                  isMouseDown = true;
                }}
                onTouchEnd={(e) => e.preventDefault()}
                onTouchStart={(e) => e.preventDefault()}
                onTouchMove={(e) => {
                  e.preventDefault();
                  const mousePos = vertical
                    ? e.touches[0].pageY
                    : e.touches[0].pageX;
                  const offset = vertical
                    ? sliderRef.current?.offsetTop
                    : sliderRef.current?.offsetLeft;
                  const maxValue = vertical
                    ? sliderRef.current?.clientHeight
                    : sliderRef.current?.clientWidth;
                  const pos = Math.max(
                    Math.min(mousePos - offset, maxValue),
                    0
                  );
                  setSliderPosition(pos);
                }}
                className={styles.slider__icon}
              >
                <i className="fas fa-sort"></i>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
