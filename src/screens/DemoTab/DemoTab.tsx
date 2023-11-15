import React, { useEffect } from 'react';
import { IonButton, IonCheckbox, IonCol, IonContent, IonFooter, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonText } from '@ionic/react'; 
import {  IonList, IonSelect, IonSelectOption,  } from '@ionic/react';



import { utilsAtom } from '../../atoms/utilityAtom';  
import { useRecoilState } from 'recoil'; 



const DemoTab: React.FC = () => {
    const [showTabs, setTab] = useRecoilState(utilsAtom);
  
    
useEffect(() => {
  setTab({
    ...showTabs,
    showTabs: true, 
  });

}, []); 


    return ( 
  <IonPage>   
    <IonHeader className='tradetab'> 
      <h1 className='tabh1'> Account Selection </h1>
  <IonRow  style={{ margin: 0 }}>
    <IonCol size="6">

      <div>
          <div className='swith'> 
          <IonRow> 
            <IonCol size='2'>
            <IonCheckbox className='trade_check' checked disabled></IonCheckbox>

            </IonCol>

            <IonCol size='10'>   
            <IonLabel className='lh1'> Demo Account </IonLabel>
            <IonText className='tradetext'> $1000.00 </IonText>
         
            </IonCol>

          </IonRow>
          
         
        
          </div>
      </div>
    </IonCol>

    <IonCol size="6">
      
    <div>
          <div className='swith2'> 
          <IonRouterLink color={'white'} routerLink={ '/user/real' }>
          <IonRow> 
          
            <IonCol size='2'>
            
            <IonCheckbox className='trade_check' disabled></IonCheckbox>

            </IonCol>

            <IonCol size='10'>   
            <IonLabel className='lh1'> Real Account </IonLabel>
            <IonText className='tradetext'> $0.00 </IonText>
            
            </IonCol>
          

          </IonRow>
          </IonRouterLink>
          
         
        
          </div>
      </div>
    </IonCol>
  </IonRow> 
  </IonHeader> 

    
    <IonContent> 

    <h5 className='ion-padding-start'> <b>Main Options</b> </h5>

    <IonRow> 
          
            <IonCol className='ion-padding' size='8'>
            
            <IonItem className="customInput ion-padding-bottom">
                          <IonInput label="Amount" labelPlacement="floating" placeholder="$10"></IonInput>
                      </IonItem>
s
            </IonCol>
            <IonCol size='4'>   
            <span className=''>Age</span>
              <IonList>
                <IonItem className='selectby customInput ion-padding-bottom'>
                  <IonSelect aria-label="Favorite Fruit" className='' value="apple">
                    <IonSelectOption value="apple">Apple</IonSelectOption>
                    <IonSelectOption value="banana">Banana</IonSelectOption>
                    <IonSelectOption value="orange">Orange</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonList>
                      
            </IonCol>
          

          </IonRow>

     
    </IonContent>






    <IonFooter className="ion-padding" >
                <div className='dd'>
                       
                    <IonButton expand="block"> 
                        Place Trade 
                    </IonButton>
                </div>
            </IonFooter>
  </IonPage>
    );
};

export default DemoTab;
