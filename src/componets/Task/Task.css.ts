import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const container = style({
    display:'flex',
    flexDirection:'column',
    padding:vars.spacing.medium,
    backgroundColor:vars.color.task,
    borderRadius:10,
    marginBottom : vars.spacing.big2,
    boxShadow:vars.shadow.basic,
    cursor:'pointer',
    ":hover":{
        backgroundColor:vars.color.taskHover,
        transform:"scale(1.03)"
    }
})

export const title = style({
    fontSize:vars.fontSizing.T4,
    fontWeight :'bold',
    marginBottom : vars.spacing.small
})

export const description = style({
    fontSize:vars.fontSizing.P1,
})

export const movie = style({
    display :'flex',
    flexWrap : 'wrap',
    gap: '30px',
    minWidth: '30vh', // 최소 너비 지정
    minHeight: '30vh', // 최소 너비 지정
})


export const imgSet = style({
    width:"100%",
    height:'100%',
    maxHeight:'500px'
})

