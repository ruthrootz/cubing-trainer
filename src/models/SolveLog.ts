export class SolveLog {
    public id: number;
    public sessionId: number;
    public userId: number | null;
    public time: number;
    public dnf: boolean;
    
    constructor(id: number, sessionId: number, userId: number | null, time: number, dnf: boolean) {}
}
