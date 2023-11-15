import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect } from 'react';


import style from './Dashboard.module.css'
import { useRecoilState } from 'recoil';
import { utilsAtom } from '../../atoms/utilityAtom';


const Dashboard: React.FC = () => {
    const [showTabs, setTab] = useRecoilState(utilsAtom);
    useEffect(() => {
      setTab({
        ...showTabs,
        showTabs: true
      });
    }, []);
  

    return (
        <IonPage>
            <IonContent className="ion-padding">
                <section className={style.iframe_container}>
                    <iframe className='iframe'
                        src="https://iqoption.com/en"
                    ></iframe>
                </section>
            </IonContent>
        </IonPage>
    );
};

export default Dashboard;