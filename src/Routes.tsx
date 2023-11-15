import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  homeOutline,
  checkboxOutline,
  school,
  apps,
} from "ionicons/icons";
import { Route } from "react-router";
import { useRecoilValue } from "recoil";
import { utilsAtom } from "./atoms/utilityAtom";

import Home from "./screens/Home/Home";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import ForgetPassword from "./screens/ForgetPassword/ForgetPassword";
import Education from "./screens/Education/Education";
import More from "./screens/More/More";
import Trade from "./screens/Trade/Trade";
import DemoTab from "./screens/DemoTab/DemoTab";
import Dashboard from "./screens/Dashboard";


const Routes = () => {
  const { showTabs } = useRecoilValue(utilsAtom);

  return (
    <IonReactRouter>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/login" render={() => <Login />} />
      <Route exact path="/register" render={() => <Register />} />
      <Route exact path="/forget-password" render={() => <ForgetPassword />} />

      <Route exact path="/dashboard" render={() => <Dashboard />} />
      <Route exact path="/education" render={() => <Education />} />
      <Route exact path="/more" render={() => <More />} />
      <Route exact path="/trading" render={() => <Trade />} />
      {/* <Route exact path="/demo" render={() => <DemoTab />} /> */}


      {showTabs ? (
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/dashboard" render={() => <Dashboard />} />
            <Route exact path="/education" render={() => <Education />} />
            <Route exact path="/more" render={() => <More />} />
            <Route exact path="/trading" render={() => <Trade />} />
            {/* <Route exact path="/demo" render={() => <DemoTab />} /> */}
            <Route exact path="/" render={() => <Home />} />
          </IonRouterOutlet>


          <IonTabBar slot="bottom" className="ion-padding-vertical">
            <IonTabButton tab="tab1" href="/dashboard">
              <IonIcon icon={homeOutline} size='large' />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="trade" href="/trading">
              <IonIcon icon={checkboxOutline} size='large' />
              <IonLabel>Trade</IonLabel>
            </IonTabButton>
            <IonTabButton tab="education" href="/education">
              <IonIcon icon={school} size='large' />
              <IonLabel>Education</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab4" href="/more">
              <IonIcon icon={apps} size='large' />
              <IonLabel>More</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      ) : null}
    </IonReactRouter>
  );
};

export default Routes;
