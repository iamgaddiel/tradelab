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
    IonText,
    IonTextarea,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import { key, mail, person, warning } from "ionicons/icons";
import { Action } from "../../components/Action";



const ForgetPassword: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonGrid className=" ion-margin">
                    <IonRow>
                        <IonCol size="12" class="ion-align-items-center ion-text-center ion-justify-content-center">
                            <IonImg src="./logo.png" class="logo" />

                        </IonCol>
                        <IonCol size="12"  >
                            <IonCardTitle class="h1">Forgot Password </IonCardTitle>
                            <h5>Please enter your email to recover password</h5>
                        </IonCol>
                    </IonRow>

                    <IonRow className="ion-margin-top ion-padding-top" >



                        <IonItem className="customInput ion-padding-bottom">
                            <IonLabel id="email" position="floating">Email <IonIcon icon={mail} /></IonLabel>
                            <IonInput aria-labelledby="email" required type="email" name="email"></IonInput>
                        </IonItem>



                        <IonCol size="12">
                            <IonButton shape="round" className="custom-button regbtn" expand="block">Reset Password</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>

            <IonFooter>
                <IonGrid className="ion-no-margin ion-no-padding">

                    <Action message="I remembered my password now !" text="Login" link="/login" />

                </IonGrid>
            </IonFooter>
        </IonPage>
    );
};

export default ForgetPassword;
