import React from 'react'

const AlertMessage = ({ children, variant, className = "", dismissible = false, text = "Some Message" }) => {
    return (
        <div className={`alert alert-${variant} ${className} ${dismissible ? 'alert-dismissible fade show' : ''}`} role="alert">
            {children ? children : text }
            {dismissible && (<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>)}
        </div>
    )
}

export default AlertMessage