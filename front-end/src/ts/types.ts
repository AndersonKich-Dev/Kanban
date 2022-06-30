import { ReactNode } from 'react'

export type Task = {
    name: string;          
    project: string;      
    description: string;  
    status: string;
    code: string;
    progress: string;
    sector: string;
    deadline: string;
    estimated_time: string;
    time_balance: string;          
    user_id: string;     
    team: Team[];
    id: string
}

export type CardProps = {
    data: Task
}

export type Team = {
    id?: string
    user: string
    user_id: string
}

export type User = {
    name: string
    id: string
}

export type ListCardProps = {
    count:number
    timer: string
    title: string
    children: ReactNode
}

export type NotificationProps = {
    isActive: boolean
}

export type TimerProps = {
    countColor: string
    color: string
    time: string
    tasksCount: number
}

