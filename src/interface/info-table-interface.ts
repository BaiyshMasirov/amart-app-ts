export interface LastChecksInfo {
    userId: string;
    name: string;
    totalAmount: number;
    status: number;
    id: string;
  }
  
  export interface CheckInfo {
    data?: LastChecksInfo
  } 
  
  export interface LastChecksInfoFace extends Array<LastChecksInfo>{}