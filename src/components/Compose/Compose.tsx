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
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { Route, Redirect } from "react-router-dom";
import React, { useState } from "react";

import "./Compose.scss";
import iconBack from "../../images/icon-back.png";
import iconEdit from "../../images/icon-edit.png";
import MyMessagesSent from "../MyMessagesSent/MyMessagesSent";

import iconSend from "../../images/icon-send.png";
import iconDotWhite from "../../images/icon-dot.png";

const Compose: React.FC = () => {
  const [showPopover, setShowPopover] = useState(true);
  return (
    <IonPage className="teacher">
      <IonReactRouter>
        <IonHeader className="ion-no-border teacher__header">
          <IonToolbar className="teacher__toolbar">
            <IonButtons slot="start">
              <IonRouterLink href="/messcenter">
                <IonImg className="icon icon-back" src={iconBack} alt="" />
              </IonRouterLink>
            </IonButtons>
            <IonTitle className="ion-text-center teacher__title-header">
              Compose
            </IonTitle>
            <IonButton
              className="btn btn--search ion-no-padding"
              slot="end"
              // onClick={() => setShowPopover(true)}
            >
              <IonImg className="icon icon--search" src={iconSend} alt="" />
            </IonButton>
            <IonButton
              className="btn btn--popover ion-no-padding"
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
          <IonList className="compose">
            <IonList className="compose__row">
              <IonText className="compose__text">From</IonText>
              <IonInput type="email" className="compose__input">
                Adminstration@gmail.com
              </IonInput>
            </IonList>
            <IonList className="compose__row">
              <IonText className="compose__text">To</IonText>
              <IonInput type="email" className="compose__input"></IonInput>
            </IonList>
            <IonList className="compose__row">
              <IonText className="compose__text">Subject</IonText>
              <IonInput type="email" className="compose__input"></IonInput>
            </IonList>
            <IonTextarea
              className="compose__textarea"
              placeholder="Write Comment"
            ></IonTextarea>
          </IonList>
        </IonContent>
      </IonReactRouter>
    </IonPage>
  );
};

export default Compose;
