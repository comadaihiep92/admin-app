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
  IonProgressBar,
  IonFooter,
} from "@ionic/react";

import "./Marketing.scss";

import iconBack from "../../images/icon-back.png";
import imgUpload from "../../images/icon-upload.png";
import iconCloud from "../../images/icon-cloudupload.png";
import iconCancel from "../../images/icon-cancel.png";

const Marketing: React.FC = () => {
  return (
    <IonPage className="appointment">
      <IonHeader className="ion-no-border appointment__header">
        <IonToolbar className="appointment__toolbar">
          <IonButtons slot="start">
            <Link to="/home">
              <IonImg className="icon icon-back" src={iconBack} alt="" />
            </Link>
          </IonButtons>

          <IonTitle className="appointment__title-header">Marketing</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="marketing">
          <IonList className="marketing__time">
            <IonText className="marketing__title">Time spent / Year</IonText>
            <IonSelect className="marketing__input" value="2013">
              <IonSelectOption>2012</IonSelectOption>
              <IonSelectOption>2013</IonSelectOption>
              <IonSelectOption>2014</IonSelectOption>
            </IonSelect>
          </IonList>
          <IonList className="marketing__chart">
            <IonList className="marketing__chart-item">
              <IonText className="marketing__text">1</IonText>
              <IonProgressBar className="marketing__progress" value={0.5} />
            </IonList>
            <IonList className="marketing__chart-item">
              <IonText className="marketing__text">2</IonText>
              <IonProgressBar className="marketing__progress" value={0.7} />
            </IonList>
            <IonList className="marketing__chart-item">
              <IonText className="marketing__text">3</IonText>
              <IonProgressBar className="marketing__progress" value={0.7} />
            </IonList>
            <IonList className="marketing__chart-item">
              <IonText className="marketing__text">4</IonText>
              <IonProgressBar className="marketing__progress" value={0.7} />
            </IonList>
            <IonList className="marketing__chart-item">
              <IonText className="marketing__text">5</IonText>
              <IonProgressBar className="marketing__progress" value={0.7} />
            </IonList>
            <IonList className="marketing__chart-item">
              <IonText className="marketing__text">6</IonText>
              <IonProgressBar className="marketing__progress" value={0.7} />
            </IonList>
            <IonList className="marketing__chart-item">
              <IonText className="marketing__text">7</IonText>
              <IonProgressBar className="marketing__progress" value={0.7} />
            </IonList>
            <IonList className="marketing__chart-item">
              <IonText className="marketing__text">8</IonText>
              <IonProgressBar className="marketing__progress" value={0.7} />
            </IonList>
            <IonList className="marketing__chart-item">
              <IonText className="marketing__text">9</IonText>
              <IonProgressBar className="marketing__progress" value={0.7} />
            </IonList>
            <IonList className="marketing__chart-item">
              <IonText className="marketing__text">10</IonText>
              <IonProgressBar className="marketing__progress" value={0.7} />
            </IonList>
          </IonList>
          {/* <IonList>
            <div className="pie-wrapper progress-45 style-2">
              <span className="label">
                45<span className="smaller">%</span>
              </span>
              <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
              </div>
              <div className="shadow"></div>
            </div>
          </IonList> */}
        </IonList>
      </IonContent>
      <IonFooter>
        <IonList className="footer footer__height">
          <IonItem className="footer__head footer__head-nobd" lines="none">
            All Comments
          </IonItem>
          <IonContent>
            <IonList className="childDaily__stick">
              <IonText className="childDaily__text">
                “Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book .....”
              </IonText>
              <IonLabel className="childDaily__assign childDaily__assign--blue">
                - Ahmed Mohsen
              </IonLabel>
            </IonList>
            <IonList className="childDaily__stick">
              <IonText className="childDaily__text">
                “Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book .....”
              </IonText>
              <IonLabel className="childDaily__assign childDaily__assign--blue">
                - Ahmed Mohsen
              </IonLabel>
            </IonList>
            <IonList className="childDaily__stick">
              <IonText className="childDaily__text">
                “Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book .....”
              </IonText>
              <IonLabel className="childDaily__assign childDaily__assign--blue">
                - Ahmed Mohsen
              </IonLabel>
            </IonList>
            <IonList className="childDaily__stick">
              <IonText className="childDaily__text">
                “Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book .....”
              </IonText>
              <IonLabel className="childDaily__assign childDaily__assign--blue">
                - Ahmed Mohsen
              </IonLabel>
            </IonList>
          </IonContent>
        </IonList>
      </IonFooter>
    </IonPage>
  );
};

export default Marketing;
