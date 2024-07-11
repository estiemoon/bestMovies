const express = require('express');

const {refreshVerify,sign, verify} = require('../middleware/jwt-utils');
const { StatusCodes } = require('http-status-codes');

const execRefresh =  async (req,res) => {
    //header로 둘다 받아옴
    const accessToken = req.headers.authorization;
    const refreshToken = req.headers.refresh;
    const {username,email} = req.body;
    const user = {
        username, email,
    }

    //refresh,access 가 있으면
    if (accessToken && refreshToken){

        const accessResult = verify(accessToken); 
        const refreshResult = await refreshVerify(user.email, refreshToken)

        if(!refreshResult.ok){    
            if(!accessResult.ok){
                const newToken = sign(user);
                res.status(StatusCodes.OK).json({
                    message : "새로운 토큰 발급 완료",
                    token : newToken
                });
            }   
            else {
                res.status(StatusCodes.BAD_REQUEST).json({
                    message : "access token이 만료되지 않았습니다."
                })
            }
        } else {
            res.status(StatusCodes.UNAUTHORIZED).json({
                message : "다시 로그인 해주세요"
            })
        }
    } else {
        res.status(StatusCodes.BAD_REQUEST).json({
            message : "토큰이 존재하지 않습니다."
        })
    } 
}


module.exports = {execRefresh};