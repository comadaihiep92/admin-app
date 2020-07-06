import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonImg,
  IonText,
  IonList,
  IonItem,
  IonToolbar,
  IonAlert,
  IonLabel,
  IonRouterLink,
  IonButton,
} from "@ionic/react";
import React from "react";
import "./Home.scss";

import iconPicture from "../images/icon-mypicture.png";
import iconMarketing from "../images/icon-marketing.png";
import iconSchool from "../images/icon-document.png";
import iconInfoChild from "../images/icon-infochild.png";
import iconAppointment from "../images/icon-appointment.png";
import iconNotification from "../images/icon-notification.png";
import iconMyprofile from "../images/icon-myprofile.png";
import iconMymessage from "../images/icon-mymessage.png";
import iconMinigroup from "../images/icon-minigroup.png";
import iconDotBlue from "../images/icon-dot-blue.png";
import iconSlept from "../images/icon-slept.png";
import iconCreatenew from "../images/icon-newuser.png";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="home">
          <IonHeader className="ion-no-border home__header">
            <IonToolbar className="home__toolbar">
              <IonTitle className="ion-text-center home__title-header">
                Home
              </IonTitle>
              <IonList className="home__noti">
                <IonRouterLink href="/notifications">
                  <IonImg
                    className="icon icon--noti"
                    src={iconNotification}
                    alt=""
                  />
                  <IonLabel className="home__label">1</IonLabel>
                </IonRouterLink>
              </IonList>
              <IonButton
                className="btn btn--search ion-no-padding"
                slot="end"
                // onClick={() => setShowPopover(true)}
              >
                <IonImg
                  className="icon icon--popover"
                  src={iconDotBlue}
                  alt=""
                />
              </IonButton>
            </IonToolbar>
          </IonHeader>

          <IonList className="home__list">
            <IonRouterLink href="/teacher" className="home__link">
              <IonList className="home__item">
                <IonImg
                  className="home__image"
                  src={iconMyprofile}
                  alt=""
                ></IonImg>
                <IonText className="home__title">Teachers / Parents</IonText>
              </IonList>
            </IonRouterLink>
            <IonRouterLink href="/messcenter" className="home__link">
              <IonList className="home__item">
                <IonImg
                  className="home__image"
                  src={iconMymessage}
                  alt=""
                ></IonImg>
                <IonText className="home__title">Message Center</IonText>
              </IonList>
            </IonRouterLink>
            <IonRouterLink href="/mypicture" className="home__link">
              <IonList className="home__item">
                <IonImg
                  className="home__image"
                  src={iconPicture}
                  alt=""
                ></IonImg>
                <IonText className="home__title">My Pictures</IonText>
              </IonList>
            </IonRouterLink>
            <IonRouterLink href="/childdailyinfo" className="home__link">
              <IonList className="home__item">
                <IonImg
                  className="home__image"
                  src={iconInfoChild}
                  alt=""
                ></IonImg>
                <IonText className="home__title">
                  Child Daily information
                </IonText>
              </IonList>
            </IonRouterLink>
            <IonRouterLink href="/schooldocuments" className="home__link">
              <IonList className="home__item">
                <IonImg
                  className="home__image"
                  src={iconSchool}
                  alt=""
                ></IonImg>
                <IonText className="home__title">School Documents</IonText>
              </IonList>
            </IonRouterLink>

            <IonRouterLink href="/appointmentcenter" className="home__link">
              <IonList className="home__item">
                <IonImg
                  className="home__image"
                  src={iconAppointment}
                  alt=""
                ></IonImg>
                <IonText className="home__title">Appointment Center</IonText>
              </IonList>
            </IonRouterLink>
            <IonRouterLink href="/home" className="home__link">
              <IonList className="home__item">
                <IonImg className="home__image" src={iconSlept} alt=""></IonImg>
                <IonText className="home__title">Slept and ate time </IonText>
              </IonList>
            </IonRouterLink>
            <IonRouterLink href="/marketing" className="home__link">
              <IonList className="home__item">
                <IonImg
                  className="home__image"
                  src={iconMarketing}
                  alt=""
                ></IonImg>
                <IonText className="home__title">Marketing</IonText>
              </IonList>
            </IonRouterLink>
            <IonRouterLink href="/createnewacoount" className="home__link">
              <IonList className="home__item">
                <IonImg
                  className="home__image"
                  src={iconCreatenew}
                  alt=""
                ></IonImg>
                <IonText className="home__title">Create New Account</IonText>
              </IonList>
            </IonRouterLink>
            <IonRouterLink className="home__link dpNone">
              <IonList className="home__item">
                <IonImg
                  className="home__image"
                  src={iconCreatenew}
                  alt=""
                ></IonImg>
                <IonText className="home__title">Create New Account</IonText>
              </IonList>
            </IonRouterLink>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
