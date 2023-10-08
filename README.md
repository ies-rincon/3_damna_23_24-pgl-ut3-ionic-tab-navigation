# 3DAMNA - PGL > UT3 > Tab Navigation App

Este proyecto de ionic se centra en la implementación de la navegación por pestañas utilizando el componente `IonTabs` de la biblioteca `@ionic/react`. La navegación por pestañas es una forma común de organizar y presentar múltiples vistas o secciones en una aplicación.

## @ionic/react

`@ionic/react` es una biblioteca de navegación para Ionic basada en react que permite crear una interfaz de pestañas para cambiar entre diferentes vistas o páginas en una aplicación. Se utiliza en conjunto con `IonReactRouter` y `IonTabBar` para crear una experiencia de navegación por pestañas.

Para obtener información detallada sobre cómo usar `IonTabs`, consulta la [documentación oficial de Ionic para React](https://ionicframework.com/docs/api/tabs).

## Funcionamiento Básico

El funcionamiento básico de `createMaterialTopTabNavigator` implica los siguientes pasos:

1. Definir las pestañas y sus configuraciones utilizando `IonTabs`, `IonTabBar` y `IonTabButton`.

2. Configurar las pantallas correspondientes a cada pestaña utilizando `IonRouterOutlet` y `Route`.

3. Renderizar la navegación en tu componente principal.

4. Las pestañas y las pantallas se sincronizarán automáticamente, lo que permite al usuario cambiar entre las pestañas para ver diferentes contenidos.

## Ejemplo de Uso

```javascript
import React from 'react';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonRouterOutlet,
  IonTab,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => (
  <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route path="/about" component={About} exact={true} />
        <Route path="/contact" component={Contact} exact={true} />
        <Redirect from="/" to="/home" exact />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonTab label="Home" />
        </IonTabButton>
        <IonTabButton tab="about" href="/about">
          <IonTab label="About" />
        </IonTabButton>
        <IonTabButton tab="contact" href="/contact">
          <IonTab label="Contact" />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonReactRouter>
);

export default App;
