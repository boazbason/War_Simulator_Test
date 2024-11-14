import { io, Socket } from 'socket.io-client'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, updateMission } from './store/userSlice';
import { AnyAction, AsyncThunkAction, ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import { IMission, IUser } from './types/types';


let socketOn: boolean = false
let socket: Socket | null = null

export const StartSocket = () => {


    if (!socketOn) {
        socket = io('http://localhost:5001')
        socketOn = true
        socket?.on("hello", () => {
            console.log("hello");

        })

        socket?.on("StartAttack",  (data: { missile: IMission , location: string, user: IUser }) => {
            updateMission(data.missile)

        });

    }

    async function StartAttack(missile: string, username: string, location: string) {
        await socket!.emit("StartAttack", { missile, username, location })
        console.log(missile, username);

    }
    return { StartAttack}

}


