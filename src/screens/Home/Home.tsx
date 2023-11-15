import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRouterLink, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import { useHistory } from 'react-router';

import style from './Home.module.css'
import Logo from '../../assets/images/logo.png'
import { Settings } from '../../utils/settings';



const { appName } = Settings()

const Home: React.FC = () => {

  const history = useHistory();


  return (
    <IonPage>
      <IonContent fullscreen>
        <section className={style.page_center_wrapper}>
          <IonGrid fixed>
            {/* Logo */}
            <IonRow className='ion-justify-content-center align-items-center ion-text-center'>
              <IonCol size='6' sizeMd='4' sizeLg='2'>
                <IonImg src={Logo} />
              </IonCol>
            </IonRow>

            {/* App Text */}
            <IonRow className='ion-justify-content-center align-items-center ion-text-center'>
              <IonCol size='8' className='ion-text-center'>
                <h1>{ appName}</h1>
                <p>
                  <i> Best Trading Robot and Signal Providers!!! </i>
                </p>
              </IonCol>
            </IonRow>
            {/* Buttons */}
            <IonRow className='ion-justify-content-center align-items-center ion-text-center mt-5'>
              <IonCol size='8' sizeMd='4' sizeLg='2'>
                <IonButton expand="block" size='large' shape='round' routerLink='/login' routerDirection='root'>
                  Login
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow className='ion-justify-content-center align-items-center ion-text-center'>
              <IonCol size='8' sizeMd='4' sizeLg='2'>
                <IonButton expand='block' size='large' shape='round' color={'success'} routerLink='/login' routerDirection='root'>
                  Register
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Home;
