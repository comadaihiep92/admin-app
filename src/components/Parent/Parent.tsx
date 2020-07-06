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
  IonModal,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/react";

import { closeOutline } from "ionicons/icons";

import "./Parent.scss";

import iconBack from "../../images/icon-back.png";
import iconSearch from "../../images/icon-search.png";
import iconDownload from "../../images/icon-download.png";
import imgAvata from "../../images/img-parent.png";
import bgDelete from "../../images/bg-delete.jpg";

const Parent: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
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
          <IonModal isOpen={showModal} cssClass="modalDelete">
            <IonList className="modalDelete__list">
              <IonImg className="modalDelete__img" src={bgDelete} alt="" />
              <IonText className="modalDelete__text">
                “your profile will be archived in the next 24hours”
              </IonText>
              <IonList className="modalDelete__btn">
                <IonButton className="modalDelete__btn--wait">Wait</IonButton>
                <IonButton className="modalDelete__btn--delete">
                  Delete Now
                </IonButton>
              </IonList>
            </IonList>
            <IonFab
              className="modal__close"
              vertical="top"
              horizontal="end"
              slot="fixed"
            >
              <IonFabButton
                className="btn-modal btn-modal--close btn-modal--close-red"
                onClick={() => setShowModal(false)}
              >
                <IonIcon icon={closeOutline} />
                {/* <IonImg className="icon icon--close"
                src={iconClose}
                 alt="" /> */}
              </IonFabButton>
            </IonFab>
          </IonModal>

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
                  <IonButton
                    onClick={() => setShowModal(true)}
                    className="btn  btn--delete"
                  >
                    Delete
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
