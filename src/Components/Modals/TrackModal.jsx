import React from "react";
import styles from "./trackmodal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTruck } from "@fortawesome/free-solid-svg-icons";
import img from "../../assets/images/user.png";
import { useState } from "react";
import MapModal from "./MapModal";
import { motion } from "framer-motion";

const motionVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1.5 },
  },
};

const TrackModal = ({ show, closeModal }) => {
  const [maps, setMaps] = useState(false);

  console.log(show, "track");
  if (!show) {
    return null;
  }
  return (
    <>
      {!maps ? (
        <div className={styles.maincontainer}>
          <motion.div
            className={styles.innercont}
            onClick={() => {
              setMaps(true);
            }}
            variants={motionVariant}
            initial="hidden"
            animate="visible"
            id="trackcont"
          >
            <div className={styles.top} id="midwords">
              <h1>Tracking Vehicle</h1>
              <p>Please hold on. Locating Vehicles in IPI Network</p>
            </div>
            <div className={styles.middle}>
              <div className={styles.midleft} id="midwords">
                <img src={img} alt="" />
                <div>
                  <h1>Johnson C</h1>
                  <p>Transporter</p>
                </div>
              </div>
              <div className={styles.circles}>
                <div className={styles.circle1}>
                  <div className={styles.circle2}>
                    <div className={styles.circle3}>
                      <FontAwesomeIcon
                        icon={faSearch}
                        id="midwords"
                        size="2x"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.truck}>
                <FontAwesomeIcon
                  icon={faTruck}
                  flip="horizontal"
                  size="2x"
                  className={styles.truckk}
                  id="truck"
                />
                <div>
                  <h1>ET-272-KJA</h1>
                  <p>Toyota Highlander 2004</p>
                </div>
              </div>
              <div className={styles.words}>
                <h1>Lagos</h1>
                <p>Start Location</p>
              </div>
              <div className={styles.words}>
                <h1>Ikeja</h1>
                <p>Destination</p>
              </div>
              <div className={styles.words}>
                <h1>In Transit</h1>
                <p>Status</p>
              </div>
            </div>
          </motion.div>
        </div>
      ) : (
        <MapModal
          show={maps}
          closeMaps={() => setMaps(false)}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default TrackModal;
