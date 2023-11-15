import React, { useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { utilsAtom } from '../atoms/utilityAtom'; 
import { useRecoilState } from 'recoil';


const RealTab: React.FC = () => {
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
        <IonTitle>Real Account</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <h1>Real Account Balance: $5000</h1>

      <a href={ '/user/index' }> Welcome </a>
    </IonContent>
  </IonPage>

)
};

export default RealTab;
function useState(arg0: () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
}

