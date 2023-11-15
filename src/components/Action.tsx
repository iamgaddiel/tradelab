import { IonCol, IonRouterLink, IonRow } from "@ionic/react";
import React from "react";
import "../Auth.css"

 
export const Action = (props: { message: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; link: string | undefined; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (

    <IonRow className="ion-text-center ion-justify-content-center">
        <IonCol size="12">
            <p>
                { props.message }
                <IonRouterLink className="custom-link linklogin" routerLink={ props.link }> { props.text } &rarr;</IonRouterLink>
            </p>
        </IonCol>
    </IonRow>
);