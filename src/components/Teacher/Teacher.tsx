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
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { Route, Redirect } from "react-router-dom";
import React from "react";

import "./Teacher.scss";
import iconBack from "../../images/icon-back.png";
import Parent from "../Parent/Parent";
import TeacherMes from "../TeacherMes/TeacherMes";
import Messages from "../MyMessages/MyMessages";

import iconSearch from "../../images/icon-search.png";
import iconDotWhite from "../../images/icon-dot.png";

const Teacher: React.FC = () => {
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
              Teachers / Parents
            </IonTitle>
            <IonButton
              className="btn btn--search ion-no-padding"
              slot="end"
              // onClick={() => setShowPopover(true)}
            >
              <IonImg className="icon icon--search" src={iconSearch} alt="" />
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
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/teachers" component={TeacherMes} exact />
              <Route path="/parents" component={Parent} exact />
              <Route path="/messages" component={Messages} exact />
              <Redirect from="/" to="/teachers" />
            </IonRouterOutlet>
            <IonTabBar className="tab" slot="top">
              <IonTabButton
                className="tab__btn"
                tab="teachers"
                href="/teachers"
              >
                <IonLabel className="tab__label">Teachers</IonLabel>
              </IonTabButton>
              <IonTabButton className="tab__btn" tab="parents" href="/parents">
                <IonLabel className="tab__label">Parents</IonLabel>
              </IonTabButton>
              <IonTabButton
                className="tab__btn"
                tab="messages"
                href="/messages"
              >
                <IonLabel className="tab__label">Messages</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonContent>
      </IonReactRouter>
    </IonPage>
  );
};

export default Teacher;
