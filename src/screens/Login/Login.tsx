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

import Logo from '../../assets/images/logo.png'

const loginAccount = () => {

    // const errors = validateForm(fields);
    // setErrors(errors);
    const errors = 1;

    if (errors == 1) {


    }
}

const Login: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonGrid className=" ion-margin">
                    <IonRow>
                        <IonCol size="12" class="ion-align-items-center ion-text-center ion-justify-content-center">
                            <IonImg src={Logo} class="logo" />

                        </IonCol>
                        <IonCol size="12"  >
                            <IonCardTitle class="h1">Login</IonCardTitle>
                            <h5>Please enter your details to continue</h5>
                        </IonCol>
                    </IonRow>

                    <IonRow className="ion-margin-top ion-padding-top" >

                        <IonItem className="customInput ion-padding-bottom">
                            <IonLabel position="floating">Email <IonIcon icon={mail} /></IonLabel>
                            <IonInput required type="email" name="email"></IonInput>
                        </IonItem>

                        <IonItem className="customInput ion-padding-bottom">
                            <IonLabel position="floating">Password <IonIcon icon={key} /> </IonLabel>
                            <IonInput required type="password" name="password"></IonInput>
                        </IonItem>


                        <IonCol size="12">
                            <IonButton shape="round" className="custom-button regbtn" expand="block" onClick={loginAccount}>Login Account</IonButton>
                        </IonCol>

                        <IonCol size="12">
                            <Action message="" text="Forget Password ?" link="/forget-password" />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>

            <IonFooter>
                <IonGrid className="ion-no-margin ion-no-padding">

                    <Action message="Dont Have An Account?" text="Register" link="/register" />

                </IonGrid>
            </IonFooter>
        </IonPage>
    );
};

export default Login;
