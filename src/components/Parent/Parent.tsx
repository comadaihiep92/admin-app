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
  IonAvatar,
} from "@ionic/react";

import "./Parent.scss";

import iconBack from "../../images/icon-back.png";
import iconSearch from "../../images/icon-search.png";
import iconDownload from "../../images/icon-download.png";
import imgAvata from "../../images/img-parent.png";
import iconStar from "../../images/icon-star.png";

const Parent: React.FC = () => {
  return (
    <IonPage className="appointment">
      {/* <IonHeader className="ion-no-border appointment__header">
        <IonToolbar className="appointment__toolbar">
          <IonButtons slot="start">
            <Link to="/home">
              <IonImg className="icon icon-back" src={iconBack} alt="" />
            </Link>
          </IonButtons>

          <IonTitle className="appointment__title-header">My Messages</IonTitle>

          <IonButton className="btn btn--search ion-no-padding" slot="end">
            <IonImg className="icon icon--search" src={iconSearch} alt="" />
          </IonButton>
        </IonToolbar>
      </IonHeader> */}
      <IonContent>
        {/* <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
        ></IonSearchbar> */}
        <IonList className="messages">
          <IonRouterLink className="messages__link">
            <IonList className="messages__item">
              <IonAvatar className="messages__avata">
                <IonImg className="img img--avataa" src={imgAvata} />
              </IonAvatar>
              <IonList className="teachermes">
                <IonList className="teachermes__info">
                  <IonText className="teachermes__name">
                    Yasser Abbas{" "}
                    <IonLabel className="teachermes__sub">
                      (yasserabbas@gmail.com)
                    </IonLabel>
                  </IonText>
                  <IonText className="teachermes__email">
                    Last Seen: 13 months
                  </IonText>
                </IonList>
                <IonList className="teachermes__button">
                  <IonButton className="btn  btn--delete">Delete</IonButton>
                </IonList>
              </IonList>
            </IonList>
          </IonRouterLink>
          <IonRouterLink className="messages__link">
            <IonList className="messages__item">
              <IonAvatar className="messages__avata">
                <IonImg className="img img--avataa" src={imgAvata} />
              </IonAvatar>
              <IonList className="teachermes">
                <IonList className="teachermes__info">
                  <IonText className="teachermes__name">
                    Yasser Abbas{" "}
                    <IonLabel className="teachermes__sub">
                      (yasserabbas@gmail.com)
                    </IonLabel>
                  </IonText>
                  <IonText className="teachermes__email">
                    Last Seen: 13 months
                  </IonText>
                </IonList>
                <IonList className="teachermes__button">
                  <IonButton className="btn btn--contact btn--contact">
                    Contact
                  </IonButton>
                </IonList>
              </IonList>
            </IonList>
          </IonRouterLink>
          <IonRouterLink className="messages__link">
            <IonList className="messages__item">
              <IonAvatar className="messages__avata">
                <IonImg className="img img--avataa" src={imgAvata} />
              </IonAvatar>
              <IonList className="teachermes">
                <IonList className="teachermes__info">
                  <IonText className="teachermes__name">
                    Yasser Abbas{" "}
                    <IonLabel className="teachermes__sub">
                      (yasserabbas@gmail.com)
                    </IonLabel>
                  </IonText>
                  <IonText className="teachermes__email">
                    Last Seen: 13 months
                  </IonText>
                </IonList>
                <IonList className="teachermes__button">
                  <IonButton className="btn btn--contact btn--contact">
                    Contact
                  </IonButton>
                </IonList>
              </IonList>
            </IonList>
          </IonRouterLink>
          <IonRouterLink className="messages__link">
            <IonList className="messages__item">
              <IonAvatar className="messages__avata">
                <IonImg className="img img--avataa" src={imgAvata} />
              </IonAvatar>
              <IonList className="teachermes">
                <IonList className="teachermes__info">
                  <IonText className="teachermes__name">
                    Yasser Abbas{" "}
                    <IonLabel className="teachermes__sub">
                      (yasserabbas@gmail.com)
                    </IonLabel>
                  </IonText>
                  <IonText className="teachermes__email">
                    Last Seen: 13 months
                  </IonText>
                </IonList>
                <IonList className="teachermes__button">
                  <IonButton className="btn btn--contact btn--contact">
                    Contact
                  </IonButton>
                </IonList>
              </IonList>
            </IonList>
          </IonRouterLink>
          <IonRouterLink className="messages__link">
            <IonList className="messages__item">
              <IonAvatar className="messages__avata">
                <IonImg className="img img--avataa" src={imgAvata} />
              </IonAvatar>
              <IonList className="teachermes">
                <IonList className="teachermes__info">
                  <IonText className="teachermes__name">
                    Yasser Abbas{" "}
                    <IonLabel className="teachermes__sub">
                      (yasserabbas@gmail.com)
                    </IonLabel>
                  </IonText>
                  <IonText className="teachermes__email">
                    Last Seen: 13 months
                  </IonText>
                </IonList>
                <IonList className="teachermes__button">
                  <IonButton className="btn btn--contact btn--contact">
                    Contact
                  </IonButton>
                </IonList>
              </IonList>
            </IonList>
          </IonRouterLink>
          <IonRouterLink className="messages__link">
            <IonList className="messages__item">
              <IonAvatar className="messages__avata">
                <IonImg className="img img--avataa" src={imgAvata} />
              </IonAvatar>
              <IonList className="teachermes">
                <IonList className="teachermes__info">
                  <IonText className="teachermes__name">
                    Yasser Abbas{" "}
                    <IonLabel className="teachermes__sub">
                      (yasserabbas@gmail.com)
                    </IonLabel>
                  </IonText>
                  <IonText className="teachermes__email">
                    Last Seen: 13 months
                  </IonText>
                </IonList>
                <IonList className="teachermes__button">
                  <IonButton className="btn btn--contact btn--contact">
                    Contact
                  </IonButton>
                </IonList>
              </IonList>
            </IonList>
          </IonRouterLink>
          <IonRouterLink className="messages__link">
            <IonList className="messages__item">
              <IonAvatar className="messages__avata">
                <IonImg className="img img--avataa" src={imgAvata} />
              </IonAvatar>
              <IonList className="teachermes">
                <IonList className="teachermes__info">
                  <IonText className="teachermes__name">
                    Yasser Abbas{" "}
                    <IonLabel className="teachermes__sub">
                      (yasserabbas@gmail.com)
                    </IonLabel>
                  </IonText>
                  <IonText className="teachermes__email">
                    Last Seen: 13 months
                  </IonText>
                </IonList>
                <IonList className="teachermes__button">
                  <IonButton className="btn btn--contact btn--contact">
                    Contact
                  </IonButton>
                </IonList>
              </IonList>
            </IonList>
          </IonRouterLink>
          <IonRouterLink className="messages__link">
            <IonList className="messages__item">
              <IonAvatar className="messages__avata">
                <IonImg className="img img--avataa" src={imgAvata} />
              </IonAvatar>
              <IonList className="teachermes">
                <IonList className="teachermes__info">
                  <IonText className="teachermes__name">
                    Yasser Abbas{" "}
                    <IonLabel className="teachermes__sub">
                      (yasserabbas@gmail.com)
                    </IonLabel>
                  </IonText>
                  <IonText className="teachermes__email">
                    Last Seen: 13 months
                  </IonText>
                </IonList>
                <IonList className="teachermes__button">
                  <IonButton className="btn btn--contact btn--contact">
                    Contact
                  </IonButton>
                </IonList>
              </IonList>
            </IonList>
          </IonRouterLink>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Parent;
