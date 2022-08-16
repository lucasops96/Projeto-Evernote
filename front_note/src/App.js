import React,{Fragment} from "react";
import { Notification, Section } from "rbx";
import "rbx/index.css";
import './App.scss'

const App = ()=> (
  <Fragment>
    <Section>
      <Notification color="success">
        Javascript Notes
      </Notification>
    </Section>
  </Fragment>
)


export default App;
