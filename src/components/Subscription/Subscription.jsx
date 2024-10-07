import styles from "./Subscription.module.css";
import Button from "../Button/Button";
import Envelope from "../../../public/subscription/envelope.png";
import Image1 from "../../../public/subscription/image1.png";
import Image2 from "../../../public/subscription/image2.png";
import Image3 from "../../../public/subscription/image3.png";
import Image4 from "../../../public/subscription/image4.png";
import Image5 from "../../../public/subscription/image5.png";
import Image6 from "../../../public/subscription/image6.png";
import Image7 from "../../../public/subscription/image7.png";
import Image8 from "../../../public/subscription/image8.png";
import cn from "classnames";

function Subscription() {
  const imageList = [
    {
      image: Image1,
      alt: "Image1",
      class: "subscription-content__image1",
    },
    {
      image: Image2,
      alt: "Image2",
      class: "subscription-content__image2",
    },
    {
      image: Image3,
      alt: "Image3",
      class: "subscription-content__image3",
    },
    {
      image: Image4,
      alt: "Image4",
      class: "subscription-content__image4",
    },
    {
      image: Image5,
      alt: "Image5",
      class: "subscription-content__image5",
    },
    {
      image: Image6,
      alt: "Image6",
      class: "subscription-content__image6",
    },
    {
      image: Image7,
      alt: "Image7",
      class: "subscription-content__image7",
    },
    {
      image: Image8,
      alt: "Image8",
      class: "subscription-content__image8",
    },
  ];

  return (
    <div className={styles["subscription"]}>
      <div className={styles["subscription-content"]}>
        {imageList.map((item, index) => (
          <img
            key={index}
            src={item.image}
            alt={item.alt}
            className={cn(
              styles["subscription-content__image"],
              styles[item.class]
            )}
          />
        ))}

        <h2 className={styles["subscription__h2"]}>
          Subscribe For More Info and update from Hounter
        </h2>
        <div className={styles["subscription-content__input"]}>
          <img src={Envelope} />
          <input type="text" placeholder="Your email here" />
          <Button text="Subsribe Now" />
        </div>
      </div>
    </div>
  );
}
export default Subscription;
