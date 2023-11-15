import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonButton, IonLabel } from "@ionic/react";
import { home, analytics } from "ionicons/icons";
import { Route, Redirect } from "react-router";
import DemoTab from "./DemoTab";
import RealTab from "./RealTab";




const TabComponent: React.FC = () => {

return (
<IonTabs>
    <IonRouterOutlet>
      <Route path="/tabs/demo" component={DemoTab} />
      <Route path="/tabs/real" component={RealTab} />
      <Redirect exact from="/tabs" to="/tabs/demo" />
    </IonRouterOutlet>

    <IonTabBar slot='top'>
      <IonTabButton tab="demo" href="/tabs/demo">
        <IonIcon icon={home} />
        <IonButton>Demo</IonButton>
      </IonTabButton>

      <IonTabButton tab="real" href="/tabs/real">
        <IonIcon icon={analytics} />
        <IonLabel>Real</IonLabel>
      </IonTabButton>
    </IonTabBar>

    
  </IonTabs>
)
};
export default TabComponent;