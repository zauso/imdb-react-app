import React from "react"
import Skeleton from "@material-ui/lab/Skeleton"

export default function MovieCardSkeleton() {
    return (
        <div>
            <Skeleton variant="rect" width={'100%'} height={300}/>
            <Skeleton variant="rect" style={{marginTop: 16}} height={30} width={'90%'}/>
            <Skeleton variant="rect" style={{marginTop: 16}} width={'85%'}/>
        </div>
    )
}
