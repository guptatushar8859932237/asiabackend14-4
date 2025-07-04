import React, { useEffect } from "react";
import SideBar from "./components/Sidebar/SideBar";
import Header from "./components/Header/Header";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
export default function Admin() {
    const navigate = useNavigate()
    const path = useLocation()
    var pathName = path.pathname
    const get_user = async () => {
        const current_user = await JSON?.parse(localStorage?.getItem("data123"))
        if (current_user === undefined || current_user === null) {
            navigate('/')
        }
        else {
            navigate(pathName)
        }
    }
    useEffect(() => {
        get_user()
    }, [])
    return (
        <>
            <SideBar >
                <Header />
                <Outlet />
            </SideBar>
        </>
    )
}

