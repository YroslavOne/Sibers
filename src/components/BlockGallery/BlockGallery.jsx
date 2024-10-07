import styles from "./BlockGallery.module.css";
import DescriptionGallery from "../DescriptionGallery/DescriptionGallery";
import Gallery from "../Gallery/Gallery";

function BlockGallery() {
  return (
    <div className={styles["block-gallery"]}>
      <DescriptionGallery />
      <Gallery />
    </div>
  );
}
export default BlockGallery;
