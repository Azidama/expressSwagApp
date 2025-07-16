import { Router } from 'express';
import express from 'express';

export const returnUser = async (req, res) =>{
    const id = req.params.id;
    if(!id) {
        res.send('')
    }
}