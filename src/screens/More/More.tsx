import React, { useEffect } from 'react';
import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonNote, IonPage, IonRange, IonRow, IonText, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
 import { menuOutline, searchOutline, notificationsOutline, exit, sunny, sunnyOutline, download, addCircleOutline, exitOutline, listCircle, walletOutline, cardOutline, person, settingsOutline, informationCircleOutline, barbell, personOutline } from 'ionicons/icons';
import { useRecoilState } from 'recoil';
import { utilsAtom } from '../../atoms/utilityAtom';

const More: React.FC = () => {
  
  const [showTabs, setTab] = useRecoilState(utilsAtom);
  useEffect(() => {
    setTab({
      ...showTabs,
      showTabs: true
    });
  }, []);

return (  
  <IonPage>
    <IonHeader>
       <IonToolbar> 
            <IonButtons slot="start" class="ion-margin-start">
				<h2> More </h2>
			</IonButtons>

            <IonButtons slot="end" class='ion-margin-end' > 
                    <IonIcon size='large' icon={ exitOutline } color='primary'/> 
            </IonButtons>
       </IonToolbar>
    </IonHeader>
    <IonContent>
    <IonGrid>
					<IonRow className="ion-text-center ion-justify-content-center">
                        <IonCol size="4" className="animate__animated animate__fadeInTopLeft animate__faster">
                            <img src="/default_user.png" className="avatar"  alt="account avatar" />
                        </IonCol>
                    </IonRow>

                    <IonRow className="ion-text-center ion-justify-content-center">
                        <IonCol size="12">
                            <h2>
                               Precious Obaseki 
                            </h2>
                            <p>ID: 93849839</p>
                            {/* <h6> current cards</h6> */}
                        </IonCol>
                    </IonRow>
                    </IonGrid>

    <IonList inset={true}>
            
          <IonItem>
            <IonIcon color="primary" slot="start" icon={cardOutline} size="large"></IonIcon>
            <IonLabel>Balance</IonLabel>
            <IonLabel slot="end" class='h3'>$0.00</IonLabel>
             
          </IonItem>

          <IonItem button={true}>
            <IonIcon color="primary" slot="start" icon={addCircleOutline} size="large"></IonIcon>
            <IonLabel>Deposit</IonLabel> 
          </IonItem>  
          <IonItem button={true}>
            <IonIcon color="primary" slot="start" icon={walletOutline} size="large"></IonIcon>
            <IonLabel>Withdraw</IonLabel> 
          </IonItem>
        </IonList>


        
    <IonList inset={true}> 
            <IonItem button={true}>
              <IonIcon color="primary" slot="start" icon={personOutline} size="large"></IonIcon>
              <IonLabel>Profile</IonLabel> 
            </IonItem>  
            <IonItem button={true}>
              <IonIcon color="primary" slot="start" icon={settingsOutline} size="large"></IonIcon>
              <IonLabel>Settings</IonLabel> 
            </IonItem>
          </IonList>


          <IonList inset={true}> 
            <IonItem button={true}>
              <IonIcon color="primary" slot="start" icon={barbell} size="large"></IonIcon>
              <IonLabel>Terms</IonLabel> 
            </IonItem>  
            <IonItem button={true}>
              <IonIcon color="primary" slot="start" icon={informationCircleOutline} size="large"></IonIcon>
              <IonLabel>About</IonLabel> 
            </IonItem>
          </IonList>













       
 
 
      </IonContent>  
  </IonPage>
  );
};

export default More;
