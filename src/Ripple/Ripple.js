import React from 'react'
import styles from './styles.css'
const Ripple = () => (
  <>
    <style>{styles}</style>
    <div className="lds-css ng-scope">
      <div style="width:100%;height:100%" className="lds-ripple">
        <div />
        <div />
      </div>
    </div>
  </>
)

export default Ripple
