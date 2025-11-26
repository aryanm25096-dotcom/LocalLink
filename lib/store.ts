import { create } from 'zustand';

export interface Report {
    id: string;
    category: string;
    location: string;
    status: 'pending' | 'in-progress' | 'resolved' | 'rejected';
    image: string | null;
    timestamp: string;
    department: string;
    description?: string;
    severity?: 'low' | 'medium' | 'high';
}

interface StoreState {
    reports: Report[];
    userPoints: number;
    addReport: (report: Omit<Report, 'id' | 'timestamp' | 'status'>) => void;
    updateStatus: (id: string, status: Report['status']) => void;
}

export const useStore = create<StoreState>((set) => ({
    reports: [
        {
            id: '1',
            category: 'Pothole',
            location: 'Main St & 5th Ave',
            status: 'pending',
            image: null,
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
            department: 'Roads',
            description: 'Large pothole in the middle of the intersection',
            severity: 'medium',
        },
        {
            id: '2',
            category: 'Garbage',
            location: 'Central Park Entrance',
            status: 'in-progress',
            image: null,
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
            department: 'Sanitation',
            description: 'Overflowing trash bins',
            severity: 'low',
        },
        {
            id: '3',
            category: 'Street Light',
            location: 'Elm St',
            status: 'resolved',
            image: null,
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), // 2 days ago
            department: 'Energy',
            description: 'Street light flickering',
            severity: 'low',
        },
    ],
    userPoints: 150,
    addReport: (report) =>
        set((state) => ({
            reports: [
                {
                    ...report,
                    id: Math.random().toString(36).substring(7),
                    timestamp: new Date().toISOString(),
                    status: 'pending',
                },
                ...state.reports,
            ],
            userPoints: state.userPoints + 10, // Reward for reporting
        })),
    updateStatus: (id, status) =>
        set((state) => ({
            reports: state.reports.map((r) =>
                r.id === id ? { ...r, status } : r
            ),
        })),
}));
