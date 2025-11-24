import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface Report {
    id: string;
    image: string;
    category: 'Agriculture' | 'Civic_Infrastructure' | 'Sanitation' | 'Unknown';
    severity: number;
    description: string;
    location: {
        lat: number;
        lng: number;
    } | null;
    timestamp: number;
    status: 'pending' | 'in-progress' | 'resolved';
    department: string;
}

interface Store {
    reports: Report[];
    userPoints: number;
    addReport: (report: Omit<Report, 'id' | 'timestamp' | 'status'>) => void;
    updateStatus: (id: string, status: Report['status']) => void;
    addPoints: (amount: number) => void;
    resetStore: () => void;
}

export const useStore = create<Store>()(
    persist(
        (set) => ({
            reports: [],
            userPoints: 0,
            addReport: (report) =>
                set((state) => ({
                    reports: [
                        {
                            ...report,
                            id: Math.random().toString(36).substring(7),
                            timestamp: Date.now(),
                            status: 'pending',
                        },
                        ...state.reports,
                    ],
                })),
            updateStatus: (id, status) =>
                set((state) => {
                    const isResolving = status === 'resolved';
                    // Find if the report was not already resolved to prevent double counting
                    const report = state.reports.find(r => r.id === id);
                    const wasAlreadyResolved = report?.status === 'resolved';

                    const pointsToAdd = (isResolving && !wasAlreadyResolved) ? 50 : 0;

                    return {
                        reports: state.reports.map((report) =>
                            report.id === id ? { ...report, status } : report
                        ),
                        userPoints: state.userPoints + pointsToAdd,
                    };
                }),
            addPoints: (amount) => set((state) => ({ userPoints: state.userPoints + amount })),
            resetStore: () => set({ reports: [], userPoints: 0 }),
        }),
        {
            name: 'locallink-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);
