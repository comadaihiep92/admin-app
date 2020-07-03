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

import "./NewPassword.scss";
import bgNewpassword from "../../images/bg-delete.jpg";

const NewPassword: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonList className="newpass">
          <IonImg className="newpass__img" src={bgNewpassword} alt="" />
          <IonList className="newpass__list">
            <IonText className="newpass__title">Your New Password</IonText>
            <IonText className="newpass__desc">
              A new account has been successfully registered
            </IonText>
            <IonText className="newpass__pass">Ahmed_Mohsen_2020</IonText>

            <IonList className="newpass__text">
              <IonRouterLink href="/home" className="createnew__change">
                Go to your homepage
              </IonRouterLink>
            </IonList>
          </IonList>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default NewPassword;
