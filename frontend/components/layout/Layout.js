import Navigation from './Navigation';
import { useState, memo, useEffect } from "react";
import styles from "./Layout.module.css";

function Layout(props){
  const children = props.children;
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeOut");

  useEffect(() => {
    setTransitionStage("fadeIn");
  }, []);

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage("fadeOut");
  }, [children, setDisplayChildren, displayChildren]);

  return (
    <div>
      <Navigation/>
      <main>
        <div onTransitionEnd={() => {
                if (transitionStage === "fadeOut") {
                  setDisplayChildren(children);
                  setTransitionStage("fadeIn");
                }
              }}
          className={`${styles.content} ${styles[transitionStage]}`}>
          {displayChildren}
        </div>
      </main>
      {/* <main>{props.children}</main> */}
    </div>
  );
}

export default Layout;