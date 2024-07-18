"use client"
import React from 'react'
import { Provider } from 'react-redux'
import UserSlice from './UserSlice'
import store from './store'

export default function StoreProvider({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )

}