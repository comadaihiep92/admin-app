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
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { Route, Redirect } from "react-router-dom";
import React, { useState } from "react";

import "./MessCenter.scss";
import iconBack from "../../images/icon-back.png";
import iconEdit from "../../images/icon-edit.png";
import MyMessagesSent from "../MyMessagesSent/MyMessagesSent";

import iconSearch from "../../images/icon-search.png";
import iconDotWhite from "../../images/icon-dot.png";

const MessCenter: React.FC = () => {
  const [showPopover, setShowPopover] = useState(true);
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
              Message Center
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
              <Route path="/inbox" component={MyMessagesSent} exact />
              <Route path="/sent" component={MyMessagesSent} exact />
              {/* <Route path="/messages" component={Messages} exact /> */}
              <Redirect from="/" to="/inbox" />
            </IonRouterOutlet>
            <IonTabBar className="tab" slot="top">
              <IonTabButton className="tab__btn" tab="inbox" href="/inbox">
                <IonLabel className="tab__label">Inbox</IonLabel>
              </IonTabButton>
              <IonTabButton className="tab__btn" tab="sent" href="/sent">
                <IonLabel className="tab__label">Sent</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
          <IonFab
            // className="modal__close"
            vertical="bottom"
            horizontal="end"
            slot="fixed"
          >
            <IonFabButton
              className="btn-modal btn-modal--close"
              // onClick={() => setShowModal(false)}
              href="/compose"
            >
              <IonImg className="icon icon--close" src={iconEdit} alt="" />
            </IonFabButton>
          </IonFab>
        </IonContent>
      </IonReactRouter>
    </IonPage>
  );
};

export default MessCenter;
