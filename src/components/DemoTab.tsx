import React, { useEffect } from 'react';
import { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRadio, IonRadioGroup, IonRouterLink, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react'; 

import { utilsAtom } from '../atoms/utilityAtom';  
import { useRecoilState } from 'recoil'; 
import './tab.css'


const DemoTab: React.FC = () => {

  
const [showTabs,  setTab] = useRecoilState(utilsAtom); 

    
useEffect(() => {
  setTab({
    ...showTabs,
    showTabs: true, 
  });

}, []); 


    return ( 
  <IonPage>   
    <IonHeader> 
      <h1 className='tabh1'> Account Selection </h1>
  <IonRow  style={{ margin: 0 }}>
    <IonCol size="6">

      <div>
          <div className='swith'> 
          <IonRow> 
            <IonCol size='2'>
            <IonRadioGroup value="primary">
              <IonRadio aria-label="Primary" color="secondary" value="primary"></IonRadio>
             
            </IonRadioGroup>

            </IonCol>

            <IonCol size='10'> 
              <IonRouterLink routerLink={ '/user/index' }> 
            <IonLabel className='lh1'> Demo Account </IonLabel>
            <IonText className='tradetext'> $1000.00 </IonText>
          </IonRouterLink>
            </IonCol>

          </IonRow>
          
         
        
          </div>
      </div>
    </IonCol>

    <IonCol size="6">
      <div>
        <IonCardContent className="ion-text-center">
          <IonCardTitle>65</IonCardTitle>
          <IonCardSubtitle>Searches</IonCardSubtitle>
        </IonCardContent>
      </div>
    </IonCol>
  </IonRow> 
  </IonHeader> 

    
    <IonContent>
      <h1>Demo Account Balance: $1000</h1>
 
    </IonContent>
  </IonPage>
    )
    };

export default DemoTab;
