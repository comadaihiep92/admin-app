//
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
  IonInput,
  IonButton,
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonButtons,
  IonFabButton,
  IonFab,
  IonPopover,
  IonTextarea,
  IonIcon,
} from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import { IonReactRouter } from "@ionic/react-router";

import { Route, Redirect } from "react-router-dom";
import React, { useState } from "react";
import { FileChooser, FileChooserOriginal } from "@ionic-native/file-chooser";
import "./Notifications.scss";
import iconBack from "../../images/icon-back.png";
import iconEdit from "../../images/icon-edit.png";
import MyMessagesSent from "../MyMessagesSent/MyMessagesSent";

import iconSend from "../../images/icon-send.png";
import iconDotWhite from "../../images/icon-dot.png";

const Notifications: React.FC = () => {
  const [showPopover, setShowPopover] = useState(true);

  const [image, setImage] = useState("");

  const openFile = async () => {
    const data = await FileChooser.open();
    setImage(data);
    console.log("a: ", data);
    console.debug(123);
  };
  return (
    <IonPage className="teacher">
      <IonReactRouter>
        <IonHeader className="ion-no-border teacher__header">
          <IonToolbar className="teacher__toolbar">
            <IonButtons slot="start">
              <IonRouterLink href="/home">
                <IonImg className="icon icon-back" src={iconBack} alt="" />
              </IonRouterLink>
            </IonButtons>
            <IonTitle className="ion-text-center teacher__title-header">
              Notifications
            </IonTitle>
            <IonButton
              className="btn btn--search ion-no-padding hidden"
              slot="end"
              // onClick={() => setShowPopover(true)}
            >
              <IonImg className="icon icon--search" src={iconSend} alt="" />
            </IonButton>
            <IonButton
              className="btn btn--popover ion-no-padding hidden"
              slot="end"
              // onClick={() => setShowPopover(true)}
            >
              <IonImg
                className="icon icon--popover"
                src={iconDotWhite}
                alt=""
              />
            </IonButton>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonList className="noti">
            <IonList className="noti__row">
              <IonText className="noti__text">From</IonText>
              <IonInput type="email" className="noti__input noti__leftpd">
                Adminstration@gmail.com
              </IonInput>
            </IonList>
            <IonList className="noti__row ">
              <IonText className="noti__text">To</IonText>
              <IonList className="noti__list-email">
                <IonList className="noti__item noti__input noti__leftpd">
                  <IonText className="noti__email ">Ahmed@gmail.com</IonText>
                  <IonButton className="btn btn--delemail">
                    <IonIcon icon={closeOutline} />
                  </IonButton>
                </IonList>
                <IonList className="noti__item noti__input">
                  <IonText className="noti__email ">ClassRoom : B</IonText>
                  <IonButton className="btn btn--delemail">
                    <IonIcon icon={closeOutline} />
                  </IonButton>
                </IonList>
                <IonList className="noti__item noti__input">
                  <IonText className="noti__email ">ClassRoom : z</IonText>
                  <IonButton className="btn btn--delemail">
                    <IonIcon icon={closeOutline} />
                  </IonButton>
                </IonList>
                <IonInput></IonInput>
              </IonList>
            </IonList>
            <IonList className="noti__row">
              <IonText className="noti__text">Upload Picture</IonText>
              <IonList className="noti__list-email">
                <IonList className="noti__item noti__input">
                  <IonButton
                    onClick={openFile}
                    className="noti__email btn btn--choose2 "
                  >
                    Choose file
                  </IonButton>
                </IonList>

                <IonInput></IonInput>
              </IonList>
            </IonList>
            <IonList className="noti__row">
              <IonText className="noti__text">Comment</IonText>
              <IonTextarea
                className="noti__textarea"
                placeholder="Write Comment"
              ></IonTextarea>
            </IonList>
            <IonButton expand="full" className="noti__btn btn btn--send">
              Send
            </IonButton>
          </IonList>
        </IonContent>
      </IonReactRouter>
    </IonPage>
  );
};

export default Notifications;
