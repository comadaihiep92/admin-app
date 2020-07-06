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
  IonModal,
  IonButton,
  IonLabel,
  IonRouterLink,
  IonTextarea,
  IonInput,
  IonFab,
  IonFabButton,
  IonRadio,
  IonRadioGroup,
  IonFooter,
  IonSelect,
  IonSelectOption,
  IonAvatar,
} from "@ionic/react";

import "./AppointmentCenter.scss";

import iconBack from "../../images/icon-back.png";
import iconClock from "../../images/icon-clock.png";
import img1 from "../../images/img-parent.png";
import img2 from "../../images/img-parent2.png";
import iconClose from "../../images/icon-close.png";
import iconSearch from "../../images/icon-search.png";
import iconAdd from "../../images/icon-add.png";
import imgAvata from "../../images/img-parent.png";
import iconDeleteGray from "../../images/icon-delete-gray.png";

const AppointmentCenter: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <IonPage className="appointment">
      <IonHeader className="ion-no-border appointment__header">
        <IonToolbar className="appointment__toolbar">
          <IonButtons slot="start">
            <IonRouterLink href="/home">
              <IonImg className="icon icon-back" src={iconBack} alt="" />
            </IonRouterLink>
          </IonButtons>

          <IonTitle className="appointment__title-header">
            Appointment Center
          </IonTitle>
          <IonButton className="btn btn--search ion-no-padding" slot="end">
            <IonImg className="icon icon--search" src={iconSearch} alt="" />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="appointment__list">
          <IonModal isOpen={showModal} cssClass="modal">
            <IonContent className="modal__scroll">
              <IonList className="modal__list">
                <IonList className="modal__content modal__content-nomg modal__content--big">
                  <IonText className="appointment__reminder appointment__reminder--big">
                    Appointment reminder{" "}
                    <IonLabel className="appointment__close">Closed</IonLabel>
                  </IonText>
                  <IonList className="appointment__times ion-no-padding">
                    <IonImg
                      className="icon icon--clock"
                      src={iconClock}
                      alt=""
                    />
                    <IonText className="appointment__date">
                      Friday: at 4 pm
                    </IonText>
                  </IonList>
                </IonList>
                <IonList className="modal__item modal__item--column ion-no-padding">
                  {/* <IonRouterLink className="messages__link"> */}
                  <IonList className="messages__item">
                    <IonAvatar className="messages__avata">
                      <IonImg className="img img--avataa" src={imgAvata} />
                    </IonAvatar>
                    <IonList className="teachermes">
                      <IonList className="teachermes__info">
                        <IonText className="teachermes__name">
                          Yasser Abbas
                        </IonText>
                        <IonText className="teachermes__email">
                          yasserabbas@gmail.com
                        </IonText>
                      </IonList>
                      <IonList className="teachermes__button">
                        <IonButton className="btn btn--deletegray">
                          <IonImg
                            className="img img--delete-gray"
                            src={iconDeleteGray}
                            alt=""
                          />
                        </IonButton>
                      </IonList>
                    </IonList>
                  </IonList>
                  <IonList className="messages__item">
                    <IonAvatar className="messages__avata">
                      <IonImg className="img img--avataa" src={imgAvata} />
                    </IonAvatar>
                    <IonList className="teachermes">
                      <IonList className="teachermes__info">
                        <IonText className="teachermes__name">
                          Yasser Abbas
                        </IonText>
                        <IonText className="teachermes__email">
                          yasserabbas@gmail.com
                        </IonText>
                      </IonList>
                      <IonList className="teachermes__button">
                        <IonButton className="btn btn--deletegray">
                          <IonImg
                            className="img img--delete-gray"
                            src={iconDeleteGray}
                            alt=""
                          />
                        </IonButton>
                      </IonList>
                    </IonList>
                  </IonList>
                  <IonList className="messages__item">
                    <IonAvatar className="messages__avata">
                      <IonImg className="img img--avataa" src={imgAvata} />
                    </IonAvatar>
                    <IonList className="teachermes">
                      <IonList className="teachermes__info">
                        <IonText className="teachermes__name">
                          Yasser Abbas
                        </IonText>
                        <IonText className="teachermes__email">
                          yasserabbas@gmail.com
                        </IonText>
                      </IonList>
                      <IonList className="teachermes__button">
                        <IonButton className="btn btn--deletegray">
                          <IonImg
                            className="img img--delete-gray"
                            src={iconDeleteGray}
                            alt=""
                          />
                        </IonButton>
                      </IonList>
                    </IonList>
                  </IonList>
                  <IonList className="messages__item">
                    <IonAvatar className="messages__avata">
                      <IonImg className="img img--avataa" src={imgAvata} />
                    </IonAvatar>
                    <IonList className="teachermes">
                      <IonList className="teachermes__info">
                        <IonText className="teachermes__name">
                          Yasser Abbas
                        </IonText>
                        <IonText className="teachermes__email">
                          yasserabbas@gmail.com
                        </IonText>
                      </IonList>
                      <IonList className="teachermes__button">
                        <IonButton className="btn btn--deletegray">
                          <IonImg
                            className="img img--delete-gray"
                            src={iconDeleteGray}
                            alt=""
                          />
                        </IonButton>
                      </IonList>
                    </IonList>
                  </IonList>
                  <IonList className="messages__item">
                    <IonAvatar className="messages__avata">
                      <IonImg className="img img--avataa" src={imgAvata} />
                    </IonAvatar>
                    <IonList className="teachermes">
                      <IonList className="teachermes__info">
                        <IonText className="teachermes__name">
                          Yasser Abbas
                        </IonText>
                        <IonText className="teachermes__email">
                          yasserabbas@gmail.com
                        </IonText>
                      </IonList>
                      <IonList className="teachermes__button">
                        <IonButton className="btn btn--deletegray">
                          <IonImg
                            className="img img--delete-gray"
                            src={iconDeleteGray}
                            alt=""
                          />
                        </IonButton>
                      </IonList>
                    </IonList>
                  </IonList>
                  <IonList className="messages__item">
                    <IonAvatar className="messages__avata">
                      <IonImg className="img img--avataa" src={imgAvata} />
                    </IonAvatar>
                    <IonList className="teachermes">
                      <IonList className="teachermes__info">
                        <IonText className="teachermes__name">
                          Yasser Abbas
                        </IonText>
                        <IonText className="teachermes__email">
                          yasserabbas@gmail.com
                        </IonText>
                      </IonList>
                      <IonList className="teachermes__button">
                        <IonButton className="btn btn--deletegray">
                          <IonImg
                            className="img img--delete-gray"
                            src={iconDeleteGray}
                            alt=""
                          />
                        </IonButton>
                      </IonList>
                    </IonList>
                  </IonList>
                  <IonList className="messages__item">
                    <IonAvatar className="messages__avata">
                      <IonImg className="img img--avataa" src={imgAvata} />
                    </IonAvatar>
                    <IonList className="teachermes">
                      <IonList className="teachermes__info">
                        <IonText className="teachermes__name">
                          Yasser Abbas
                        </IonText>
                        <IonText className="teachermes__email">
                          yasserabbas@gmail.com
                        </IonText>
                      </IonList>
                      <IonList className="teachermes__button">
                        <IonButton className="btn btn--deletegray">
                          <IonImg
                            className="img img--delete-gray"
                            src={iconDeleteGray}
                            alt=""
                          />
                        </IonButton>
                      </IonList>
                    </IonList>
                  </IonList>
                  <IonList className="messages__item">
                    <IonAvatar className="messages__avata">
                      <IonImg className="img img--avataa" src={imgAvata} />
                    </IonAvatar>
                    <IonList className="teachermes">
                      <IonList className="teachermes__info">
                        <IonText className="teachermes__name">
                          Yasser Abbas
                        </IonText>
                        <IonText className="teachermes__email">
                          yasserabbas@gmail.com
                        </IonText>
                      </IonList>
                      <IonList className="teachermes__button">
                        <IonButton className="btn btn--deletegray">
                          <IonImg
                            className="img img--delete-gray"
                            src={iconDeleteGray}
                            alt=""
                          />
                        </IonButton>
                      </IonList>
                    </IonList>
                  </IonList>
                  {/* </IonRouterLink> */}
                </IonList>
              </IonList>
              <IonFab
                className="modal__close"
                vertical="top"
                horizontal="end"
                slot="fixed"
              >
                <IonFabButton
                  className="btn-modal btn-modal--close"
                  onClick={() => setShowModal(false)}
                >
                  <IonImg className="icon icon--close" src={iconClose} alt="" />
                </IonFabButton>
              </IonFab>
            </IonContent>
          </IonModal>

          <IonList className="appointment__item ion-no-padding">
            <IonButton
              className="ion-no-padding appointment__button"
              onClick={() => setShowModal(true)}
            >
              <IonList className="appointment__sub-item">
                <IonList className="appointment__child">
                  <IonText className="appointment__reminder">
                    Appointment reminder
                  </IonText>
                  <IonText className="appointment__reminder status status--pending">
                    Pending
                  </IonText>
                </IonList>

                <IonList className="appointment__child">
                  <IonText className="appointment__date">
                    Friday: at 4 pm
                  </IonText>
                  <IonText className="appointment__date">2 day later</IonText>
                </IonList>
              </IonList>
            </IonButton>
            <IonButton
              className="ion-no-padding appointment__button"
              onClick={() => setShowModal(true)}
            >
              <IonList className="appointment__sub-item">
                <IonList className="appointment__child">
                  <IonText className="appointment__reminder">
                    Appointment reminder
                  </IonText>
                  <IonText className="appointment__reminder status status--close">
                    Close
                  </IonText>
                </IonList>
                <IonList className="appointment__child">
                  <IonText className="appointment__date">Wednesday</IonText>
                  <IonText className="appointment__date">2 day ago</IonText>
                </IonList>
              </IonList>
            </IonButton>
            <IonButton
              className="ion-no-padding appointment__button"
              onClick={() => setShowModal(true)}
            >
              <IonList className="appointment__sub-item">
                <IonList className="appointment__child">
                  <IonText className="appointment__reminder">
                    Appointment reminder
                  </IonText>
                  <IonText className="appointment__reminder status status--close">
                    Close
                  </IonText>
                </IonList>
                <IonList className="appointment__child">
                  <IonText className="appointment__date">Thursday</IonText>
                  <IonText className="appointment__date">10 days ago</IonText>
                </IonList>
              </IonList>
            </IonButton>
            <IonButton
              className="ion-no-padding appointment__button"
              onClick={() => setShowModal(true)}
            >
              <IonList className="appointment__sub-item">
                <IonList className="appointment__child">
                  <IonText className="appointment__reminder">
                    Appointment reminder
                  </IonText>
                  <IonText className="appointment__reminder status status--close">
                    Close
                  </IonText>
                </IonList>
                <IonList className="appointment__child">
                  <IonText className="appointment__date">Monday</IonText>
                  <IonText className="appointment__date">17 day ago</IonText>
                </IonList>
              </IonList>
            </IonButton>
            <IonButton
              className="ion-no-padding appointment__button"
              onClick={() => setShowModal(true)}
            >
              <IonList className="appointment__sub-item">
                <IonList className="appointment__child">
                  <IonText className="appointment__reminder">
                    Appointment reminder
                  </IonText>
                  <IonText className="appointment__reminder status status--close">
                    Close
                  </IonText>
                </IonList>
                <IonList className="appointment__child">
                  <IonText className="appointment__date">Wednesday</IonText>
                  <IonText className="appointment__date">23 day ago</IonText>
                </IonList>
              </IonList>
            </IonButton>
          </IonList>
        </IonList>
      </IonContent>
      <IonFooter>
        <IonList className="footer">
          <IonItem className="footer__head" lines="none">
            Schedule Meeting
          </IonItem>
          <IonList className="footer__item">
            <IonText className="footer__title">Toddlers</IonText>
            <IonList className="footer__row">
              <IonList className="footer__col">
                <IonText className="footer__sub-title">Day</IonText>
                <IonSelect className="footer__input" value="Tue-18th September">
                  <IonSelectOption>Tue-18th September</IonSelectOption>
                  <IonSelectOption>Web-19th September</IonSelectOption>
                  <IonSelectOption>Thu-20th September</IonSelectOption>
                </IonSelect>
              </IonList>
              <IonList className="footer__col">
                <IonText className="footer__sub-title">Time</IonText>
                <IonSelect className="footer__input" value="4pm to 6pm">
                  <IonSelectOption>4pm to 6pm</IonSelectOption>
                  <IonSelectOption>6pm to 8pm</IonSelectOption>
                  <IonSelectOption>8pm to 10pm</IonSelectOption>
                </IonSelect>
              </IonList>
              <IonList className="footer__col">
                <IonText className="footer__sub-title">Duration</IonText>
                <IonInput
                  type="text"
                  className="footer__input"
                  value="20 min"
                ></IonInput>
              </IonList>
              <IonList className="footer__col footer__col-small">
                <IonText className="footer__sub-title footer__sub-title-hidden">
                  Duration
                </IonText>
                <IonButton className="btn btn--add">
                  <IonImg className="img img--add" src={iconAdd} alt="" />
                </IonButton>
              </IonList>
            </IonList>
          </IonList>
          <IonList className="footer__item">
            <IonText className="footer__title">kindergarten</IonText>
            <IonList className="footer__row">
              <IonList className="footer__col">
                <IonText className="footer__sub-title">Day</IonText>
                <IonSelect className="footer__input" value="Tue-18th September">
                  <IonSelectOption>Tue-18th September</IonSelectOption>
                  <IonSelectOption>Web-19th September</IonSelectOption>
                  <IonSelectOption>Thu-20th September</IonSelectOption>
                </IonSelect>
              </IonList>
              <IonList className="footer__col">
                <IonText className="footer__sub-title">Time</IonText>
                <IonSelect className="footer__input" value="04:00 pm ">
                  <IonSelectOption>04:00 pm </IonSelectOption>
                  <IonSelectOption>05:00 pm </IonSelectOption>
                  <IonSelectOption>06:00 pm </IonSelectOption>
                </IonSelect>
              </IonList>
              <IonList className="footer__col">
                <IonText className="footer__sub-title">Duration</IonText>
                <IonInput
                  type="text"
                  className="footer__input"
                  value="20 min"
                ></IonInput>
              </IonList>
              <IonList className="footer__col footer__col-small">
                <IonText className="footer__sub-title footer__sub-title-hidden">
                  Duration
                </IonText>
                <IonButton className="btn btn--add">
                  <IonImg className="img img--add" src={iconAdd} alt="" />
                </IonButton>
              </IonList>
            </IonList>
          </IonList>
          <IonButton className="btn btn--send">Send</IonButton>
        </IonList>
      </IonFooter>
    </IonPage>
  );
};

export default AppointmentCenter;
