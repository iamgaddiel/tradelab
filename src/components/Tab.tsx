import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { home, apps, school, construct, library, playCircle, radio, search } from 'ionicons/icons';
import { Route, Redirect } from 'react-router-dom'; 

import Index from '../screens/user/Index';
import More from '../screens/More/More';
import Education from '../screens/Education/Education';
import Trade from '../screens/Trade/Trade';
 
const BottomNavbar: React.FC = () => {
  return (
    <IonTabs>
    <IonRouterOutlet>
      <Redirect exact path="/" to="/home" />
      {/*
      Use the render method to reduce the number of renders your component will have due to a route change.

      Use the component prop when your component depends on the RouterComponentProps passed in automatically.
    */}
     
    </IonRouterOutlet>

    <IonTabBar slot="bottom">
      <IonTabButton tab="home" href="/user/index">
        <IonIcon icon={playCircle} />
        <IonLabel>Listen now</IonLabel>
      </IonTabButton>

      <IonTabButton tab="radio" href="/user/trade">
        <IonIcon icon={radio} />
        <IonLabel>Radio</IonLabel>
      </IonTabButton>

      <IonTabButton tab="library" href="/user/education">
        <IonIcon icon={library} />
        <IonLabel>Library</IonLabel>
      </IonTabButton>

      <IonTabButton tab="search" href="/user/more">
        <IonIcon icon={search} />
        <IonLabel>Search</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
  );
};

export default BottomNavbar;
