import React from "react";

const Layout = ( {children} : {children: React.ReactNode}) => {
    return (
        <div>
            <p> NAVBAR-DASHBOARD </p>
            {children}
        </div>
    )
}

export default Layout;