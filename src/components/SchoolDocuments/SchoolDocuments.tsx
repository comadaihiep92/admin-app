import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonImg,
  IonBackButton,
  IonButtons,
  IonList,
  IonItem,
  IonText,
  IonRadioGroup,
  IonLabel,
  IonRadio,
  IonTextarea,
  IonSelectOption,
  IonSelect,
  IonInput,
  IonButton,
  IonRouterLink,
  IonSearchbar,
} from "@ionic/react";

import "./SchoolDocuments.scss";

import iconBack from "../../images/icon-back.png";
import iconSearch from "../../images/icon-search.png";
// import iconDelete from "../../images/icon-download.png";
import iconDelete from "../../images/icon-delete-gray.png";
import imgUpload from "../../images/icon-upload.png";

const SchoolDocuments: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <IonPage className="appointment">
      <IonHeader className="ion-no-border appointment__header">
        <IonToolbar className="appointment__toolbar">
          <IonButtons slot="start">
            <Link to="/home">
              <IonImg className="icon icon-back" src={iconBack} alt="" />
            </Link>
          </IonButtons>

          <IonTitle className="appointment__title-header">
            School Documents
          </IonTitle>

          <IonButton className="btn btn--search ion-no-padding" slot="end">
            <IonImg className="icon icon--search" src={iconSearch} alt="" />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
        ></IonSearchbar> */}
        <IonList className="school">
          <IonList className="school__item">
            <IonText className="school__text">School Calendar</IonText>
            <IonLabel className="school__label"></IonLabel>
            <IonImg
              className="img img--download img--delete-gray img--delete-gray"
              src={iconDelete}
              alt=""
            />
          </IonList>
          <IonList className="school__item">
            <IonText className="school__text">Routine of the day</IonText>
            <IonLabel className="school__label"></IonLabel>
            <IonImg
              className="img img--download img--delete-gray"
              src={iconDelete}
              alt=""
            />
          </IonList>
          <IonList className="school__item">
            <IonText className="school__text">School menu</IonText>
            <IonLabel className="school__label"></IonLabel>
            <IonImg
              className="img img--download img--delete-gray"
              src={iconDelete}
              alt=""
            />
          </IonList>
          <IonList className="school__item">
            <IonText className="school__text">School supplies to buy</IonText>
            <IonLabel className="school__label"></IonLabel>
            <IonImg
              className="img img--download img--delete-gray"
              src={iconDelete}
              alt=""
            />
          </IonList>
          <IonList className="school__item">
            <IonText className="school__text">Rule book</IonText>
            <IonLabel className="school__label"></IonLabel>
            <IonImg
              className="img img--download img--delete-gray"
              src={iconDelete}
              alt=""
            />
          </IonList>
          <IonList className="school__item">
            <IonText className="school__text">Our documents</IonText>
            <IonLabel className="school__label"></IonLabel>
            <IonImg
              className="img img--download img--delete-gray"
              src={iconDelete}
              alt=""
            />
          </IonList>
        </IonList>
        <IonList className="mypicture">
          <IonList className="mypicture__draglist">
            <IonImg className="img img--upload" src={imgUpload} alt="" />
            <IonText className="mypicture__desc">
              Drag files here or{" "}
              <IonRouterLink className="color color--blue">
                browse
              </IonRouterLink>
            </IonText>
          </IonList>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SchoolDocuments;
