import React from 'react'
import BaseComponentLeftNav from '../BaseComponentLeftNav/BaseComponentLeftNav'
import './BaseComponent.css'
import FullWidthTabs from '../BaseComponentTab/BaseComponentTab'
function BaseComponent() {
    return (
        <div className="basecomponent-wrapper">
            <div className="basecomponent-container">
                <div className="basecomponent-container-nav">
                    <BaseComponentLeftNav/>
                </div>
                <div className="basecomponent-container-tabs">
                    <FullWidthTabs/>
                </div>
                <div className="basecomponent-container-right-nav"></div>
                <div className="bg-silver basecomponent-container-content"></div>
                <div className="basecomponent-container-footer"></div>
            </div>
        </div>
    )
}

export default BaseComponent
