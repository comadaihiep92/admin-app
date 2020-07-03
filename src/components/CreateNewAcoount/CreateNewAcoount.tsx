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
} from "@ionic/react";
import React from "react";

import "./CreateNewAcoount.scss";
import bgCreate from "../../images/bg-create-new.png";

const CreateNewAcoount: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonList className="createnew">
          <IonImg className="createnew__img" src={bgCreate} alt="" />
          <IonList className="createnew__list">
            <IonText className="createnew__title">Create New Acoount</IonText>
            <IonInput
              type="text"
              className="createnew__input"
              placeholder="First Name"
            />
            <IonInput
              type="text"
              className="createnew__input"
              placeholder="Last Name"
            />
            <IonInput
              type="email"
              className="createnew__input"
              placeholder="Email"
            />
            <IonInput
              type="text"
              className="createnew__input"
              placeholder="Login ID"
            />
            <IonButton href="/home" className="createnew__button" expand="full">
              Create
            </IonButton>
            <IonList className="createnew__text">
              <IonRouterLink href="/newpassword" className="createnew__change">
                Change Password
              </IonRouterLink>
            </IonList>
          </IonList>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default CreateNewAcoount;
