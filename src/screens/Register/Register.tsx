import {

    IonButton,
    IonCardTitle,
    IonCol,
    IonContent,
    IonFooter,
    IonGrid,
    IonIcon,
    IonImg,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonRow,
    IonTextarea,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import { key, mail, person, warning } from "ionicons/icons";
import { Action } from "../../components/Action";

import Logo from '../../assets/images/logo.png'



const Register: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonGrid className=" ion-margin">
                    <IonRow>
                        <IonCol size="12" class="ion-align-items-center ion-text-center ion-justify-content-center">
                            <IonImg src={Logo} class="logo" />

                        </IonCol>
                        <IonCol size="12"  >
                            <IonCardTitle class="h1">Sign up</IonCardTitle>
                            <h5>Lets get to know each other</h5>
                        </IonCol>
                    </IonRow>

                    <IonRow className="ion-margin-top ion-padding-top" >

                        <IonItem className="ion-padding-bottom customInput">
                            <IonLabel position="floating">Full Name <IonIcon icon={person} /></IonLabel>
                            <IonInput required type="text" name="fname"></IonInput>
                        </IonItem>

                        <IonItem className="customInput ion-padding-bottom">
                            <IonLabel position="floating">Email <IonIcon icon={mail} /></IonLabel>
                            <IonInput required type="email" name="email"></IonInput>
                        </IonItem>

                        <IonItem className="customInput ion-padding-bottom">
                            <IonLabel position="floating">Password <IonIcon icon={key} /> </IonLabel>
                            <IonInput required type="password" name="password"></IonInput>
                        </IonItem>


                        <IonCol size="12">
                            <IonButton shape="round" className="custom-button regbtn" expand="block">Create account</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>

            <IonFooter>
                <IonGrid className="ion-no-margin ion-no-padding">

                    <Action message="Already got an account?" text="Login" link="/login" />

                </IonGrid>
            </IonFooter>
        </IonPage>
    );
};

export default Register;
