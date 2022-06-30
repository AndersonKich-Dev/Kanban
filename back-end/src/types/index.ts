export type User = {
    name: string;
    email: string;
    company: string;
    type: boolean;
    password: string;
    confirmPassword: string;
}

export type Task = {         
  name: string;          
  project: string;      
  description: string;  
  status: string;
  code: string;
  sector: string;
  estimated_time: string;
  time_balance: string;  
  deadline: string;     
  user_id: string;    
  progress: string; 
  team: any;
}

export type Team = {
  user: string
  user_id: string
}