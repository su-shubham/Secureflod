import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Icons } from '../icons'
import { SearchParams } from "@/types"

interface DashboardCardsProps {
    data: {
        streak: {
            currentStreak: number
            longestStreak: number
        }
        topActivities: number
        totalLogs: number
        mostLoggedActivity: string | undefined
    }
    searchParams: SearchParams
}
const DashBoardCards = ({ data, searchParams }: DashboardCardsProps) => {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Malicious File Detected</CardTitle>
                    <Icons.fire className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold"><span className='text-red-500'>5</span></div>
                    {/* <p className="text-xs text-muted-foreground">All time</p> */}
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Status</CardTitle>
                    <Icons.fire className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold"><span className='text-slate-600'>200</span></div>
                    {/* <p className="text-xs text-muted-foreground">All time</p> */}
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Type</CardTitle>
                    <Icons.history className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-slate-600">exe</div>
                    <p className="text-xs text-muted-foreground">
                        {/* {displayDateRange(searchParams)} */}
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Most Logged Activity
                    </CardTitle>
                    <Icons.activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="overflow-hidden overflow-ellipsis whitespace-nowrap text-2xl font-bold">
                        <span className='text-slate-500'>a moment ago</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        {/* {displayDateRange(searchParams)} */}
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}

export default DashBoardCards
